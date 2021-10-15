<template>
    <icon class="ph-icon-spin"/>
</template>
<script lang="ts" setup>
import '../../../assets/style/animation.scss'
import Icon from '../base.vue'
</script>
<style lang="scss">
.ph-icon-spin{
    background-color: transparent;
    border: none;
    &:before{
        content: "";
        width: var(--ph-icon-10);;
        height: var(--ph-icon-10);;
        display: inline-block;
        border-radius: 50%;
        border: inherit;
        border-style: solid;
        border-width: 1px;
        border-color: var(--ph-icon-c);
        border-top-color: transparent;
        transform-origin: center;
        backface-visibility: hidden;
        animation: ph-rotate 1s linear infinite;
    }
}
</style>