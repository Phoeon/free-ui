import PhToast from './main.vue'
import { createApp,nextTick } from 'vue'
const show = (title:string,opt:{timer?:number,type?:'success'|'warning'|'error'|'info',position?:'bottom'|'top'|'center',modal?:boolean}={})=>{
    const { type,timer,position,modal } = opt
    const 
    dom = document.createElement("div"),
    toast = createApp(PhToast,{title,type,position,modal}),
    instance = toast.mount(dom) as InstanceType<typeof PhToast>;
    document.body.appendChild(instance.$el)
    nextTick(()=>{
        instance.show(timer)
    })
}
export default {
    install(app:any){
        app.config.globalProperties.$fToast = show
    },
    show(title:string,opt:{timer?:number,type?:'success'|'warning'|'error'|'info',position?:'bottom'|'top'|'center',modal?:boolean}={}){
        show(title,opt)
    },
    success(title:string,opt?:number|{timer?:number,position?:'bottom'|'top'|'center',modal?:boolean}){
        const opts = opt?(typeof opt==="number" ? {timer:opt}:opt):{}
        show(title,{
            ...opts,
            type:'success'
        })
    },
    info(title:string,opt?:number|{timer?:number,position?:'bottom'|'top'|'center',modal?:boolean}){
        const opts = opt?(typeof opt==="number" ? {timer:opt}:opt):{}
        show(title,{
            ...opts,
            type:'info'
        })
    },
    error(title:string,opt?:number|{timer?:number,position?:'bottom'|'top'|'center',modal?:boolean}){
        const opts = opt?(typeof opt==="number" ? {timer:opt}:opt):{}
        show(title,{
            ...opts,
            type:'error'
        })
    },
    warning(title:string,opt?:number|{timer?:number,position?:'bottom'|'top'|'center',modal?:boolean}){
        const opts = opt?(typeof opt==="number" ? {timer:opt}:opt):{}
        show(title,{
            ...opts,
            type:'warning'
        })
    },
}