<template>
    <icon class="ph-icon ph-internal-icon" />
</template>
<script lang="ts" setup>
import Icon from './icon.vue'
</script>
<style lang="scss">
.ph-internal-icon{
    --ph-icon-ratio:calc(var(--ph-i-size,16px) * 0.0625);
    --ph-icon-6:calc(var(--ph-icon-ratio) * 6);
    --ph-icon-8:calc(var(--ph-icon-ratio) * 8);

    position: relative;
    &:before,
    &:after{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        display: block;
        transition: all .15s ease;
        box-sizing: border-box;
    }
}
</style>