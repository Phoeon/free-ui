<template>
    <f-view>
        <f-card class="btn-container" title="不同状态">
            <f-button @tap="open('success')" type="success">Success</f-button>
            <f-button @tap="open('warning')" type="warning">Warning</f-button>
            <f-button @tap="open('error')" type="danger">Error</f-button>
            <f-button @tap="open('info')" type="primary">Info</f-button>
            <f-button @tap="open('show')" >Default</f-button>
        </f-card>
        <f-card class="btn-container" title="位置上下">
            <f-button @tap="open('success','top')" type="success">Top</f-button>
            <f-button @tap="open('warning','center')" type="warning">Center</f-button>
            <f-button @tap="open('error','bottom')" type="danger">Bottom</f-button>
        </f-card>
        <f-card class="btn-container" title="模态阻止点击">
            <f-button @tap="open('success','center',true)" type="success">modal:true</f-button>
        </f-card>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FButton, FToast, FCard } from '@/components'
const open = (type:string,position:string,modal?:boolean)=>{
    const title = "你好中国啊";
    (FToast as any)[type](title,{position,modal})
}
</script>