import {
    ClientRequestInit,
    IHttpClient,
} from '@equinor/fusion-framework-module-services/../../module-http/src/lib/client';
import { ApiClientArguments } from '../..';
import { generateEndpoint } from './generate-endpoint';
import { ApiVersions, DeleteBookmarkArgs } from './types';

/** function for creating http client arguments  */
export const generateParameters = <
    TResult,
    TVersion extends ApiVersions,
    TClient extends IHttpClient = IHttpClient
>(
    version: TVersion,
    args: DeleteBookmarkArgs<TVersion>,
    init?: ClientRequestInit<TClient, TResult>
): ApiClientArguments<TClient, TResult> => {
    const path = generateEndpoint(version, args);

    const requestParams: ClientRequestInit<TClient, TResult> = Object.assign(
        {},
        { method: 'Delete' },
        init
    );

    return [path, requestParams];
};
