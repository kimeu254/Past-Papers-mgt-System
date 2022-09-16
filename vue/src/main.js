import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
