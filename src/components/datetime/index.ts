import { createApp } from 'vue'
import { IDtOption } from './types'
import { unmount } from '../../shared/utils'
import FDtPicker from './main.vue'
import Evt from 'ph-evt'
const show = (opt:IDtOption)=>{
    const evt = new Evt()
    const done = (v?:string|Array<string>)=>{
        evt.emit('done',v)
        unmount(app)
    }
    const close = ()=>{
        evt.emit('close')
        unmount(app)
    }
    const app = createApp(FDtPicker,{
        ...opt,
        done,
        close
    })
    const ins = app.mount(document.createElement("div"))
    document.body.appendChild(ins.$el)
    return {
        done(fn:(v?:string|Array<string>)=>void){
            evt.on('done',fn)
        },
        close(fn:()=>void){
            evt.on('close',fn)
        }
    }
}
export default {
    show
}