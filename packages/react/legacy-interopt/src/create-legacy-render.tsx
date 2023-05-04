/* eslint-disable @typescript-eslint/ban-ts-comment */
import { concat, filter, from, take } from 'rxjs';

import { Router } from 'react-router-dom';
import { createBrowserHistory, createLocation, History } from 'history';

import { AppManifest, HistoryContext, IFusionContext } from '@equinor/fusion';

import {
    ContextItem,
    ContextModule,
    enableContext,
} from '@equinor/fusion-framework-module-context';

import { resolveInitialContext } from '@equinor/fusion-framework-module-context/utils';

import { enableNavigation, NavigationModule } from '@equinor/fusion-framework-module-navigation';

import { createComponent } from '@equinor/fusion-framework-react-app';
import { useEffect, type PropsWithChildren, ElementType } from 'react';
import { useFramework } from '@equinor/fusion-framework-react';

const AppWrapper = (
    props: PropsWithChildren<{ history: History; basename: string; appKey: string }>
) => {
    const framework = useFramework<[NavigationModule]>();
    const { history, basename, appKey, children } = props;
    useEffect(() => {
        return framework.modules.navigation.navigator.listen(({ location, action }) => {
            if (
                location.pathname.indexOf(basename) === -1 ||
                (location.pathname ===
                    [basename, history.location.pathname.replace(/^\//, '')].join('/') &&
                    location.search === history.location.search)
            ) {
                return;
            }

            const appLocation = createLocation(
                location.pathname.replace(basename, ''),
                location.state,
                location.key,
                history.location
            );

            switch (action) {
                case 'PUSH':
                    history.push(appLocation);
                    break;
                case 'POP':
                case 'REPLACE':
                    // TODO ?!?! should all be replaced?
                    history.replace(appLocation);
                    break;
            }
        });
    }, [appKey, framework]);
    return (
        <HistoryContext.Provider value={{ history }}>
            <Router key={appKey} history={history}>
                {/* @ts-ignore */}
                {children}
            </Router>
        </HistoryContext.Provider>
    );
};

export const createLegacyRender = (
    appKey: string,
    AppComponent: ElementType,
    legacy: IFusionContext
) => {
    const basename = `/apps/${appKey}`;
    return createComponent<[ContextModule, NavigationModule]>(
        () => (
            <AppWrapper
                history={createBrowserHistory({ basename })}
                basename={basename}
                appKey={appKey}
            >
                {/* @ts-ignore */}
                <AppComponent />
            </AppWrapper>
        ),
        (configurator, { env }) => {
            const { context: contextConfig } = env.manifest as unknown as AppManifest;
            enableNavigation(configurator, basename);
            if (contextConfig) {
                enableContext(configurator, async (builder) => {
                    // TODO - check build url and get context from url
                    if (contextConfig.types) {
                        builder.setContextType(contextConfig.types);
                    }
                    if (contextConfig.filterContexts) {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        builder.setContextFilter(contextConfig.filterContexts);
                    }
                    builder.setResolveInitialContext((args) => {
                        const resolver = resolveInitialContext({
                            path: contextConfig.getContextFromUrl
                                ? {
                                      extract: contextConfig.getContextFromUrl,
                                      validate: (path: string) => !!path,
                                  }
                                : {
                                      validate: (path: string) => {
                                          return (
                                              !!path.match(/^\d+$/) ||
                                              !!path.match(/^(?:[a-z0-9]+-){4}[a-z0-9]+$/)
                                          );
                                      },
                                  },
                        });
                        return concat(
                            resolver(args),
                            from(
                                legacy.contextManager.getAsync<'current', ContextItem>('current')
                            ).pipe(filter((x): x is ContextItem => !!x))
                        ).pipe(
                            filter((item): item is ContextItem => !!item),
                            take(1)
                        );
                    });
                });
            }
        }
    );
};
