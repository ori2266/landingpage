import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//import Vue from 'vue'
//import Bootstrap from 'bootstrap'

//Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'

//Vue.use(Bootstrap)

createApp(App).use(router).mount('#app')
