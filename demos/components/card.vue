<template>
<div :id="id">
    <f-card class="www-card" :title="title">
        <template #header="scope">
            <div class="www-card-hleft">{{scope.title}}</div>
            <div class="www-card-hright">
                <f-button fillMode="none" shape="square" v-tooltip="{content:'查看代码'}" @click="state.showCode=!state.showCode"><custom-icon name="code"/></f-button>
                <f-button :disabled="!state.showCode" fillMode="none" shape="square" v-tooltip="{content:'复制代码'}" @click="refCode.copyCode?.()"><custom-icon name="copy"/></f-button>
            </div>
        </template>
        <slot/>
    </f-card>
    <ph-pretty v-show="state.showCode" ref="refCode" class="www-code" lang="html"><slot name="code"/></ph-pretty>
</div>
</template>
<script lang="ts" setup>
import { FCard,FButton, FIcon, vTooltip } from '@phoeon/free-ui'
import { defineProps, PropType, reactive, ref } from 'vue'
import type PhPretty from './pretty.vue'
const { CustomIcon } = FIcon
const refCode = ref<InstanceType<typeof PhPretty>>()
defineProps({
    title:String,
    id:String
})
const state = reactive({
    showCode:false
})
</script>
<style lang="scss">
.www-card{
    border-radius: 8px 8px 0 0;
    &-hleft{
        display: flex;
        justify-content: flex-start;
    }
    &-hright{
        display: flex;
        justify-content: flex-end;
    }
}
.www-code{
    border-radius: 0 0 8px 8px!important;
    margin-top: -15px;
    .ph-pretty-header{
        display: none!important;
    }
}
</style>