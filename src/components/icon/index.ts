import Minus from './minus.vue'
import Plus from './plus.vue'
import Tick from './tick.vue'
import Times from './times.vue'
import Exclam from './exclam.vue'
import Triangle from './triangle.vue'
import Caret from './caret.vue'
import Arrow from './arrow.vue'
import Navicon from './navicon.vue'
import Search from './search.vue'
import Theme from './theme.vue'
import CustomIcon from './custom.vue'
export * from './square'
export * from './circle'
export * from './loading'
export {
    Minus,
    Plus,
    Tick,
    Times,
    Exclam,
    Triangle,
    Caret,
    Navicon,
    Search,
    Arrow,
    Theme,
    CustomIcon
}
export default {
    install(app:any,option:{cname:string,prefix?:string}){
        const ph:Record<string,unknown> = app.config.globalProperties.ph = app.config.globalProperties.ph||{}
        ph.icon = option as Record<string,string>
    }
}