import FPopConfirm from './confirm.vue'
import FPopover from './over.vue'
import FTooltip from './tooltip.vue'
import FDropdownList from './dropdown.vue'
import FPopSelect from './select.vue'

import Evt from 'ph-evt'
import { createApp } from 'vue'
import { IPopConfirm, IPopover, ITooltip, IDropdown, IDropdownItem, ISelect } from './types'
import { unmount } from '../../shared/utils'

const show = (opt:IPopover)=>{
    const app = createApp(FPopover,{...opt}),
        ins = app.mount(document.createElement("div")) as InstanceType<typeof FPopover>;
    document.body.appendChild(ins.$el)
    return ()=>{
        unmount(app)
        ins.close()
    }
}
const showTip = (opt:ITooltip)=>{
    const app = createApp(FTooltip,{...opt}),
        ins = app.mount(document.createElement("div")) as InstanceType<typeof FTooltip>;
    document.body.appendChild(ins.$el)
    return ()=>{
        unmount(app)
        ins.close()
    }
}
const showConfirm = (opt:IPopConfirm)=>{
    const evt = new Evt()
    const notify = (status:number)=>{
        if(status)
        evt.emit("done")
        else 
        evt.emit("cancel")
    }
    const app = createApp(FPopConfirm,{...opt,notify}),
        ins = app.mount(document.createElement("div"));
    document.body.appendChild(ins.$el)
    return {
        done(fn:()=>void){
            evt.on("done",()=>{
                unmount(app)
                fn()
            })
            return this
        },
        cancel(fn:()=>void){
            evt.on("cancel",()=>{
                unmount(app)
                fn()
            })
            return this
        }
    }
}
const showDropdown = (opt:IDropdown)=>{
    const evt = new Evt()
    const notify = (item:IDropdownItem|number)=>{
        if(item===1)
            evt.emit("enter")
        else if(item===0)
            evt.emit("leave")
        else
        evt.emit("done",item)
    }
    const app = createApp(FDropdownList,{...opt,notify}),
        ins = app.mount(document.createElement("div")) as InstanceType<typeof FDropdownList>;
    document.body.appendChild(ins.$el)
    return {
        done(fn:(item:IDropdownItem)=>void){
            evt.on("done",(item:IDropdownItem)=>{
                unmount(app)
                fn(item)
            })
            return this
        },
        enter(fn:()=>void){
            evt.on("enter",fn)
            return this
        },
        leave(fn:()=>void){
            evt.on("leave",fn)
            return this
        },
        hide(){
            ins.close?.()
            unmount(app)
        }
    }
}
const showPopSelect = (opt:ISelect)=>{
    const evt = new Evt()
    const notify = (item:Array<IDropdownItem>)=>{
        evt.emit("done",item)
    }
    const app = createApp(FPopSelect,{...opt,notify}),
        ins = app.mount(document.createElement("div")) as InstanceType<typeof FPopSelect>;
    document.body.appendChild(ins.$el)
    return {
        done(fn:(item:Array<IDropdownItem>)=>void){
            evt.on("done",(item:Array<IDropdownItem>)=>{
                unmount(app)
                fn(item)
            })
            return this
        },
        hide(){
            ins.close?.()
            unmount(app)
        }
    }
}
export default {
    showConfirm,
    showTip,
    show,
    showDropdown,
    showPopSelect
}
export {
    FPopConfirm,
    FPopover,
    FTooltip,
}