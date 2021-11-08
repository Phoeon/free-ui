import { createApp,ref } from 'vue'
import FLoading from './main.vue'
import { unmount } from '../../shared/utils'
import Evt from 'ph-evt'
export {
    FLoading
}

const show = (opt:{title?:string,alpha?:boolean,fill?:string,icon?:string,showBox?:"always"|"fit"|"none",countdown?:number}={})=>{
    const evt = new Evt()
    const destroy = ()=>evt.emit("destroy")
    const app = createApp(FLoading,{...opt,modelValue:ref(true),position:"fixed",destroy});
    const ins = app.mount(document.createElement("div")) as InstanceType<typeof FLoading>;
    const close = ()=>{
        ins.close?.()
    }
    evt.on("destroy",()=>{
        unmount(app)
    })
    document.body.appendChild(ins.$el)
    return close
}
export default {
    install(app:any){
        app.config.globalProperties.$fToast = show
    },
    show
}