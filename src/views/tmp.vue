<template>
    <f-view>
        <f-card title="滑块" :style="{backgroundColor:color.value}">
            <!-- <f-slider v-model="slider.v" :max="slider.max"></f-slider> -->
            <f-button @click="onClick">打开取色器</f-button>
        </f-card>
        <f-card title="取色器">
            <!-- <dt-color :value="color.value" :sample="true" @update="onUpdate"/> -->
        </f-card>
    </f-view>
</template>
<script lang="ts" setup>
import { FView,FCard,FButton, FCPicker} from '@/components'
import FSlider from '@/components/form/slider.vue'
import DtColor from '@/components/color/main.vue'
import { reactive } from 'vue'
const slider = reactive({
    max:100,
    v:30
})
const color = reactive({
    value:"#F10fcf"
})
const onUpdate = (v:string)=>{
    // console.log(v)
    color.value = v
}
const onClick = (e:Event)=>{
    FCPicker.show({
        value:"#00FF00",
        rect:(e.target as HTMLElement).getBoundingClientRect()
    }).done(v=>{
        color.value = v
    })
}
</script>