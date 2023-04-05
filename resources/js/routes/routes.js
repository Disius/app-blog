
import Register from "../components/auth_components/Register.vue";
import Main from "../components/Main.vue";
import Login from "../components/auth_components/Login.vue";
import MyDash from "../components/myDash.vue";
import {useUserStore} from "../store/Auth";


export const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/mydash',
        name: 'mydash',
        component: MyDash,
        meta: {
            requiresAuth: true,
        }
    },
];
