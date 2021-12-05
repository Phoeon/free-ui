<template>
    <div :class="cns" @scroll.stop.prevent @mouseenter="onEnter" @mouseleave="onLeave">
        <div class="ph-scroll-zone" ref="escroll" @scroll.stop="onScroll"><slot></slot></div>
        <scroll-bar 
            :visible="scrollHr.visible" 
            :w="scrollHr.w" 
            :x="scrollHr.x"
            @drag="onDragHr"/>
        <scroll-bar 
            dir="vt"
            :visible="scrollVt.visible" 
            :h="scrollVt.h" 
            :y="scrollVt.y"
            @drag="onDragVt"/>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, defineExpose, ref, reactive, computed } from 'vue'
import ScrollBar from './scroll-bar.vue'

const emits = defineEmits(['scroll'])
const props = defineProps({
    disabled:Boolean,
    disabledHr:Boolean,
    disabledVt:Boolean
})
let timer = -1,timer1 = -1;
const escroll = ref<HTMLElement>()
const scrollHr = reactive({
    visible:false,
    x:0,
    w:0
})
const scrollVt = reactive({
    visible:false,
    y:0,
    h:0
})
const cns = computed(()=>{
    return {
        'ph-scroll':true,
        'ph-scroll-disabled':props.disabled,
        'ph-scroll-disabled-hr':props.disabledHr,
        'ph-scroll-disabled-vt':props.disabledVt,
    }
})
const task = ()=>{
    const {offsetWidth,offsetHeight,scrollWidth,scrollHeight,scrollLeft,scrollTop} = escroll.value as HTMLElement
    const 
        osh = scrollWidth-offsetWidth,
        osv = scrollHeight-offsetHeight;
    if(osh>0){
        let w = offsetWidth*offsetWidth/scrollWidth
        let x = offsetWidth*scrollLeft/scrollWidth
        Object.assign(scrollHr,{
            visible:true,
            x,
            w
        })
    }else{
        scrollHr.visible = false
    }
    if(osv>0){
        let h = offsetHeight*offsetHeight/scrollHeight
        let y = offsetHeight*scrollTop/scrollHeight
        Object.assign(scrollVt,{
            visible:true,
            y,
            h
        })
    }else{
        scrollVt.visible = false
    }
}
const bounceTask = ()=>{
    clearTimeout(timer)
    timer = window.setTimeout(()=>{
        task()
        clearTimeout(timer1);
        timer1 = window.setTimeout(()=>onLeave(),3000)
    })
}
const onScroll = (e:Event)=>{
    if(props.disabled)return
    e.preventDefault()
    bounceTask()
    emits("scroll",e)
}
const onEnter = ()=>{
    if(props.disabled)return
    bounceTask()
}
const onLeave = ()=>{
    if(props.disabled)return
    scrollHr.visible = false
    scrollVt.visible = false
}
const onDragHr = (xratio:number)=>{
    const {scrollWidth,offsetWidth,scrollTop} = escroll.value as HTMLElement
    escroll.value?.scrollTo(xratio*(scrollWidth-offsetWidth),scrollTop)
}
const onDragVt = (yratio:number)=>{
    const {scrollHeight,offsetHeight,scrollLeft} = escroll.value as HTMLElement
    escroll.value?.scrollTo(scrollLeft,yratio*(scrollHeight-offsetHeight))
}
defineExpose({
    scrollTo:(x=0,y=0)=>escroll.value?.scrollTo(x,y),
    scrollElement:escroll
})
</script>
<style lang="scss">
.ph-scroll{
    overflow: hidden;
    position: relative;
    flex: 1;
    --ph-scroll-hr:auto;
    --ph-scroll-vt:auto;
    &-zone{
        &::-webkit-scrollbar{
            width:0!important;
            height: 0!important;
            display: none!important;
        }
        height: 100%;
        width: 100%;
        overflow-x: var(--ph-scroll-hr);
        overflow-y: var(--ph-scroll-vt);
        -webkit-overflow-scrolling:touch;
    }
    &-disabled{
        --ph-scroll-hr:visible;
        --ph-scroll-vt:visible;
        overflow: visible;
    }
    &-disabled-hr{
        --ph-scroll-hr:hidden;
    }
    &-disabled-vt{
        --ph-scroll-vt:hidden;
    }
}
</style>
