<template>
    <div :class="['ph-divider','ph-divider-'+type,'ph-divider-'+align]" :style="style"><slot></slot></div>
</template>
<script lang="ts" setup>
import { computed, defineProps, PropType, StyleValue } from 'vue'
import { IThemeType } from '../../shared/types'
const props = defineProps({
    type:{type:String as PropType<IThemeType>,default:'normal'},
    align:{type:String as PropType<'left'|'center'|'right'>,default:'center'},
    offset:{type:Number,default:32}
})
const style = computed(()=>{
    return {
        '--ph-divider-offset':props.offset+'px'
    } as StyleValue
})
</script>
<style lang="scss">
.ph-divider{
    padding: var(--ph-pd);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--ph-pd);
    color:var(--ph-normal-c);
    font-weight: var(--ph-fw-m);
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &-primary{
        color:var(--ph-primary);
    }
    &-info{
        color:var(--ph-info);
    }
    &-success{
        color:var(--ph-success);
    }
    &-danger{
        color:var(--ph-danger);
    }
    &-warning{
        color:var(--ph-warning);
    }
    &-noble{
        color:var(--ph-noble);
    }
    &-normal{
        color:var(--ph-c);
    }
    &:before,
    &:after{
        content: "";
        flex: 1;
        height: 0;
        border-top: 1px dashed currentColor;
    }
    &:before{
        margin-right: var(--ph-pd);
    }
    &:after{
        margin-left: var(--ph-pd);
    }
    &-left{
        &:before{
            width: var(--ph-divider-offset);
            flex: 0 0 auto;
        }
    }
    &-right{
        &:after{
            width: var(--ph-divider-offset);
            flex: 0 0 auto;
        }
    }
    a,strong,span,label{
        font-weight: bold;
    }
}
</style>