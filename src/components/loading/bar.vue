<template>
    <div :class="cns" :style="style"></div>
</template>
<script lang="ts" setup>
import { defineProps, defineExpose, PropType, onMounted, computed, reactive } from 'vue'
import { between } from '../../shared/utils'

const props = defineProps({
    auto:{type:Boolean,default:true},
    shine:{type:Boolean,default:true},
    size:{type:Number,default:3},
    step:{type:Number,default:0.001},
    min:{type:Number,default:0},
    value:{type:Number,default:0},
    max:{type:Number,default:0.75},
    bg:String,
    destroy:Function as PropType<()=>void>,
    destroyImmediate:Function as PropType<()=>void>
})
const state = reactive({
    value:between(props.value||props.min,0,1),
    opacity:1,
    timer:-1
})
const cns = computed(()=>{
    return {
        'ph-loading':true,
        'ph-loading-bar':true,
        'ph-loading-shine':props.shine
    }
})
const style = computed(()=>{
    const style = {} as Record<string,unknown>
    const value = Math.pow(state.value,0.5)*100+"%"
    if(props.bg)style['--ph-loadingbar-bg'] = props.bg
    style.transform = `translate3d(${value},0,0)`
    style['--ph-loading-bh'] = props.size+"px"
    style.opacity = state.opacity
    return style
})
const updateBy = ()=>{
    state.value = between(state.value+props.step,props.min,props.max)
    state.timer = requestAnimationFrame(updateBy)
}
const update = (v:number)=>{
    if(props.auto){
        cancelAnimationFrame(state.timer)
        state.timer = requestAnimationFrame(updateBy)
    }
    state.value = between(v,props.min,1)
    if(props.auto&&v===1)
        cancelAnimationFrame(state.timer)
}
const end = ()=>{
    update(1)
    state.opacity = 0
    window.setTimeout(()=>{
        props.destroy?.()
    },800)
}
const destroy = ()=>{
    props.destroyImmediate?.()
}
defineExpose({
    end,
    update,
    destroy
})
onMounted(()=>{
    if(!props.auto)return
    updateBy()
})
</script>
<style lang="scss">
@keyframes ph-loading-shining {
    0% {box-shadow: 3px 0 0px var(--ph-loadingbar-bg)}
    100% {box-shadow: 3px 0 6px var(--ph-loadingbar-bg)}
}
.ph-loading-bar{
    --ph-loadingbar-bg:var(--ph-primary);
    z-index: var(--ph-zdx-modal);
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: var(--ph-loading-bh,3px);
    background-color: var(--ph-loadingbar-bg);
    border-radius: var(--ph-loading-bh,3px);
    opacity: 1;
    transition: opacity .3s linear, transform .15s linear;
    transform: translate3d(0,0,0);
    &.ph-loading-shine{
        animation: ph-loading-shining 1s ease-in-out infinite alternate;
    }
}
</style>