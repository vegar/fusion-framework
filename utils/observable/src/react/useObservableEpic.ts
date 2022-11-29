import { useLayoutEffect } from 'react';
import type { FlowSubject } from '../FlowSubject';
import type { Action } from '../types/actions';
import type { Flow } from '../types/flow';
/**
 * Apply side effect to Reactive Subject.
 *
 * __IMPORTANT__ observable returned from epics must return new action or will create infinite loop
 */
export const useObservableEpic = <S, A extends Action = Action>(
    subject: FlowSubject<S, A>,
    epic: Flow<A, S>
): void => {
    useLayoutEffect(() => {
        const subscription = subject.addFlow(epic);
        return () => subscription.unsubscribe();
    }, [subject, epic]);
};

export default useObservableEpic;
