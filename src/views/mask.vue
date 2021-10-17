<template>
    <f-view class="ph-view">
        <f-button @click="state.showMask=true">打开mask</f-button>
        <f-mask :visible="state.showMask" @click="state.showMask=false">你好</f-mask>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FButton, FMask } from '@/components'
import { reactive } from 'vue'
const state = reactive({
    showMask:false
})
</script>