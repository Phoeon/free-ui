import FButton from './main.vue'
import FButtonGroup from './group.vue'
export default {
    install(app:any){
        app.component("FButton",FButton)
    }
}
export {FButton,FButtonGroup}