<template>
    <flex :class="['ph-page',slots.aside?'ph-page-hasaside':'']" :dir="slots.aside?'row':'col'" :toggle="state.asideToggle">
        <Mask v-if="state.mask" class="ph-page-mask" :visible="!state.asideToggle" v-tap="onMask"></Mask>
        <slot name="aside"></slot>
        <slot></slot>
    </flex>
</template>
<script lang="ts" setup>
import { onBeforeMount, provide, reactive, toRef, useSlots } from 'vue'
import { tap as vTap } from '../../directives/gesture'
import Evt from 'ph-evt'
import Mask from '../mask'
import Flex from './flex.vue'

const evt = new Evt()
const slots = useSlots()
const cst = {
    timer:-1
}
const state = reactive({
    asideToggle:false,
    mask:false
})
const onMask = ()=>{
    state.asideToggle=true
}
const mediaQuery = ()=>{
    const dw = document.documentElement.clientWidth
    state.asideToggle = dw<992?true:false
    state.mask = dw<769
}
evt.on("aside:toggle",(from)=>{
    if(from!="menu"||state.mask)
    state.asideToggle = !state.asideToggle
})
window.addEventListener("resize",()=>{
    clearTimeout(cst.timer)
    cst.timer = setTimeout(()=>{
        mediaQuery()
    },300)
})
provide("phevt",evt)
provide("ph-aside-toggle",toRef(state,'asideToggle'))

onBeforeMount(()=>{
    mediaQuery()
})
</script>
<style lang="scss">
.ph-page{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
@media screen and (min-width: 768px){
    .ph-page-mask{
        display: none;
    }
    .ph-page-hasaside{
        &:before{
            content: "";
            display: block;
            flex: 0 0 var(--ph-aside-width);
            transition: flex .3s ease;
        }
        &[toggle=true]{
            &:before{
                flex: 0 0 var(--ph-aside-toggle-width);
            }
        }
    }
}
</style>