import UrlPattern from 'url-pattern';

export enum RequestMethod {
    Get = 'GET',
    Post = 'POST',
    Put = 'PUT',
    Patch = 'PATCH',
}

export interface Resource {
    path: string;
    method: RequestMethod | string;
    headers?: Record<string, string>;
    scope?: string[];
}

export type HttpResources = Record<string, HttpResource>;

export type ResourceInitType<T> = T extends HttpResource<infer U> ? U : Record<string, unknown>;

export class HttpResource<
    TParam extends Record<string, unknown> = Record<string, unknown>,
    TBody extends Record<string, unknown> = Record<string, unknown>
> {
    readonly path!: string;
    readonly method!: RequestMethod | string;
    readonly headers?: Record<string, string>;
    readonly scope?: string[];

    constructor(resource: Resource);
    constructor(path: string, method: RequestMethod, options?: Omit<Resource, 'path' | 'method'>);
    constructor(
        arg1: Resource | string,
        arg2?: RequestMethod,
        arg3?: Omit<Resource, 'path' | 'method'>
    ) {
        const options = typeof arg1 === 'string' ? { ...arg3, path: arg1, method: arg2 } : arg1;
        const { path, headers, method, scope } = options;
        Object.assign(this, { path, headers, method, scope });
    }

    /**
     * @returns {@link https://www.npmjs.com/package/url-pattern|url-pattern}
     */
    get pattern(): UrlPattern {
        return new UrlPattern(this.path);
    }

    /**
     * Matches resource path with provided path
     * @param path - path to test
     */
    public match(path: string): TParam {
        return this.pattern.match(path);
    }

    /**
     * Stringifies path with provided object
     * @param obj - object to stringify
     */
    public stringify(obj?: TParam): string {
        return this.pattern.stringify(obj);
    }

    /**
     * Creates an url from provided object
     * @param endpoint - base url
     * @param obj - object to stringify
     */
    public url(endpoint: string, obj?: TParam): string {
        return endpoint + this.stringify(obj);
    }

    // TODO: make more general
    public parse(endpoint: string, body: TBody, param?: TParam): { url: string; body: unknown } {
        const url = this.url(endpoint, param);
        return { url, body };
    }
}

export default HttpResource;
