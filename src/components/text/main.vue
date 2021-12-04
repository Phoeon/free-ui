<template>
    <p :class="['ph-text','ph-text-'+type]" :role="role" :block="block"><slot></slot></p>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { IThemeType } from '../../shared/types'
const props = defineProps({
    type:{type:String as PropType<IThemeType>,default:"normal"},
    role:String as PropType<'title'>,
    block:Boolean
})
</script>
<style lang="scss">
.ph-text{
    font-size: 15px;
    display: inline-block;
    line-height: 1.5;
    padding: 0 3px;

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
    &[role=title]{
        font-weight: var(--ph-fw-m);
        color: var(--ph-c-d1);
    }
    &[block=true]{
        display: block;
        flex: 1 0 auto;
    }
}
</style>