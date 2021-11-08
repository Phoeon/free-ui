<template>
    <f-view>
        <f-card title="静态展示<该组件为web端组件>">
            <div class="tooltip">
                <f-tooltip :sample="true" content="描述" position="tc"></f-tooltip>
                <br/>
                <f-tooltip :sample="true" content="描述文字" position="bc"></f-tooltip>
                <br/>
                <f-tooltip :sample="true" content="描述文字描述文" position="l"></f-tooltip>
                <br/>
                <f-tooltip :sample="true" content="描述文字描述文字描述文字描述" position="r"></f-tooltip>
            </div>
        </f-card>
        <f-blockquote type="primary">该组件以vue指令的形式对外提供</f-blockquote>
        <f-card title="动态展示">
            <f-button-group :container="true">
                <f-button type="success" v-tooltip="{...data,position:'tc'}">上</f-button>
                <f-button type="danger" v-tooltip="{...data,position:'bc'}">下</f-button>
                <f-button type="warning" v-tooltip="{...data,position:'l'}">左</f-button>
                <f-button type="warning" v-tooltip="{...data,position:'r'}">右</f-button>
            </f-button-group>
        </f-card>
        <ph-pretty lang="html">{{raw.c1}}</ph-pretty>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FCard, FButtonGroup, FBlockquote, FButton, FPop ,FToast } from '@/components'
import FTooltip from '@/components/pop/tooltip.vue'
import vTooltip from '@/directives/tooltip'
import * as raw from '../data/tooltip'
const data = {
    content:"描述文字描述文字"
}
</script>
<style lang="scss">
.tooltip{
    .ph-tooltip{
        margin-bottom: 20px;
    }
}
</style>