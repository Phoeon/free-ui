<template>
    <f-view>
        <f-blockquote>结果预览：{{state.s}} </f-blockquote>
        <f-card title="单选">
            <f-tree :tree="TreeData" v-model="state.s"></f-tree>
        </f-card>
        <f-blockquote>结果预览：{{state.d}} </f-blockquote>
        <f-card title="多选">
            <f-tree :tree="TreeData" v-model="state.d"></f-tree>
        </f-card>
        <ph-pretty title="template" lang="html">{{raw.c1}}</ph-pretty>
        <ph-pretty title="script">{{raw.c2}}</ph-pretty>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FCard, FTree, FBlockquote } from '@/components'
import { reactive } from 'vue'
import Console from '@/shared/console'
import {TreeData} from '../data/treedata'
import * as raw from '../data/tree'
const state = reactive({
    s:'',
    d:[]
})
Console.noble('TreeData:',TreeData)
</script>