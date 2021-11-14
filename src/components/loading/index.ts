import FLoadingSpin from './spin.vue'
import FGLoadingSpin from './loading-spin'
import FGLoadingBar from './loading-bar'

import { IFLoadingBarOption,IFLoadingSpinOption } from './types'
const FGLoading = {
    showSpin:(opt?:IFLoadingSpinOption)=>FGLoadingSpin.start(opt),
    showBar:(opt?:IFLoadingBarOption)=>FGLoadingBar.start(opt),
    endSpin:FGLoadingSpin.end,
    endBar:FGLoadingBar.end,
    update:FGLoadingBar.update
}
export {
    FLoadingSpin,
    FGLoadingSpin,
    FGLoadingBar,
    FGLoading
}
export * from './types'