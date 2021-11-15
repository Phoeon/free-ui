<template>
    <div class="ph-tabs-nav" :underline="showIndicator">
        <f-button class="ph-tabs-nav-btn" :fillMode="fillMode" v-indicator="currentIndex===item.index" :disabled="item.disabled" :type="currentIndex===item.index?'primary':''" v-for="(item,index) in navs" :key="index" @click="$emit('shift',item.index)">
            <template v-if="item.icon" v-slot:leftIcon><custom-icon :name="item.icon"/></template>
            {{item.title}}
        </f-button>
        <div class="ph-tabs-indicator" v-if="showIndicator" :style="istyle"></div>
    </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, nextTick, PropType, reactive } from 'vue'
import { ITab } from '../../shared/types'
import { CustomIcon } from '../icon'
import FButton from '../button/main.vue'

const props = defineProps({
    navs: Array as PropType<Array<ITab>>,
    fillMode:String,
    showIndicator:Boolean,
    currentIndex: {type:Number,required:true}
})
const state = reactive({
    ileft:0,
    iw:0
})
const istyle = computed(()=>{
    return {
        'width':state.iw+"px",
        'transform':`translate3d(${state.ileft}px,0,0)`
    }
})
const updateIndicator = (el:HTMLElement)=>{
    nextTick(()=>{
        state.ileft = el.offsetLeft
        state.iw = el.offsetWidth
    })
}
const vIndicator = {
    mounted(el:HTMLElement,binding:any){
        if(!props.showIndicator)return
        const {value} = binding
        if(!value)return
        if(value){
            updateIndicator(el)
        }
    },
    updated(el:HTMLElement,binding:any){
        if(!props.showIndicator)return
        const {value} = binding
        if(!value)return
        if(value){
            updateIndicator(el)
        }
    }
}
</script>
<style lang="scss">
.ph-tabs-nav{
    display: flex;
    flex: 0 0 auto;
    position: relative;
    overflow: auto;
    height: var(--ph-gtabs-h);

    -webkit-overflow-scrolling: touch;
    &[underline=true]:before{
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 1px;
        width: 100%;
        background-color: var(--ph-bd-1);
    }
    &[underline=true]{
        padding-bottom: var(--ph-pd-sm);
        height: var(--ph-39);
    }
    .ph-tabs-indicator{
        position: absolute;
        height: 3px;
        bottom: 0;
        left: 0;
        width: 0;
        background-color: var(--ph-primary);
        transform: translate3d(0,0,0);
        transition: width .3s ease,transform .3s ease;
    }
    .ph-tabs-nav-btn{
        --ph-btn-fs:var(--ph-gtabs-fs);
        --ph-btn-pd:var(--ph-gtabs-pd);
        --ph-btn-h:inherit;
        border-radius: 2px;
        margin-left: -1px;
        flex: var(--ph-gtabs-iflex);
        &:nth-of-type(1){
            margin-left: 0;
        }
    }
}
@media screen and (max-width:768px){
    .ph-tabs-nav-btn{
        border-radius: 2px!important;
    }
}
</style>