import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import DefaultLayout from "../components/layouts/DefaultLayout.vue";
import Surveys from "../views/Surveys.vue";
import store from "../store";
import AuthLayout from "../components/layouts/AuthLayout.vue";

const  routes = [
    {
        path: '/',
        redirect: '/home',
        component: DefaultLayout,
        meta: {requiresAuth: true},
        children: [
            {path: '/home', name: 'Home', component: Home},
            {path: '/surveys', name: 'Surveys', component: Surveys}
        ]
    },
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        component: AuthLayout,
        children: [
            {
                path: '/login',
                name: 'login',
                component: Login
            },
            {
                path: '/register',
                name: 'register',
                component: Register
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && !store.state.user.token) {
        next({name: 'login'})
    } else if(store.state.user.token && (to.name === 'login' || to.name === 'register')) {
        next({name: 'home'});
    } else {
        next()
    }
})

export default router;
