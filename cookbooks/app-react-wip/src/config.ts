import type { AppModuleInitiator } from '@equinor/fusion-framework-react-app';

import { enableNavigation } from '@equinor/fusion-framework-module-navigation';



export const configure: AppModuleInitiator = (configurator, args) => {
    /** print render environment arguments */
    console.log('configuring application', args);

    /** callback when configurations is created */
    configurator.onConfigured((config) => {
        console.log('application config created', config);
    });

    /** callback when the application modules has initialized */
    configurator.onInitialized((instance) => {
        console.log('application config initialized', instance);
    });

    configurator.useFrameworkServiceClient('line-org');

    const { basename } = args.env;
    enableNavigation(configurator, basename);
};

export default configure;
