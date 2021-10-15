<template>
    <icon shape="circle" class="ph-icon-circle-time"/>
</template>
<script lang="ts" setup>
import Icon from '../base.vue'
</script>
<style lang="scss">
.ph-icon-circle-time{
    background-color: transparent;
    &:before{
        content: "";
        border: 1px solid var(--ph-icon-c);
        border-top: none;
        border-right: none;
        width: var(--ph-icon-6);
        height: var(--ph-icon-6);
        transform: translate3d(50%,-50%,0);
    }
}
</style>