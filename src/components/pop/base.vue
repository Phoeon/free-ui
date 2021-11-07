<template>
<transition :name="state.animation">
    <div v-if="modelValue" @click.stop 
    @mouseleave="emits('leave')"
    @mouseenter="emits('enter')"
    :class="['ph-pop-base','ph-pop','ph-pop-'+position]" 
    ref="edom" :style="style">
        <slot></slot>
    </div>
</transition>
</template>
<script lang="ts" setup>
import './popover.scss';
import { defineProps, defineEmits, nextTick, PropType, reactive, ref, watch } from 'vue'
import { IPopPosition } from './types'
import { IRect } from '../../shared/types'
import { getAnimation, sumArray } from '../../shared/utils'
import { xmatrix as txmatrix,ymatrix as tymatrix } from './shared'
import { xmatrix as sxmatrix,ymatrix as symatrix } from '../../shared/popover'
const emits = defineEmits(['update:modelValue','enter','leave'])
const edom = ref<HTMLElement>()
const props = defineProps({
    rect:{type:Object as PropType<IRect>,default:()=>{
        return {left:0,top:0,width:0,height:0}
    }},
    position:{type:String as PropType<IPopPosition>,default:"bc"},
    modelValue:Boolean,
    title:String,
    animation:String
})

const state = reactive({
    animation:props.animation||getAnimation(props.position+"")
})
const style = reactive({
    left:'0',
    top:'0'
})
watch(()=>props.modelValue,()=>{
    nextTick(()=>{
        if(!edom.value)return
        
        const of = 24
        const { offsetWidth, offsetHeight } = edom.value

        const
            svs = [props.rect.left,props.rect.top,props.rect.width,props.rect.height], 
            vs = [of,offsetWidth,offsetHeight,10]
        const 
        sx = sumArray(svs,sxmatrix[props.position]),
        sy = sumArray(svs,symatrix[props.position]),
        x = sumArray(vs,txmatrix[props.position])+sx,
        y = sumArray(vs,tymatrix[props.position])+sy;

        style.left = x+"px"
        style.top = y+"px"
    })
})
</script>
<style lang="scss">

.ph-pop-base{
    padding: var(--ph-pd);
    min-width: 180px;
    font-size: 14px;
    color: var(--ph-pop-c-d1);
}
</style>