<template>
    <button class="ph-dt-btn" :radius="radius" :hover="state.hover&&!active&&!disabled" :disabled="disabled" :active="active"><slot></slot></button>
</template>
<script lang="ts" setup>
import { defineProps, reactive } from 'vue'
const props = defineProps({
    disabled:Boolean,
    active:Boolean,
    radius:{type:Boolean,default:true}
})
const state = reactive({
    hover:!('ontouchstart' in window)
})
</script>
<style lang="scss">
.ph-dt-btn{
    --ph-dtbtn-pdh:var(--ph-pd);
    --ph-dtbtn-pdv:var(--ph-pd-sm);
    border: none;
    appearance: none;
    font-size: inherit;
    color: inherit;
    font-weight: bold;
    transition: color .15s ease,background-color .15s ease,border-color .15s ease;
    padding: var(--ph-dtbtn-pdv) var(--ph-dtbtn-pdh);
    background-color: transparent;
    justify-self: center;
    align-self: center;
    &:disabled{
        color: var(--ph-c-disabled)!important;
        cursor: not-allowed!important;
        opacity: .5;
    }
    &[hover=true]:active,
    &[hover=true]:hover{
        color: var(--ph-c-d2);
        background-color: var(--ph-dt-btn-bg);
    }
    &[active=true]{
        color: var(--ph-c-white)!important;
        background-color: var(--ph-primary)!important;
    }
    &[radius=true]{
        border-radius: 2px;
    }
}
</style>