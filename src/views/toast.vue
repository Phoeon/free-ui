<template>
    <f-view>
        <f-card class="btn-container" title="不同状态">
            <f-button @click="open('success')" type="success">Success</f-button>
            <f-button @click="open('warning')" type="warning">Warning</f-button>
            <f-button @click="open('error')" type="danger">Error</f-button>
            <f-button @click="open('info')" type="primary">Info</f-button>
            <f-button @click="open('show')" >Default</f-button>
        </f-card>
        <f-card class="btn-container" title="位置上下">
            <f-button @click="open('success','top')" type="success">Top</f-button>
            <f-button @click="open('warning','center')" type="warning">Center</f-button>
            <f-button @click="open('error','bottom')" type="danger">Bottom</f-button>
        </f-card>
        <f-card class="btn-container" title="模态阻止点击">
            <f-button @click="open('success','center',true)" type="primary">modal:true</f-button>
        </f-card>
        <f-card class="btn-container" title="自定义图标">
            <f-button @click="open('show','center',true,'upload')" type="primary">上传图片</f-button>
        </f-card>
        <f-card class="btn-container" title="多行内容">
            <f-button @click="open1()" type="primary">多行内容</f-button>
        </f-card>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FButton, FToast, FCard } from '@/components'

const open = (type:string,position:string,modal?:boolean,icon?:string)=>{
    const title = "你好中国啊";
    (FToast as any)[type](title,{position,modal,icon}).close(()=>{
        console.log("toast close")
    })
}
const open1 = ()=>FToast.show("当内容有很多的时候会如何，当内容有很多的时候会如何，当内容有很多的时候会如何，")
</script>