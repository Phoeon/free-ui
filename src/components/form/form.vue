<template>
<div class="ph-form">
    <f-grid padding="0" :sm="1" :md="2" :lg="2" :xl="3"><slot></slot></f-grid>
    <div class="ph-form-action">
        <slot name="action"></slot>
    </div>
</div>
</template>
<script lang="ts" setup>
import { provide } from 'vue'
import FGrid from '../grid/grid.vue'
provide('validator',null)
</script>
<style lang="scss">
.ph-form{
    background-color: var(--ph-block-bg);
    color: var(--ph-c);
    padding: var(--ph-pd-small);
    margin-bottom: var(--ph-pd-small);
    &-action{
        display: flex;
        margin-top: var(--ph-pd);
        justify-content: center;
        gap: var(--ph-pd-small);
    }
}
@media screen and (max-width: 768px){
    .ph-form-action{
        flex-direction: column;
        .ph-btn{
            width: 100%;
        }
    }
}
</style>