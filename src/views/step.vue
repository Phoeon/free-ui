<template>
    <f-view>
        <f-card title="水平案例">
            <f-steps :steps="steps"></f-steps>
            <br/>
            <f-steps :steps="steps" size="small"></f-steps>
        </f-card>
        <f-card title="垂直案例">
            <div style="display:flex;justify-content:space-around;">
                <f-steps :steps="steps" direction="vt"></f-steps>
                <f-steps :steps="steps" direction="vt" size="small"></f-steps>
            </div>
        </f-card>
        <ph-pretty lang="html">{{raw.c1}}</ph-pretty>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FCard, FSteps } from '@/components'
import * as raw from '../data/step'
const steps = [{
    title:"处理完成",
    desc:"描述内容文字",
    status:1
},{
    title:"处理中",
    desc:"描述内容文字",
    status:0
},{
    title:"待处理",
    desc:"描述内容文字",
    status:-1
}]
</script>