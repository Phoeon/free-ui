import { createApp,ref } from 'vue'
import { IModalOption } from '../../shared/types'
import Evt from 'ph-evt'
import ModalConfirm from './confirm.vue'
import ModalAlert from './alert.vue'
import ModalOption from './option.vue'
const showConfirm = (opt:{
    title?:string,
    content?:string,
    doneText?:string,
    cancelText?:string,
    icon?:string
}={})=>{
    const evt = new Evt()
    const app = createApp(ModalConfirm,{
        evt,
        ...opt
    })
    const ins = app.mount(document.createElement("div")) as InstanceType<typeof ModalConfirm>
    document.body.appendChild(ins.$el)
    return {
        done(fn:(status:number)=>void){
            evt.on("close",(status:number)=>{
                fn(status)
                window.setTimeout(()=>app.unmount(),300)
            })
        }
    }
}
const showAlert = (opt:{
    title?:string,
    content?:string,
    doneText?:string
}={})=>{
    const evt = new Evt()
    const app = createApp(ModalAlert,{
        evt,
        ...opt
    })
    const ins = app.mount(document.createElement("div")) as InstanceType<typeof ModalAlert>
    document.body.appendChild(ins.$el)
    return {
        done(fn:(status:number)=>void){
            evt.on("close",(status:number)=>{
                fn(status)
                window.setTimeout(()=>app.unmount(),300)
            })
        }
    }
}
const showOptions = (opt:{
    title?:string,
    content?:string,
    options:Array<IModalOption>
}={options:[]})=>{
    const evt = new Evt()
    const app = createApp(ModalOption,{
        evt,
        ...opt
    })
    const ins = app.mount(document.createElement("div")) as InstanceType<typeof ModalOption>
    document.body.appendChild(ins.$el)
    return {
        done(fn:(status?:string|number)=>void){
            evt.on("close",(status?:string|number)=>{
                fn(status)
                window.setTimeout(()=>app.unmount(),300)
            })
        }
    }
}
export default {
    confirm: showConfirm,
    alert: showAlert,
    option: showOptions
}