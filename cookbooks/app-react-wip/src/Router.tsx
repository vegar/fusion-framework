import { RouterProvider } from 'react-router-dom';
import { NavigationModule } from '@equinor/fusion-framework-module-navigation';
import { useAppModule } from '@equinor/fusion-framework-react-app';

import routes from './Routes';

export default function () {
    const module = useAppModule<NavigationModule>('navigation');
    // @ts-ignore
    const router = module.createRouter(routes);
    // @ts-ignore
    return <RouterProvider router={router} fallbackElement={<p>:(</p>} />;
}
