import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {FIconConfig} from '@/components'
createApp(App)
.use(FIconConfig,{
    cname:"fa",
    prefix:"fa-"
})
.use(router).mount('#app')
