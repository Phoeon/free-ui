<template>
    <f-view class="tabs-view">
        <f-tabs v-model="currentTab" fillMode="none">
            <f-tab-panel title="案例展示" :disabled="false">panel1</f-tab-panel>
            <f-tab-panel title="脚本案例" :disabled="false">panel2</f-tab-panel>
            <f-tab-panel title="样式案例" >panel3</f-tab-panel>
        </f-tabs>
        <f-tabs v-model="currentTab" fillMode="outline">
            <f-tab-panel title="选项零" :disabled="false">panel1</f-tab-panel>
            <f-tab-panel title="选项一" :disabled="false">panel2</f-tab-panel>
            <f-tab-panel title="选项二" >panel3</f-tab-panel>
            <f-tab-panel title="选项三" >panel4</f-tab-panel>
            <f-tab-panel title="选项四" >panel5</f-tab-panel>
        </f-tabs>
        <f-tabs v-model="currentTab" fillMode="normal">
            <f-tab-panel icon="chrome" title="案例展示" :disabled="false">panel1</f-tab-panel>
            <f-tab-panel icon="firefox" title="脚本案例" :disabled="false">panel2</f-tab-panel>
            <f-tab-panel icon="safari" title="样式案例" >panel3</f-tab-panel>
        </f-tabs>
        <f-tabs v-model="currentTab" fillMode="reverse">
            <f-tab-panel icon="chrome" title="案例展示" :disabled="false">panel1</f-tab-panel>
            <f-tab-panel icon="firefox" title="脚本案例" :disabled="false">panel2</f-tab-panel>
            <f-tab-panel icon="safari" title="样式案例" >panel3</f-tab-panel>
        </f-tabs>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FTabs, FTabPanel } from '@/components'
import { ref } from 'vue'
const currentTab = ref(1)
</script>
<style lang="scss">
@media screen and (max-width:768px){
    .tabs-view{
        padding: 0;
    }
}
</style>