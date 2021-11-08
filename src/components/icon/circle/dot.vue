<template>
    <icon shape="circle" class="ph-icon-circle-dot"/>
</template>
<script lang="ts" setup>
import Icon from '../base.vue'
</script>
<style lang="scss">
.ph-icon-circle-dot{
    &:before{
        content: "";
        width: var(--ph-icon-8);
        height: var(--ph-icon-8);
        background-color: currentColor;
        border-radius: 50%;
    }
}
</style>