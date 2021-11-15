import { App } from 'vue'
import Env from './shared/env'
import { IFreeuiConfigOption } from './shared/types'
export * from './components'
export * from './directives'
export * from './shared/types'
const config = (options:IFreeuiConfigOption)=>{
    if(options){
        for(const k in options)
            Env.set(k,options[k]) 
    }
}
const install = (app:App)=>{
    //不做全局注册了
    void(0)
}
export default {
    version:"1.0.0beta.0",
    config,
    install
}