<template>
    <f-view>
        <f-card title="确认框">
            <f-button-group :container="true">
                <f-button size="mini" type="primary" @click="openConfirm">确认框</f-button>
                <f-button size="mini" type="danger" @click="openAlert">警告框</f-button>
                <f-button size="mini" type="primary" @click="openOption">多选项框</f-button>
            </f-button-group>
        </f-card>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FCard, FButton, FButtonGroup, FModal, FToast } from '@/components'
const openConfirm = ()=>{
    FModal.confirm({
        title:"操作失败",
        content:"账号密码不一致，是否重试？",
        cancelText:"关闭",
        doneText:"重试"
    }).done((status:number)=>{
        if(status)
        FToast.success("确认事件")
        else FToast.error("取消事件")
    })
}
const openAlert = ()=>{
    FModal.alert({
        title:"欢迎！",
        content:"北京欢迎您！"
    })
}
const openOption = ()=>{
    const options = [{
            text:"选项一",
            value:0,
            type:"success"
        },{
            text:"选项二",
            value:1,
            type:"danger"
        },{
            text:"选项三",
            value:2,
            type:"warning"
        }]
    FModal.option({
        title:"欢迎！",
        content:"北京欢迎您！",
        options
    }).done((a?:unknown)=>{
        if(a===undefined)FToast.error("取消事件")
        else 
            FToast.success(options[a as number].text)
    })
}
</script>