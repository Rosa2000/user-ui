import Login from '~/pages/Login/Login';
import Home from '~/pages/Home/Home';
import Register from '~/pages/Register/Register';

const publicRoutes = [
    { path: '/home', component: Home },
    { path: '/', component: Home },
    { path: '/login', component: Login , layout: null},
    { path: '/register', component: Register , layout: null},

];

const privateRoutes = [


];

export { publicRoutes, privateRoutes };
