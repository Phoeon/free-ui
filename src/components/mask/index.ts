import { ref } from 'vue'
import render from '../../shared/render'
import FMask from './main.vue'


export default {
    show(props?:Record<string,any>){
        const ps = props||{}
        render(FMask,{
            modelValue:ref(true),
            ...ps
        })
    }
}