import { Link, Outlet, RouteObject } from 'react-router-dom';

import PeopleSearch from './pages/PeopleSearch';
import DepartmentSearch from './pages/DepartmentSearch';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: (
            <div>
                <section style={{ display: 'inline-flex', gap: 10 }}>
                    <Link to={''}>Home</Link>
                    <Link to={'people'}>People</Link>
                    <Link to={'department'}>Department</Link>
                </section>
                <Outlet></Outlet>
            </div>
        ),
        children: [
            {
                index: true,
                element: <p>home</p>,
            },
            {
                path: 'people/*',
                element: <PeopleSearch/>,
            },
            {
                path: 'department/*',
                element: <DepartmentSearch/>,
            },
        ],
    },
];

export default routes;
