<template>
    <icon class="ph-icon-arrow" :position="position" :double="double"/>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import Icon from './base.vue'
defineProps({
    position:String,
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
        border-color: var(--ph-icon-c);
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
    &[position=up]{
        transform: rotate(0deg);
    }
    &[position=down]{
        transform: rotate(180deg);
    }
    &[position=left]{
        transform: rotate(-90deg);
    }
    &[position=right]{
        transform: rotate(90deg);
    }
}
</style>