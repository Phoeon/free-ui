<template>
<f-mask v-model="state.visible" :alpha="!state.sm" @click="close">
<transition :name="state.animation">
    <div v-if="state.visible" 
    @click.stop class="ph-pop-cselect ph-pop" 
    ref="edom" :style="style">
        <div class="ph-ppcs-header" v-if="title&&state.sm">{{title}}</div>
        <CascadeSelect 
            class="ph-ppcs-list" 
            :dataSource="dataSource" 
            v-model="state.value" 
            @resize="onResize"
            @update:modelValue="onSelect"></CascadeSelect>
    </div>
</transition>
</f-mask>
</template>
<script lang="ts" setup>
import './popover.scss';
import { defineProps, nextTick, onMounted, PropType, reactive, ref } from 'vue'
import type { IRect, ITree, IValue } from '../../shared/types'
import CascadeSelect from '../cascade-select/main.vue'
import getPosition from 'ph-position'
import MediqQuery from '../../shared/media-query'
import FMask from '../mask/main.vue'
const edom = ref<HTMLElement>()
const props = defineProps({
    dataSource:{type:Array as PropType<ITree>,default:()=>[]},
    value:{type:[String,Number,Array] as PropType<IValue>,required:true},
    rect:{type:Object as PropType<IRect>,default:()=>{
        return {left:0,top:0,width:0,height:0}
    }},
    title:String,
    notify:Function as PropType<(item:IValue)=>void>,
    destroy:Function as PropType<()=>void>,
    animation:{type:String,default:'ph-upbit'}
})
const state = reactive({
    visible:false,
    hover:!("ontouchstart" in window),
    sm:false,
    animation:props.animation,
    value:props.value
})
const style = reactive({
    left:'auto',
    top:'auto',
    // minWidth:props.rect.width+"px"
})
const reposition = ()=>{
    if(!edom.value)return
    const { x,y } = getPosition(edom.value,props.rect,{top:true})
    style.left = state.sm?'auto':x+"px"
    style.top = state.sm?'auto':y+"px"
}
const close = ()=>{
    state.visible = false
    props.destroy?.()
}
const onResize = ()=>{
    nextTick(reposition)
}
const onSelect = (v:IValue)=>{
    state.value = v
    props.notify?.(v)
}
const mediaQuery = (a:any,dw:number)=>{
    state.sm = dw<768
    nextTick(()=>{
        reposition()
    })
}
MediqQuery.all(mediaQuery)
onMounted(()=>{
    mediaQuery(true,document.documentElement.clientWidth)
    state.visible = true
    if(state.sm){
        style.left = "0px"
        style.top="auto"
        // style.minWidth="auto"
        state.animation = "ph-slideup"
        return
    }
})
</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-pop-cselect{
    transition: left .15s ease;
    &:after{
        display: none!important;
    }
    .ph-ppcs-header{
        display: flex;
        height: var(--ph-gdd-h);
        justify-content: center;
        align-items: center;
        color: var(--ph-c-d1);
        font-weight: var(--ph-fw-m);
        border-bottom: 1px solid var(--ph-bd-1);
    }
    .ph-ppcs-list{
        height: var(--ph-pop-listh);
        --ph-cselect-ih:var(--ph-gdd-h);
        --ph-cselect-fs:var(--ph-gdd-fs);
    }
}

@media screen and (max-width:768px){
    .ph-pop-cselect{
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        min-width: 100%;
        --ph-select-btn-br:0;
        --ph-gdd-h:var(--ph-45);
        --ph-pop-br:0;
    }
}
</style>