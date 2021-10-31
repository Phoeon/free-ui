<template>
    <dt-layout>
        <template #header>
            <dt-header class="ph-dt-yearmonth-header" justify="space-between">
                <arrow class="ph-dt-iaction" direction="left" @click="emits('shiftYear',-1)"/>
                <span>
                {{startState.yyyy}}{{lang.year}}
                &ensp;~&ensp;
                {{endState.yyyy}}{{lang.year}}</span>
                <arrow class="ph-dt-iaction" direction="right" @click="emits('shiftYear',1)"/>
            </dt-header>
        </template>
        <dt-body class="ph-dt-yearmonth-body">
            <dt-grid :dataSource="itemsStart" @item-click="onStartItemClick"></dt-grid>
            <dt-grid :dataSource="itemsEnd" @item-click="onEndItemClick"></dt-grid>
        </dt-body>
        <template #footer>
            <dt-footer justify="space-between">
                <div class="ph-dt-footer-left"><dt-preview :startString="startString" :endString="endString"/></div>
                <div class="ph-dt-footer-right">
                    <template v-if="utype===DtType.month">
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
import Arrow from '../../icon/arrow.vue'
import DtPreview from './date-preview.vue'
import DtGrid from './grid.vue'
import { defineProps, defineEmits, computed } from 'vue'
import { compare } from '../../../shared/datetime'
import { SharedCascadeProps, DtType } from '../shared'
import { IDateObject, IGridItem } from '../types'

const emits = defineEmits(['update:start','update:end','done','clear','now','shiftYear'])

const props = defineProps({
    ...SharedCascadeProps,
    format:{type:String,default:"yyyy-MM"},
    utype:{type:String,default:"month"}
})
const startState = props.startState as IDateObject
const endState = props.endState as IDateObject
const isStartDisabled = (da:Array<number>,offset:number)=>{
    return compare(da,props.min.slice(0,offset))<0||compare(da,props.smax.slice(0,offset))>0
}
const isEndDisabled = (da:Array<number>,offset:number)=>{
    return compare(da,props.emin.slice(0,offset))<0||compare(da,props.max.slice(0,offset))>0
}
const itemsStart = computed(()=>{
    return [0,1,2,3,4,5,6,7,8,9,10,11].map(i=>{
        return {
            text:i+1,
            active:compare((props.start as number[]).slice(0,2),[startState.yyyy,i])===0,
            disabled:isStartDisabled([startState.yyyy,i],2),
            meta:i
        }
    })
})
const itemsEnd = computed(()=>{
    return [0,1,2,3,4,5,6,7,8,9,10,11].map(i=>{
        return {
            text:i+1,
            active:compare((props.end as number[]).slice(0,2),[endState.yyyy,i])===0,
            disabled:isEndDisabled([endState.yyyy,i],2),
            meta:i
        }
    })
})
const onStartItemClick = (item:IGridItem)=>{
    emits('update:start',[startState.yyyy,item.meta as number,...(props.start as number[]).slice(2)])
}
const onEndItemClick = (item:IGridItem)=>{
    emits('update:end',[endState.yyyy,item.meta as number,...(props.end as number[]).slice(2)])
}
</script>