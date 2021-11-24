<template>
    <f-view>
        <f-card title="动态展示">
            <p>hover触发</p>
            <f-button-group :container="true">
                <f-dropdown type="primary" position="bl" :dataSource="data.dataSource" @action="onAction">下左</f-dropdown>
                <f-dropdown type="success" position="bc" :dataSource="data.dataSource" @action="onAction">下中</f-dropdown>
                <f-dropdown type="danger" position="br" :dataSource="data.dataSource" :offset="12" @action="onAction">下右</f-dropdown>
            </f-button-group>
            <br/>
            <f-button-group :container="true">
                <f-dropdown type="primary" position="tl" :dataSource="data.dataSource" @action="onAction">上左</f-dropdown>
                <f-dropdown type="success" position="tc" :dataSource="data.dataSource" @action="onAction">上中</f-dropdown>
                <f-dropdown type="danger" position="tr" :dataSource="data.dataSource" @action="onAction">上右</f-dropdown>
            </f-button-group>
            <p>click触发</p>
            <f-button-group :container="true">
                <f-dropdown type="primary" trigger="click" position="tl" :dataSource="data.dataSource" @action="onAction">上左</f-dropdown>
                <f-dropdown type="success" trigger="click" position="tc" :dataSource="data.dataSource" @action="onAction">上中</f-dropdown>
                <f-dropdown type="danger" trigger="click" position="tr" :dataSource="data.dataSource" @action="onAction">上右</f-dropdown>
            </f-button-group>
        </f-card>
        <ph-pretty lang="html">{{raw.c1}}</ph-pretty>
        <f-card title="静态展示">
            <div class="flex-box-col" style="margin-bottom:16px;">
                <f-dropdownlist :sample="true" position="tl" :dataSource="data.dataSource"></f-dropdownlist>
                <f-dropdownlist :sample="true" position="tc" :dataSource="data.dataSource"></f-dropdownlist>
                <f-dropdownlist :sample="true" position="tr" :dataSource="data.dataSource"></f-dropdownlist>
            </div>
            <div class="flex-box-col" style="margin-bottom:16px;">
                <f-dropdownlist :sample="true" position="bl" :dataSource="data.dataSource"></f-dropdownlist>
                <f-dropdownlist :sample="true" position="bc" :dataSource="data.dataSource"></f-dropdownlist>
                <f-dropdownlist :sample="true" position="br" :dataSource="data.dataSource"></f-dropdownlist>
            </div>
        </f-card>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FCard, FButtonGroup, FDropdown, FToast } from '@/components'
import FDropdownlist from '@/components/pop/dropdown.vue'
import * as raw from '../data/dropdown'
const onAction = (e:any)=>{
    FToast.show(e.text)
}
const data = {
    content:"描述文字描述文字",
    dataSource:[{
        text:"添加朋友",
        value:1,
        icon:"chrome"
    },{
        text:"发起群聊",
        value:1,
        icon:"firefox"
    },{
        text:"扫一扫",
        value:1,
        icon:"safari"
    },{
        text:"我的二维码/收款",
        value:1,
        icon:"opera"
    },{
        text:"帮助中心",
        value:1,
        icon:"internet-explorer"
    }]
}
</script>