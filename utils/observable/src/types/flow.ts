import { Observable, ObservableInput } from 'rxjs';
import { Action } from './actions';

export type Flow<TAction extends Action, TState = unknown> = (
    action: Observable<TAction>,
    state: Observable<TState>
) => Observable<TAction>;

export type Effect<TAction extends Action, TState = unknown> = (
    action: TAction,
    state: TState
) => ObservableInput<TAction | void> | TAction | void;
