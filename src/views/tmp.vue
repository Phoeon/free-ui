<template>
    <f-view>
        <f-card title="滑块">
            <f-slider v-model="slider.v" :max="slider.max"></f-slider>
            <f-button @click="onClick" :style="{backgroundColor:color.value}">打开取色器</f-button>
        </f-card>
        <f-card title="块引用">
            <f-blockquote type="primary">阿死了都快减肥撒懒得看阿死掉<span>了飞机撒</span>到了副科级阿死了大家发送大量开发阿死里打飞机撒代理</f-blockquote>
            <f-blockquote type="info">阿死了都快减肥撒懒得看阿死掉了飞机撒到了副科级阿死了大<a>家发送大量</a>开发阿死里打飞机撒代理</f-blockquote>
            <f-blockquote type="success">阿死了都快减肥撒懒得看阿死掉了飞机撒到了副科级阿死了大家发送大量开发阿死里打飞机撒代理</f-blockquote>
            <f-blockquote type="danger">阿死了都快减肥撒懒得看阿死掉了飞机撒到了副科级阿死了大家发送大量开发阿死里打飞机撒代理</f-blockquote>
            <f-blockquote type="warning">阿死了都快减肥撒懒得看阿死掉了飞机撒到了副科级阿死了大家发送大量开发阿死里打飞机撒代理</f-blockquote>
            <f-blockquote type="noble">阿死了都快减肥撒懒得看阿死掉了飞机撒到了副科级阿死了大家发送大量开发阿死里打飞机撒代理</f-blockquote>
            <f-blockquote>阿死了都快减肥撒懒得看阿死掉了飞机撒到了副科级阿死了大家发送大量开发阿死里打飞机撒代理</f-blockquote>
        </f-card>
        <f-card title="分割线">
            <f-divider type="primary">阿死了都快减肥撒懒得看阿死掉<span>了飞机撒</span></f-divider>
            <f-divider type="info">阿死了副科级阿死了大<a>家发送大量</a></f-divider>
            <f-divider align="left" type="success">阿死了都快减肥撒懒得看阿死掉了飞机撒</f-divider>
            <f-divider align="right" type="danger">阿死了都快减肥撒懒得看阿死掉了飞机撒</f-divider>
            <f-divider type="warning">阿死了都快减肥撒懒得看阿死掉了飞机撒</f-divider>
            <f-divider type="noble">阿死了都快减肥撒懒得看阿死掉了飞机撒</f-divider>
            <f-divider>阿死了都快减肥撒懒得看阿死掉了飞机撒</f-divider>
        </f-card>
        <f-card title="标签">
            <f-tag type="primary">吃饭</f-tag>
            <f-tag type="success">睡觉</f-tag>
            <f-tag type="info">上厕所</f-tag>
            <f-tag type="danger">刷牙</f-tag>
            <f-tag type="warning">洗脸</f-tag>
            <f-tag type="noble">上班</f-tag>
            <f-tag type="normal">坐地铁</f-tag>
            <f-tag type="light">下班</f-tag>
            <f-tag type="dark">回家</f-tag>
            <f-tag type="light" :outline="true">标签</f-tag>
            <f-tag type="dark" :outline="true">标签</f-tag>
            <f-tag role="close">标签</f-tag>
            <f-tag type="light" :outline="true" role="add">标签</f-tag>
        </f-card>
    </f-view>
</template>
<script lang="ts" setup>
import { FView,FCard,FButton, FCPicker,FBlockquote,FDivider} from '@/components'
import FSlider from '@/components/form/slider.vue'
import DtColor from '@/components/color/main.vue'
import FTag from '@/components/tag/main.vue'
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