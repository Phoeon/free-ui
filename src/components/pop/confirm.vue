<template>
<transition name="ph-fade">
    <div v-if="state.visible" @click.stop :class="['ph-pop-confirm','ph-pop','ph-pop-'+position]" ref="edom" :sample="sample" :style="style">
        <div class="ph-pop-confirm-content">
            <circle-warning class="ph-ppc-icon"/>
            <p class="ph-pop-content">{{title}}</p>
        </div>
        <div class="ph-pop-confirm-action">
            <f-button size="mini" @click="onClose(0)">取消</f-button>
            <f-button size="mini" type="primary" @click="onClose(1)">确定</f-button>
        </div>
    </div>
</transition>
</template>
<script lang="ts" setup>
import { defineProps, nextTick, onBeforeUnmount, onMounted, PropType, reactive, ref } from 'vue'
import { CircleWarning } from '../icon'
import { IPopPosition } from './types'
import { sumArray } from '../../shared/utils'
import { xmatrix,ymatrix } from './shared'
import FButton from '../button/main.vue'

const edom = ref<HTMLElement>()
const props = defineProps({
    title:String,
    position:{type:String as PropType<IPopPosition>,default:"tc"},
    x:{type:Number,required:true},
    y:{type:Number,required:true},
    sample:{type:Boolean,default:true}, //仅用于文档展示，不用关注
    notify:Function as PropType<(status:number)=>void>
})
const state = reactive({
    visible:false
})
const style = reactive({
    left:'auto',
    top:'auto'
})

const onClose = (status:number)=>{
    state.visible = false
    props.notify?.(status)
}
const t = Date.now()
const bindClickEvent = (e:Event)=>{
    if(Date.now() - t<300)return 
    onClose(0)
}
onBeforeUnmount(()=>{
    if(props.sample)return
    document.removeEventListener("click",bindClickEvent)
})
onMounted(()=>{
    state.visible = true
    if(props.sample)return
    nextTick(()=>{
        if(!edom.value)return
        document.addEventListener("click",bindClickEvent)
        const of = 24
        const { offsetWidth, offsetHeight } = edom.value
        const vs = [of,offsetWidth,offsetHeight,10]
        
        const 
        x = sumArray(vs,xmatrix[props.position])+props.x,
        y = sumArray(vs,ymatrix[props.position])+props.y;
        style.left = x+"px"
        style.top = y+"px"
    })
})
</script>
<style lang="scss">
@import './popover.scss';
.ph-pop-confirm{
    --ph-pop-bdc: var(--ph-modal-bg);
    position: fixed;
    z-index: var(--ph-zdx-popup);
    background-color: var(--ph-modal-bg);
    padding: var(--ph-pd-small);
    min-width: 180px;
    display: inline-block;
    box-shadow: var(--ph-shadow-2);
    border-radius: 4px;
    &[sample=true]{
        position: relative;
        z-index: auto;
    }
    .ph-pop-confirm-content{
        display: flex;
        align-items: center;
        font-size: 14px;
        color: var(--ph-c-d1);
        .ph-ppc-icon{
            margin-right: var(--ph-8);
        }
    }
    .ph-pop-confirm-action{
        margin-top: var(--ph-pd-small);
        display: flex;
        justify-content: right;
        .ph-btn{
            margin-left: var(--ph-8);
        }
    }
}
</style>