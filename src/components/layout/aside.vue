<template>
    <div :class="['ph-aside',showAction?'ph-aside-pd':'']" :simple="toggleStatus">
        <div class="ph-logo" v-if="showLogo" @click="emits('logo-click')">
            <slot name="logo">
                <div class="ph-logo-avatar" :style="{backgroundImage:avatar}"></div>
                <span class="ph-logo-appname">{{appName}}</span>
            </slot>
        </div>
        <slot :toggle="toggleStatus&&dw>768"></slot>
        <div class="ph-aside-action" v-if="showAction">
            <slot name="action">
                <f-button shape="square" fillMode="none" @click="toggle">
                    <navicon size="28px"/>
                </f-button>
            </slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineExpose, defineProps, defineEmits, inject, Ref, ref } from 'vue'
import FButton from '../button/main.vue'
import Navicon from '../icon/navicon.vue'
import Mediaquery from '../../shared/media-query'
const props = defineProps({
    showLogo:{type:Boolean,default:true},
    showAction:{type:Boolean,default:true},
    avatar:String,
    appName:String
})
const phevt = inject("phevt") as {emit:(a:string,...b:any[])=>void}
const toggleStatus = inject("ph-aside-toggle") as Ref<boolean>
const dw = ref(document.documentElement.clientWidth)
const emits = defineEmits(['logo-click','update:toggle','toggle'])
const toggle = ()=>{
    phevt?.emit("aside:toggle")
}

Mediaquery.all((a,w:number)=>{
    dw.value = w
})
defineExpose({
    toggle
})
</script>
<style lang="scss">
.ph-aside{
    --ph-aside-action-h:40px;
    width: var(--ph-aside-width);
    background-color: var(--ph-aside-bg);
    background-clip: padding-box;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    max-height: 100vh;
    z-index: 2;
    transition: all .3s ease;
    .ph-logo{
        display: flex;
        flex: 0 0 60px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &-avatar{
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background-color: var(--ph-c-reverse);
            flex: 0 0 auto;
        }
        &-appname{
            font-weight: 500;
            color: var(--ph-c-d1);
            font-size: 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .ph-logo-avatar + .ph-logo-appname{
            margin-left: 10px;
        }
    }
    &-action{
        height:var(--ph-aside-action-h);
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        border-top: 1px solid var(--ph-bg-doc);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 var(--ph-pd-sm);
        .ph-button[shape=square]{
            width: 32px;
            height: 32px;
        }
    }
    &-pd{
        padding-bottom: var(--ph-aside-action-h);
    }
    
}
@media screen and (max-width: 769px){
    .ph-aside{
        z-index: var(--ph-zdx-aside);
        box-shadow: var(--ph-shadow-2);
        transition: transform .3s ease,box-shadow .3s ease;
        transform: translateX(0);
        &[simple=true]{
            transform: translateX(-100%);
            box-shadow: none;
        }
    }
}
@media screen and (min-width: 769px){
    .ph-aside{
        &[simple=true]{
            width: var(--ph-aside-toggle-width);
            .ph-logo-appname{
                display: none;
            }
            .ph-aside-action{
                justify-content: center;
            }
        }
    }
}

</style>