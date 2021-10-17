<template>
    <f-view>
        <f-card class="btn-container" title="不同颜色">
            <f-button>Default</f-button>
            <f-button type="primary">Primary</f-button>
            <f-button type="success">Success</f-button>
            <f-button type="danger">Danger</f-button>
            <f-button type="warning">Warning</f-button>
        </f-card>
        <f-card class="btn-container" title="不同填充">
            <f-button fillMode="outline">Default</f-button>
            <f-button fillMode="outline" type="primary">Primary</f-button>
            <f-button fillMode="outline" type="success">Success</f-button>
            <f-button fillMode="outline" type="danger">Danger</f-button>
            <f-button fillMode="outline" type="warning">Warning</f-button>
        </f-card>
        <f-card class="btn-container" title="不同填充">
            <f-button fillMode="none">Default</f-button>
            <f-button fillMode="none" type="primary">Primary</f-button>
            <f-button fillMode="none" type="success">Success</f-button>
            <f-button fillMode="none" type="danger">Danger</f-button>
            <f-button fillMode="none" type="warning">Warning</f-button>
        </f-card>
        <f-card class="btn-container" title="块级">
            <f-button type="primary" :block="true">Block</f-button>
            <f-button disabled type="primary" :block="true">Block</f-button>
            <f-button type="default" :block="true">Default</f-button>
            <f-button disabled type="default" :block="true">Default</f-button>
        </f-card>
        <f-card class="btn-container" title="不同尺寸">
            <f-button type="primary" size="mini">Mini</f-button>
            <f-button type="primary" size="small">Small</f-button>
            <f-button type="primary" >Normal</f-button>
            <f-button type="primary" size="large">Large</f-button>
        </f-card>
        <f-card class="btn-container" title="禁止状态">
            <f-button disabled>Default</f-button>
            <f-button disabled type="primary">Primary</f-button>
            <f-button disabled type="success">Success</f-button>
            <f-button disabled type="danger">Danger</f-button>
            <f-button disabled type="warning">Warning</f-button>
        </f-card>
        <f-card class="btn-container" title="loading状态">
            <f-button :loading="true" disabled type="primary">Loading</f-button>
            <f-button :loading="true" type="primary">Loading</f-button>
            <f-button :loading="true">Loading</f-button>
            <f-button :loading="true" disabled>Loading</f-button>
        </f-card>
        <f-card class="btn-container" title="下拉导航按钮">
            <f-button dropdown="up">浏览器</f-button>
            <f-button dropdown="down">浏览器</f-button>
            <f-button type="primary" dropdown="up">浏览器</f-button>
            <f-button type="primary" dropdown="down">浏览器</f-button>
        </f-card>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FButton, FCard } from '@/components'
</script>