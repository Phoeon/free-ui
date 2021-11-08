<template>
    <f-view style="padding:0">
        <br/>
        <f-accordion v-model="state.v1" :block='true'>
            <f-accordion-item title="面板一">我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容。</f-accordion-item>
            <f-accordion-item title="面板二">我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容。</f-accordion-item>
            <f-accordion-item title="面板三">我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容。</f-accordion-item>
            <f-accordion-item title="面板四">我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容。</f-accordion-item>
        </f-accordion>
        <f-accordion v-model="state.v2" :block='true' :accordion="true">
            <f-accordion-item title="面板一">我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容。</f-accordion-item>
            <f-accordion-item title="面板二">我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容。</f-accordion-item>
            <f-accordion-item title="面板三">我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容。</f-accordion-item>
        </f-accordion>
        <f-accordion v-model="state.v3">
            <f-accordion-item title="面板一">我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容。</f-accordion-item>
            <f-accordion-item title="面板二">我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容。</f-accordion-item>
            <f-accordion-item title="面板三" :disabled="true" >我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容。</f-accordion-item>
            <f-accordion-item title="面板四">我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容。</f-accordion-item>
        </f-accordion>
        <f-accordion v-model="state.v4" :accordion="true">
            <f-accordion-item title="面板一">我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容。</f-accordion-item>
            <f-accordion-item title="面板二">我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容。</f-accordion-item>
            <f-accordion-item title="面板三" :disabled="true" >我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容。</f-accordion-item>
        </f-accordion>
        <ph-pretty title="template" lang="html">{{raw.c1}}</ph-pretty>
        <ph-pretty title='script'>{{raw.c2}}</ph-pretty>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FAccordion, FAccordionItem } from '@/components'
import { reactive } from 'vue'
import * as raw from '../data/accordion'
const state = reactive({
    v1:0,
    v2:2,
    v3:0,
    v4:0
})
</script>