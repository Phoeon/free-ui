<template>
    <button :class="cns" :disabled="disabled" :hover="state.hover&&!props.disabled" @click.stop="onClick">
        <slot name="leftIcon"></slot>
        <spin v-if="loading" stroke="currentColor"/>
        <span v-if="$slots.default" class="ph-btn-slot"><slot></slot></span>
        <caret v-if="dropdown" :direction="dropdown" stroke="currentColor"/>
        <slot name="rightIcon"></slot>
    </button>
</template>
<script lang="ts" setup>
import { PropType, reactive, defineProps, defineEmits, defineAsyncComponent, computed } from "vue";
import { IThemeType } from '../../shared/types'

const Caret = defineAsyncComponent(()=>import("../icon/caret.vue"))
const Spin = defineAsyncComponent(()=>import("../icon/loading/spin.vue"))
const props = defineProps({
    disabled:Boolean,
    block:Boolean,
    loading:Boolean,
    dropdown:String as PropType<'up'|'down'>,
    shape:String as PropType<'circle'|'square'>,
    throttle:{type:Boolean,default:true},
    threshhold:{type:Number,default:300},
    radius:{type:Boolean,default:true},
    hover:{type:Boolean,default:true},
    type:{type:String as PropType<IThemeType|'mode'>,default:'normal'},
    fillMode:{type:String as PropType<'outline'|'reverse'|'none'|'normal'>,default:'normal'},
    size:{type:String as PropType<'mini'|'small'|'large'|'normal'>,default:'normal'}
})
const cst = {
    lock:false
}
const state = reactive({
    hover:!("ontouchstart" in window),
})
const cns = computed(()=>{
    return {
        'ph-btn':true,
        'ph-btn-pc':state.hover,
        'ph-btn-hover':props.hover&&state.hover&&!props.disabled,
        'ph-btn-radius':props.radius,

        'ph-btn-primary':props.type=="primary",
        'ph-btn-success':props.type=="success",
        'ph-btn-danger':props.type=="danger",
        'ph-btn-warning':props.type=="warning",
        'ph-btn-noble':props.type=="noble",
        'ph-btn-mode':props.type=="mode",
        'ph-btn-info':props.type=="info",
        'ph-btn-normal':(props.type=="normal"||!props.type),//&&props.fillMode=="normal",

        'ph-btn-outline':props.fillMode=="outline",
        'ph-btn-none':props.fillMode=="none",
        'ph-btn-reverse':props.fillMode=="reverse",

        'ph-btn-mini':props.size=="mini",
        'ph-btn-small':props.size=="small",
        'ph-btn-large':props.size=="large",

        'ph-btn-loading':props.loading,
        'ph-btn-block':props.block,

        'ph-btn-circle':props.shape=="circle",
        'ph-btn-square':props.shape=="square",

        'ph-btn-flex':!!props.dropdown
    }
})
const emits = defineEmits(['click'])

const onClick = (e:unknown)=>{
    if(!props.throttle)return emits('click',e)
    if(cst.lock)return
    cst.lock = true
    emits("click",e)
    setTimeout(()=>{
        cst.lock = false
    },props.threshhold)
}

</script>
<style lang="scss">
.ph-btn{
    --ph-btn-br: 0;
    --ph-btn-bw: 1px;
    --ph-btn-bs: solid;
    --ph-btn-pd: 0px 16px;
    --ph-btn-fs: var(--ph-gbtn-fs);
    --ph-btn-h: var(--ph-gbtn-h);
    --ph-btn-c: var(--ph-c);
    --ph-btn-bc: var(--ph-bd-1-a15);
    --ph-btn-bg: var(--ph-bg-a15);
    --ph-btn-theme: var(--ph-c);

    position: relative;
    display: inline-block;
    box-sizing: border-box;
    outline:none;
    margin: 0;
    line-height: 1;
    text-align: center;
    cursor: pointer;
    user-select: none;
    appearance: none;
    flex: 0 0 auto;
    height: fit-content;
    white-space: nowrap;
    font-family: inherit;
    font-weight: 500;
    transition: opacity .15s ease,color .15s ease,background-color .15s ease,border .15s ease;
    background-clip: padding-box;
    &:before{
        content:'';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }
    &-mini{
        --ph-btn-pd: 0px 7px;
        --ph-btn-fs: var(--ph-gbtn-fs-xs,13px);
        --ph-btn-h: var(--ph-gbtn-h-xs,26px);
    }
    &-small{
        --ph-btn-pd: 0px 11px;
        --ph-btn-fs: var(--ph-gbtn-fs-sm);
        --ph-btn-h: var(--ph-gbtn-h-sm);
    }
    &-large{
        --ph-btn-pd: 0px 22px;
        --ph-btn-fs: var(--ph-gbtn-fs-lg);
        --ph-btn-h: var(--ph-gbtn-h-lg);
    }
    &-pc{
        &.ph-btn-mini{
            --ph-btn-pd: 0px 10px;
            --ph-btn-fs: 12px;
            --ph-btn-h: 24px;
        }
        &.ph-btn-small{
            --ph-btn-pd: 0px 12px;
        }
        &.ph-btn-large{
            --ph-btn-pd: 0px 22px;
        }
    }
    &.ph-btn-circle,
    &.ph-btn-square{
        --ph-btn-pd:0!important;
        width:var(--ph-btn-h)!important;
        height:var(--ph-btn-h)!important;
    }
    &-circle{
        border-radius: 50%;
    }
    &-radius{
        --ph-btn-br:4px;
    }
    &-normal{
        --ph-btn-bc: var(--ph-bg-a1-reverse);
        --ph-btn-bg: var(--ph-bg-a1-reverse);
        --ph-btn-c: var(--ph-c-reverse);
        --ph-btn-theme: var(--ph-c-reverse);
        &:disabled{
            opacity: .4;
        }
    }
    &-primary{
        --ph-btn-theme:var(--ph-primary);
        --ph-btn-bg:var(--ph-primary);
        --ph-btn-bc:var(--ph-primary);
        --ph-btn-c:var(--ph-c-white);
    }
    &-success{
        --ph-btn-theme:var(--ph-success);
        --ph-btn-bg:var(--ph-success);
        --ph-btn-bc:var(--ph-success);
        --ph-btn-c:var(--ph-c-white);
    }
    &-warning{
        --ph-btn-theme:var(--ph-warning);
        --ph-btn-bg:var(--ph-warning);
        --ph-btn-bc:var(--ph-warning);
        --ph-btn-c:var(--ph-c-white);
    }
    &-noble{
        --ph-btn-theme:var(--ph-noble);
        --ph-btn-bg:var(--ph-noble);
        --ph-btn-bc:var(--ph-noble);
        --ph-btn-c:var(--ph-c-white);
    }
    &-mode{
        --ph-btn-theme:var(--ph-mode);
        --ph-btn-bg:var(--ph-mode);
        --ph-btn-bc:var(--ph-mode);
        --ph-btn-c:var(--ph-c-d1);
    }
    &-info{
        --ph-btn-theme:var(--ph-info);
        --ph-btn-bg:var(--ph-info);
        --ph-btn-bc:var(--ph-info);
        --ph-btn-c:var(--ph-c-white);
    }
    &-danger{
        --ph-btn-theme:var(--ph-danger);
        --ph-btn-bg:var(--ph-danger);
        --ph-btn-bc:var(--ph-danger);
        --ph-btn-c:var(--ph-c-white);
    }
    &-outline{
        --ph-btn-c:var(--ph-btn-theme);
        --ph-btn-bg:transparent;
    }
    &-none{
        --ph-btn-c:var(--ph-btn-theme);
        --ph-btn-bg:transparent;
        --ph-btn-bc:transparent;
    }
    &-reverse{
        --ph-btn-c:var(--ph-btn-theme);
        --ph-btn-bg:var(--ph-bg-a1-reverse);
        --ph-btn-bc:var(--ph-bg-a1-reverse);
    }
    &-block{
        display: block;
        width: 100%;
    }
    &:after{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        border: inherit;
        border-color: var(--ph-bg-a1);
        background-color: var(--ph-bg-a1);
        background-clip: padding-box;
        border-radius: inherit;
        transform: translate(-50%,-50%);
        opacity: 0;
        content: " ";
        box-sizing: content-box;
        transition: var(--ph-ts-ei);
    }
    &:active:after,
    &-hover:hover:after{
        opacity: 1;
    }
    &:disabled{
        cursor: not-allowed!important;
    }
    &:not(.ph-btn-normal):disabled{
        opacity: .4!important;
    }
    &-normal:disabled{
        --ph-btn-bg:var(--ph-bg-disabled)!important;
        --ph-btn-bc:var(--ph-bg-disabled)!important;
        --ph-btn-c:var(--ph-c-disabled)!important;
    }
    &:active,
    &-hover{
        z-index: 1;
    }
    &-flex{
        display: flex;
        align-items: center;
        padding-right: 8px;
        .ph-btn-slot{
            flex: 1;
        }
    }
    .ph-icon{
        font-size:inherit;
    }
    .ph-icon,
    .ph-btn-slot{
        vertical-align: middle;
    }
    .ph-icon + .ph-btn-slot{
        margin-left: var(--ph-6);
    }
    .ph-btn-slot + .ph-icon{
        margin-left: var(--ph-pd-sm);
    }

    color: var(--ph-btn-c);
    height: var(--ph-btn-h);
    padding: var(--ph-btn-pd);
    font-size: var(--ph-btn-fs);
    border-width: var(--ph-btn-bw);
    border-style: var(--ph-btn-bs);
    border-color: var(--ph-btn-bc);
    border-radius: var(--ph-btn-br);
    background-color: var(--ph-btn-bg);
}
</style>