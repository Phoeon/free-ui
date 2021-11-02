import { createApp, App } from 'vue'
import { IDtOption } from './types'
import { unmount } from '../../shared/utils'
import Env from '../../shared/env'
import FDtPicker from './main.vue'
import Evt from 'ph-evt'
const show = (opt:IDtOption)=>{
    const evt = new Evt()
    const gopt = Env.get("datetime")||{lang:"cn"}
    const done = (v?:string|Array<string>)=>{
        evt.emit('done',v)
        unmount(app)
    }
    const close = ()=>{
        evt.emit('close')
        unmount(app)
    }
    const app = createApp(FDtPicker,{
        ...gopt,
        ...opt,
        done,
        close
    })
    const ins = app.mount(document.createElement("div"))
    document.body.appendChild(ins.$el)
    return {
        done(fn:(v?:string|Array<string>)=>void){
            evt.on('done',fn)
            return this
        },
        close(fn:()=>void){
            evt.on('close',fn)
            return this
        }
    }
}
export default {
    install(app:App,opt:any){
        Env.set('datetime',opt)
        app.config.globalProperties.$phDtPicker = show
    },
    show
}