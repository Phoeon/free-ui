<template>
    <f-view>
        <f-card title="静态展示<该组件为web端组件>">
            <div class="flex-box-col">
                <f-tooltip content="描述" position="t"></f-tooltip>
                <br/>
                <f-tooltip content="描述文字" position="b"></f-tooltip>
                <br/>
                <f-tooltip content="描述文字描述文" position="l"></f-tooltip>
                <br/>
                <f-tooltip content="描述文字描述文字描述文字描述" position="r"></f-tooltip>
            </div>
        </f-card>
        <f-card title="动态展示">
            <f-button-group :container="true">
                <f-button type="success" v-tooltip="{...data,position:'t'}">上</f-button>
                <f-button type="danger" v-tooltip="{...data,position:'b'}">下</f-button>
                <f-button type="warning" v-tooltip="{...data,position:'l'}">左</f-button>
                <f-button type="warning" v-tooltip="{...data,position:'r'}">右</f-button>
            </f-button-group>
        </f-card>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FCard, FButtonGroup, FButton, FPop, FTooltip ,FToast } from '@/components'
import vTooltip from '@/directives/tooltip'
const data = {
    content:"描述文字描述文字"
}
</script>
<style lang="scss">
.flex-box-col{
    .ph-tooltip{
        margin-bottom: 20px;
    }
}
</style>