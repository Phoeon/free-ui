<template>
    <div class="ph-view">
        <div class="ph-title">不同颜色</div>
        <div class="ph-block">
            <f-button>Default</f-button>
            <f-button type="primary">Primary</f-button>
            <f-button type="success">Success</f-button>
            <f-button type="danger">Danger</f-button>
            <f-button type="warning">Warning</f-button>
        </div>
        <div class="ph-title">不同填充 fillMode=outline</div>
        <div class="ph-block">
            <f-button fillMode="outline">Default</f-button>
            <f-button fillMode="outline" type="primary">Primary</f-button>
            <f-button fillMode="outline" type="success">Success</f-button>
            <f-button fillMode="outline" type="danger">Danger</f-button>
            <f-button fillMode="outline" type="warning">Warning</f-button>
        </div>
        <div class="ph-title">不同填充 fillMode=none</div>
        <div class="ph-block">
            <f-button fillMode="none">Default</f-button>
            <f-button fillMode="none" type="primary">Primary</f-button>
            <f-button fillMode="none" type="success">Success</f-button>
            <f-button fillMode="none" type="danger">Danger</f-button>
            <f-button fillMode="none" type="warning">Warning</f-button>
        </div>
        <div class="ph-title">块级</div>
        <div class="ph-block">
            <f-button type="primary" :block="true">Block</f-button>
            <f-button disabled type="primary" :block="true">Block</f-button>
            <f-button type="default" :block="true">Default</f-button>
            <f-button disabled type="default" :block="true">Default</f-button>
        </div>
        <div class="ph-title">不同尺寸</div>
        <div class="ph-block">
            <f-button type="primary" size="mini">Mini</f-button>
            <f-button type="primary" size="small">Small</f-button>
            <f-button type="primary" >Normal</f-button>
            <f-button type="primary" size="large">Large</f-button>
        </div>
        <div class="ph-title">禁止状态</div>
        <div class="ph-block">
            <f-button disabled>Default</f-button>
            <f-button disabled type="primary">Primary</f-button>
            <f-button disabled type="success">Success</f-button>
            <f-button disabled type="danger">Danger</f-button>
            <f-button disabled type="warning">Warning</f-button>
        </div>
        <div class="ph-title">loading状态</div>
        <div class="ph-block">
            <f-button :loading="true" disabled type="primary">Loading</f-button>
            <f-button :loading="true" type="primary">Loading</f-button>
            <f-button :loading="true">Loading</f-button>
            <f-button :loading="true" disabled>Loading</f-button>
        </div>
        <div class="ph-title">下拉导航按钮</div>
        <div class="ph-block">
            <f-button dropdown="up">浏览器</f-button>
            <f-button dropdown="down">浏览器</f-button>
            <f-button type="primary" dropdown="up">浏览器</f-button>
            <f-button type="primary" dropdown="down">浏览器</f-button>
        </div>
        <!-- <div class="ph-title">主题按钮：默认primary</div>
        <div class="ph-block">
            <f-button type="theme">主题按钮</f-button>
        </div> -->
    </div>
</template>
<script lang="ts" setup>
import { FButton } from '@/components'
</script>