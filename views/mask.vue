<template>
    <f-view class="ph-view">
        <f-button @click="state.showMask=true">标签的方式</f-button>
        <f-button @click="onClick">js打开方式</f-button>
        <teleport to="body">
            <f-mask v-model="state.showMask" >
                <template v-slot:default="props">
                你好<button @click="props.hide()">关闭</button>
                </template>
            </f-mask>
        </teleport>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FButton } from '@/components'
import FMask from '@/components/mask/main.vue'
import FM from '@/components/mask'
import { reactive } from 'vue'
const state = reactive({
    showMask:false
})
const onClick = ()=>{
    FM.show()
}
</script>