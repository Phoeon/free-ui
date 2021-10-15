<template>
    <div class="ph-view">
        <div class="ph-title">不同状态</div>
        <div class="ph-block">
            <f-button type="success" @click="open('success')">打开通知</f-button>
            <f-button type="primary" @click="open('info')">打开通知</f-button>
            <f-button type="warning" @click="open('warning')">打开通知</f-button>
            <f-button type="danger" @click="open('error')">打开通知</f-button>
            <f-button @click="open()">打开通知</f-button>
        </div>
        <div class="ph-title">mini状态</div>
        <div class="ph-block">
            <f-button type="success" @click="open('success',true)">打开通知</f-button>
            <f-button type="primary" @click="open('info',true)">打开通知</f-button>
            <f-button type="warning" @click="open('warning',true)">打开通知</f-button>
            <f-button type="danger" @click="open('error',true)">打开通知</f-button>
            <f-button @click="open('',true)">打开通知</f-button>
        </div>
        <div class="ph-title">确认通知</div>
        <div class="ph-block">
            <f-button @click="openConfirm()">打开通知</f-button>
        </div>
        <div class="ph-title">点击消息关闭clickClose</div>
        <div class="ph-block">
            <f-button @click="openConfirm1()">打开通知</f-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { FButton ,FNotification } from '@/components'
const open = (type:string,mini?:boolean)=>{
    (FNotification as any)[type||"notify"]("一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。",{title:"通知信息标题",clickClose:true,mini,autoClose:false})
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
    FNotification.notify("一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。",{title:"通知信息标题",confirm:{}})
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
    FNotification.notify("一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。",{title:"通知信息标题",clickClose:true, confirm:{},mini:true})
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