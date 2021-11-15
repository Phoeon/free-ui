<template>
    <input-wrap class="ph-slider-wrap" :disabled="disabled">
        <div :class="['ph-slider',showProgress?'ph-slider-progress':'']" :disabled="disabled" ref="eslider" @click="onClick" :style="sliderStyle">
            <button class="ph-slider-handler" @click.stop :style="style" :hover="state.hover" :disabled="disabled" v-touchmove="onTouchmove" ref="ehandler"></button>
        </div>
    </input-wrap>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, ref, reactive, computed, onMounted, nextTick, onBeforeUnmount } from 'vue'
import InputWrap from './input-wrap.vue'
import MediaQuery from '../../shared/media-query'
import { touchmove as vTouchmove } from '../../directives/gesture'
import vTooltip from '../../directives/tooltip'

const props = defineProps({
    // showTip:{type:Boolean,default:true},
    showProgress:{type:Boolean,default:true},
    modelValue:{type:Number,default:0},
    max:{type:Number,default:100},
    handlerWidth:{type:Number,default:8},
    height:{type:Number,default:10},
    disabled:Boolean
})
const emits = defineEmits(['update:modelValue','input'])
const ehandler = ref<HTMLElement>()
const eslider = ref<HTMLElement>()
// const tip = computed(()=>props.modelValue.toFixed(2))
const state = reactive({
    moving:false,
    sw:1,
    hover:!('ontouchstart' in window)
})
const tx = computed(()=>props.modelValue*state.sw/props.max)
const style = computed(()=>{
    return {
        transform:`translateX(${tx.value}px)`
    }
})
const sliderStyle = computed(()=>{
    return {
        '--ph-slider-hw':props.handlerWidth+"px",
        '--ph-slider-h':props.height+"px",
        '--ph-slider-tx':tx.value+"px"
    }
})
const onTouchmove = (e:Event,meta:{tx:number,end:boolean})=>{
    if(props.disabled)return
    const t = ehandler.value as HTMLElement
    const {tx,end} = meta
    state.moving = !end
    update(tx)
}
const onClick = (e:PointerEvent)=>{
    if(props.disabled)return
    const t = e.target as HTMLElement
    update(e.clientX-t.getBoundingClientRect().left)
}
const update = (tx:number)=>{
    const 
        w = state.sw,
        x = Math.min(Math.max(0,tx),w),
        value = x*props.max/w;
    emits('update:modelValue',value)
    emits('input',value)
}
const updateSW = ()=>{
    if(eslider.value)
        state.sw = eslider.value.offsetWidth
}
onMounted(()=>{
    MediaQuery.all(updateSW)
    nextTick(()=>{
        updateSW()
    })
})
onBeforeUnmount(()=>{
    MediaQuery.off('all',updateSW)
})
</script>
<style lang="scss">
.ph-slider-wrap{
    --ph-slider-hw:8px;
    --ph-slider-h:10px;
    --ph-slider-hbg:var(--ph-c-modal);
    --ph-slider-hbd:var(--ph-c-white);
    height: var(--ph-ip-h);
    align-items: center;
}
.ph-slider{
    flex: 1;
    position: relative;
    border-radius: var(--ph-ip-br);
    border-color: var(--ph-bd-1);
    border-bottom-color: var(--ph-ip-bbc);
    font-size: var(--ph-ip-fs);
    height: var(--ph-slider-h);
    color: var(--ph-ip-c);
    cursor: pointer;
    background-color: var(--ph-slider-bg);
    &[disabled=true]{
        cursor: var(--ph-ip-cursor);
    }
    &-progress:before{
        content: "";
        position: absolute;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: inherit;
        background-color: var(--ph-primary);
        width: var(--ph-slider-tx,0);
    }
    &-handler{
        position: absolute;
        height: calc(var(--ph-slider-h) + 2px);
        width: var(--ph-slider-hw);
        z-index: 1;
        top:0;
        bottom: 0;
        left: calc(var(--ph-slider-hw) * -0.5);
        margin: auto;
        padding: 0;
        border: 2px solid var(--ph-slider-hbd);
        transform: translateX(0);
        cursor: pointer;
        border-radius: 2px;
        background-color: var(--ph-slider-hbg,var(--ph-primary));
    }
}
</style>