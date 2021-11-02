<template>
    <div :class="cns">
        <slot 
            :valid="valid"
            :size="size"
            :type="type"
            :disabled="disabled"
            :placeholder="placeholder"
        ></slot>
        <div class="ph-ipw-addonr" v-if="slots.right">
            <slot name="right"></slot>
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
        'ph-ip-hasradd':slots.right
    }
})
</script>
<style lang="scss">
.ph-input-wrap{
    flex: 1;
    position: relative;
    display: flex;
    line-height: var(--ph-24);
    --ph-gip-br: 3px;
    --ph-ip-fs: var(--ph-ginput-fs);
    --ph-ip-h: var(--ph-ginput-h);
    --ph-ip-bbc: var(--ph-bc);
    --ph-ip-br: var(--ph-gip-br);
    --ph-ip-cursor: default;
    --ph-ip-bg: inherit;
    --ph-ip-c: var(--ph-c-d1);
    &.ph-ip-invalid{
        --ph-ip-bbc: var(--ph-danger)!important;
    }
    &.ph-ip-disabled{
        --ph-ip-cursor: not-allowed!important;
        --ph-ip-bg:var(--ph-bg-disabled);
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
    &.ph-ip-hasradd{
        --ph-ip-br: var(--ph-gip-br) 0 0 var(--ph-gip-br);
    }
    .ph-ipw-addonr{
        flex: 0 0 auto;
        position: relative;
        border-color: var(--ph-bc);
        border-bottom-color: var(--ph-ip-bbc);
        font-size: var(--ph-ip-fs);
        height: var(--ph-ip-h);
        width: var(--ph-ip-h);
        border-width: 1px;
        border-style: solid;
        border-left: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 0 var(--ph-gip-br) var(--ph-gip-br) 0;
        cursor: var(--ph-ip-cursor);
        background-color:var(--ph-ip-bg);
        color:var(--ph-ip-c);
    }
    .ph-ip-divider{
        height: var(--ph-ip-h);
        border-width: 1px;
        border-style: solid;
        border-color: var(--ph-bc);
        border-left: none;
        border-right: none;
        position: relative;
        display: flex;
        align-items: center;
        &:before{
            content: "~";
        }
    }
}
</style>