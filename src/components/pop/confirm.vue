<template>
<f-mask :class="sample?'ph-sample':''" v-model="state.visible" :alpha="true" @click="close">
<transition :name="state.animation">
    <div v-if="state.visible" @click.stop :class="['ph-pop-confirm','ph-pop','ph-pop-'+position,'ph-pop-'+theme]" ref="edom" :sample="sample" :style="style">
        <div class="ph-pop-confirm-content">
            <circle-warning class="ph-ppc-icon" type="warning"/>
            <p class="ph-pop-content">{{title}}</p>
        </div>
        <div class="ph-pop-confirm-action">
            <f-button size="mini" @click="onClose(0)">取消</f-button>
            <f-button size="mini" type="primary" @click="onClose(1)">确定</f-button>
        </div>
    </div>
</transition>
</f-mask>
</template>
<script lang="ts" setup>
import './popover.scss';
import { defineProps, nextTick, onMounted, PropType, reactive, ref } from 'vue'
import { CircleWarning } from '../icon'
import { IPopPosition } from '../../shared/types'
import { getAnimation, sumArray } from '../../shared/utils'
import { xmatrix,ymatrix } from './shared'
import FButton from '../button/main.vue'
import FMask from '../mask/main.vue'

const edom = ref<HTMLElement>()
const props = defineProps({
    title:String,
    position:{type:String as PropType<IPopPosition>,default:"tc"},
    theme:{type:String as PropType<'normal'|'reverse'>},
    x:{type:Number,default:0},
    y:{type:Number,default:0},
    sample:Boolean, //仅用于文档展示，不用关注
    notify:Function as PropType<(status:number)=>void>,
    destroy:Function as PropType<()=>void>,
    animation:String
})
const state = reactive({
    visible:false,
    animation:props.animation||getAnimation(props.position+"")
})
const style = reactive({
    left:'auto',
    top:'auto'
})
const close = ()=>{
    if(props.sample)return
    state.visible = false
    props.destroy?.()
}
const onClose = (status:number)=>{
    if(props.sample)return
    props.notify?.(status)
    close()
}

onMounted(()=>{
    state.visible = true
    if(props.sample)return
    nextTick(()=>{
        if(!edom.value)return
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

.ph-pop-confirm{
    padding: var(--ph-pd);
    min-width: 180px;
    &[sample=true]{
        position: relative;
        z-index: auto;
    }
    .ph-pop-confirm-content{
        display: flex;
        align-items: center;
        font-size: 14px;
        color: var(--ph-pop-c-d1);
        .ph-ppc-icon{
            margin-right: var(--ph-pd-sm);
            --ph-icon-bc:transparent;
        }
    }
    .ph-pop-confirm-action{
        margin-top: var(--ph-pd);
        display: flex;
        justify-content: right;
        .ph-btn{
            margin-left: var(--ph-pd-sm);
        }
    }
}
</style>