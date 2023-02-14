import { useCallback, useMemo, useState } from 'react';
import {
    AzureKeyCredential,
    SearchClient,
    SearchDocumentsResult,
    SearchOptions,
} from '@azure/search-documents';
import AzureSearchResult from './AzureSearchResult';

import { useDebounceQuery } from '@equinor/fusion-query/react';
import { useObservableState } from '@equinor/fusion-observable/react';
import { Person } from './types';
import { EMPTY } from 'rxjs';
import { Query, QueryCtorOptions } from '@equinor/fusion-query';

const useAzurePeopleSearchClient = () =>
    useMemo(
        () =>
            new SearchClient(
                'https://fusion-search-shared.search.windows.net',
                'people-ci',
                new AzureKeyCredential('g7fdG4rgK2PjwFZlqE2ryMoM6s3Kw0VgKVbi70AIDgAzSeAuCiJX')
            ),
        []
    );

type QueryArgs = {
    query?: string;
    options?: Omit<SearchOptions<never>, 'abortSignal'>;
};

type QueryClientArgs = Pick<
    QueryCtorOptions<AzureSearchResult<Person>, QueryArgs>,
    'key' | 'validate'
>;

export const usePeopleSearchQuery = (opt?: {
    searchOptions?: QueryArgs['options'];
    queryOptions?: Partial<QueryClientArgs>;
}): Query<AzureSearchResult<Person>, QueryArgs> => {
    const searchClient = useAzurePeopleSearchClient();
    const [defaultSearchOptions] = useState<Required<QueryArgs>['options']>(
        () => opt?.searchOptions ?? { includeTotalCount: true }
    );
    const [defaultQueryOptions] = useState<QueryClientArgs>(() => ({
        key: (args: QueryArgs) => JSON.stringify({ args }),
        ...opt?.queryOptions,
        expire: 60 * 1000,
    }));
    const query = useMemo(() => {
        return new Query({
            client: {
                fn: async (
                    args: QueryArgs,
                    signal?: AbortSignal
                ): Promise<AzureSearchResult<Person>> => {
                    console.log('usePeopleSearchQuery::fn', 'executing query');
                    const { query, options } = args;
                    const response = (await searchClient.search(query, {
                        ...defaultSearchOptions,
                        ...options,
                        abortSignal: signal,
                    })) as SearchDocumentsResult<Person>;
                    return new AzureSearchResult(response, { loadFirstPage: true });
                },
            },
            ...defaultQueryOptions,
        });
    }, [searchClient, defaultSearchOptions, defaultQueryOptions]);

    return query;
};

export const useDebouncePeopleSearchQuery = (
    queryOptions?: Parameters<typeof usePeopleSearchQuery>[0]
) => {
    const {
        idle,
        next: query,
        value$,
    } = useDebounceQuery(usePeopleSearchQuery(queryOptions), { debounce: 500 });

    const { complete, error, value: next } = useObservableState(value$);
    const result = next?.value;

    return { idle, query, complete, error, result };
};

export const useAzureSearch = <T>(): {
    query: (query?: string, options?: SearchOptions<never>) => void;
    result: AzureSearchResult<T> | undefined;
} => {
    // const [state$] = useState<BehaviorSubject<Person[]>>(() => new BehaviorSubject<Person[]>([]));

    const [result, setResult] = useState<AzureSearchResult<T> | undefined>();

    const searchClient = useAzurePeopleSearchClient();

    const query = useCallback(
        async (query?: string, options?: SearchOptions<never>) => {
            setResult(undefined);
            const searchResults = await searchClient.search(query, {
                ...options,
                facets: [
                    'positions/project/name,count:9999',
                    'jobTitle',
                    'manager/name,count:9999',
                ],
            });
            setResult(new AzureSearchResult<any>(searchResults));
        },
        [searchClient.search]
    );
    return { result, query };
};
