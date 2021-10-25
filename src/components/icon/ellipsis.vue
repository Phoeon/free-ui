<template>
    <icon class="ph-icon-ellipsis"/>
</template>
<script lang="ts" setup>
import Icon from './base.vue'
</script>
<style lang="scss">
.ph-icon-ellipsis{
    &:before{
        content: "";
        width: var(--ph-icon-2);
        height: var(--ph-icon-2);
        background-color: var(--ph-icon-c);
        box-shadow: calc(var(--ph-icon-ratio) * 4) 0 0 0 var(--ph-icon-c),calc(var(--ph-icon-ratio) * -4) 0 0 0 var(--ph-icon-c);
    }
}
</style>