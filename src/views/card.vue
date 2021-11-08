<template>
    <f-view class="ph-card-view">
        <f-grid padding="0" :lg="2" :xl="3" :md="2">
            <f-grid-item>
                <f-card title="测试面板" subTitle="备注内容" icon="bar-chart">
                    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                    <template v-slot:footer>
                        描述说明内容文本
                    </template>
                </f-card>
            </f-grid-item>
            <f-grid-item>
                <f-card title="测试面板">
                    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                </f-card>
            </f-grid-item>
            <f-grid-item>
                <f-card title="测试面板">
                    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                </f-card>
            </f-grid-item>
            <f-grid-item>
                <f-card title="测试面板">
                    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                </f-card>
            </f-grid-item>
            <f-grid-item>
                <f-card title="测试面板">
                    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                </f-card>
            </f-grid-item>
            <f-grid-item>
                <f-card title="测试面板">
                    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                </f-card>
            </f-grid-item>
            <f-grid-item>
                <f-card title="测试面板">
                    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                </f-card>
            </f-grid-item>
        </f-grid>
        <br/>
        <ph-pretty lang="html">{{raw.c1}}</ph-pretty>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FCard, FGrid, FGridItem } from '@/components'
import * as raw from '../data/divider'
</script>
<style lang="scss">
.ph-card-view{
    .ph-card{
        margin-bottom: 0;
    }
}
</style>