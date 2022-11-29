import type { Observable, Subscription } from 'rxjs';
import { Effect } from '../types';
import type { Action, ActionType, ExtractAction } from '../types/actions';
import type { Reducer } from '../types/reducers';
import type { Flow } from '../types/flow';

export interface IReactiveObservableCtor<TState, TAction extends Action> {
    new (reducer: Reducer<TState, TAction>, initial: TState): IFlowSubject<TState, TAction>;
}

/**
 * Advance BehaviorSubject.
 * Observable that mutates by dispatching actions and internally sequentially reduced.
 */
export interface IFlowSubject<TState, TAction extends Action = Action> extends Observable<TState> {
    /**
     * Observable stream of actions dispatched to the subject
     */
    readonly action$: Observable<TAction>;

    /**
     * current value of state
     */
    readonly value: TState;

    /**
     * flag to indicate of the observable is closed
     */
    readonly closed: boolean;

    /**
     * dispatch an action
     */
    next(action: TAction): void;

    /**
     * return state to initial
     */
    reset: VoidFunction;

    /**
     * unsubscribes to actions, removes subscribers
     */
    unsubscribe: VoidFunction;

    /**
     * finalizes the subject, completes observers
     */
    complete: VoidFunction;

    /**
     * clone to simple observable
     */
    asObservable: () => Observable<TState>;

    /**
     * observe dispatch of an action type
     *
     * @note side-effect cannot alter state, nor be sync
     * @note unsubscribe when done
     * @param actionType - type of action to observe
     * @param fn - callback when action is dispatch
     */
    addEffect<TType extends ActionType<TAction>>(
        actionType: TType,
        fn: Effect<ExtractAction<TAction, TType>, TState>
    ): Subscription;

    /**
     * observe dispatch of all actions
     *
     * @note unsubscribe when done
     * @param fn - callback when actions are dispatched
     */
    addEffect(fn: Effect<TAction, TState>): Subscription;

    /**
     * alter the flow of the subject
     * @note unsubscribe when done
     * @param fn - function which emits actions
     */
    addFlow(fn: Flow<TAction, TState>): Subscription;
}
