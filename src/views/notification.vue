<template>
    <f-view>
        <f-card class="btn-container" title="不同状态">
            <f-button type="success" @click="open('success')">打开通知</f-button>
            <f-button type="primary" @click="open('info')">打开通知</f-button>
            <f-button type="warning" @click="open('warning')">打开通知</f-button>
            <f-button type="danger" @click="open('error')">打开通知</f-button>
            <f-button @click="open()">打开通知</f-button>
        </f-card>
        <f-card class="btn-container" title="确认通知">
            <f-button @click="openConfirm()">打开通知</f-button>
        </f-card>
        <f-card class="btn-container" title="点击消息关闭clickClose">
            <f-button @click="openConfirm1()">打开通知</f-button>
        </f-card>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FButton ,FNotification, FCard } from '@/components'
const open = (type:string)=>{
    (FNotification as any)[type||"notify"]("一系列的信息描述。。。",{title:"通知信息标题",clickClose:true})
    .click((data:any)=>{
        console.log(data)
    })
    .close((data:any)=>{
        console.log(data)
    })
    .confirm((data:any)=>{
        console.log(data)
    })
}
const openConfirm = ()=>{
    FNotification.notify("一系列的信息描述。。。",{title:"通知信息标题",confirm:{}})
    .click(data=>{
        console.log(data)
    })
    .close(data=>{
        console.log(data)
    })
    .confirm(data=>{
        console.log(data)
    })
}
const openConfirm1 = ()=>{
    FNotification.notify("一系列的信息描述。。。",{title:"通知信息标题",clickClose:true, confirm:{}})
    .click(data=>{
        console.log(data)
    })
    .close(data=>{
        console.log(data)
    })
    .confirm(data=>{
        console.log(data)
    })
}
</script>