import Evt from 'ph-evt'
import NotificationMnger from './main.vue'
import Env from '../../shared/env'
import { IPhNotifyOpt, CloseStatus } from './types'
import { createApp, nextTick } from 'vue'
let mnger:InstanceType<typeof NotificationMnger>;
const notify =(content:string,opt?:IPhNotifyOpt)=>{
    const 
        evt = new Evt,
        nid = (Math.random()+"").replace(".",""),
        option = Object.assign({type:""},opt,{content,nid,evt});
    if(!mnger){
        mnger = createApp(NotificationMnger,{}).mount(document.createElement("div")) as InstanceType<typeof NotificationMnger>
        document.body.appendChild(mnger.$el as HTMLElement)
    }
    nextTick(()=>{
        mnger.show(option)
    })
    return {
        click(fn:(arg:{action:string,man?:boolean,meta:Record<string,unknown>})=>void){
            evt.on("click",fn)
            return this
        },
        close(fn:(arg:{action:string,man?:boolean,meta:Record<string,unknown>})=>void){
            evt.on("close",fn)
            return this
        },
        confirm(fn:(arg:{action:string,man?:boolean,meta:Record<string,unknown>})=>void){
            evt.on("confirm",fn)
            return this
        }
    }
}
export default {
    install(app:any,option:any){
        Env.set("notify",option)
        app.config.globalProperties.$phNotify = notify
    },
    notify(content:string,opt:IPhNotifyOpt={}){
        return notify(content,opt)
    },
    success(content:string,opt:IPhNotifyOpt={}){
        return notify(content,Object.assign(opt,{type:"success"}) as IPhNotifyOpt)
    },
    error(content:string,opt:IPhNotifyOpt={}){
        return notify(content,Object.assign(opt,{type:"error"}) as IPhNotifyOpt)
    },
    warning(content:string,opt:IPhNotifyOpt={}){
        return notify(content,Object.assign(opt,{type:"warning"}) as IPhNotifyOpt)
    },
    info(content:string,opt:IPhNotifyOpt={}){
        return notify(content,Object.assign(opt,{type:"info"}) as IPhNotifyOpt)
    }
}
export * from './types'