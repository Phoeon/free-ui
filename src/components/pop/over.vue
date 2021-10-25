<template>
<transition name="ph-fade">
    <div v-if="state.visible" @click.stop :class="['ph-popover','ph-pop','ph-pop-'+position]" ref="edom" :sample="sample" :style="style">
        <div class="ph-popover-title">{{title}}</div>
        <div class="ph-popover-content">{{content}}</div>
    </div>
</transition>
</template>
<script lang="ts" setup>
import { defineExpose, defineProps, nextTick, onMounted, PropType, reactive, ref } from 'vue'
import { IPopPosition } from './types'
import { sumArray } from '../../shared/utils'
import { xmatrix,ymatrix } from './shared'

const edom = ref<HTMLElement>()
const props = defineProps({
    title:String,
    content:String,
    position:{type:String as PropType<IPopPosition>,default:"tc"},
    x:{type:Number,required:true},
    y:{type:Number,required:true},
    sample:{type:Boolean,default:true}, //仅用于文档展示，不用关注
})
const state = reactive({
    visible:false
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
@import './popover.scss';
.ph-popover{
    --ph-pop-bdc: var(--ph-modal-bg);
    position: fixed;
    z-index: var(--ph-zdx-popup);
    background-color: var(--ph-modal-bg);
    width: 180px;
    display: inline-block;
    box-shadow: var(--ph-shadow-2);
    border-radius: 4px;
    font-size:14px;
    line-height: 22px;
    &[sample=true]{
        position: relative;
        z-index: auto;
    }
    .ph-popover-title{
        padding: 0 var(--ph-8);
        display: flex;
        align-items: center;
        font-weight: var(--ph-fw-m);
        height: 32px;
        border-bottom: 1px solid var(--ph-bc-1);
        color: var(--ph-c-d1);
    }
    .ph-popover-content{
        padding: var(--ph-8);
        display: flex;
    }
}
</style>