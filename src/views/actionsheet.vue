<template>
    <f-view>
        <f-card title="案例展示">
            <f-button-group :container="true">
                <f-button size="small" type="primary" @click="openList">打开list</f-button>
                <f-button size="small" type="primary" @click="openGrid">打开grid</f-button>
                <f-button size="small" type="primary" @click="state1.visible1=true">禁止关闭</f-button>
            </f-button-group>
        </f-card>
        <!-- <f-card title="js调用">
            <f-button-group :container="true">
                <f-button type="primary" @click="openList1">打开option</f-button>
            </f-button-group>
        </f-card> -->
        <f-actionsheet v-model="state.value" v-model:visible="state.visible" :title="state.title" :desc="state.desc" :options="state.options" @action="onAction"></f-actionsheet>
        <f-actionsheet type="grid" v-model="state1.value" v-model:visible="state1.visible" :title="state1.title" :desc="state1.desc" :options="state1.options" @action="onAction"></f-actionsheet>
        <f-actionsheet :autoClose="false" type="grid" v-model="state1.value" v-model:visible="state1.visible1" :title="state1.title" :desc="state1.desc" :options="state1.options" @action="onAction1"></f-actionsheet>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FCard, FButton, FButtonGroup, FActionsheet, FToast } from '@/components'
// import FGActionsheet from '@/components/actionsheet'
import { reactive } from 'vue'
const state  = reactive({
    visible:false,
    title:"支付方式",
    desc:"请选择您的支付方式",
    value:1,
    options:[{
        text:"支付宝",
        value:0,
        type:"primary"
    },{
        text:"微信",
        value:1,
        // type:"primary"
    },{
        text:"信用卡",
        value:2,
        // disabled:true,
        // type:"primary"
    }]
})
const state1  = reactive({
    visible:false,
    visible1:false,
    // title:"可以配置",
    // desc:"请选择您的支付方式",
    value:1,
    options:[{
        text:"发送好友",
        value:0,
        icon:"chrome",
        iconColor:"#f00"
    },{
        text:"新浪微博",
        value:1,
        icon:"firefox"
    },{
        text:"微信好友",
        value:2,
        icon:"safari"
    },{
        text:"微信好友",
        value:3,
        icon:"internet-explorer"
    },{
        text:"QQ好友",
        value:4,
        icon:"opera",
        iconColor:"#00f"
    },{
        text:"朋友圈",
        value:5,
        icon:"wechat",
        disabled:true
    },{
        text:"telegram",
        value:5,
        icon:"telegram",
        iconColor:"#00f"
    },{
        text:"小红书",
        value:6,
        icon:"reddit",
        iconColor:"#ff0"
    },{
        text:"twitter",
        value:6,
        icon:"twitter"
    }]
})
// const openList1 = ()=>{
//     FGActionsheet.showList({
//         title:"支付方式",
//         desc:"请选择您的支付方式",
//         modelValue:1,
//         options:[{
//             text:"支付宝",
//             value:0,
//             type:"primary"
//         },{
//             text:"微信",
//             value:1,
//             // type:"primary"
//         },{
//             text:"信用卡",
//             value:2,
//         }]
//     })
// }
const openList = ()=>{
    state.visible = true
}
const openGrid = ()=>{
    state1.visible = true
}

const onAction = (b:Record<string,any>,c:()=>void)=>{
    if(b){
        FToast.success(b.text)
    }else 
        FToast.error("取消事件")
}
const onAction1 = (b:Record<string,any>,c:()=>void)=>{
    if(b){
        FToast.success(b.text)
    }else 
        FToast.error("取消事件")
    // c()
}
</script>