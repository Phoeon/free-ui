<template>
    <section class="ph-panel">
        <div class="ph-panel-header" v-if="slots.header"><slot name="header">{{title}}</slot></div>
        <div class="ph-panel-body"><slot></slot></div>
        <div class="ph-panel-footer" v-if="slots.footer"><slot name="footer"></slot></div>
    </section>
</template>
<script lang="ts" setup>
import { defineProps, useSlots } from 'vue'
const slots = useSlots()
defineProps({
    title:String
})
</script>
<style lang="scss">
.ph-panel{
    background-color: var(--ph-panel-bg);
    padding: 0 var(--ph-pd);
    color: var(--ph-c);
    overflow: hidden;
    border-radius: 4px;
    &-footer,
    &-header{
        height: 45px;
        display: flex;
        align-items: center;
    }
    &-header{
        border-bottom: 1px solid var(--ph-bc);
        color: var(--ph-c-d1);
        font-weight: 500;
    }
    &-footer{
        border-top: 1px solid var(--ph-bc);
    }
    &-body{
        flex: 1;
        overflow: auto;
        padding: var(--ph-pd-small) 0;
        -webkit-overflow-scrolling: touch;
    }
}
</style>