<template>
<transition :name="state.animation">
    <div v-if="state.visible" @click.stop :class="['ph-tooltip','ph-pop','ph-pop-'+position]" ref="edom" :sample="sample" :style="style">
        {{content}}
    </div>
</transition>
</template>
<script lang="ts" setup>
import './popover.scss';
import { defineExpose, defineProps, nextTick, onMounted, PropType, reactive, ref } from 'vue'
import { ITooltip } from '../../shared/types'
import { sumArray, getAnimation } from '../../shared/utils'
import { xmatrix,ymatrix } from './shared'

const edom = ref<HTMLElement>()
const props = defineProps({
    content:String,
    position:{type:String as PropType<ITooltip>,default:"tc"},
    x:{type:Number,default:0},
    y:{type:Number,default:0},
    sample:Boolean, //仅用于文档展示，不用关注
    animation:String
})
const state = reactive({
    visible:false,
    animation:props.animation||getAnimation(props.position+"")
})
const style = reactive({
    left:'auto',
    top:'auto'
})

const close = ()=>{
    state.visible = false
}
onMounted(()=>{
    state.visible = true
    if(props.sample)return
    nextTick(()=>{
        if(!edom.value)return
        const of = 24
        const { offsetWidth, offsetHeight } = edom.value
        const vs = [of,offsetWidth,offsetHeight,10]
        
        const 
        x = sumArray(vs,xmatrix[props.position])+props.x,
        y = sumArray(vs,ymatrix[props.position])+props.y;
        style.left = x+"px"
        style.top = y+"px"
    })
})

defineExpose({
    close
})
</script>
<style lang="scss">

.ph-tooltip{
    --ph-pop-bdc:var(--ph-tooltip-bg);
    max-width: 266px;
    font-size:14px;
    line-height: 22px;
    padding: 4px var(--ph-pd);
    background-color: var(--ph-tooltip-bg);
    color: var(--ph-tooltip-c);
    backdrop-filter: blur(10px);
    &[sample=true]{
        position: relative;
        z-index: auto;
    }
}
</style>