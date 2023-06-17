import { createApp } from 'vue'
import router from './router'



import App from './App.vue'
import './scss/main.scss'
import * as bootstrap from 'bootstrap'

const app = createApp(App)

app
.use(router)
.mount('#app')
