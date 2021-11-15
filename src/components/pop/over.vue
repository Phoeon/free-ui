<template>
<transition :name="state.animation">
    <div v-if="state.visible" @click.stop :class="['ph-popover','ph-pop','ph-pop-'+position,'ph-pop-'+props.theme]" ref="edom" :sample="sample" :style="style">
        <div class="ph-popover-title">{{title}}</div>
        <div class="ph-popover-content">{{content}}</div>
    </div>
</transition>
</template>
<script lang="ts" setup>
import './popover.scss';
import { defineExpose, defineProps, nextTick, onMounted, PropType, reactive, ref } from 'vue'
import { IPopPosition } from '../../shared/types'
import { getAnimation, sumArray } from '../../shared/utils'
import { xmatrix,ymatrix } from './shared'

const edom = ref<HTMLElement>()
const props = defineProps({
    title:String,
    content:String,
    theme:{type:String as PropType<'normal'|'reverse'>},
    position:{type:String as PropType<IPopPosition>,default:"tc"},
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

.ph-popover{
    width: 180px;
    font-size:14px;
    line-height: 22px;
    &[sample=true]{
        position: relative;
        z-index: auto;
    }
    .ph-popover-title{
        padding: 0 var(--ph-pd-sm);
        display: flex;
        align-items: center;
        font-weight: var(--ph-fw-m);
        height: 32px;
        border-bottom: 1px solid var(--ph-pop-bc);
        color: var(--ph-pop-c-d1);
    }
    .ph-popover-content{
        padding: var(--ph-pd-sm);
        display: flex;
    }
}
</style>