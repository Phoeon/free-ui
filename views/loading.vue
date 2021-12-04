<template>
    <f-view style="position:relative">
        <f-card title="案例展示-局部spin加载">
            <f-button-group :container="true">
                <f-button type="info" @click="state.ld1=true">打开默认</f-button>
                <f-button type="success" @click="state.ld2=true">box</f-button>
                <f-button type="danger" @click="state.ld3=true">背景透明</f-button>
                <f-button type="warning" @click="state.ld4=true">自定义背景</f-button>
                <f-button type="noble" @click="state.ld5=true">倒计时3s</f-button>
            </f-button-group>
        </f-card>
        <ph-pretty lang="html">{{raw.c1}}</ph-pretty>
        <f-blockquote type="warning">全局加载皆为单例模式，且只可通过js唤起</f-blockquote>
        <f-card title="案例展示-全局spin加载">
            <f-button-group :container="true">
                <f-button type="info" @click="openSpin()">打开默认</f-button>
                <f-button type="success" @click="openSpin({showBox:'always'})">box</f-button>
                <f-button type="danger" @click="openSpin({alpha:true})">背景透明</f-button>
                <f-button type="warning" @click="openSpin({bg:'#ff000033'})">自定义背景</f-button>
                <f-button type="noble" @click="openSpin({countdown:3})">倒计时3s</f-button>
            </f-button-group>
        </f-card>
        <ph-pretty title="接口介绍">{{raw.c2}}</ph-pretty>
        <f-card title="案例展示-全局bar加载">
            <f-button-group :container="true">
                <f-button type="info" @click="openBar()">打开默认</f-button>
                <f-button type="danger" @click="openBar({bg:'#FF00FF'})">自定义背景</f-button>
                <f-button type="warning" @click="openBar({size:8})">自定义高度</f-button>
                <f-button type="success" @click="openBar({size:8})">开始loading</f-button>
                <f-button type="noble" @click="endBar()">结束loading</f-button>
            </f-button-group>
        </f-card>
        <ph-pretty title="接口介绍">{{raw.c3}}</ph-pretty>


        <f-loading-spin v-model="state.ld1" @click="state.ld1 = false"/>
        <f-loading-spin v-model="state.ld2" @click="state.ld2 = false" showBox="always" />
        <f-loading-spin v-model="state.ld3" @click="state.ld3 = false" :alpha="true" />
        <f-loading-spin v-model="state.ld4" @click="state.ld4 = false" bg="#ff000033" />
        <f-loading-spin v-model="state.ld5" :countdown="3" />

        <ph-pretty title="全局FGLoading(用法同上)">{{raw.c4}}</ph-pretty>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FCard, FButton, FButtonGroup, FBlockquote, FLoadingSpin , FGLoading, FGLoadingSpin, FGLoadingBar, IFLoadingSpinOption, IFLoadingBarOption } from '@/components'
import { reactive } from 'vue'
import * as raw from '../data/loading'

const state = reactive({
    ld1:false,
    ld2:false,
    ld3:false,
    ld4:false,
    ld5:false,
})
const openSpin = (opt?:IFLoadingSpinOption)=>{
    FGLoadingSpin.start(opt)
    if(opt?.countdown)return
    setTimeout(()=>FGLoadingSpin.end(),2000)
}
const openBar = (opt?:IFLoadingBarOption)=>{
    FGLoadingBar.start(opt)
}
const endBar = ()=>{
    FGLoadingBar.end()
}
</script>