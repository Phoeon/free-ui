<template>
    <div :class="cns">
        <div class="ph-ipw-addonl" :hover="state.pc" v-if="slots.left">
            <slot name="left" :type="type"></slot>
        </div>
        <slot 
            :valid="valid"
            :size="size"
            :type="type"
            :disabled="disabled"
            :placeholder="placeholder"
        ></slot>
        <div class="ph-ipw-addonr" v-if="slots.right" :hover="state.pc" :type="type">
            <slot :hover="state.pc" :disabled="disabled" name="right"></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, useSlots, PropType, reactive } from 'vue'

const slots = useSlots()
const props = defineProps({
    valid:{type:Boolean,default:true},
    size:String as PropType<'small'|'large'|'normal'>,
    type:String,
    disabled:Boolean,
    placeholder:String,
})
const state = reactive({
    pc:!('ontouchstart' in window)
})
const cns = computed(()=>{
    return {
        'ph-input-wrap':true,
        'ph-ip-invalid':!props.valid,
        'ph-ip-disabled':props.disabled,
        'ph-ip-small':state.pc&&props.size==='small',
        'ph-ip-large':state.pc&&props.size==='large',
        'ph-ip-hasradd':slots.right,
        'ph-ip-hasladd':slots.left,
    }
})
</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-input-wrap{
    flex: 1;
    position: relative;
    display: flex;
    line-height: var(--ph-24);
    --ph-gip-br: 3px;
    --ph-ip-fs: var(--ph-ginput-fs);
    --ph-ip-h: var(--ph-ginput-h);
    --ph-ip-bbc: var(--ph-input-bc);
    --ph-ip-bdr-w:1px;
    --ph-ip-bdl-w:1px;
    --ph-ip-bc: var(--ph-input-bc);
    --ph-ip-bg: var(--ph-input-bg);
    --ph-ip-br: var(--ph-gip-br);
    --ph-ip-c: var(--ph-c-d1);
    &.ph-ip-invalid{
        --ph-ip-bbc: var(--ph-danger)!important;
    }
    &.ph-ip-disabled{
        --ph-ip-cursor: not-allowed!important;
        --ph-ip-bg:var(--ph-bg-disabled);
        --ph-ip-bc:var(--ph-bd-disabled);
        --ph-ip-c:var(--ph-c-disabled);
    }
    &.ph-ip-small{
        --ph-ip-h: var(--ph-ginput-h-sm);
        --ph-ip-fs: var(--ph-ginput-fs);
    }
    &.ph-ip-large{
        --ph-ip-h: var(--ph-ginput-h-lg);
        --ph-ip-fs: var(--ph-ginput-fs-lg);
    }
    &.ph-ip-hasladd{
        --ph-ip-br: 0 var(--ph-gip-br) var(--ph-gip-br) 0;
        --ph-ip-bdl-w:0;
    }
    &.ph-ip-hasradd{
        --ph-ip-br: var(--ph-gip-br) 0 0 var(--ph-gip-br);
        --ph-ip-bdr-w:0;
    }
    &.ph-ip-hasladd.ph-ip-hasradd{
        --ph-ip-br:0;
        --ph-ip-bdl-w:0;
        --ph-ip-bdr-w:0;
    }
    .ph-ipw-addonl,
    .ph-ipw-addonr{
        flex: 0 0 auto;
        position: relative;
        border-color: var(--ph-ip-bc);
        border-bottom: var(--ph-ip-bbc);
        font-size: var(--ph-ip-fs);
        height: var(--ph-ip-h);
        min-width: var(--ph-ip-h);
        border-width: 1px;
        border-style: solid;
        border-left: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: var(--ph-ip-cursor,pointer);
        background-color:var(--ph-ip-bg);
        background-clip: padding-box;
        color:var(--ph-ip-c);
    }
    .ph-ipw-addonl{
        border-radius: var(--ph-gip-br) 0 0 var(--ph-gip-br);
        &:before{
            @include rlMx(var(--ph-bd));
            top: 3px;
            bottom: 3px;
        }
    }
    .ph-ipw-addonr{
        border-radius: 0 var(--ph-gip-br) var(--ph-gip-br) 0;
        &:before{
            @include llMx(var(--ph-bd));
            top: 3px;
            bottom: 3px;
        }
        &[hover=true]:hover .ph-icon{
            --ph-i-color:var(--ph-primary);
        }
    }
    .ph-ip-divider{
        height: var(--ph-ip-h);
        border-width: 1px;
        border-style: solid;
        border-color: var(--ph-ip-bc);
        border-bottom-color: var(--ph-ip-bbc);
        border-left: none;
        border-right: none;
        position: relative;
        display: flex;
        align-items: center;
        background-color:var(--ph-ip-bg);
        &:before{
            content: "~";
        }
    }
}
</style>