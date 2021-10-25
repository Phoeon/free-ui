import Env from '../shared/env'
import FNotification from './notification'
import FMessage from './message'
import FPop,{FPopConfirm,FPopover,FTooltip} from './pop'
import FToast from './toast'
import FPanel from './panel'
import FCard from './card'
import FMask from './mask/main.vue'
import * as FIcon from './icon'
import FGLoading,{FLoading} from './loading'
import FModal from './modal'
export * from './layout'
export * from './button'
export * from './menu'
export * from './grid'
export * from './pager'
export * from './tabs'
export * from './drawer'
export * from './actionsheet'
export * from './alert'
export * from './progress'
export * from './list'
export * from './accordion'
export {
    FIcon,
    FNotification,
    FToast,
    FGLoading,
    FLoading,
    FMask,
    FPanel,
    FCard,
    FModal,
    FMessage,
    FPop,
    FPopConfirm,
    FPopover,
    FTooltip
}
export default {
    install(app:any,options:Record<string,any>){
        if(options){
            for(const k in options)
                Env.set(k,options[k])
        }
    }
}