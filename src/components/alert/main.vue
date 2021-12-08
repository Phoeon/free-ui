<template>
    <transition name="ph-fade">
        <div :class="['ph-alert','ph-alert-'+type,title?'ph-alert-large':'']" v-if="modelValue">
            <div class="ph-alert-icon-wrap" v-if="type||icon">
                <custom-icon :style="{color:iconColor}" class="ph-status-icon" :name="icon" v-if="icon" :type="type"/>
                <circle-success class="ph-status-icon" type='success' v-else-if="type=='success'"/>
                <circle-info class="ph-status-icon" type='info' v-else-if="type=='info'"/>
                <circle-warning class="ph-status-icon" type='warning' v-else-if="type=='warning'"/>
                <circle-danger class="ph-status-icon" type='error' v-else-if="type=='error'"/>
            </div>
            <div class="ph-alert-body">
                <h1 class="ph-alert-title" v-if="title">{{title}}</h1>
                <p class="ph-alert-content"><slot>{{content}}</slot></p>
            </div>
            <f-action type="primary" v-if="link" :hover="state.hover" class="ph-alert-right" @click="onLink">查看详情</f-action>
            <f-action type="primary" v-else-if="action" :hover="state.hover" class="ph-alert-right" @click="onAction">查看详情</f-action>
            <times v-else @click="onClose" class="ph-alert-right ph-alert-close" :hover="true"/>
        </div>
    </transition>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, PropType, reactive } from 'vue'
import { CircleSuccess, CircleDanger, CircleInfo, CircleWarning, Times, CustomIcon } from '../icon'
import type { IAlertType } from '../../shared/types'
import FAction from '../action/main.vue'

const emits = defineEmits(['update:modelValue','action'])
const props = defineProps({
    type:{
        type:String as PropType<IAlertType>,
        default:"warning"
    },
    modelValue:Boolean,
    icon:String,
    iconColor:String,
    target:{type:String,default:"_blank"},
    link:String,
    action:Boolean,
    title:String,
    content:String,
})
const state = reactive({
    hover: !("ontouchstart" in document)
})
const onClose = ()=>{
    emits("update:modelValue",false)
}
const onAction = ()=>{
    emits('action')
    onClose()
}
const onLink = ()=>{
    onClose()
    if(!props.link)return
    if(props.target==="_blank"){
        const a = document.createElement("a") as HTMLAnchorElement;
        a.href = props.link
        a.target = "_blank"
        a.click()
    }else location.href = props.link
}
</script>
<style lang="scss">
.ph-alert{
    position: relative;
    box-sizing: border-box;
    backface-visibility: hidden;
    font-size: var(--ph-galert-fs);
    border-radius: 4px;
    transition: opacity .3s,transform .3s,top .3s,bottom .3s;
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
    padding: var(--ph-pd-sm) var(--ph-pd);
    background-color: var(--ph-block-bg);
    margin: var(--ph-pd) 0;
    &-warning{
        background-color: var(--ph-warning-bg);
        color: var(--ph-warning-c);
        border: 1px solid var(--ph-warning-bd);
    }
    &-success{
        background-color: var(--ph-success-bg);
        color: var(--ph-success-c);
        border: 1px solid var(--ph-success-bd);
    }
    &-info{
        background-color: var(--ph-info-bg);
        color: var(--ph-info-c);
        border: 1px solid var(--ph-info-bd);
    }
    &-error{
        background-color: var(--ph-danger-bg);
        color: var(--ph-danger-c);
        border: 1px solid var(--ph-danger-bd);
    }
    &-icon-wrap{
        height: var(--ph-galert-lh);
        display: flex;
        align-items: center;
    }
    &-body{
        line-height: var(--ph-galert-lh);
        word-break: break-word;
        flex: 1;
    }
    &-title{
        font-size: var(--ph-18);
        font-weight: bold;
        line-height: var(--ph-24);
        margin-bottom: var(--ph-6);
    }
    &-content{
        font-size: var(--ph-14);
        line-height: var(--ph-22);
    }
    .ph-status-icon{
        --ph-i-size:16px;
        font-size: var(--ph-galert-ih);
        margin-right: var(--ph-pd-sm);
    }
    .ph-custom-icon{
        &[type=success]{
            color: var(--ph-success);
        }
        &[type=info]{
            color: var(--ph-link);
        }
        &[type=warning]{
            color: var(--ph-warning);
        }
        &[type=error]{
            color: var(--ph-error);
        }
    }
    .ph-alert-right{
        cursor: pointer;
        margin: auto;
        font-weight: bold;
    }
    .ph-alert-close{
        --ph-stroke:var(--ph-c-l1);
        position: absolute;
        background-color: transparent;
        opacity: .5;
        right: var(--ph-pd-sm);
        top: var(--ph-12);
        color: var(--ph-c-l1);
        &[hover=true]:hover{
            opacity: 1;
        }
    }
    &.ph-alert-large{
        padding: var(--ph-pd) var(--ph-pd-lg);
        .ph-status-icon{
            --ph-i-size:var(--ph-21);
            font-size: var(--ph-21);
            margin-right: var(--ph-12);
        }
        .ph-alert-icon-wrap{
            height: var(--ph-24);
        }
    }
}
</style>
