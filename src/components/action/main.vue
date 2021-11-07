<template>
    <a href="javascript:void(0)" :class="['ph-action','ph-action-'+type]" :disabled="disabled"><slot></slot></a>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { IThemeType } from '../../shared/types'
const props = defineProps({
    type:{type:String as PropType<IThemeType>,default:"normal"},
    disabled:Boolean
})
</script>
<style lang="scss">
.ph-action{
    font-size: 15px;
    display: inline-block;
    height: 16px;
    line-height: 16px;
    padding: 0 3px;
    white-space: nowrap;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        font-weight: bold;
    }
    &-normal{
        color: var(--ph-c);
    }
    &-primary{
        color:var(--ph-primary)
    }
    &-success{
        color:var(--ph-success)
    }
    &-danger{
        color:var(--ph-danger)
    }
    &-info{
        color:var(--ph-info)
    }
    &-warning{
        color:var(--ph-warning)
    }
    &-noble{
        color:var(--ph-noble)
    }
    &[disabled=true]{
        opacity: .5;
        cursor: not-allowed;
    }
}
</style>