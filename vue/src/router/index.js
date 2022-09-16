import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import DefaultLayout from "../components/layouts/DefaultLayout.vue";
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
        ]
    },
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        component: AuthLayout,
        meta: {isGuest: true},
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
    } else if(store.state.user.token && (to.meta.isGuest)) {
        next({name: 'home'});
    } else {
        next()
    }
})

export default router;
