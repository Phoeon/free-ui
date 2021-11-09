import { App } from 'vue'
import Env from './shared/env'
export * from './components'
export * from './directives'
export default {
    install(app:App,options:Record<string,any>){
        if(options){
            for(const k in options)
                Env.set(k,options[k])
        }
    }
}