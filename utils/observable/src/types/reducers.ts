import type { Action, AnyAction } from './actions';
import type { NotFunction } from './ts-helpers';

export type Reducer<S = unknown, A = AnyAction> = (prevState: S | undefined, action: A) => S;

export type ReducerWithInitialState<
    S extends NotFunction<unknown>,
    A extends Action = AnyAction
> = Reducer<S, A> & {
    getInitialState: () => S;
};

export type ReducerState<R extends Reducer> = R extends Reducer<infer S> ? S : never;

export type ReducerAction<R extends Reducer> = R extends Reducer<unknown, infer A> ? A : never;
