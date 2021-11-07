<template>
    <div class="ph-breadcrumb">
        <div class="ph-breadcrumb-item" v-for="(item,idx) in paths" :key="idx">{{item.name}}</div>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { INavNode  } from '../../shared/types'
defineProps({
    paths:{type: Array as PropType<Array<INavNode>>,default:()=>[]}
})
</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-breadcrumb{
    display: flex;
    align-items: center;
    color: var(--ph-c);
    font-weight: var(--ph-fw-m);
    font-size: 15px;
    line-height: 1;
    &-item{
        flex: 0 0 auto;
        padding-right: 5px;
        margin-right: 5px;
        &:nth-last-of-type(n+2){
            position: relative;
            &:after{
                @include rlMx(var(--ph-c));
                top: 2px;
                bottom: 2px;
            }
        }
        &:nth-last-of-type(1){
            color: var(--ph-primary);
        }
    }
}
</style>