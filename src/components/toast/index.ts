import PhToast from './main.vue'
import render from '../../shared/render'
const show = (title:string,opt:{timer?:number,type?:'success'|'warning'|'error'|'info',position?:'bottom'|'top'|'center',modal?:boolean,icon?:string}={})=>{
    const { type,timer,position,modal,icon } = opt
    const evt = render(PhToast,{title,type,position,modal,icon})
    return {
        close(fn:(...a:any[])=>void){
            evt.on("close",fn)
            return this
        }
    }
}
export default {
    install(app:any){
        app.config.globalProperties.$fToast = show
    },
    show(title:string,opt:{timer?:number,type?:'success'|'warning'|'error'|'info',position?:'bottom'|'top'|'center',modal?:boolean,icon?:string}={}){
        return show(title,opt)
    },
    success(title:string,opt?:number|{timer?:number,position?:'bottom'|'top'|'center',modal?:boolean,icon?:string}){
        const opts = opt?(typeof opt==="number" ? {timer:opt}:opt):{}
        return show(title,{
            ...opts,
            type:'success'
        })
    },
    info(title:string,opt?:number|{timer?:number,position?:'bottom'|'top'|'center',modal?:boolean,icon?:string}){
        const opts = opt?(typeof opt==="number" ? {timer:opt}:opt):{}
        return show(title,{
            ...opts,
            type:'info'
        })
    },
    error(title:string,opt?:number|{timer?:number,position?:'bottom'|'top'|'center',modal?:boolean,icon?:string}){
        const opts = opt?(typeof opt==="number" ? {timer:opt}:opt):{}
        return show(title,{
            ...opts,
            type:'error'
        })
    },
    warning(title:string,opt?:number|{timer?:number,position?:'bottom'|'top'|'center',modal?:boolean,icon?:string}){
        const opts = opt?(typeof opt==="number" ? {timer:opt}:opt):{}
        return show(title,{
            ...opts,
            type:'warning'
        })
    },
}