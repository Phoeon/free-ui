<template>
<transition :name="state.animation">
    <div v-if="state.visible" 
    @mouseenter="onEnter"
    @mouseleave="onLeave"
    @click.stop :class="cns" 
    ref="edom" :sample="sample" :style="style">
        <ul class="ph-ppdd-list">
            <li class="ph-ppdd-li" :disabled="item.disabled" v-for="(item,idx) in dataSource" :key="idx" @click="!item.disabled&&onClick(item)" :hover="state.hover">
                <custom-icon class="ph-ppdd-icon" :name="item.icon" v-if="item.icon"/>
                <span class="ph-ppdd-text">{{item.text}}</span>
            </li>
        </ul>
    </div>
</transition>
</template>
<script lang="ts" setup>
import './popover.scss';
import { defineProps, defineExpose, nextTick, onMounted, PropType, reactive, ref, computed } from 'vue'
import { CustomIcon } from '../icon'
import { IDropdownPosition, IDropdownItem } from '../../shared/types'
import { getAnimation, sumArray } from '../../shared/utils'
import { xmatrix,ymatrix } from './shared'

const edom = ref<HTMLElement>()
const props = defineProps({
    dataSource:{type:Array as PropType<Array<IDropdownItem>>,default:()=>[]},
    position:{type:String as PropType<IDropdownPosition>,default:"bc"},
    theme:{type:String as PropType<'normal'|'reverse'>},
    x:{type:Number,default:0},
    y:{type:Number,default:0},
    height:{type:Number,default:0},
    sample:Boolean, //仅用于文档展示，不用关注
    notify:Function as PropType<(item:IDropdownItem|number)=>void>,
    animation:String
})
const state = reactive({
    visible:false,
    hover:!("ontouchstart" in window),
    position:props.position,
    animation:props.animation||getAnimation(props.position+"")
})
const style = reactive({
    left:'auto',
    top:'auto'
})
const cns = computed(()=>{
    const cns = ['ph-pop-dropdown','ph-pop','ph-pop-'+state.position]
    if(props.theme==="reverse")
        cns.push("ph-pop-reverse")
    return cns
})
const  close = ()=>{
    if(props.sample)return
    state.visible = false
}
const onClick = (item:IDropdownItem)=>{
    props.notify?.(item)
    close()
}
const onEnter = ()=>{
    props.notify?.(1)
}
const onLeave = ()=>{
    props.notify?.(0)
    close()
}
defineExpose({
    close
})
onMounted(()=>{
    state.visible = true
    if(props.sample)return
    nextTick(()=>{
        if(!edom.value)return
        const of = 24
        const { offsetWidth, offsetHeight } = edom.value
        const vs = [of,offsetWidth,offsetHeight,10]
        let position = props.position,
            btnH = 0;
        if(position.startsWith("b")){
            if(document.documentElement.clientHeight<props.y+offsetHeight+10){
                position = position.replace("b","t") as IDropdownPosition
                btnH = -props.height
            }
        }else{
            if(props.y-offsetHeight-10<0){
                position = position.replace("t","b") as IDropdownPosition
                btnH = props.height
            }
        }
        state.position = position
        state.animation = props.animation||getAnimation(position)
        const 
        x = sumArray(vs,xmatrix[position])+props.x,
        y = sumArray(vs,ymatrix[position])+props.y+btnH;
        style.left = x+"px"
        style.top = y+"px"
    })
})
</script>
<style lang="scss">
.ph-pop-dropdown{
    &[sample=true]{
        position: relative;
        z-index: auto;
    }
    .ph-ppdd-list{
        max-height: var(--ph-pop-listh);
        overflow: auto;
        .ph-ppdd-li{
            height: var(--ph-gdd-h);
            font-size: var(--ph-gdd-fs);
            display: flex;
            align-items: center;
            color: var(--ph-pop-c);
            padding: 0 var(--ph-pd);
            position: relative;
            cursor: pointer;
            &:after{
                content: "";
                left: 10px;
                right: 10px;
                bottom: 0;
                height: 1px;
                background-color: var(--ph-pop-bc);
                position: absolute;
            }
            &:nth-last-of-type(1){
                &:after{
                    display: none;
                }
            }
            .ph-ppdd-icon{
                margin-right: var(--ph-pd-sm);
            }
            .ph-ppdd-text{
                flex: 1;
                white-space: nowrap;
            }
            &:active,
            &[hover=true]:hover{
                background-color: var(--ph-pop-bg-hover);
            }
        }
    }
}
</style>