<template>
    <icon class="ph-icon-nav"/>
</template>
<script lang="ts" setup>
import Icon from './base.vue'
</script>
<style lang="scss">
.ph-icon-nav{
    background-color: transparent;
    border: none;
    &:before{
        content: "";
        border-style: solid;
        border-width: var(--ph-icon-2);;
        border-color: var(--ph-icon-c);
        border-left: none;
        border-right: none;
        width: var(--ph-icon-10);
        height: var(--ph-icon-10);
    }
    &:after{
        content: "";
        border: none;
        border-width: 0;
        height: var(--ph-icon-2);
        width: var(--ph-icon-10);
        background-color: var(--ph-icon-c);
    }
}
</style>