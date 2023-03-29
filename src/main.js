import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const pinia = createPinia()
const app = createApp(App)

createApp(App).use(router).use(pinia).mount('#app')
