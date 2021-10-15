import Evt from 'ph-evt'
import Notification from './main.vue'
import { PhNotifyOpt, CloseStatus } from './types'
import { createApp } from 'vue'
let instances:Array<InstanceType<typeof Notification>> = []

const notify =(content:string,opt?:PhNotifyOpt)=>{
    const evt = new Evt()
    const 
        position = opt?.position||"right-bottom",
        offset = 14;
    const onClose = (nid:string,status:number,man?:boolean)=>{
        const 
            inss = instances.filter(n=>n.position.startsWith(position)),
            idx = inss.findIndex(n=>n.nid===nid),
            ins = inss[idx],
            ykey = position.split("-")[1];
        if(idx>-1&&ins){
            for(let i=idx+1;i<inss.length;i++){
                const cmpcss = getComputedStyle(inss[i].$el) as any
                const y = parseInt(cmpcss[ykey])||0
                inss[i].show(y-ins.$el.offsetHeight-offset+"px")
            }
            instances = instances.filter(n=>n.nid!=nid)
        }
        if(man){
            const en = status==CloseStatus.confirm?'confirm':'close'
            evt.emit(en,{
                man,
                action:en,
                meta:opt||{}
            })
        }
    }
    const onClick = ({status,man}:{status:number,man?:boolean})=>{
        evt.emit('click',{
            man,
            action:"click",
            meta:opt||{}
        })
    }
    const 
        option = Object.assign({type:"",onClose,onClick},opt,{position,content}),
        notification = createApp(Notification,option),
        dom = document.createElement("div"),
        ins = notification.mount(dom) as InstanceType<typeof Notification>,
        inss = instances.filter(n=>n.position.startsWith(option.position));

    document.body.appendChild(ins.$el as Node)
    
    let y = offset;
    inss.forEach(n=>y+=n.$el.offsetHeight+offset)
    if(y>document.documentElement.clientHeight){
        const toClose = inss.filter(n=>n.autoClose&&!n.confirm)[0]
        setTimeout(()=>{toClose?.close(0)})
    }
    ins.show(y+"px")
    instances.push(ins)
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
    install(app:any){
        app.config.globalProperties.$phNotify = notify
    },
    notify(content:string,opt:PhNotifyOpt={}){
        return notify(content,opt)
    },
    success(content:string,opt:PhNotifyOpt={}){
        return notify(content,Object.assign(opt,{type:"success"}) as PhNotifyOpt)
    },
    error(content:string,opt:PhNotifyOpt={}){
        return notify(content,Object.assign(opt,{type:"error"}) as PhNotifyOpt)
    },
    warning(content:string,opt:PhNotifyOpt={}){
        return notify(content,Object.assign(opt,{type:"warning"}) as PhNotifyOpt)
    },
    info(content:string,opt:PhNotifyOpt={}){
        return notify(content,Object.assign(opt,{type:"info"}) as PhNotifyOpt)
    }
}
export * from './types'