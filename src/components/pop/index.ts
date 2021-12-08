import FPopConfirm from './confirm.vue'
import FPopover from './over.vue'
import FTooltip from './tooltip.vue'
import FDropdownList from './dropdown.vue'
import FPopSelect from './select.vue'
import FPopContainer from './base.vue'
import FTreeSelect from './tree-select.vue'
import FCascadeSelect from './cascade-select.vue'
import Evt from 'ph-evt'
import { createApp } from 'vue'
import type { ITreeNode, IValue, IPopConfirm, IPopover, ITooltip, IDropdown, IDropdownItem, ISelect, IPopTreeSelect } from '../../shared/types'
import { unmount } from '../../shared/utils'

const showPopover = (opt:IPopover)=>{
    const app = createApp(FPopover,{...opt}),
        ins = app.mount(document.createElement("div")) as any//InstanceType<typeof FPopover>;
    document.body.appendChild(ins.$el)
    return ()=>{
        unmount(app)
        ins.close()
    }
}
const showTip = (opt:ITooltip)=>{
    const app = createApp(FTooltip,{...opt}),
        ins = app.mount(document.createElement("div")) as any//InstanceType<typeof FTooltip>;
    document.body.appendChild(ins.$el)
    return ()=>{
        unmount(app)
        ins.close()
    }
}
const showConfirm = (opt:IPopConfirm)=>{
    const evt = new Evt()
    const destroy = ()=>evt.emit("close")
    const notify = (status:number)=>{
        if(status)
        evt.emit("done")
        else 
        evt.emit("cancel")
    }
    const app = createApp(FPopConfirm,{...opt,notify,destroy}),
        ins = app.mount(document.createElement("div"));
        evt.on("close",()=>unmount(app))
    document.body.appendChild(ins.$el)
    return {
        done(fn:()=>void){
            evt.on("done",fn)
            return this
        },
        cancel(fn:()=>void){
            evt.on("cancel",fn)
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
        ins = app.mount(document.createElement("div")) as any//InstanceType<typeof FDropdownList>;
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
    const destroy = ()=>evt.emit("close")
    const notify = (item:IValue)=>{
        evt.emit("done",item)
    }
    const 
        app = createApp(FPopSelect,{...opt,notify,destroy}),
        ins = app.mount(document.createElement("div")) as any //InstanceType<typeof FPopSelect>;
    evt.on("close",()=>unmount(app))
    document.body.appendChild(ins.$el)
    return {
        done(fn:(item:IValue)=>void){
            evt.on("done",fn)
            return this
        }
    }
}
const showTreeSelect = (opt:IPopTreeSelect)=>{
    const evt = new Evt()
    const destroy = ()=>evt.emit("close")
    const notify = (item:IValue)=>{
        evt.emit("done",item)
    }
    const 
        app = createApp(FTreeSelect,{...opt,notify,destroy}),
        ins = app.mount(document.createElement("div")) as any //InstanceType<typeof FTreeSelect>;
    evt.on("close",()=>unmount(app))
    document.body.appendChild(ins.$el)
    return {
        done(fn:(item:IValue)=>void){
            evt.on("done",fn)
            return this
        }
    }
}
const showCascadeSelect = (opt:IPopTreeSelect)=>{
    const evt = new Evt()
    const destroy = ()=>evt.emit("close")
    const notify = (item:IValue)=>{
        evt.emit("done",item)
    }
    const 
        app = createApp(FCascadeSelect,{...opt,notify,destroy}),
        ins = app.mount(document.createElement("div")) as any //InstanceType<typeof FCascadeSelect>;
    evt.on("close",()=>unmount(app))
    document.body.appendChild(ins.$el)
    return {
        done(fn:(item:IValue)=>void){
            evt.on("done",fn)
            return this
        }
    }
}
export default {
    showConfirm,
    showTip,
    showPopover,
    showDropdown,
    showPopSelect,
    showTreeSelect,
    showCascadeSelect
}
export {
    // FPopConfirm,
    // FPopover,
    // FTooltip,
    FPopContainer
}