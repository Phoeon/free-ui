<template>
    <f-view>
        <f-card title="静态展示<该组件为web端组件>">
            <div class="flex-box">
                <f-popover :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="tl"></f-popover>
                <f-popover :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="tc"></f-popover>
                <f-popover :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="tr"></f-popover>
            </div>
            <br/>
            <div class="flex-box">
                <f-popover :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="bl"></f-popover>
                <f-popover :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="bc"></f-popover>
                <f-popover :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="br"></f-popover>
            </div>
            <br/>
            <div class="flex-box">
                <f-popover theme="reverse" :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="lt"></f-popover>
                <f-popover theme="reverse" :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="lc"></f-popover>
                <f-popover theme="reverse" :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="lb"></f-popover>
            </div>
            <br/>
            <div class="flex-box">
                <f-popover theme="reverse" :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="rt"></f-popover>
                <f-popover theme="reverse" :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="rc"></f-popover>
                <f-popover theme="reverse" :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="rb"></f-popover>
            </div>
        </f-card>
        <f-card title="动态展示">
            <f-button-group :container="true">
                <f-button type="success" v-popover="{...data,position:'tl'}">上左</f-button>
                <f-button type="danger" v-popover="{...data,position:'tc'}">上中</f-button>
                <f-button type="warning" v-popover="{...data,position:'tr'}">上右</f-button>
            </f-button-group>
            <br/>
            <f-button-group :container="true">
                <f-button type="success" v-popover="{...data,theme:'reverse',position:'bl'}">下左</f-button>
                <f-button type="danger" v-popover="{...data,theme:'reverse',position:'bc'}">下中</f-button>
                <f-button type="warning" v-popover="{...data,theme:'reverse',position:'br'}">下右</f-button>
            </f-button-group>
            <br/>
            <f-button-group :container="true">
                <f-button type="success" v-popover="{...data,position:'lt'}">左上</f-button>
                <f-button type="danger" v-popover="{...data,position:'lc'}">左中</f-button>
                <f-button type="warning" v-popover="{...data,position:'lb'}">左下</f-button>
            </f-button-group>
            <br/>
            <f-button-group :container="true">
                <f-button type="success" v-popover="{...data,theme:'reverse',position:'rt'}">右上</f-button>
                <f-button type="danger" v-popover="{...data,theme:'reverse',position:'rc'}">右中</f-button>
                <f-button type="warning" v-popover="{...data,theme:'reverse',position:'rb'}">右下</f-button>
            </f-button-group>
        </f-card>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FCard, FButtonGroup, FButton, FPop ,FToast } from '@/components'
import vPopover from '@/directives/popover'
import FPopover from '@/components/pop/over.vue'
const data = {
    title:"问题提示",
    content:"描述文字描述文字描述文字描述"
}
</script>