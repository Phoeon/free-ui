import FLoading from './spin.vue'
import { createApp,ref } from 'vue'
import { unmount } from '../../shared/utils'
import { IFLoadingSpinOption } from '../../shared/types'
import Evt from 'ph-evt'

let __end:()=>void;
const start = (opt:IFLoadingSpinOption={})=>{
    const evt = new Evt()
    const destroy = ()=>evt.emit("destroy")
    const app = createApp(FLoading,{...opt,modelValue:ref(true),isGlobal:true,destroy});
    const ins = app.mount(document.createElement("div")) as InstanceType<typeof FLoading>;
    evt.on("destroy",()=>{
        unmount(app)
    })
    __end = ()=>{
        ins.end?.()
        __end = ()=>void(0)
    }
    document.body.appendChild(ins.$el)
}
const end = ()=>{
    __end?.()
}
export default {
    start,
    end
}