<template>
    <div class="ph-color-modebar">
        <div class="ph-color-mode" :active="modelValue===ColorMode.rgb" @click="update(ColorMode.rgb)">RGB</div>
        <div class="ph-color-mode" :active="modelValue===ColorMode.hsb" @click="update(ColorMode.hsb)">HSB</div>
        <div class="ph-color-mode" :active="modelValue===ColorMode.hex" @click="update(ColorMode.hex)">HEX</div>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, PropType, defineEmits } from 'vue'
import { ColorType } from './types'
import { ColorMode } from '../../shared/color'

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: String as PropType<ColorType>
})
const update = (v:ColorType)=>{
    emits('update:modelValue',v)
}
</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-color-modebar{
    height: var(--ph-c-modebar);
    position: relative;
    display: flex;
    justify-content: center;
    &:after{
        @include blMx(var(--ph-c-bd));
    }
    .ph-color-mode{
        width:48px;
        height: 100%;
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        line-height: 1.6;
        margin: 0 5px;
        color: var(--ph-c-white);
        &:before,
        &:after{
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
        }
        &:before{
            height: 2px;
            background-color: currentColor;
        }
        &:after{
            width: 0;
            border-width: 5px;
            border-style: solid;
            border-color: transparent;
            border-bottom-color: currentColor;
        }
        &[active=true]{
            color: var(--ph-c-primary);
            &:before,
            &:after{
                content: "";
                z-index: 1;
            }
        }
    }
}
</style>