<template>
    <div class="ph-main" :flex="flex">
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
import { provide, ref } from 'vue'
const flex = ref(false)
provide("registerBar",()=>flex.value=true)
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
        justify-content: space-between;
    }
}
</style>