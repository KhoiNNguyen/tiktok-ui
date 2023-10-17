import { HeaderOnly } from '~/Components/Layout';

import Home from '~/Pages/Home/Index';
import Following from '~/Pages/Following/Index';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search/Index';
import routes from '~/config/routes';

const publicRoutes = [
    {
        path: routes.home,
        component: Home,
    },
    {
        path: routes.following,
        component: Following,
    },
    {
        path: routes.profile,
        component: Profile,
    },
    {
        path: routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routes.search,
        component: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
