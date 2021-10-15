<template>
    <button 
    :class="['ph-button',state.hover?'ph-pc':'']" 
    :hover="state.hover&&!disabled"
    :radius="radius" 
    :ui="type" 
    :fillMode="fillMode"
    :size="size"
    :disabled="disabled"
    :loading="loading"
    :block="block"
    >
    <spin v-if="loading" stroke="currentColor"/>
    <span v-if="$slots.default" class="ph-btn-slot"><slot></slot></span>
    <caret v-if="dropdown" :position="dropdown" stroke="currentColor"/></button>
</template>
<script lang="ts" setup>
import { PropType, reactive, defineProps, defineAsyncComponent } from "vue";
const Caret = defineAsyncComponent(()=>import("../icon/caret.vue"))
const Spin = defineAsyncComponent(()=>import("../icon/loading/spin.vue"))
const props = defineProps({
    disabled:Boolean,
    block:Boolean,
    loading:Boolean,
    dropdown:String as PropType<'up'|'down'>,
    radius:{type:Boolean,default:true},
    type:{type:String as PropType<'primary'|'success'|'danger'|'warning'|'default'>,default:'default'},
    fillMode:{type:String as PropType<'outline'|'none'|'normal'>,default:'normal'},
    size:{type:String as PropType<'mini'|'small'|'large'|'normal'>,default:'normal'}
})

const state = reactive({
    hover:!("ontouchstart" in window)
})
</script>
<style lang="scss">
.ph-button{
    --ph-btn-br: 4px;
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
    margin: 0;
    line-height: 1;
    text-align: center;
    cursor: pointer;
    transition: opacity .15s ease;
    user-select: none;
    appearance: none;
    flex: 0 0 auto;
    height: fit-content;
    white-space: nowrap;
    
    &:before{
        content:'';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }
    &[size=mini]{
        --ph-btn-pd: 0px 7px;
        --ph-btn-fs: 13px;
        --ph-btn-h: 26px;
    }
    &[size=small]{
        --ph-btn-pd: 0px 11px;
        --ph-btn-fs: 15px;
        --ph-btn-h: 30px;
    }
    &[size=large]{
        --ph-btn-pd: 0px 22px;
        --ph-btn-fs: 18px;
        --ph-btn-h: 46px;
    }
    &.ph-pc{
        --ph-btn-h: 32px;
        --ph-btn-fs: 14px;
        --ph-btn-pd: 0px 15px;
        &[size=mini]{
            --ph-btn-pd: 0px 10px;
            --ph-btn-fs: 12px;
            --ph-btn-h: 24px;
        }
        &[size=small]{
            --ph-btn-pd: 0px 12px;
            --ph-btn-fs: 14px;
            --ph-btn-h: 30px;
        }
        &[size=large]{
            --ph-btn-pd: 0px 12px;
            --ph-btn-fs: 18px;
            --ph-btn-h: 40px;
        }
        &[hover=true]:hover:after{
            opacity: .1;
        }
        &[ui=default][hover=true]:hover{
            --ph-btn-bg:var(--ph-bg-disabled);
            --ph-btn-bc:var(--ph-bg-disabled);
        }
    }
    &[radius=false]{
        --ph-btn-br:0;
    }
    &[ui=default]{
        --ph-btn-bc: var(--ph-bc);
        --ph-btn-c: var(--ph-c);
        --ph-btn-bg: transparent;
        --ph-btn-theme: var(--ph-c);
        &:disabled{
            opacity: .4;
        }
    }
    &[ui=primary]{
        --ph-btn-theme:var(--ph-primary);
        --ph-btn-bg:var(--ph-primary);
        --ph-btn-bc:var(--ph-primary);
        --ph-btn-c:var(--ph-c-white);
    }
    &[ui=success]{
        --ph-btn-theme:var(--ph-success);
        --ph-btn-bg:var(--ph-success);
        --ph-btn-bc:var(--ph-success);
        --ph-btn-c:var(--ph-c-white);
    }
    &[ui=warning]{
        --ph-btn-theme:var(--ph-warning);
        --ph-btn-bg:var(--ph-warning);
        --ph-btn-bc:var(--ph-warning);
        --ph-btn-c:var(--ph-c-white);
    }
    &[ui=danger]{
        --ph-btn-theme:var(--ph-danger);
        --ph-btn-bg:var(--ph-danger);
        --ph-btn-bc:var(--ph-danger);
        --ph-btn-c:var(--ph-c-white);
    }
    &[fillMode=outline]{
        --ph-btn-c:var(--ph-btn-theme);
        --ph-btn-bg:transparent;
    }
    &[fillMode=none]{
        --ph-btn-c:var(--ph-btn-theme);
        --ph-btn-bg:transparent;
        --ph-btn-bc:transparent;
    }
    &[block=true]{
        display: block;
        width: 100%;
    }
    &:not([ui=default]):after{
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

    &:not([ui=default]):active:after{
        opacity: .1;
    }
    &:disabled{
        cursor: not-allowed!important;
    }
    &:not([ui=default]):disabled{
        opacity: .4!important;
    }
    &[ui=default]:active{
        --ph-btn-bg:var(--ph-bg-disabled);
        --ph-btn-bc:var(--ph-bg-disabled);
    }
    &[ui=default]:disabled{
        --ph-btn-bg:var(--ph-bg-disabled)!important;
        --ph-btn-bc:var(--ph-bg-disabled)!important;
        --ph-btn-c:var(--ph-c-disabled)!important;
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