import Evt from 'ph-evt'
import NotificationMnger from './main.vue'
import Env from '../../shared/env'
import type { INotifyOption } from '../../shared/types'
import { CloseStatus } from './types'
import { createApp, nextTick } from 'vue'
// let mnger:InstanceType<typeof NotificationMnger>;
let mnger:any;
const notify =(content:string,opt?:INotifyOption)=>{
    const 
        evt = new Evt,
        nid = (Math.random()+"").replace(".",""),
        option = Object.assign({type:""},opt,{content,nid,evt});
    if(!mnger){
        mnger = createApp(NotificationMnger,{}).mount(document.createElement("div")) as any//InstanceType<typeof NotificationMnger>
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
    notify(content:string,opt:INotifyOption={}){
        return notify(content,opt)
    },
    success(content:string,opt:INotifyOption={}){
        return notify(content,Object.assign(opt,{type:"success"}) as INotifyOption)
    },
    error(content:string,opt:INotifyOption={}){
        return notify(content,Object.assign(opt,{type:"error"}) as INotifyOption)
    },
    warning(content:string,opt:INotifyOption={}){
        return notify(content,Object.assign(opt,{type:"warning"}) as INotifyOption)
    },
    info(content:string,opt:INotifyOption={}){
        return notify(content,Object.assign(opt,{type:"info"}) as INotifyOption)
    }
}
export * from './types'