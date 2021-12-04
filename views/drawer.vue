<template>
    <f-view>
        <f-card title="案例展示" class="btn-container">
            <f-button type="primary" @click="openDrawer('top')">上</f-button>
            <f-button type="primary" @click="openDrawer('bottom')">下</f-button>
            <f-button type="primary" @click="openDrawer('left')">左</f-button>
            <f-button type="primary" @click="openDrawer('right')">右</f-button>
        </f-card>
        <teleport to="body">
        <f-drawer v-model="state.visible" :position="state.position">
            <p>阿莱克斯就发牢骚计分卡索科洛夫大家</p>
            <p>阿莱克斯就发牢骚计分卡索科洛夫大家</p>
            <p>阿莱克斯就发牢骚计分卡索科洛夫大家</p>
            <p>阿莱克斯就发牢骚计分卡索科洛夫大家</p>
            <p>阿莱克斯就发牢骚计分卡索科洛夫大家</p>
        </f-drawer>
        </teleport>
        <ph-pretty lang="html" title="template">{{raw.c1}}</ph-pretty>
        <ph-pretty title="script">{{raw.c2}}</ph-pretty>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FCard, FButton, FDrawer } from '@/components'
import { reactive } from 'vue'
import * as raw from '../data/drawer'
const state = reactive({
    visible:false,
    position:""
})
const openDrawer = (position:string)=>{
    state.visible = true
    state.position = position
}
</script>