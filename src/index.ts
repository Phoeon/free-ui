import { App } from 'vue'
import { IFreeuiConfigOption } from './shared/types'
import Env from './shared/env'
import version from './version'
export * from './components'
export * from './directives'
export * from './shared/types'
export * from './shared'
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
    version,
    config,
    install
}