<template>
    <button :class="cns" v-tap="onTap" :disabled="disabled">
        <spin v-if="loading" stroke="currentColor"/>
        <span v-if="$slots.default" class="ph-btn-slot"><slot></slot></span>
        <caret v-if="dropdown" :position="dropdown" stroke="currentColor"/>
    </button>
</template>
<script lang="ts" setup>
import { PropType, reactive, defineProps, defineEmits, defineAsyncComponent, computed } from "vue";
import { tap as vTap } from "../../directives/gesture"

const Caret = defineAsyncComponent(()=>import("../icon/caret.vue"))
const Spin = defineAsyncComponent(()=>import("../icon/loading/spin.vue"))
const props = defineProps({
    disabled:Boolean,
    block:Boolean,
    loading:Boolean,
    dropdown:String as PropType<'up'|'down'>,
    shape:String as PropType<'circle'|'square'>,
    radius:{type:Boolean,default:true},
    type:{type:String as PropType<'primary'|'success'|'danger'|'warning'|'default'>,default:'default'},
    fillMode:{type:String as PropType<'outline'|'none'|'normal'>,default:'normal'},
    size:{type:String as PropType<'mini'|'small'|'large'|'normal'>,default:'normal'}
})
const cst = {
    lock:false
}
const state = reactive({
    hover:!("ontouchstart" in window)
})
const cns = computed(()=>{
    return {
        'ph-btn':true,
        'ph-btn-pc':state.hover,
        'ph-btn-hover':state.hover&&!props.disabled,
        'ph-btn-radius':props.radius,

        'ph-btn-primary':props.type=="primary",
        'ph-btn-success':props.type=="success",
        'ph-btn-danger':props.type=="danger",
        'ph-btn-warning':props.type=="warning",
        'ph-btn-default':props.type=="default",

        'ph-btn-outline':props.fillMode=="outline",
        'ph-btn-none':props.fillMode=="none",

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
const emits = defineEmits(['tap'])
const trigger = (e:unknown)=>{
    if(cst.lock)return
    cst.lock = true
    emits("tap",e)
    setTimeout(()=>{
        cst.lock = false
    },300)
}

const onTap = (e:Event)=>{
    trigger(e)
}
</script>
<style lang="scss">
.ph-btn{
    --ph-btn-br: 0;
    --ph-btn-bw: 1px;
    --ph-btn-bs: solid;
    --ph-btn-pd: 0px 16px;
    --ph-btn-fs: 15px;
    --ph-btn-h: 36px;
    --ph-btn-bc: var(--ph-bc);
    --ph-btn-c: var(--ph-c);
    --ph-btn-bg: transparent;
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
    font-weight: 500;
    transition: opacity .15s ease,color .15s ease,background-color .15s ease;
    
    &:before{
        content:'';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }
    &-mini{
        --ph-btn-pd: 0px 7px;
        --ph-btn-fs: 13px;
        --ph-btn-h: 26px;
    }
    &-small{
        --ph-btn-pd: 0px 11px;
        --ph-btn-fs: 15px;
        --ph-btn-h: 30px;
    }
    &-large{
        --ph-btn-pd: 0px 22px;
        --ph-btn-fs: 18px;
        --ph-btn-h: 46px;
    }
    &-pc{
        --ph-btn-h: 32px;
        --ph-btn-fs: 14px;
        --ph-btn-pd: 0px 15px;
        &.ph-btn-mini{
            --ph-btn-pd: 0px 10px;
            --ph-btn-fs: 12px;
            --ph-btn-h: 24px;
        }
        &.ph-btn-small{
            --ph-btn-pd: 0px 12px;
            --ph-btn-fs: 14px;
            --ph-btn-h: 30px;
        }
        &.ph-btn-large{
            --ph-btn-pd: 0px 12px;
            --ph-btn-fs: 18px;
            --ph-btn-h: 40px;
        }
        &.ph-btn-hover:hover:after{
            opacity: .1;
        }
        &.ph-btn-default.ph-btn-hover:hover{
            --ph-btn-bg:var(--ph-doc-bg);
            --ph-btn-bc:var(--ph-bc);
        }
        &.ph-btn-default.ph-btn-none.ph-btn-hover:hover{
            --ph-btn-bg:var(--ph-doc-bg);
            --ph-btn-bc:var(--ph-doc-bg);
        }
    }
    &-square{
        width: 32px;
        --ph-btn-h: 32px;
        --ph-btn-pd:0;
        --ph-i-size:24px;
    }
    &-radius{
        --ph-btn-br:4px;
    }
    &-default{
        --ph-btn-bc: var(--ph-bc);
        --ph-btn-c: var(--ph-c);
        --ph-btn-bg: transparent;
        --ph-btn-theme: var(--ph-c);
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
    &-block{
        display: block;
        width: 100%;
    }
    &:not(.ph-btn-default):after{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background-color: var(--ph-c-d2);
        border-color: var(--ph-c-d2);
        border: inherit;
        border-radius: inherit;
        transform: translate(-50%,-50%);
        opacity: 0;
        content: " ";
        box-sizing: content-box;
        transition: opacity .15s ease;
    }

    &:not(.ph-btn-default):active:after{
        opacity: .1;
    }
    &:disabled{
        cursor: not-allowed!important;
    }
    &:not(.ph-btn-default):disabled{
        opacity: .4!important;
    }
    &-default:active{
        --ph-btn-bg:var(--ph-doc-bg);
        --ph-btn-bc:var(--ph-doc-bg);
    }
    &-default:disabled{
        --ph-btn-bg:var(--ph-bg-disabled)!important;
        --ph-btn-bc:var(--ph-bg-disabled)!important;
        --ph-btn-c:var(--ph-c-disabled)!important;
    }
    &-flex{
        display: flex;
        align-items: center;
        padding-right: 8px;
        .ph-btn-slot{
            flex: 1;
        }
    }
    .ph-icon,
    .ph-btn-slot{
        vertical-align: middle;
    }
    .ph-icon + .ph-btn-slot{
        margin-left: var(--ph-5);
    }
    .ph-btn-slot + .ph-icon{
        margin-left: var(--ph-8);
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