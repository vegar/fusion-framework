/**
 * [[include:observable/README.MD]]
 * @module
 */

export * from './FlowSubject';
/** @deprecated */
export { FlowSubject as ReactiveObservable } from './FlowSubject';
// export * from './ActionError';
export * from './types';

export {
    createAction,
    createAsyncAction,
    isRequestAction,
    isSuccessAction,
    isFailureAction,
    isCompleteAction,
    actionBaseType,
} from './create-action';

export { createReducer } from './create-reducer';
