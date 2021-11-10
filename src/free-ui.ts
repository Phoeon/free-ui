import { App } from 'vue'
import Env from './shared/env'
export * from './components'
export * from './directives'

const config = (options:Record<string,any>)=>{
    if(options){
        for(const k in options)
            Env.set(k,options[k])
    }
}
const install = (app:App)=>{
    1;
}
export default {
    version:"1.0.0beta.0",
    config,
    install
}