<template>
    <f-view>
        <f-card title="静态展示<该组件为web端组件>">
            <div class="flex-box">
                <f-pop-confirm :sample="true" title="确定要关闭么？" position="tl"></f-pop-confirm>
                <f-pop-confirm :sample="true" title="确定要关闭么？" position="tc"></f-pop-confirm>
                <f-pop-confirm :sample="true" title="确定要关闭么？" position="tr"></f-pop-confirm>
            </div>
            <br/>
            <div class="flex-box">
                <f-pop-confirm :sample="true" title="确定要关闭么？" position="bl"></f-pop-confirm>
                <f-pop-confirm :sample="true" title="确定要关闭么？" position="bc"></f-pop-confirm>
                <f-pop-confirm :sample="true" title="确定要关闭么？" position="br"></f-pop-confirm>
            </div>
            <br/>
            <div class="flex-box">
                <f-pop-confirm theme="reverse" :sample="true" title="确定要关闭么？" position="lt"></f-pop-confirm>
                <f-pop-confirm theme="reverse" :sample="true" title="确定要关闭么？" position="lc"></f-pop-confirm>
                <f-pop-confirm theme="reverse" :sample="true" title="确定要关闭么？" position="lb"></f-pop-confirm>
            </div>
            <br/>
            <div class="flex-box">
                <f-pop-confirm theme="reverse" :sample="true" title="确定要关闭么？" position="rt"></f-pop-confirm>
                <f-pop-confirm theme="reverse" :sample="true" title="确定要关闭么？" position="rc"></f-pop-confirm>
                <f-pop-confirm theme="reverse" :sample="true" title="确定要关闭么？" position="rb"></f-pop-confirm>
            </div>
        </f-card>
        <f-blockquote type="primary">该组件以vue指令的形式对外提供</f-blockquote>
        <f-card title="动态展示">
            <f-button-group :container="true">
                <f-button type="success" v-confirm:click="{...data,position:'tl'}">上左</f-button>
                <f-button type="danger" v-confirm:click="{...data,position:'tc'}">上中</f-button>
                <f-button type="warning" v-confirm:click="{...data,position:'tr'}">上右</f-button>
            </f-button-group>
            <br/>
            <f-button-group :container="true">
                <f-button type="success" v-confirm:click="{...data,theme:'reverse',position:'bl'}">下左</f-button>
                <f-button type="danger" v-confirm:click="{...data,theme:'reverse',position:'bc'}">下中</f-button>
                <f-button type="warning" v-confirm:click="{...data,theme:'reverse',position:'br'}">下右</f-button>
            </f-button-group>
            <br/>
            <f-button-group :container="true">
                <f-button type="success" v-confirm:click="{...data,position:'lt'}">左上</f-button>
                <f-button type="danger" v-confirm:click="{...data,position:'lc'}">左中</f-button>
                <f-button type="warning" v-confirm:click="{...data,position:'lb'}">左下</f-button>
            </f-button-group>
            <br/>
            <f-button-group :container="true">
                <f-button type="success" v-confirm:click="{...data,position:'rt'}">右上</f-button>
                <f-button type="danger" v-confirm:click="{...data,position:'rc'}">右中</f-button>
                <f-button type="warning" v-confirm:click="{...data,position:'rb'}">右下</f-button>
            </f-button-group>
        </f-card>
        <ph-pretty title="template" lang="html">{{raw.c1}}</ph-pretty>
        <ph-pretty title="script">{{raw.c2}}</ph-pretty>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FCard, FBlockquote, FButtonGroup, FButton, FPop ,FToast } from '@/components'
import FPopConfirm from '@/components/pop/confirm.vue'
import vConfirm from '@/directives/popconfirm'
import * as raw from '../data/popconfirm'

const data = {
    title:"确定要关闭么？？",
    done(){
        FToast.success("确定事件")
    },
    cancel(){
        FToast.error("取消事件")
    }
}
</script>