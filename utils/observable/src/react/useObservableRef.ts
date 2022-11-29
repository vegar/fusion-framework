import { useCallback, useRef } from 'react';
import type { BehaviorSubject, Observable } from 'rxjs';
import { useObservableLayoutSubscription } from './useObservableSubscription';

/**
 * TODO
 */
export const useObservableRef = <S>(
    subject: Observable<S>,
    initial?: S
): React.RefObject<S | undefined> => {
    initial ??= (subject as BehaviorSubject<S>).value;
    const ref = useRef<S | undefined>(initial);
    useObservableLayoutSubscription(
        subject,
        useCallback((x) => (ref.current = x), [])
    );
    return ref;
};

export default useObservableRef;
