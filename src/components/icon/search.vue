<template>
    <icon class="ph-icon-search"/>
</template>
<script lang="ts" setup>
import Icon from './base.vue'
</script>
<style lang="scss">
.ph-icon-search{
    background-color: transparent;
    border: none;
    transform-origin: center;
    transform: rotate(-45deg);
    &:before,
    &:after{
        content: "";
        border: 1px solid var(--ph-icon-c);
    }
    &:before{
        width: var(--ph-icon-8);
        height: var(--ph-icon-8);
        border-radius: 50%;
        top: var(--ph-icon-2);
        bottom: auto;
    }
    &:after{
        height: calc(var(--ph-icon-ratio) * 4);
        width: 0;
        top: var(--ph-icon-10);
        bottom: auto;
    }
}
</style>