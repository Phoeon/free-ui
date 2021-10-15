<template>
    <icon class="ph-icon-minus"/>
</template>
<script lang="ts" setup>
import Icon from './base.vue'
</script>
<style lang="scss">
.ph-icon-minus{
    &:before{
        content: "";
        width: var(--ph-icon-10);
        height: var(--ph-icon-2);
        background-color: var(--ph-icon-c);
        border-radius: 1px;
    }
}
</style>