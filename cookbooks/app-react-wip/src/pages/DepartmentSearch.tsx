import { ReactEventHandler, useCallback, useMemo, useState } from 'react';

import { useHttpClient } from '@equinor/fusion-framework-react-app/http';
import { Query } from '@equinor/fusion-query';
import { useAzureSearch, useDebouncePeopleSearchQuery } from './useAzureSearch';

import {
    SearchableDropdown,
    SearchableDropdownResolver,
    SearchableDropdownResultItem,
    HTMLSearchableDropdownProviderCustomElement,
} from '@equinor/fusion-react-searchable-dropdown';

import { TextInput } from '@equinor/fusion-react-textinput';

import { OrgUnit, Person } from './types';
import { SearchOptions } from '@azure/search-documents';

import buildQuery from 'odata-query';

const queryOrgUnitsResultSelector = async (response: Response) => {
    const result = (await response.json()) as { value: OrgUnit[] };
    return result.value.map(
        (x) =>
            ({
                id: x.sapId,
                title: x.fullDepartment,
                subTitle: x.name,
            } as SearchableDropdownResultItem)
    );
};

const queryOrgUnitsResultExpireTime = 10 * 60 * 1000;

const useQueryOrgUnits = () => {
    const httpClient = useHttpClient('line-org');
    return useMemo(
        () =>
            new Query({
                key: () => 'org-units',
                client: {
                    fn: () =>
                        httpClient.fetch('/org-units?$top=3000', {
                            selector: queryOrgUnitsResultSelector,
                        }),
                },
                expire: queryOrgUnitsResultExpireTime,
            }),
        [httpClient]
    );
};

export const DepartmentSearch = () => {
    const queryOrgUnits = useQueryOrgUnits();

    const { query, result } = useDebouncePeopleSearchQuery();

    const [includeSubUnits, setIncludeSubUnits] = useState(true);
    const [queryString, setQueryString] = useState<string>('');

    // const [filter, setFilter

    setIncludeSubUnits;

    const resolver = useMemo(() => {
        return {
            searchQuery: async (query: string) => {
                const data = await queryOrgUnits.queryAsync({});
                console.log(data);
                const matcher = new RegExp(query, 'i');
                return data.value.filter(
                    (x) => x.title?.match(matcher) || x.subTitle?.match(matcher)
                );
            },
        } as SearchableDropdownResolver;
    }, [queryOrgUnits]);

    const onOrgUnitSelected = useCallback(
        async (e: any) => {
            const { value } = e.currentTarget;
            const data = await queryOrgUnits.queryAsync({});

            const filter = includeSubUnits
                ? data.value
                      .filter((x) => x.title?.startsWith(value))
                      .map((x) => `fullDepartment eq '${x.title}'`)
                      .join(' or ')
                : `fullDepartment eq '${value}'`;
            // console.log(gg);
            query({
                query: queryString,
                options: {
                    // abortSignal: controller.signal,
                    includeTotalCount: true,
                    queryType: 'full',
                    top: 50,
                    filter,
                },
            });
        },
        [query, queryString]
    );

    // const executeQuery = useCallback(() => {

    // }, []);

    return (
        <div>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <SearchableDropdown resolver={resolver} onSelect={onOrgUnitSelected} />
            <TextInput type="search" onInput={(e) => setQueryString(e.currentTarget.value)} />
            {result?.value && (
                <div>
                    <ul>
                        {result.value.map((x) => (
                            <li key={x.document.azureUniqueId}>{x.document.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DepartmentSearch;
