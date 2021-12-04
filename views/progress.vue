<template>
    <f-view>
        <f-card title="进度条">
            <f-progress-bar :max="100" :value="0"></f-progress-bar>
            <f-progress-bar :max="100" :value="10" type="warning"></f-progress-bar>
            <f-progress-bar :max="100" :value="20" type="danger"></f-progress-bar>
            <f-progress-bar :max="100" :value="30"></f-progress-bar>
            <f-progress-bar :max="100" :value="40" :striped="true"></f-progress-bar>
            <f-progress-bar :max="100" :value="50" :striped="true" :animate="true"></f-progress-bar>
            <f-progress-bar :max="100" :value="60" format="%"></f-progress-bar>
            <f-progress-bar :max="100" :value="70" format="完成度v/m"></f-progress-bar>
            <f-progress-bar :max="100" :value="80" :strokeWidth="12"></f-progress-bar>
            <f-progress-bar :max="100" :value="90" :status="-1"></f-progress-bar>
            <f-progress-bar :max="100" :value="100" :status="1"></f-progress-bar>
        </f-card>
        <ph-pretty lang="html">{{raw.c1}}</ph-pretty>
        <f-card title="自定义颜色进度条">
            <f-progress-bar :max="100" :value="10" fill="red"></f-progress-bar>
            <f-progress-bar :max="100" :value="20" fill="orange"></f-progress-bar>
            <f-progress-bar :max="100" :value="30" fill="yellow"></f-progress-bar>
            <f-progress-bar :max="100" :value="40" fill="green"></f-progress-bar>
            <f-progress-bar :max="100" :value="50" fill="#0ff"></f-progress-bar>
            <f-progress-bar :max="100" :value="60" fill="blue"></f-progress-bar>
            <f-progress-bar :max="100" :value="70" fill="purple"></f-progress-bar>
        </f-card>
        <ph-pretty lang="html">{{raw.c2}}</ph-pretty>
        <f-card title="环形">
            <div style="display:flex;flex-wrap:wrap;justify-content: space-between;gap: 10px;">
                <f-progress-circle :max="100" :value="0"></f-progress-circle>
                <f-progress-circle :max="100" :value="10" type="warning"></f-progress-circle>
                <f-progress-circle :max="100" :value="20" type="danger"></f-progress-circle>
                <f-progress-circle :max="100" :value="30"></f-progress-circle>
                <f-progress-circle :max="100" :value="40"></f-progress-circle>
                <f-progress-circle :max="100" :value="50"></f-progress-circle>
                <f-progress-circle :max="100" :value="60" format="%"></f-progress-circle>
                <f-progress-circle :max="100" :value="70" format="完成度v/m"></f-progress-circle>
                <f-progress-circle :max="100" :value="80" :strokeWidth="12"></f-progress-circle>
                <f-progress-circle :max="100" :value="90" :status="-1"></f-progress-circle>
                <f-progress-circle :max="100" :value="100" :status="1"></f-progress-circle>
                <f-progress-circle :max="100" :value="10" fill="red"></f-progress-circle>
                <f-progress-circle :max="100" :value="20" fill="orange"></f-progress-circle>
                <f-progress-circle :max="100" :value="30" fill="yellow"></f-progress-circle>
                <f-progress-circle :max="100" :value="40" fill="green"></f-progress-circle>
                <f-progress-circle :max="100" :value="50" fill="#0ff"></f-progress-circle>
                <f-progress-circle :max="100" :value="60" fill="blue"></f-progress-circle>
                <f-progress-circle :max="100" :value="70" fill="purple"></f-progress-circle>
            </div>
        </f-card>
        <ph-pretty lang="html">{{raw.c3}}</ph-pretty>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FCard, FProgressBar, FProgressCircle } from '@/components'
import * as raw from '../data/progress'
</script>