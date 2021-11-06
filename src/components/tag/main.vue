<template>
    <div :class="cns">
        <slot name="iconLeft">
            <plus v-if="role==='add'"/>
        </slot>
        <span><slot></slot></span>
        <slot name="iconRight">
            <times v-if="role==='close'"/>
        </slot>
    </div>
</template>
<script lang="ts" setup>
import { IThemeType } from '../../shared/types'
import { computed, defineProps, PropType } from 'vue'
import { Times,Plus } from '../icon'
const props = defineProps({
    type:{type:String as PropType<IThemeType|'light'|'dark'>,default:"normal"},
    outline:Boolean,
    role:String as PropType<'close'|'add'>
})
const cns = computed(()=>{
    const cns = ['ph-tag','ph-tag-'+props.type]
    if(props.outline) cns.push('ph-tag-outline')
    if(props.role) cns.push('ph-pointer')
    return cns
})
</script>
<style lang="scss">
.ph-tag{
    height: 22px;
    font-size: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-style: solid;
    border-radius: 2px;
    vertical-align: middle;
    cursor: default;
    padding: 0 var(--ph-pd-sm);
    margin: 0 var(--ph-pd-sm);
    &-noble{
        background-color: var(--ph-noble-bg);
        color: var(--ph-noble-c);
        border-color: var(--ph-noble-bd);
    }
    &-primary{
        background-color: var(--ph-primary-bg);
        color: var(--ph-primary-c);
        border-color: var(--ph-primary-bd);
    }
    &-success{
        background-color: var(--ph-success-bg);
        color: var(--ph-success-c);
        border-color: var(--ph-success-bd);
    }
    &-info{
        background-color: var(--ph-info-bg);
        color: var(--ph-info-c);
        border-color: var(--ph-info-bd);
    }
    &-danger{
        background-color: var(--ph-danger-bg);
        color: var(--ph-danger-c);
        border-color: var(--ph-danger-bd);
    }
    &-warning{
        background-color: var(--ph-warning-bg);
        color: var(--ph-warning-c);
        border-color: var(--ph-warning-bd);
    }
    &-normal{
        background-color: var(--ph-bg-a1);
        color: var(--ph-c);
        border-color: var(--ph-bd-1);
    }
    &-light{
        background-color: var(--ph-c-white);
        color:#595959;
        border-color:#595959;
    }
    &-dark{
        background-color: #333333;
        color:#ccc;
        border-color:#ccc;
    }
    &-outline{
        border-style: dashed;
    }
}
</style>