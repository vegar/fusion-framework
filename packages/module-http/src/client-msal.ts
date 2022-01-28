import { HttpClient, HttpRequestInit } from './client';

/** Extends request init with scope  */
type RequestInitMsal = HttpRequestInit & { scopes?: string[] };

/** Default Client for MSAL */
export class HttpClientMsal extends HttpClient<RequestInitMsal> {
    /** Scope that will be applied to all request if no scope is provided in request object */
    public defaultScopes: string[] = [];

    /** @inheritdoc */
    fetch(init: Omit<RequestInitMsal, 'uri'> | string): ReturnType<HttpClient['fetch']> {
        init = typeof init === 'string' ? { path: init } : init;
        Object.assign(init, { scopes: this.defaultScopes.concat(init.scopes || []) });
        return super.fetch(init);
    }
}

export default HttpClientMsal;
