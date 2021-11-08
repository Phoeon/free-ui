<template>
    <f-view :backtop="false" @scroll="onScroll">
        <f-anchors class="anchors" v-model="state.value" :dataSource="state.anchors" @navigate="onNavigate"></f-anchors>
        <div class="anchor-view">
            <div class="anchor-contents" >
                <div class="anchor-content" style="background-color:#00b57833">
                    <a id="nav1">导航</a>
                </div>
                <div class="anchor-content" style="background-color:#00b57866">
                    <a id="nav2">数据采集</a>
                </div>
                <div class="anchor-content" style="background-color:#00b57899">
                    <a id="nav3">数据录入</a>
                </div>
                <div class="anchor-content" style="background-color:#00b578cc">
                    <a id="nav4">数据展示</a>
                </div>
                <div class="anchor-content" style="background-color:#00b578">
                    <a id="nav5">反馈</a>
                </div>
            </div>
        </div>
        <br/>
        <ph-pretty lang="html">{{raw.c1}}</ph-pretty>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FAnchors, FToast } from '@/components'
import { reactive } from 'vue'
import * as raw from '../data/anchors'
const state = reactive({
    value:"nav2",
    timer:-1,
    anchors:[{
        text:"导航",
        value:"nav1"
    },{
        text:"数据采集",
        value:"nav2"
    },{
        text:"数据录入",
        value:"nav3"
    },{
        text:"数据展示",
        value:"nav4"
    },{
        text:"反馈",
        value:"nav5"
    }]
})
const onNavigate = (item:any)=>{
    FToast.show(item.text,{position:"top"})
    const target = document.querySelector("#"+item.value) as any
    target.scrollIntoViewIfNeeded?.()
}

const onScroll = (e:Event)=>{
    clearTimeout(state.timer)
    state.timer = setTimeout(()=>{
        const t = e.target as HTMLElement
        if(t.scrollTop<=0){
            state.value = state.anchors[0].value
            return
        }
        const vh = document.documentElement.clientHeight
        const tops = state.anchors.map(item=>{
            const el = document.querySelector("#"+item.value) as HTMLElement
            const rect = el.getBoundingClientRect()
            return {
                top:rect.top,
                value:item.value
            }
        })
        console.log(tops)
        const filter1 = tops.filter(t=>t.top<vh&&t.top>0)
        const target = filter1[filter1.length-1]
        if(target){
            state.value = target.value
        }
    },100)
}
</script>
<style lang="scss">
.anchor-view{
    display: flex;
    position: relative;
    &:before{
        content: "";
        width: 100px;
        display: block;
    }
}
.anchors{
    width: 100px;
    position: absolute;
}
.anchor-contents{
    overflow: auto;
    flex: 1;
    margin-left: 24px;
    .anchor-content{
        height: 500px;
        color: #FFF;
    }
}
</style>