<template>
    <f-view>
        <f-card title="基本案例">
            <f-carousel>
                <f-carousel-item>卡片一</f-carousel-item>
                <f-carousel-item>卡片二</f-carousel-item>
                <f-carousel-item>卡片三</f-carousel-item>
                <f-carousel-item>卡片四</f-carousel-item>
            </f-carousel>
        </f-card>
        <ph-pretty lang="html">{{raw.c1}}</ph-pretty>
        <f-card title="指示器位置">
            <f-carousel :indicatorOutside="true">
                <f-carousel-item>卡片一</f-carousel-item>
                <f-carousel-item>卡片二</f-carousel-item>
                <f-carousel-item>卡片三</f-carousel-item>
                <f-carousel-item>卡片四</f-carousel-item>
            </f-carousel>
        </f-card>
        <ph-pretty lang="html">{{raw.c2}}</ph-pretty>
        <f-card title="方向">
            <f-carousel direction="vt">
                <f-carousel-item>卡片一</f-carousel-item>
                <f-carousel-item>卡片二</f-carousel-item>
                <f-carousel-item>卡片三</f-carousel-item>
                <f-carousel-item>卡片四</f-carousel-item>
            </f-carousel>
        </f-card>
        <ph-pretty lang="html">{{raw.c3}}</ph-pretty>
        <f-card title="自定义indicator">
            <f-carousel :interval="2000">
                <f-carousel-item>卡片一</f-carousel-item>
                <f-carousel-item>卡片二</f-carousel-item>
                <f-carousel-item>卡片三</f-carousel-item>
                <f-carousel-item>卡片四</f-carousel-item>
                <template #indicator="scope">
                    <div class="custom-cs-indicator" 
                        v-for="i in [0,1,2,3]" :key="i"
                        :active="scope.active===i"
                        @click="scope.shift(i)"
                        ></div>
                </template>
            </f-carousel>
        </f-card>
        <ph-pretty lang="html">{{raw.c4}}</ph-pretty>
        <ph-pretty title="接口介绍">{{raw.c5}}</ph-pretty>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FCard, FCarousel, FCarouselItem } from '@/components'
import * as raw from '../data/carousel'
</script>
<style lang="scss">
.custom-cs-indicator{
    width: 8px;
    height: 8px;
    border-radius: 4px;
    transition: all .3s ease;
    background-color: rgb(0,0,0,.2);
    margin: 4px;
    &:hover{
        background-color: rgb(0,0,0,.5);
        cursor: pointer;
    }
    &[active=true]{
        width: 16px;
        background-color: rgb(0,0,0,.5);
    }
}
</style>