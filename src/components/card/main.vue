<template>
    <section class="ph-card">
        <div class="ph-card-header"><slot name="header">{{title}}</slot></div>
        <div class="ph-card-body"><slot></slot></div>
        <div class="ph-card-footer" v-if="slots.footer"><slot name="footer"></slot></div>
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
.ph-card{
    background-color: var(--ph-card-bg);
    color: var(--ph-c);
    overflow: hidden;
    border-radius: 4px;
    margin-bottom: var(--ph-pd);
    &-footer,
    &-header{
        height: 45px;
        display: flex;
        align-items: center;
        padding: 0 var(--ph-pd);
    }
    &-header{
        border-bottom: 1px solid var(--ph-bc-1);
        color: var(--ph-c-d1);
        font-weight: 500;
    }
    &-footer{
        border-top: 1px solid var(--ph-bc-1);
    }
    &-body{
        flex: 1;
        overflow: auto;
        padding: var(--ph-pd-small) var(--ph-pd);
        -webkit-overflow-scrolling: touch;
    }
}
</style>