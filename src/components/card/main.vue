<template>
    <section class="ph-card">
        <div class="ph-card-header" v-if="title">
            <slot name="header" :title="title" :subTitle="subTitle">
                <h1 class="ph-card-title">
                    <custom-icon class="ph-card-icon" v-if="icon" :name="icon"/>
                    <span>{{title}}</span>
                </h1>
                <h3 class="ph-card-subtitle">{{subTitle}}</h3>
            </slot>
        </div>
        <div :class="['ph-card-body',slots.footer?'':'ph-card-pdb']"><slot></slot></div>
        <div class="ph-card-footer" v-if="slots.footer"><slot name="footer"></slot></div>
    </section>
</template>
<script lang="ts" setup>
import { defineProps, useSlots } from 'vue'
import { CustomIcon } from '../icon'
const slots = useSlots()
defineProps({
    title:String,
    subTitle:String,
    icon:String,
})
</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-card{
    background-color: var(--ph-card-bg);
    color: var(--ph-c);
    overflow: hidden;
    border-radius: 4px;
    margin-bottom: var(--ph-pd);
    font-size: var(--ph-fs);
    &-footer,
    &-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: var(--ph-gcard-th);
        padding: 0 var(--ph-pd);
    }
    &-header{
        color: var(--ph-c-d2);
        font-weight: var(--ph-fw-m);
        font-size: var(--ph-gcard-tfs);
        position: relative;
        &:after{
            @include blMx(var(--ph-bd));
            left: var(--ph-pd);
            right: 0;
        }
    }
    &-title{
        font-weight: var(--ph-fw-m);
        font-size: var(--ph-gcard-tfs);
        .ph-card-icon{
            margin-right: var(--ph-pd-sm);  
        }
    }
    &-subtitle{
        font-size: var(--ph-gcard-tfs-sm);
        font-weight: var(--ph-fw);
    }
    &-footer{
        font-size: var(--ph-gcard-fs-sm);
        color: var(--ph-c-l2);
    }
    &-body{
        flex: 1;
        overflow: auto;
        padding: var(--ph-pd-sm) var(--ph-pd) 0;
        font-size: var(--ph-gcard-fs);
        line-height: var(--ph-gcard-lh);
        -webkit-overflow-scrolling: touch;
        &.ph-card-pdb{
            padding-bottom: var(--ph-pd);
        }
    }
}
</style>