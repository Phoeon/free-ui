<template>
    <flex :class="['ph-page',state.hasAside?'ph-page-hasaside':'']" :dir="state.hasAside?'row':'col'" :toggle="state.asideToggle">
        <f-mask v-model="showMask" class="ph-page-mask" @click="onMask"></f-mask>
        <slot></slot>
    </flex>
</template>
<script lang="ts" setup>
import '../../assets/style/rebot.scss';
import { defineProps, watch , computed, onBeforeMount, provide, reactive, toRef, useSlots, PropType, onMounted } from 'vue'
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
const props = defineProps({
    mode:{type:String as PropType<'dark'|'light'>,default:"dark"},
    theme:{type:String , default: "danger"}
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
const hasAside = ()=>{
    return slots.default&&slots.default().some(v=>{
        return (v as any).type.name==='FAside'
    })
}
const setAppMode = (mode:string)=>{
    document.documentElement.setAttribute("f-mode",mode)
}
const setAppTheme = (theme:string)=>{
    document.documentElement.setAttribute("f-theme",theme)
}
const state = reactive({
    asideToggle:false,
    sm:false,
    hasAside:hasAside()
})

MediaQuery.all(mediaQuery)
evt.on("aside:toggle",(from)=>{
    if(from!="menu"||showMask.value)
    state.asideToggle = !state.asideToggle
})
provide("phevt",evt)
provide("ph-aside-toggle",toRef(state,'asideToggle'))
provide("registerAside",()=>state.hasAside=true)
watch(()=>props.mode,setAppMode)
watch(()=>props.theme,setAppTheme)
onBeforeMount(()=>{
    mediaQuery(true,document.documentElement.clientWidth)
})
onMounted(()=>{
    setAppMode(props.mode||'dark')
    setAppTheme(props.theme||"danger")
})
</script>
<style lang="scss">
.ph-page{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
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