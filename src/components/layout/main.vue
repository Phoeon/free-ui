<template>
    <div class="ph-main" :flex="flex">
        <slot name="header"></slot>
        <slot></slot>
        <div class="ph-main-bottombar" v-if="slots.bottombar"><slot name="bottombar"></slot></div>
    </div>
</template>
<script lang="ts" setup>
import { useSlots } from 'vue'
const slots = useSlots()
const flex = !!(slots.header||slots.bottombar)
</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-main{
    min-height: 100%;
    max-width: 100%;
    flex: 1;
    position: relative;
    overflow: hidden;
    &[flex=true]{
        display: flex;
        flex-direction: column;
    }
    &-bottombar{
        position: relative;
        flex: 0 0 auto;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        z-index: 1;
        padding: 0 var(--ph-pd-lg);
        height: var(--ph-gtopbar-h);
        font-size: var(--ph-gtopbar-fs);
        background-color: var(--ph-topbar-bg);
    }
}
</style>