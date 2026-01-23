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
        title: 'Главная страница',
        page: <MainPage />,
        authOnly: false,
    },
    auth: {
        path: getRouteAuth(),
        title: 'Страница авторизации',
        page: <AuthPage />,
        authOnly: false,
    },
    admin: {
        path: getRouteAdminPanel(),
        title: 'Панель администратора',
        page: <AdminPanelPage />,
        authOnly: true,
    },
};