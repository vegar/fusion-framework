import { useState } from 'react';
import { FlowSubject } from '../FlowSubject';
import type { Reducer, ReducerWithInitialState } from '../types/reducers';
import type { Action } from '../types/actions';


export function useObservable<S, A extends Action = Action>(
    reducer: ReducerWithInitialState<S, A>
): FlowSubject<S, A>;

export function useObservable<S, A extends Action = Action>(
    reducer: Reducer<S, A>,
    initial: S
): FlowSubject<S, A>;

export function useObservable<S, A extends Action = Action>(
    reducer: Reducer<S, A> | ReducerWithInitialState<S, A>,
    initial?: S
): FlowSubject<S, A> {
    if (initial) {
        (reducer as ReducerWithInitialState<S, A>).getInitialState = () => initial;
    }
    return useState(new FlowSubject(reducer as ReducerWithInitialState<S, A>))[0];
}
