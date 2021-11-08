<template>
    <f-view style="position:relative">
        <f-card title="案例展示" class="btn-container">
            <f-button type="primary" @click="state.loading=true">打开局部loading</f-button>
            <f-button type="primary" @click="openLoading()">打开全局loading,2s后关闭</f-button>
        </f-card>
        <f-card title="案例box展示" class="btn-container">
            <f-button type="primary" @click="openLoading('always')">打开全局</f-button>
        </f-card>
        <f-card title="背景透明展示" class="btn-container">
            <f-button type="primary" @click="openLoading1(true)">打开全局</f-button>
        </f-card>
        <f-card title="背景自定义展示" class="btn-container">
            <f-button type="primary" @click="openLoading1(false,'#ff000033')">打开全局</f-button>
        </f-card>
        <f-card title="简单秒倒计展示" class="btn-container">
            <f-button type="primary" @click="openCount(5)">打开全局倒计5s</f-button>
        </f-card>
        <f-loading v-model="state.loading" @click="state.loading = false"/>
        <ph-pretty title="局部用法" lang="html">{{raw.c2}}</ph-pretty>
        <ph-pretty title="属性介绍">{{raw.c1}}</ph-pretty>
        <ph-pretty title="全局用法">{{raw.c3}}</ph-pretty>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FCard, FButton, FLoading, FGLoading } from '@/components'
import { reactive } from 'vue'
import * as raw from '../data/loading'

const state = reactive({
    loading:false
})
const openLoading = (showBox?:"always")=>{
    const close = FGLoading.show({showBox})
    setTimeout(()=>close(),2000)
}
const openLoading1 = (alpha:boolean,fill?:string)=>{
    const close = FGLoading.show({alpha:true,fill})
    setTimeout(()=>close(),2000)
}
const openCount = (countdown:number)=>{
    const close = FGLoading.show({showBox:"always",countdown,title:"倒计时：{#}s"})
}
</script>