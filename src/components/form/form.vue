<template>
<div :class="['ph-form',title?'ph-form-hasheader':'']">
    <div class="ph-form-header" v-if="title">{{title}}</div>
    <f-grid padding="0" :sm="1" :md="2" :lg="2" :xl="3"><slot></slot></f-grid>
    <div class="ph-form-action" v-if="slots.action">
        <slot name="action"></slot>
    </div>
</div>
</template>
<script lang="ts" setup>
import { provide, defineProps, useSlots } from 'vue'
import FGrid from '../grid/grid.vue'

const slots = useSlots()
defineProps({
    title:String
})
provide('validator',null)
</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-form{
    background-color: var(--ph-block-bg);
    color: var(--ph-c);
    padding: var(--ph-pd);
    margin-bottom: var(--ph-pd);
    border-radius: 2px;
    line-height: var(--ph-24);
    &-hasheader{
        padding-top: 0;
    }
    &-header,
    &-action{
        display: flex;
        align-items: center;
    }
    &-header{
        height: var(--ph-gcard-th);
        color: var(--ph-c-d2);
        font-weight: var(--ph-fw-m);
        font-size: var(--ph-gcard-tfs);
        position: relative;
        margin-bottom: var(--ph-pd);
        &:after{
            @include blMx(var(--ph-bc-1));
        }
    }
    &-action{
        justify-content: center;
        margin-top: var(--ph-pd-lg);
        gap: var(--ph-pd);
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