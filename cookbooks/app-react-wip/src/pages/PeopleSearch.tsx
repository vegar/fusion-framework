import { useObservableState } from '@equinor/fusion-observable/react';
import { TextInput } from '@equinor/fusion-react-textinput';
import { useEffect, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { EMPTY } from 'rxjs';

import { useDebouncePeopleSearchQuery } from './useAzureSearch';

export const App = () => {
    const { query, result, idle } = useDebouncePeopleSearchQuery();

    const { value: values, complete: resultComplete } = useObservableState(result || EMPTY);

    const [x, setX] = useState(false);

    if (x && !resultComplete) {
        console.log(22, 'we want more');
        result?.nextAsync();
    }

    return (
        <div>
            <TextInput
                type="search"
                onInput={(e) => {
                    query({ query: e.currentTarget.value });
                }}
            />
            {!idle && <span>searching for data....</span>}
            <br />
            <button disabled={resultComplete} onClick={() => result?.resolve()}>
                resolve all 🚀🧨🤯 [{result?.currentCount} / {result?.totalCount}]
            </button>
            <ul>
                {values?.map((x, index) => (
                    <li key={x.document.azureUniqueId}>
                        {index+1} - {x.document.name}
                    </li>
                ))}
            </ul>
            <Waypoint
                onEnter={() => {
                    setX(true);
                }}
                onLeave={() => {
                    setX(false);
                }}
                // debug
                bottomOffset={'-50%'}
            >
                <button disabled={resultComplete} onClick={() => result?.nextAsync()}>
                    loading more 🐒
                </button>
                {/* <div style={{ height: 200, backgroundColor: 'red' }}></div> */}
            </Waypoint>
        </div>
    );
};

export default App;
