<template>
    <input-wrap class="ph-slider-wrap" :disabled="disabled">
        <div class="ph-slider" :disabled="disabled" ref="eslider" @click="onClick" :style="sliderStyle">
            <button class="ph-slider-handler" @click.stop :style="style" :hover="state.hover" :active="state.moving" :disabled="disabled" v-touchmove="onTouchmove" ref="ehandler"></button>
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
    modelValue:{type:Number,default:0},
    max:{type:Number,default:100},
    handlerWidth:{type:Number,default:6},
    height:{type:Number,default:10},
    disabled:Boolean
})
const emits = defineEmits(['update:modelValue','input'])
const ehandler = ref<HTMLElement>()
const eslider = ref<HTMLElement>()
const tip = computed(()=>props.modelValue.toFixed(2))
const state = reactive({
    moving:false,
    sw:1,
    hover:!('ontouchstart' in window)
})
const style = computed(()=>{
    const tx = props.modelValue*state.sw/props.max;
    return {
        transform:`translateX(${tx}px)`
    }
})
const sliderStyle = computed(()=>{
    return {
        '--ph-slider-hw':props.handlerWidth+"px",
        '--ph-slider-h':props.height+"px"
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
        state.sw = eslider.value.offsetWidth-props.handlerWidth-2
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
    --ph-slider-hw:6px;
    --ph-slider-h:10px;
    --ph-slider-hbg:var(--ph-c-modal);
    height: var(--ph-ip-h);
    align-items: center;
}
.ph-slider{
    flex: 1;
    position: relative;
    border-radius: var(--ph-ip-br);
    border-color: var(--ph-bc);
    border-bottom-color: var(--ph-ip-bbc);
    font-size: var(--ph-ip-fs);
    height: var(--ph-slider-h);
    color: var(--ph-ip-c);
    cursor: pointer;
    background-color: var(--ph-slider-bg);
    &[disabled=true]{
        cursor: var(--ph-ip-cursor);
    }
    &-handler{
        position: absolute;
        height: 100%;
        width: var(--ph-slider-hw);
        box-sizing: content-box;
        z-index: 1;
        top:0;
        bottom: 0;
        left: 0;
        margin: auto;
        padding: 0;
        border: 1px solid var(--ph-slider-hbd,var(--ph-c-l2));
        transition: transform .15s ease;
        transform: translateX(0);
        cursor: pointer;
        border-radius: 2px;
        background-color: var(--ph-slider-hbg,var(--ph-modal-bg));
        // &[active=true],
        // &[hover=true]:hover{
        //     border-color: var(--ph-c-reverse);
        // }
        &[active=true]{
            transition: none;
        }
    }
}
</style>