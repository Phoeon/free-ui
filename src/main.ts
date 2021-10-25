import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FreeUi from '@/components'
const app = createApp(App);
app
.use(FreeUi,{
    icon:{
        cname:"fa",
        prefix:"fa-"
    },
    notify:{
        position:"right-top"
    }
})
.use(router).mount('#app')
