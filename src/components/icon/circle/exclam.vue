<template>
    <icon shape="circle" class="ph-icon-circle-exclam"/>
</template>
<script lang="ts" setup>
import Icon from '../exclam.vue'
</script>
<style lang="scss">
.ph-icon-circle-exclam{
    transform: rotate(180deg);
    &:before{
        top:calc(var(--ph-icon-ratio) * 3);
    }
    &:after{
        bottom:calc(var(--ph-icon-ratio) * 3);
    }
}
</style>