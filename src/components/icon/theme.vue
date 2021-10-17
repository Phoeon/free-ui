<template>
    <icon class="ph-icon-theme"></icon>
</template>
<script lang="ts" setup>
import Icon from './base.vue'
</script>
<style lang="scss">
.ph-icon-theme{
    color: inherit;
    border-radius: 50%;
    border: 1px solid currentColor;
    &:before{
        content: "";
        top: 2px;
        bottom: 2px;
        left: 2px;
        right: 2px;
        background-image: linear-gradient(90deg,var(--ph-icon-bg),var(--ph-icon-bg) 50%,currentColor 50%);
        border-radius: inherit;
    }
}
</style>