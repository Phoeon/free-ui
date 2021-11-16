<template>
    <f-view>
        <f-card title="carousel">
            <f-carousel v-model="state.carsouel">
                <div class="ph-carousel-item">卡片一</div>
                <div class="ph-carousel-item">卡片二</div>
                <div class="ph-carousel-item">卡片三</div>
                <div class="ph-carousel-item">卡片四</div>
            </f-carousel>
        </f-card>
        <f-card title="cascade select">
            {{state.tv}}
            <br/>
            <f-c-select :dataSource="state.tree" v-model="state.tv"/>
            <br/>
            <Fabc :options="state.tree" v-model="state.tv"/>
        </f-card>
        <f-card title="tree select">
            <f-button @click="openTreeSelect">打开树选择</f-button>
            <f-tree-select :options="state.tree" v-model="state.tvs"></f-tree-select>
        </f-card>
        <f-card title="树">
            <div>{{state.tvs}}</div>
            <f-tree :tree="state.tree" v-model="state.tvs"></f-tree>
        </f-card>
        <f-card title="滑块">
            <f-slider v-model="slider.v" :max="slider.max"></f-slider>
            <f-button @click="onClick" :style="{backgroundColor:color.value}">打开取色器</f-button>
        </f-card>
        <f-card title="action">
            <f-action>删除</f-action>
            <f-action type="success">新增</f-action>
            <f-action type="danger">新增</f-action>
            <f-action type="info">新增</f-action>
            <f-action type="warning">新增</f-action>
            <f-action type="primary">新增</f-action>
            <f-action type="noble">新增</f-action>
        </f-card>
        <f-card title="pop">
            <f-button @click="onPop">按钮</f-button>
            <f-pop-container v-model="state.pop" :rect="state.rect" position="tr">alskjf</f-pop-container>
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
import { 
        FView,
        FCard,
        FButton,
         FCPicker,
        FBlockquote,
        FDivider,
        FAction,
        FGLoading,
        FTreeSelect,
        FPop,
        FPopContainer} from '@/components'
import FSlider from '@/components/form/slider.vue'
import DtColor from '@/components/color/main.vue'
import FTag from '@/components/tag/main.vue'
import FThemePicker from '@/components/theme/main.vue'
import FTree from '@/components/tree/root.vue'
import FCSelect from '@/components/cascade-select/main.vue'
import Fabc from '@/components/form/cascade-select.vue'
import FCarousel from '@/components/carousel/main.vue'
import { onMounted, reactive, ref, toRef } from 'vue'
import { ITreeValue } from '@/components/tree'

const epop = ref<InstanceType<typeof FPopContainer>>()
const state = reactive({
    carsouel:0,
    pop:false,
    rect:{left:0,top:0,width:0,height:0},
    tvs:[1,7] as ITreeValue,
    tv:7,
    tree:[{
        id:0,
        text:"一级0"
    },{
        id:1,
        text:"一级1"
    },{
        id:2,
        text:"一级2",
        children:[{
            id:3,
            text:"二级0"
        },{
            id:4,
            text:"二级1"
        },{
            id:5,
            text:"二级2",
            children:[{
                id:6,
                text:"三级0"
            },{
                id:7,
                text:"三级1"
            },{
                id:8,
                text:"三级2"
            }]
        }]
    }]
})
const slider = reactive({
    max:100,
    v:30,
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
const onPop = (e:Event)=>{
    const t = e.target as HTMLElement
    state.pop = true
    state.rect = t.getBoundingClientRect()
}
const openTreeSelect = (e:Event)=>{
    const t = e.target as HTMLElement
    
    FPop.showCascadeSelect({
        dataSource:state.tree,
        value:state.tvs,
        rect:t.getBoundingClientRect()
    }).done((res)=>{
        console.log(res,'res')
        state.tvs = res as any
    })
}
</script>