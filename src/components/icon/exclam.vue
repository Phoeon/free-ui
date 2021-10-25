<template>
    <icon class="ph-icon-exclam"/>
</template>
<script lang="ts" setup>
import Icon from './base.vue'
</script>
<style lang="scss">
.ph-icon-exclam{
    &:before,
    &:after{
        content: "";
        border-radius: 2px;
        background-color: var(--ph-icon-c);
    }
    &:before{
        height: calc(var(--ph-icon-ratio) * 7);
        width: var(--ph-icon-2);
        top: var(--ph-icon-2);
        bottom: auto;
    }
    &:after{
        width: var(--ph-icon-2);
        height: var(--ph-icon-2);
        bottom: var(--ph-icon-2);
        top: auto;
    }
}
</style>