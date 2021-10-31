<template>
    <dt-layout>
        <template #header>
            <dt-header class="ph-dt-time-header" justify="center">
                <span>{{lang.timeSetting}}</span>
            </dt-header>
        </template>
        <dt-body class="ph-dt-timecascade-body">
            <div class="ph-dt-content-wrapper">
                <div class="ph-dt-date-th">
                    <div class="ph-dt-date-thcell">{{lang.hour}}</div>
                    <div class="ph-dt-date-thcell">{{lang.min}}</div>
                    <div class="ph-dt-date-thcell">{{lang.sec}}</div>
                </div>
                <div class="ph-dt-time-columns">
                    <div class="ph-dt-time-column" v-siv="start[3]">
                        <dt-btn 
                            v-for="(a,y) in hours" 
                            :key="y" 
                            :data-id="y"
                            :active="compare(start.slice(0,4),[startState.yyyy,startState.MM,startState.dd,y])===0" 
                            :disabled="isStartDisabled([startState.yyyy,startState.MM,startState.dd,y],4)" 
                            @click="updateStart([startState.yyyy,startState.MM,startState.dd,y,start[4],start[5]])">{{y}}</dt-btn>
                    </div>
                    <div class="ph-dt-time-column" v-siv="start[4]">
                        <dt-btn 
                            v-for="(a,y) in mins" 
                            :key="y" 
                            :data-id="y"
                            :active="compare(start.slice(0,5),[startState.yyyy,startState.MM,startState.dd,start[3],y])===0" 
                            :disabled="isStartDisabled([startState.yyyy,startState.MM,startState.dd,start[3],y],5)" 
                            @click="updateStart([startState.yyyy,startState.MM,startState.dd,start[3],y,start[5]])">{{y}}</dt-btn>
                    </div>
                    <div class="ph-dt-time-column" v-siv="start[5]">
                        <dt-btn 
                            v-for="(a,y) in secs" 
                            :key="y" 
                            :data-id="y"
                            :active="compare(start,[startState.yyyy,startState.MM,startState.dd,start[3],start[4],y])===0" 
                            :disabled="isStartDisabled([startState.yyyy,startState.MM,startState.dd,start[3],start[4],y],6)" 
                            @click="updateStart([startState.yyyy,startState.MM,startState.dd,start[3],start[4],y])">{{y}}</dt-btn>
                    </div>
                </div>
            </div>
            <div class="ph-dt-content-wrapper">
                <div class="ph-dt-date-th">
                    <div class="ph-dt-date-thcell">{{lang.hour}}</div>
                    <div class="ph-dt-date-thcell">{{lang.min}}</div>
                    <div class="ph-dt-date-thcell">{{lang.sec}}</div>
                </div>
                <div class="ph-dt-time-columns">
                    <div class="ph-dt-time-column" v-siv="end[3]">
                        <dt-btn 
                            v-for="(a,y) in hours" 
                            :key="y" 
                            :data-id="y"
                            :active="compare(end.slice(0,4),[endState.yyyy,endState.MM,endState.dd,y])===0" 
                            :disabled="isEndDisabled([endState.yyyy,endState.MM,endState.dd,y],4)" 
                            @click="updateEnd([endState.yyyy,endState.MM,endState.dd,y,end[4],end[5]])">{{y}}</dt-btn>
                    </div>
                    <div class="ph-dt-time-column" v-siv="end[4]">
                        <dt-btn 
                            v-for="(a,y) in mins" 
                            :key="y" 
                            :data-id="y"
                            :active="compare(end.slice(0,5),[endState.yyyy,endState.MM,endState.dd,end[3],y])===0" 
                            :disabled="isEndDisabled([endState.yyyy,endState.MM,endState.dd,end[3],y],5)" 
                            @click="updateEnd([endState.yyyy,endState.MM,endState.dd,end[3],y,end[5]])">{{y}}</dt-btn>
                    </div>
                    <div class="ph-dt-time-column" v-siv="end[5]">
                        <dt-btn 
                            v-for="(a,y) in secs" 
                            :key="y" 
                            :data-id="y"
                            :active="compare(end,[endState.yyyy,endState.MM,endState.dd,end[3],end[4],y])===0" 
                            :disabled="isEndDisabled([endState.yyyy,endState.MM,endState.dd,end[3],end[4],y],6)" 
                            @click="updateEnd([endState.yyyy,endState.MM,endState.dd,end[3],end[4],y])">{{y}}</dt-btn>
                    </div>
                </div>
            </div>
        </dt-body>
        <template #footer>
            <dt-footer justify="space-between">
                <div class="ph-dt-footer-left"><dt-preview :startString="startString" :endString="endString"/></div>
                <div class="ph-dt-footer-right">
                    <template v-if="utype===DtType.time">
                        <dt-btn @click="emits('clear')" v-if="clear">{{lang.clear}}</dt-btn>
                        <dt-now @click="emits('now')" :min="min" :max="max" v-if="now">{{lang.now}}</dt-now>
                    </template>
                    <dt-btn @click="emits('done')">{{lang.done}}</dt-btn>
                </div>
            </dt-footer>
        </template>
    </dt-layout>
</template>
<script lang="ts" setup>
import DtLayout from '../layout/layout.vue'
import DtHeader from '../layout/layout-header.vue'
import DtFooter from '../layout/layout-footer.vue'
import DtBody from '../layout/layout-body.vue'
import DtBtn from './btn.vue'
import DtNow from './now.vue'
import DtPreview from './date-preview.vue'
import { defineProps, defineEmits, nextTick } from 'vue'
import { compare } from '../../../shared/datetime'
import { SharedCascadeProps, DtType } from '../shared'
import { IDateObject } from '../types'

const emits = defineEmits(['update:start','update:end','done','clear','now'])
const props = defineProps({
    ...SharedCascadeProps,
    format:{type:String,default:"hh:mm:ss"},
    utype:{type:String,default:"time"}
})
const startState = props.startState as IDateObject
const endState = props.endState as IDateObject
const hours = new Array(24).fill(1)
const mins = new Array(60).fill(1)
const secs = new Array(60).fill(1)
const vSiv = {
    mounted(el:HTMLElement){
        nextTick(()=>{
            const active = el.querySelector("[active=true]") as HTMLElement
            if(!active)return
            const id = parseInt(active?.dataset.id as string)
            el.scrollTo(0,id*active.offsetHeight)
        })
    }
}
const isStartDisabled = (da:Array<number>,offset:number)=>{
    return compare(da,props.min.slice(0,offset))<0||compare(da,props.smax.slice(0,offset))>0
}
const isEndDisabled = (da:Array<number>,offset:number)=>{
    return compare(da,props.emin.slice(0,offset))<0||compare(da,props.max.slice(0,offset))>0
}
const updateStart = (v:Array<number>)=>{
    emits('update:start',v)
}
const updateEnd = (v:Array<number>)=>{
    emits('update:end',v)
}
</script>
<style lang="scss">
.ph-dt-timecascade-body{
    overflow: hidden;
    .ph-dt-content-wrapper{
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .ph-dt-time-columns{
        flex: 1;
        display: flex;
        overflow: hidden;
        .ph-dt-time-column{
            height: 100%;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
            flex: 1;
            .ph-dt-btn{
                width: 100%;
            }
        }
    }
}
</style>