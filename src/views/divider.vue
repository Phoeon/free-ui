<template>
    <f-view>
        <f-card title="案例展示">
            <f-divider align="left" type="primary">分割线</f-divider>
            <f-divider type="info">分割线</f-divider>
            <f-divider align="right" type="success">分割线</f-divider>
            <f-divider type="danger">分割线</f-divider>
            <f-divider align="left" :offset="150" type="warning">分割线</f-divider>
            <f-divider type="noble">分割线</f-divider>
            <f-divider>分割线</f-divider>
        </f-card>
        <f-divider type="primary">分割线</f-divider>
        <f-divider type="info">分割线</f-divider>
        <f-divider type="success">分割线</f-divider>
        <f-divider type="danger">分割线</f-divider>
        <f-divider type="warning">分割线</f-divider>
        <f-divider type="noble">分割线</f-divider>
        <f-divider>分割线</f-divider>
        <ph-pretty lang="html">{{raw.c1}}</ph-pretty>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FCard, FDivider } from '@/components'
import * as raw from '../data/divider'
</script>