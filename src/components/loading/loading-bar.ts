import Evt from 'ph-evt'
import LoadingBar from './bar.vue'
import { createApp,App } from 'vue'
import { IFLoadingBarOption } from './types'
import { unmount } from '../../shared/utils'
let ins:undefined|InstanceType<typeof LoadingBar>;
const start = (opt:IFLoadingBarOption={})=>{
    ins?.destroy()
    const evt = new Evt()
    const destroy = ()=>evt.emit("destroy")
    const destroyImmediate = ()=>evt.emit("destroy-immediate")
    const app = createApp(LoadingBar,{
        ...opt,
        destroy,
        destroyImmediate
    })
    ins = app.mount(document.createElement("div")) as InstanceType<typeof LoadingBar>
    document.body.appendChild(ins.$el as HTMLElement)
    evt.on('destroy',()=>{
        unmount(app)
        ins = undefined;
    })
    evt.on('destroy-immediate',()=>{
        app.unmount()
        ins = undefined
    })
}
const end = ()=>{
    ins?.end()
}
const update = (v:number)=>{
    ins?.update(v)
}
export default {
    start,
    end,
    update
}