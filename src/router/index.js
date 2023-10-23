import { HeaderOnly } from '~/layouts';

import Home from '~/Pages/Home/Index';
import Following from '~/Pages/Following/Index';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search/Index';
import config from '~/config';
import Live from '~/Pages/Live';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
    {
        path: config.routes.live,
        component: Live,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
