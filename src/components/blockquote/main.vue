<template>
    <div :class="['ph-blockquote','ph-blockquote-'+type]"><slot></slot></div>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import type { IThemeType } from '../../shared/types'
defineProps({
    type:{type:String as PropType<IThemeType>,default:'normal'}
})
</script>
<style lang="scss">
.ph-blockquote{
    padding: var(--ph-pd);
    border-radius: 3px 0 0 3px;
    border-left: 5px solid var(--ph-bd);
    margin-bottom: var(--ph-pd);
    background-color: var(--ph-bg-a1-reverse);
    color:var(--ph-normal-c);
    font-weight: var(--ph-fw-m);
    &-primary{
        color:var(--ph-primary);
        border-color: var(--ph-primary);
    }
    &-info{
        color:var(--ph-info);
        border-color: var(--ph-info);
    }
    &-success{
        color:var(--ph-success);
        border-color: var(--ph-success);
    }
    &-danger{
        color:var(--ph-danger);
        border-color: var(--ph-danger);
    }
    &-warning{
        color:var(--ph-warning);
        border-color: var(--ph-warning);
    }
    &-noble{
        color:var(--ph-noble);
        border-color: var(--ph-noble);
    }
    &-normal{
        color:var(--ph-c);
        border-color: var(--ph-c);
    }
    a,strong,span,label{
        font-weight: bold;
    }
}
</style>