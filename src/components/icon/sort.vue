<template>
    <icon class="ph-icon-sort" :direction="direction"/>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import Icon from './base.vue'
defineProps({
    direction:String
})
</script>
<style lang="scss">
.ph-icon-sort{
    background-color: transparent;
    border: none;
    &:after,
    &:before{
        content: "";
        width: 0;
        height: 0;
        border-width: 5px;
        border-color: transparent;
        border-style: solid;
    }
    &:before{
        border-top: none;
        border-bottom-color: currentColor;
        transform: translateY(-5px);
    }
    &:after{
        border-bottom: none;
        border-top-color: currentColor;
        transform: translateY(5px);
    }
    &[direction=up]:after{
        opacity: .3;
    }
    &[direction=down]:before{
        opacity: .3;
    }
}
</style>