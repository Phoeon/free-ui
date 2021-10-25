import FPopConfirm from './confirm.vue'
import FPopover from './over.vue'
import FTooltip from './tooltip.vue'
import Evt from 'ph-evt'
import { createApp } from 'vue'
import { IPopConfirm, IPopover, ITooltip } from './types'
const show = (opt:IPopover)=>{
    const app = createApp(FPopover,{...opt,sample:false}),
        ins = app.mount(document.createElement("div")) as InstanceType<typeof FPopover>;
    document.body.appendChild(ins.$el)
    return ins.close as ()=>void
}
const showTip = (opt:ITooltip)=>{
    const app = createApp(FTooltip,{...opt,sample:false}),
        ins = app.mount(document.createElement("div")) as InstanceType<typeof FTooltip>;
    document.body.appendChild(ins.$el)
    return ins.close as ()=>void
}
const showConfirm = (opt:IPopConfirm)=>{
    const evt = new Evt()
    const notify = (status:number)=>{
        if(status)
        evt.emit("done")
        else 
        evt.emit("cancel")
    }
    const app = createApp(FPopConfirm,{...opt,sample:false,notify}),
        ins = app.mount(document.createElement("div"));
    document.body.appendChild(ins.$el)
    return {
        done(fn:()=>void){
            evt.on("done",()=>{
                app.unmount()
                fn()
            })
            return this
        },
        cancel(fn:()=>void){
            evt.on("cancel",()=>{
                app.unmount()
                fn()
            })
            return this
        }
    }
}
export default {
    showConfirm,
    showTip,
    show
}
export {
    FPopConfirm,
    FPopover,
    FTooltip
}