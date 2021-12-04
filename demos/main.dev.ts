import '../node_modules/font-awesome/css/font-awesome.min.css'
import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import PhPretty from './components/pretty.vue'
import DemoCard from './components/card.vue'
import FreeUi from '@phoeon/free-ui'
FreeUi.config({
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
const app = createApp(App);
app
.component("PhPretty",PhPretty)
.component("DemoCard",DemoCard)
.use(router).mount('#app')
