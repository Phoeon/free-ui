<template>
    <header class="ph-header">
        <div class="ph-header-left" v-if="slots.left||showToggle">
            <f-button md-visible="false" v-if="showToggle" class="ph-aside-toggle" shape="square" fillMode="none" @click="toggleAside">
                <template v-slot:leftIcon><navicon/></template>
            </f-button>
            <slot name="left"></slot>
        </div>
        <slot></slot>
        <div class="ph-header-right" v-if="slots.right"><slot name="right"></slot></div>
    </header>
</template>
<script lang="ts" setup>
import { inject, useSlots, defineProps } from 'vue'
import FButton from '../button/main.vue'
import Navicon from '../icon/navicon.vue'
const phevt = inject("phevt") as {emit:(a:string,...b:any[])=>void}
const toggleAside = ()=>phevt?.emit("aside:toggle")
const slots = useSlots()
defineProps({
    showToggle:{type:Boolean,default:true}
})
</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-header{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    flex: 0 0 auto;
    box-sizing: border-box;
    z-index: 1;
    padding: 0 var(--ph-pd);
    height: var(--ph-gtopbar-h);
    font-size: var(--ph-gtopbar-fs);
    background-color: var(--ph-topbar-bg);
    color: var(--ph-c-d1);
    &:after{
        @include blMx(var(--ph-bd));
    }
    &-right,
    &-left{
        height: 100%;
        display: flex;
        align-items: center;
        gap:4px;
        flex: 1;
    }
    &-left{
        justify-content: flex-start;
    }
    &-right{
        justify-content: flex-end;
    }
    .ph-icon{
        --ph-i-size:var(--ph-gicon);
        font-size:var(--ph-gicon);
    }
}
</style>