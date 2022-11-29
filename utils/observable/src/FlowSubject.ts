import {
    asyncScheduler,
    BehaviorSubject,
    EMPTY,
    from,
    Observable,
    Subject,
    Subscription,
} from 'rxjs';
import {
    catchError,
    distinctUntilChanged,
    filter,
    mergeMap,
    observeOn,
    scan,
} from 'rxjs/operators';

import { filterAction } from './operators';

import type { IFlowSubject } from './interfaces/IFlowSubject';
import type { Action, ActionType, ExtractAction } from './types/actions';
import type { Flow, Effect } from './types/flow';
import type { ReducerWithInitialState } from './types/reducers';

/**
 * Observable that mutates by dispatching actions and internally sequentially reduced.
 */
export class FlowSubject<S, A extends Action = Action>
    extends Observable<S>
    implements IFlowSubject<S, A>
{
    public reset: VoidFunction;

    #action = new Subject<A>();
    #state: BehaviorSubject<S>;

    /** observable actions  */
    get action$(): Observable<A> {
        return this.#action.asObservable();
    }

    get value(): S {
        return this.#state.value;
    }

    get closed(): boolean {
        return this.#state.closed || this.#action.closed;
    }

    constructor(reducer: ReducerWithInitialState<S, A>) {
        super((subscriber) => {
            return this.#state.subscribe(subscriber);
        });
        const initial = reducer.getInitialState();
        this.#state = new BehaviorSubject(initial);
        this.#action.pipe(scan(reducer, initial), distinctUntilChanged()).subscribe(this.#state);
        this.reset = () => this.#state.next(initial);
    }

    /** Dispatch action */
    public next(action: A): void {
        this.#action.next(action);
    }

    public addEffect<TType extends ActionType<A>>(
        actionType: TType,
        fn: Effect<ExtractAction<A, TType>, S>
    ): Subscription;

    public addEffect(fn: Effect<A, S>): Subscription;

    public addEffect<TType extends ActionType<A>>(
        actionTypeOrFn: TType | Effect<A, S>,
        fn?: Effect<ExtractAction<A, TType>, S>
    ): Subscription {
        const action$ =
            typeof actionTypeOrFn === 'string'
                ? this.action$.pipe(filterAction(actionTypeOrFn))
                : this.action$;
        const mapper = (fn ? fn : actionTypeOrFn) as Effect<A, S>;
        return action$
            .pipe(
                mergeMap((action) =>
                    from(
                        new Promise((resolve, reject) => {
                            try {
                                resolve(mapper(action, this.value));
                            } catch (err) {
                                reject(err);
                            }
                        })
                    ).pipe(
                        catchError((err) => {
                            console.warn('unhandled effect', err);
                            return EMPTY;
                        })
                    )
                ),
                filter((x): x is A => !!x),
                observeOn(asyncScheduler)
            )
            .subscribe(this.#action);
    }

    /** @deprecated use `addFlow`*/
    public addEpic(fn: Flow<A, S>): Subscription {
        return this.addFlow(fn);
    }

    public addFlow(fn: Flow<A, S>): Subscription {
        const epic$ = fn(this.action$, this);
        if (!epic$) {
            throw new TypeError(
                `addEpic: one of the provided effects "${
                    fn.name || '<anonymous>'
                }" does not return a stream. Double check you're not missing a return statement!`
            );
        }
        return epic$
            .pipe(
                catchError((err) => {
                    console.trace('unhandled exception, epic closed!', err);
                    return EMPTY;
                }),
                observeOn(asyncScheduler)
            )
            .subscribe(this.#action);
    }

    /** remove all subscribers  */
    public unsubscribe() {
        this.#action.unsubscribe();
        this.#state.unsubscribe();
    }

    public complete() {
        this.#action.complete();
        this.#state.complete();
    }

    public asObservable() {
        return this.#state.asObservable();
    }
}

export default FlowSubject;
