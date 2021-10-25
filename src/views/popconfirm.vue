<template>
    <f-view>
        <f-card title="静态展示<该组件为web端组件>">
            <div class="flex-box">
                <f-pop-confirm title="确定要关闭么？" position="tl"></f-pop-confirm>
                <f-pop-confirm title="确定要关闭么？" position="tc"></f-pop-confirm>
                <f-pop-confirm title="确定要关闭么？" position="tr"></f-pop-confirm>
            </div>
            <br/>
            <div class="flex-box">
                <f-pop-confirm title="确定要关闭么？" position="bl"></f-pop-confirm>
                <f-pop-confirm title="确定要关闭么？" position="bc"></f-pop-confirm>
                <f-pop-confirm title="确定要关闭么？" position="br"></f-pop-confirm>
            </div>
            <br/>
            <div class="flex-box">
                <f-pop-confirm title="确定要关闭么？" position="lt"></f-pop-confirm>
                <f-pop-confirm title="确定要关闭么？" position="lc"></f-pop-confirm>
                <f-pop-confirm title="确定要关闭么？" position="lb"></f-pop-confirm>
            </div>
            <br/>
            <div class="flex-box">
                <f-pop-confirm title="确定要关闭么？" position="rt"></f-pop-confirm>
                <f-pop-confirm title="确定要关闭么？" position="rc"></f-pop-confirm>
                <f-pop-confirm title="确定要关闭么？" position="rb"></f-pop-confirm>
            </div>
        </f-card>
        <f-card title="动态展示">
            <f-button-group :container="true">
                <f-button type="success" v-confirm:click="{...data,position:'tl'}">上左</f-button>
                <f-button type="danger" v-confirm:click="{...data,position:'tc'}">上中</f-button>
                <f-button type="warning" v-confirm:click="{...data,position:'tr'}">上右</f-button>
            </f-button-group>
            <br/>
            <f-button-group :container="true">
                <f-button type="success" v-confirm:click="{...data,position:'bl'}">下左</f-button>
                <f-button type="danger" v-confirm:click="{...data,position:'bc'}">下中</f-button>
                <f-button type="warning" v-confirm:click="{...data,position:'br'}">下右</f-button>
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
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FCard, FButtonGroup, FButton, FPop, FPopConfirm ,FToast } from '@/components'
import vConfirm from '@/directives/popconfirm'
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
<style lang="scss">
.flex-box{
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    gap: 10px;
}
</style>