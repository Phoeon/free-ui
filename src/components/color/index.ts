import Colorpicker from './main.vue'
import { createApp,App } from 'vue'
import { IColorOption } from './types'
import { unmount } from '../../shared/utils'
import { ColorPredefine } from './config'
import Env from '../../shared/env'
import Evt from 'ph-evt'
const show = (opt:IColorOption)=>{
    const evt = new Evt()
    const close = ()=>{
        evt.emit('close')
        unmount(app)
    }
    const done = (v:string,close:()=>void)=>{
        evt.emit('done',v,close)
    }
    const gopt = Env.get('colorpicker')||{}
    const app = createApp(Colorpicker,{
        ...gopt,
        ...opt,
        colors:opt.colors||gopt.colors||ColorPredefine,
        done,
        close
    })
    const ins = app.mount(document.createElement('div'))
    document.body.appendChild(ins.$el)
    return {
        done(fn:(v:string,close:()=>void)=>void){
            evt.on('done',fn)
        },
        close(fn:()=>void){
            evt.on('close',fn)
        }
    }
}
export default {
    install(app:App,opt:any){
        Env.set('colorpicker',opt)
        app.config.globalProperties.$phColorpicker = show
    },
    show
}