import FActionsheet from './main.vue'
import Evt from 'ph-evt'
import { IActionSheetOption } from '../../shared/types'
import { createApp, ref } from 'vue'
type IASOption = {
    modelValue?:string|number,
    // visible:boolean,
    autoClose?:boolean,//是否选择后自动关闭
    title?:string,
    desc?:string,
    cancelText?:string,
    // type?:'list'|'grid',
    options:Array<IActionSheetOption>
}
const show = (opt:Record<string,any>)=>{
    const evt = new Evt()
    const notify = (item:IActionSheetOption,hide:()=>void)=>{
        evt.emit("action",item,hide)
    }
    const app = createApp(FActionsheet,{
        ...opt,
        notify
    })
    const ins = app.mount(document.createElement("div"))
    document.body.appendChild(ins.$el)
    return {
        done(fn:(item:IActionSheetOption,hide:()=>void)=>void){
            evt.on("action",fn)
            return this
        }
    }
}
export default {
    showList:(opt:IASOption)=>{
        return show({
            ...opt,
            type:"list",
            visible:ref(true),
        })
    },
    showGrid:(opt:IASOption)=>{
        return show({
            ...opt,
            type:"grid",
            visible:ref(true),
        })
    },
}
export {FActionsheet}