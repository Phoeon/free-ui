import './main.scss'
import { h, ref, toRef, provide } from 'vue'
import { ITab } from '../../shared/types'
import TabsNav from './nav.vue'
import TabsPanel from './panel.vue'
export default {
    components:{
        TabsNav,
        TabsPanel
    },
    props:{
        modelValue:{type:Number,default:0},
        fillMode:{type:String,default:'none'},
        showIndicator:{type:Boolean,default:true}
    },
    setup(props:any,ctx:any){
        const newSlots = ctx.slots.default().filter((st:any,i:number)=>{
            st.props.index = i
            st.key="key_"+i
            return st.type.name==="FTabPanel"
        })
        const navs = ref<ITab[]>(newSlots.map((slot: any)=>slot.props as ITab))
        const onShift = (cindex:number)=>{
            ctx.emit("update:modelValue",cindex)
        }
        provide("currentIndex",toRef(props,'modelValue'))
        return ()=>{
            return h("div",{
                class:["ph-tabs"]
            },[
                h(TabsNav,{
                    currentIndex:props.modelValue,
                    fillMode:props.fillMode,
                    navs: navs.value,
                    showIndicator:props.showIndicator&&props.fillMode==='none',
                    onShift 
                }),
                h("div",{
                    class:["ph-tabspanel-container"]
                },newSlots)
            ])
        }
    }
}