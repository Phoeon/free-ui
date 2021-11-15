<template>
    <dt-layout>
        <template #header>
            <dt-header class="ph-dt-time-header" justify="center">
                <span>{{lang.timeSetting}}</span>
            </dt-header>
        </template>
        <dt-body class="ph-dt-time-body">

            <div class="ph-dt-date-th">
                <div class="ph-dt-date-thcell">{{lang.hour}}</div>
                <div class="ph-dt-date-thcell">{{lang.min}}</div>
                <div class="ph-dt-date-thcell">{{lang.sec}}</div>
            </div>
            <div class="ph-dt-time-columns">
                <div class="ph-dt-time-column" v-siv="modelValue[3]">
                    <dt-btn 
                        v-for="(a,y) in hours" 
                        :key="y" 
                        :data-id="y"
                        :active="compare(modelValue.slice(0,4),[state.yyyy,state.MM,state.dd,y])===0" 
                        :disabled="isDisabled([state.yyyy,state.MM,state.dd,y],4)" 
                        @click="update([state.yyyy,state.MM,state.dd,y,modelValue[4],modelValue[5]])">{{y}}</dt-btn>
                </div>
                <div class="ph-dt-time-column" v-siv="modelValue[4]">
                    <dt-btn 
                        v-for="(a,y) in mins" 
                        :key="y" 
                        :data-id="y"
                        :active="compare(modelValue.slice(0,5),[state.yyyy,state.MM,state.dd,modelValue[3],y])===0" 
                        :disabled="isDisabled([state.yyyy,state.MM,state.dd,modelValue[3],y],5)" 
                        @click="update([state.yyyy,state.MM,state.dd,modelValue[3],y,modelValue[5]])">{{y}}</dt-btn>
                </div>
                <div class="ph-dt-time-column" v-siv="modelValue[5]">
                    <dt-btn 
                        v-for="(a,y) in secs" 
                        :key="y" 
                        :data-id="y"
                        :active="compare(modelValue,[state.yyyy,state.MM,state.dd,modelValue[3],modelValue[4],y])===0" 
                        :disabled="isDisabled([state.yyyy,state.MM,state.dd,modelValue[3],modelValue[4],y],6)" 
                        @click="update([state.yyyy,state.MM,state.dd,modelValue[3],modelValue[4],y])">{{y}}</dt-btn>
                </div>
            </div>
        </dt-body>
        <template #footer>
            <dt-footer justify="space-between">
                <div class="ph-dt-footer-left">{{dtstring}}</div>
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
import { defineProps, defineEmits, nextTick } from 'vue'
import { compare } from '../../../shared/datetime'
import { SharedSingleProps, DtType } from '../shared'
import { IDateObject } from '../../../shared/types'

const emits = defineEmits(['update:modelValue','done','clear','now'])
const props = defineProps({
    ...SharedSingleProps,
    format:{type:String,default:"hh:mm:ss"},
    utype:{type:String,default:"time"}
})
const state = props.innerState as IDateObject
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
const isDisabled = (da:Array<number>,offset:number)=>{
    return compare(da,props.min.slice(0,offset))<0||compare(da,props.max.slice(0,offset))>0
}
const update = (v:Array<number>)=>{
    emits('update:modelValue',v)
}
</script>
<style lang="scss">
.ph-dt-time-body{
    flex-direction: column;
    overflow: hidden;
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