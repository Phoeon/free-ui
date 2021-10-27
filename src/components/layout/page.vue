<template>
    <flex :class="['ph-page',slots.aside?'ph-page-hasaside':'']" :dir="slots.aside?'row':'col'" :toggle="state.asideToggle">
        <f-mask v-model="showMask" class="ph-page-mask" @click="onMask"></f-mask>
        <slot name="aside"></slot>
        <slot></slot>
    </flex>
</template>
<script lang="ts" setup>
import { computed, onBeforeMount, provide, reactive, toRef, useSlots } from 'vue'
import Evt from 'ph-evt'
import MediaQuery from '../../shared/media-query'
import Autofit from '../../shared/autofit'
import FMask from '../mask/main.vue'
import Flex from './flex.vue'

const evt = new Evt()
const slots = useSlots()
const cst = {
    timer:-1,
    dw:375,
    dwfs:16
}
const state = reactive({
    asideToggle:false,
    sm:false
})
const showMask = computed(()=>state.sm&&!state.asideToggle)
const onMask = ()=>{
    state.asideToggle=true
}
const mediaQuery = (matches:boolean,dw:number)=>{
    state.asideToggle = dw<992?true:false
    state.sm = dw<769
    Autofit(cst)
}
MediaQuery.all(mediaQuery)
evt.on("aside:toggle",(from)=>{
    if(from!="menu"||showMask.value)
    state.asideToggle = !state.asideToggle
})
provide("phevt",evt)
provide("ph-aside-toggle",toRef(state,'asideToggle'))
onBeforeMount(()=>{
    mediaQuery(true,document.documentElement.clientWidth)
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