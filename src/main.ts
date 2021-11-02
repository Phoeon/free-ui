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
    },
    datetime:{
        lang:'cn',
        importants:[{
            text:"工资",
            desc:"发工资了，去三里屯逛哟",
            md:"*-15"
        }]
    },
    colorpicker:{
        // colors:['#00ff00']
    }
})
.use(router).mount('#app')
