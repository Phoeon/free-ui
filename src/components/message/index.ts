import Message from './main.vue'
import Evt from 'ph-evt'
import { createApp , nextTick} from 'vue'
import { IMsgOption } from './types'
let msgs:Array<InstanceType<typeof Message>> = []
const show = (msg:string,opt:IMsgOption={})=>{
    const evt = new Evt(),
        nid = (Math.random()+"").replace(".",""),
        position = opt.position||"top",
        offset = 10;
    const close = (status?:number)=>{
        evt.emit("close",status)
    }
    const app = createApp(Message,{
        ...opt,
        content:msg,
        nid,
        close,
    })
    const ins = app.mount(document.createElement("div")) as InstanceType<typeof Message>
    document.body.appendChild(ins.$el)

    evt.on("close",(status?:number)=>{
        const msgs1 = msgs.filter(msg=>msg.position===position);
        const idx = msgs1.findIndex(msg=>msg.nid===nid);

        if(idx<0)return
        const msg = msgs1[idx],
            h = msg.$el.offsetHeight + offset
        msgs1.forEach((msg,i)=>{
            if(i<=idx)return
            msg.show(msg.y-h)
        })
        msgs = msgs.filter(msg=>msg.nid!=nid)
        setTimeout(()=>{
            app.unmount()
        },300)
        if(status)
        evt.emit("click",{msg,...opt})
        else
        evt.emit("done",{msg,...opt})
    })
    nextTick(()=>{
        const msgs1 = msgs.filter(msg=>msg.position===position);
        let y = 24;
        msgs1.forEach((msg)=>{
            y += (msg.$el.offsetHeight + offset);
        })
        ins.show(y)
        msgs.push(ins)
    })
    type ICb = (...a:any[])=>void;
    return {
        click(fn:ICb){
            evt.on("click",fn)
            return this
        },
        close(fn:ICb){
            evt.on("done",fn)
            return this
        }

    }
}
export default {
    show,
    success(msg:string,opt:IMsgOption={}){
        return show(msg,{
            ...opt,
            type:"success"
        })
    },
    error(msg:string,opt:IMsgOption={}){
        return show(msg,{
            ...opt,
            type:"error"
        })
    },
    warning(msg:string,opt:IMsgOption={}){
        return show(msg,{
            ...opt,
            type:"warning"
        })
    },
    info(msg:string,opt:IMsgOption={}){
        return show(msg,{
            ...opt,
            type:"info"
        })
    },
}