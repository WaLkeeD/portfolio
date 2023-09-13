import { createApp } from 'vue'
import { createPinia } from "pinia";
import { routers } from "@/router";
import './assets/style/style.scss'
import App from './App.vue'


const app = createApp(App)
const pinia = createPinia()

app.use(routers)
app.use(pinia)

app.mount('#app')
