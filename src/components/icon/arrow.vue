<template>
    <icon class="ph-icon-arrow" :direction="direction" :double="double"/>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import Icon from './base.vue'
defineProps({
    direction:String,
    double:Boolean
})
</script>
<style lang="scss">
.ph-icon-arrow{
    background-color: transparent;
    border: none;
    transform-origin: center;
    &:before,
    &:after{
        width: var(--ph-icon-6);
        height: var(--ph-icon-6);
        border-width: 1px;
        border-style: solid;
        border-color: currentColor;
        border-right: none;
        border-bottom: none;
        transform-origin: center;
    }
    &:before{
        content: "";
        transform:  translateY(25%) rotate(45deg)
    }
    &[double=true]{
        &:before{
            transform:  translateY(5%) rotate(45deg)
        }
        &:after{
            content: "";
            transform:  translateY(45%) rotate(45deg)
        }
    }
    &[direction=up]{
        transform: rotate(0deg);
    }
    &[direction=down]{
        transform: rotate(180deg);
    }
    &[direction=left]{
        transform: rotate(-90deg);
    }
    &[direction=right]{
        transform: rotate(90deg);
    }
}
</style>