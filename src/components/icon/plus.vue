<template>
    <icon class="ph-icon-plus"/>
</template>
<script lang="ts" setup>
import Icon from './base.vue'
</script>
<style lang="scss">
.ph-icon-plus{
    &:before,
    &:after{
        content: "";
        border-radius: var(--ph-icon-ratio);
        background-color: var(--ph-icon-c);
    }
    &:before{
        width: var(--ph-icon-10);
        height: var(--ph-icon-2);
    }
    &:after{
        height: var(--ph-icon-10);
        width: var(--ph-icon-2);
    }
}
</style>