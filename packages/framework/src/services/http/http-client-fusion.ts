import { firstValueFrom } from 'rxjs';
import {
    HttpResource,
    RequestMethod,
    Resource,
    ResourceInitType,
} from '@equinor/fusion-framework/resources';
import { HttpClientMsal } from './http-client-msal';

export class HttpClientFusion<
    TCollection extends Record<string, HttpResource> = Record<string, HttpResource>
> extends HttpClientMsal {
    protected _resources: TCollection = {} as TCollection;

    /** @override */
    _init(): void {
        this.requestHandler.add('resources', (request) => {
            const resource = this.matchResource(request.path, request.method);
            if (!resource) return request;
            if (resource && resource.headers) {
                request.headers = Object.keys(resource.headers).reduce((acc, key) => {
                    const value = resource.headers && resource.headers[key];
                    value && acc.append(key, value);
                    return acc;
                }, new Headers(request.headers));
            }
            request.scopes ??= resource.scope;

            return request;
        });
    }

    set resources(resources: TCollection | Record<string, Resource>) {
        this._resources = Object.keys(resources).reduce((acc, key) => {
            return Object.assign(acc, {
                [key]: new HttpResource(resources[key]),
            });
        }, {}) as unknown as TCollection;
    }

    public addResource(
        name: string,
        resource: HttpResource | Resource
    ): HttpClientFusion<TCollection> {
        const value = resource instanceof HttpResource ? resource : new HttpResource(resource);
        (this._resources as Record<string, HttpResource>)[name] = value;
        return this;
    }

    public matchResource(
        path: string,
        method: RequestMethod | string = RequestMethod.Get
    ): HttpResource | undefined {
        return Object.values(this._resources)
            .filter((x) => x.method === method)
            .sort((a, b) => b.path.length - a.path.length)
            .find((x) => x.match(path));
    }

    public fetchResource<TKey extends keyof TCollection>(
        name: TKey,
        args?: TKey extends keyof TCollection
            ? ResourceInitType<TCollection[TKey]>
            : Record<string, unknown>
    ): ReturnType<HttpClientMsal['fetch']> {
        const resource = this._resources[name];
        const path = resource.stringify(args);
        return this.fetch(path);
    }

    public fetchResourceAsync<TKey extends keyof TCollection | string>(
        name: TKey,
        args?: TKey extends keyof TCollection
            ? ResourceInitType<TCollection[TKey]>
            : Record<string, unknown>
    ): ReturnType<HttpClientMsal['fetchAsync']> {
        return firstValueFrom(this.fetchResource(name, args));
    }
}

export default HttpClientFusion;

// type omg = ResourceCollectionValues<typeof testCollection, 'testing'>;

// const testClient = new HttpClientFusion('https://biteme');
// testClient.Resources = {
//     test: new ResourceEntry<{ id: string }>('/test/:id', 'GET'),
//     testing: new ResourceEntry<{ id: number; name: string }>({
//         path: '/api/v1/:id/:name/',
//         method: 'GET',
//     }),
// };
// testClient.fetchResource('test', { id: 33 });
// testClient.fetchResource('testing', { name: '99', id: 'dd' });
// testClient.fetchResource('testssss', {});
