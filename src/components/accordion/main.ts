import { h } from 'vue'
import './main.scss'
import FAccordionItem from './item.vue'
export default {
    components:{FAccordionItem},
    props:{
        modelValue:{type:Number,default:0},
        accordion:Boolean
    },
    setup(props:any,ctx:any){
        const update = (cv:number)=>{
            ctx.emit("update:modelValue",cv)
        }
        const newSlots = ()=>{
            return ctx.slots.default().filter((st:any,i:number)=>{
                st.props.index = i
                st.props.expand = i===props.modelValue
                st.props.accordion = props.accordion
                st.props.update = update
                st.key="key_"+i
    
                return st.type.name==="FAccordionItem"
            })
        }
        return ()=>{
            return h("div",{
                class:["ph-accordion"]
            },newSlots())
        }
    }
}