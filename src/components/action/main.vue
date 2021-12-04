<template>
    <a href="javascript:void(0)" :class="['ph-action','ph-action-'+type,state.hover&&!disabled?'ph-action-hover':'']" :disabled="disabled"><slot></slot></a>
</template>
<script lang="ts" setup>
import { defineProps, PropType, reactive } from 'vue'
import { IThemeType } from '../../shared/types'
const props = defineProps({
    type:{type:String as PropType<IThemeType>,default:"normal"},
    disabled:Boolean
})
const state = reactive({
    hover:!('ontouchmove' in window)
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
    opacity: 1;
    transition: opacity .15s ease,color .15s ease;

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
    &-hover:hover{
        opacity: .8;
    }
    &-hover.ph-action-normal:hover{
        opacity: 1;
        color: var(--ph-primary);
    }
    &[disabled=true]{
        opacity: .5;
        cursor: not-allowed;
    }
}
</style>