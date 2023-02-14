import { FacetResult, SearchDocumentsResult, SearchResult } from '@azure/search-documents';
import { BehaviorSubject, lastValueFrom, Observable, Subject } from 'rxjs';
import { scan, share, takeLast } from 'rxjs/operators';

export class AzureSearchResult<T> extends Observable<SearchResult<T>[]> {
    #result: SearchDocumentsResult<T>;
    #pages: ReturnType<SearchDocumentsResult<T>['results']['byPage']>;
    #value: BehaviorSubject<SearchResult<T>[]> = new BehaviorSubject<SearchResult<T>[]>([]);
    #done? = false;

    get value(): SearchResult<T>[] {
        return this.#value.value;
    }

    get complete(): boolean {
        return !!this.#done;
    }

    get totalCount(): number | undefined {
        return this.#result.count;
    }

    get currentCount(): number {
        return this.value.length;
    }

    get coverage(): number | undefined {
        return this.#result.coverage;
    }

    get facets(): Record<string, FacetResult[]> | undefined {
        return this.#result.facets;
    }

    constructor(result: SearchDocumentsResult<T>, options?: { loadFirstPage: boolean }) {
        super((observer) => {
            return this.#value.subscribe(observer);
        });
        this.#result = result;
        this.#pages = result.results.byPage();
        console.log('AzureSearchResult', 'created new');
        if (options?.loadFirstPage) {
            this.next().subscribe(console.log);
        }
    }

    #next$?: Observable<IteratorResult<SearchResult<T>>>;
    next(count = 50) {
        if (this.#done) {
            throw Error('all values extracted');
        }
        if (this.#next$) {
            return this.#next$;
        }

        const innerNext = new Subject<SearchResult<T>>();
        innerNext
            .pipe(
                scan((x, y) => x.concat(y), [] as SearchResult<T>[]),
                takeLast(1)
            )
            .subscribe({
                next: (docs) => {
                    console.log('AzureSearchResult::Subject::next', docs);
                    this.#value.next(this.#value.value.concat(docs));
                },
                complete: () => {
                    this.#next$ = undefined;
                    if (this.#done) {
                        this.#value.complete();
                    }
                },
            });

        this.#next$ = new Observable<IteratorResult<SearchResult<T>>>((subscriber) => {
            (async () => {
                let innerCounter = 0;
                while (!subscriber.closed && count > innerCounter) {
                    const next = await this.#result.results.next();
                    console.log('AzureSearchResult::while', next);
                    if (next.done) {
                        this.#done = true;
                        break;
                    }
                    subscriber.next(next);
                    innerNext.next(next.value);
                    innerCounter++;
                }
                innerNext.complete();
                subscriber.complete();
            })();
        }).pipe(share());

        return this.#next$;
    }

    async nextAsync(): Promise<IteratorResult<SearchResult<T>, any>[]> {
        return lastValueFrom(
            this.next().pipe(
                scan((docs, doc) => docs.concat(doc), [] as IteratorResult<SearchResult<T>, any>[])
            )
        );
    }

    async resolve(): Promise<SearchResult<T>[]> {
        while (!this.#done) {
            await this.nextAsync();
        }
        return this.value;
    }
}

export default AzureSearchResult;
