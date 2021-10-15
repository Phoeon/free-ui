<template>
    <icon class="ph-icon-tick"/>
</template>
<script lang="ts" setup>
import Icon from './base.vue'
</script>
<style lang="scss">
.ph-icon-tick{
    &:before{
        content: "";
        width: var(--ph-icon-6);
        height: calc(var(--ph-icon-ratio) * 9);
        border: var(--ph-icon-2) solid var(--ph-icon-c);
        border-top-color: transparent;
        border-left-color: transparent;
        transform-origin: center;
        transform: translateY(calc(var(--ph-icon-ratio) * -2)) rotate(30deg);
    }
}
</style>