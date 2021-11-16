<template>
    <div :class="['ph-carousel','ph-carousel-'+direction]">
        <div class="ph-carousel-container" :style="style">
            <slot :active="state.value"></slot>
        </div>
        <div :class="iscns" v-if="indicator">
            <slot name="indicator" :active="state.value" :shift="onShift">
                <div class="ph-carousel-indicator" @click="onShift(i)" :active="i===state.value" v-for="(vd,i) in swipers" :key="i"></div>
            </slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, defineEmits, nextTick, onMounted, PropType, useSlots, onBeforeUnmount, reactive } from 'vue'
const props = defineProps({
    index:{type:Number,default:0},
    interval:{type:Number,default:5000},
    autoplay:{type:Boolean,default:true},
    indicator:{type:Boolean,default:true},
    indicatorOutside:Boolean,//direction:hr下工作
    direction:{type:String as PropType<'hr'|'vt'>,default:"hr"}
})
const slots = useSlots()
const emits = defineEmits(['update:modelValue','shift'])
const swipers = slots.default?.()||[]
const cst = {
    timer:-1
}
const state = reactive({
    value:props.index||0
})
const style = computed(()=>{
    const offset = -state.value*100
    return {
        transform: props.direction==='hr'?`translate3d(${offset}%,0,0)`:`translate3d(0,${offset}%,0)`
    }
})
const iscns = computed(()=>{
    return {
        'ph-carousel-indicators':true,
        'ph-cid-abs':props.direction=='vt'||!props.indicatorOutside
    }
})
const update = (v:number)=>{
    state.value = v
    emits('shift',v)
}
const onShift = (i:number)=>{
    if(i===state.value)return
    if(props.autoplay)
    clearInterval(cst.timer)
    update(i)
    if(props.autoplay)
        task()
}
const task = ()=>{
    cst.timer = setInterval(()=>{
        update((state.value+1)%swipers.length)
    },props.interval)
}
onMounted(()=>{
    if(props.autoplay&&swipers.length)
    nextTick(task)
})
onBeforeUnmount(()=>{
    clearInterval(cst.timer)
})
</script>
<style lang="scss">
.ph-carousel{
    width: 100%;
    height: 150px;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    &-container{
        flex: 1;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        flex-direction: var(--ph-carousel-dir,row);
        transition: transform .3s ease;
        transform: translate3d(0px,0px,0);
    }
    &-indicators{
        display: flex;
        flex-direction: var(--ph-carousel-dir,row);
        justify-content: center;
    }
    .ph-carousel-indicator{
        cursor: pointer;
        position: relative;
        margin: var(--ph-carousel-img);
        padding: var(--ph-carousel-ipd);
        &:after{
            content: "";
            position: absolute;
            margin: auto;
            border-radius: 2px;
            background-color: var(--ph-bg-a1-reverse);
            backdrop-filter: blur(10px);
            transition: var(--ph-ts-ei);
        }
        &[active=true]:after,
        &:hover:after{
            background-color: var(--ph-bg-a5-reverse);
        }
    }
    .ph-cid-abs{
        position: absolute;
    }
    &-hr{
        --ph-carousel-dir:row;
        --ph-carousel-ipd:8px 0;
        --ph-carousel-img:0 4px;
        --ph-carousel-iw:24px;
        .ph-cid-abs{
            left: 0;
            bottom: var(--ph-pd-sm);
            width: 100%;
        }
        .ph-carousel-indicator{
            width: var(--ph-carousel-iw);
            &:after{
                height: 3px;
                width: 100%;
                top: 0;
                bottom: 0;
            }
        }
    }
    &-vt{
        --ph-carousel-dir:column;
        --ph-carousel-ipd:0 8px;
        --ph-carousel-img:3px 0;
        --ph-carousel-iw:20px;
        .ph-cid-abs{
            top: 0;
            right: var(--ph-pd-sm);
            height: 100%;
        }
        .ph-carousel-indicator{
            height: var(--ph-carousel-iw);
            &:after{
                width: 3px;
                height: 100%;
                left: 0;
                right: 0;
            }
        }
    }
}
</style>