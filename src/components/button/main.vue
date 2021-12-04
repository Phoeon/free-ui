<template>
    <button :class="cns" :disabled="disabled" :hover="state.hover&&!props.disabled" @click.stop="onClick">
        <slot name="leftIcon"></slot>
        <spin v-if="loading" stroke="currentColor"/>
        <span v-if="$slots.default" class="ph-btn-slot"><slot></slot></span>
        <caret v-if="dropdown" :direction="dropdown" stroke="currentColor"/>
        <slot name="rightIcon"></slot>
    </button>
</template>
<script lang="ts" setup>
import './button.scss'
import { PropType, reactive, defineProps, defineEmits, defineAsyncComponent, computed } from "vue";
import { IThemeType } from '../../shared/types'

const Caret = defineAsyncComponent(()=>import("../icon/caret.vue"))
const Spin = defineAsyncComponent(()=>import("../icon/loading/spin.vue"))
const props = defineProps({
    disabled:Boolean,
    block:Boolean,
    loading:Boolean,
    dropdown:String as PropType<'up'|'down'>,
    shape:String as PropType<'circle'|'square'>,
    throttle:{type:Boolean,default:true},
    threshhold:{type:Number,default:300},
    radius:{type:Boolean,default:true},
    hover:{type:Boolean,default:true},
    type:{type:String as PropType<IThemeType|'mode'>,default:'normal'},
    fillMode:{type:String as PropType<'outline'|'reverse'|'none'|'dashed'>},
    size:{type:String as PropType<'mini'|'small'|'large'>}
})
const cst = {
    lock:false
}
const state = reactive({
    hover:!("ontouchstart" in window),
})
const cns = computed(()=>{
    const cns = ['ph-btn']
    const prefix = 'ph-btn-'
    if(props.fillMode)cns.push(prefix+props.fillMode)
    if(props.size)cns.push(prefix+props.size)
    if(props.shape)cns.push(prefix+props.shape)
    if(props.loading)cns.push(prefix+'loading')
    if(props.radius)cns.push(prefix+'radius')
    if(props.block)cns.push(prefix+'block')
    if(state.hover)cns.push(prefix+'pc')
    if(props.hover&&state.hover&&!props.disabled)cns.push(prefix+"hover")
    cns.push(prefix+(props.type||'normal'))
    if(!!props.dropdown)cns.push(prefix+"flex")

    return cns
})
const emits = defineEmits(['click'])

const onClick = (e:unknown)=>{
    if(!props.throttle)return emits('click',e)
    if(cst.lock)return
    cst.lock = true
    emits("click",e)
    setTimeout(()=>{
        cst.lock = false
    },props.threshhold)
}

</script>