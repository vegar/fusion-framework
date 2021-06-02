import { Services } from '@equinor/fusion-framework/services';
import { HttpClientFusion } from 'services/http';
import portal from './portal';

export { Resource, HttpResource, ResourceInitType, RequestMethod } from './resource';

export const resources = { portal };

export type ResourceNames = keyof typeof resources;

interface Resources {
    createClient<TKey extends ResourceNames>(name: TKey): HttpClientFusion<typeof resources[TKey]>;
    createClient(name: string): HttpClientFusion;
}

export const configureResource = (service: Services): Resources => {
    Object.keys(resources).forEach((key) =>
        // service.http.configureClient(key, (client) => {
        //     if (!client.uri) {
        //         throw Error(`No endpoint configured for resource [${key}]`);
        //     }
        //     client.resources = resources[key as keyof typeof resources];
        // })
    );
    const createClient = (key: string): HttpClientFusion => service.http.createClient(key);
    return { createClient };
};

export default resources;
