import { createApp,ref } from 'vue'
import FLoading from './main.vue'
export {
    FLoading
}

const show = (opt:{title?:string,alpha?:boolean,fill?:string,icon?:string,showBox?:"always"|"fit"|"none",countdown?:number}={})=>{
    return new Promise<()=>void>((resolve,reject)=>{
        const ins = createApp(FLoading,{...opt,modelValue:ref(true),position:"fixed",resolve}).mount(document.createElement("div")) as InstanceType<typeof FLoading>
        document.body.appendChild(ins.$el)
        // resolve(ins.hide as ()=>void)
    })
}
export default {
    install(app:any){
        app.config.globalProperties.$fToast = show
    },
    show
}