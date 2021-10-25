<template>
    <div class="ph-main" :flex="flex">
        <div class="ph-main-topbar">
            <f-button class="ph-aside-toggle" shape="square" fillMode="none" @click="toggleAside">
                <template v-slot:leftIcon><navicon/></template>
            </f-button>
            <!-- <h class="ph-main-topbar-title">个人中心</h> -->
            <div class="ph-main-topbar-action" v-if="slots.topbar"><slot name="topbar"></slot></div>
        </div>
        <slot></slot>
        <div class="ph-main-bottombar" v-if="slots.bottombar"><slot name="bottombar"></slot></div>
    </div>
</template>
<script lang="ts" setup>
import { inject, useSlots } from 'vue'
import FButton from '../button/main.vue'
import Navicon from '../icon/navicon.vue'

const phevt = inject("phevt") as {emit:(a:string,...b:any[])=>void}
const toggleAside = ()=>phevt?.emit("aside:toggle")
const slots = useSlots()
const flex = !!(slots.topbar||slots.bottombar)
</script>
<style lang="scss">
.ph-main{
    min-height: 100%;
    max-width: 100%;
    flex: 1;
    &[flex=true]{
        display: flex;
        flex-direction: column;
    }
    &-topbar,
    &-bottombar{
        position: relative;
        flex: 0 0 auto;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        z-index: 1;
        padding: 0 var(--ph-pd);
        height: var(--ph-gtopbar-h);
        font-size: var(--ph-gtopbar-fs);
        background-color: var(--ph-topbar-bg);
    }
    &-topbar{
        box-shadow: 0 3px 3px 0 rgb(0 0 0 /10%);
        justify-content: space-between;
        &-action{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex: 1;
        }
        &-title{
            font-size: var(--ph-gtopbar-tfs);
            font-weight: var(--ph-fw-m);
        }
        .ph-icon{
            --ph-i-size:var(--ph-gicon);
            font-size:var(--ph-gicon);
        }
    }
}
@media screen and (min-width: 769px){
    .ph-aside-toggle{
        display: none;
    }
    // .ph-main-topbar-title{
    //     display: none;
    // }
}
</style>