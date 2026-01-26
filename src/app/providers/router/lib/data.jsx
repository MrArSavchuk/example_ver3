import {
    getRouteMain,
    getRouteAuth,
    getRouteAdminPanel,
} from './helper';

import { MainPage } from '@/pages/MainPage';
import { AuthPage } from '@/pages/AuthPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';


export const routeConfig = {
    main: {
        path: getRouteMain(),
        page: <MainPage />,
        authOnly: false,
    },
    auth: {
        path: getRouteAuth(),
        page: <AuthPage />,
        authOnly: false,
    },
    admin: {
        path: getRouteAdminPanel(),
        page: <AdminPanelPage />,
        authOnly: true,
    },
};