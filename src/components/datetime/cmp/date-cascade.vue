<template>
    <dt-layout>
        <template #header>
            <dt-header class="ph-dt-date-header" justify="space-between">
                <template #default="scope">
                    <div class="ph-dt-header-left">
                        <arrow class="ph-dt-iaction" :double="true" direction="left" @click="emits('shiftYear',-1)"/>
                        <arrow class="ph-dt-iaction" direction="left" @click="emits('shiftMonth',-1)"/>
                    </div>
                    <div class="ph-dt-header-center">
                        <span class="ph-dt-iaction" :hover="scope.hover" title="设置年份" @click="emits('navigate',DtType.year)">{{startState.yyyy}}年</span>
                        <span class="ph-dt-iaction" :hover="scope.hover" title="设置月份" @click="emits('navigate',DtType.month)">{{startState.MM+1}}月</span>
                        &ensp;
                        <template v-if="utype===DtType.datetime">
                            &ensp;
                            <Time class="ph-dt-iaction" title="设置时间" @click="emits('navigate',DtType.time)"/>
                            &ensp;
                        </template>
                        &ensp;
                        <span class="ph-dt-iaction" :hover="scope.hover" title="设置年份" @click="emits('navigate',DtType.year)">{{endState.yyyy}}年</span>
                        <span class="ph-dt-iaction" :hover="scope.hover" title="设置月份" @click="emits('navigate',DtType.month)">{{endState.MM+1}}月</span>
                    </div>
                    <div class="ph-dt-header-right">
                        <arrow class="ph-dt-iaction" direction="right" @click="emits('shiftMonth',1)"/>
                        <arrow class="ph-dt-iaction" :double="true" direction="right" @click="emits('shiftYear',1)"/>
                    </div>
                </template>
            </dt-header>
        </template>
        <dt-body class="ph-dt-datecascade-body">
            <div class="ph-dt-content-wrapper">
                <div class="ph-dt-date-th">
                    <div v-for="item in cst.weekText" :key="item" class="ph-dt-date-thcell">{{item}}</div>
                </div>
                <dt-grid class="ph-dt-dategrid" :dataSource="itemsStart" @item-click="onStartItemClick"></dt-grid>
            </div>
            <div class="ph-dt-content-wrapper">
                <div class="ph-dt-date-th">
                    <div v-for="item in cst.weekText" :key="item" class="ph-dt-date-thcell">{{item}}</div>
                </div>
                <dt-grid class="ph-dt-dategrid" :dataSource="itemsEnd" @item-click="onEndItemClick"></dt-grid>
            </div>
        </dt-body>
        <template #footer>
            <dt-footer justify="space-between">
                <div class="ph-dt-footer-left">{{startString}}/{{endString}}</div>
                <div class="ph-dt-footer-right">
                    <dt-btn @click="emits('clear')" v-if="clear">清除</dt-btn>
                    <dt-now @click="emits('now')" :min="min" :max="max" v-if="now">现在</dt-now>
                    <dt-btn @click="emits('done')">完成</dt-btn>
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
import DtGrid from './grid.vue'
import {Time,Arrow} from '../../icon'
import { defineProps, defineEmits, computed } from 'vue'
import { compare, printDate } from '../../../shared/datetime'
import { SharedCascadeProps, DtType } from '../shared'
import { IDateObject, IGridItem } from '../types'

const emits = defineEmits(['update:start','update:end','navigate','done','clear','now','shiftYear','shiftMonth'])
const cst = {
    weekText:['日','一','二','三','四','五','六']
}
const props = defineProps({
    ...SharedCascadeProps,
    format:{type:String,default:"yyyy-MM-dd"},
    utype:{type:String,default:"date"}
})
const isStartDisabled = (da:Array<number>,offset:number)=>{
    return compare(da,props.min.slice(0,offset))<0||compare(da,props.smax.slice(0,offset))>0
}
const isEndDisabled = (da:Array<number>,offset:number)=>{
    return compare(da,props.emin.slice(0,offset))<0||compare(da,props.max.slice(0,offset))>0
}
const startState = props.startState as IDateObject
const endState = props.endState as IDateObject

const itemsStart = computed(()=>{
    const items:Array<IGridItem> = []
    const ymds = printDate(startState.yyyy,startState.MM)
    ymds.forEach(ymd=>{
        ymd.forEach(item=>{
            items.push({
                text:item[2],
                cn:item[1]==startState.MM?'ph-dt-date-cell-cm':'',
                active:compare((props.start as number[]).slice(0,3),item)===0,
                disabled:isStartDisabled(item,3),
                meta:item
            })
        })
    })
    return items
})
const itemsEnd = computed(()=>{
    const items:Array<IGridItem> = []
    const ymds = printDate(endState.yyyy,endState.MM)
    ymds.forEach(ymd=>{
        ymd.forEach(item=>{
            items.push({
                text:item[2],
                cn:item[1]==endState.MM?'ph-dt-date-cell-cm':'',
                active:compare((props.end as number[]).slice(0,3),item)===0,
                disabled:isEndDisabled(item,3),
                meta:item
            })
        })
    })
    return items
})

const onStartItemClick = (item:IGridItem)=>{
    emits('update:start',[...(item.meta as number[]),...(props.start as number[]).slice(3)])
}
const onEndItemClick = (item:IGridItem)=>{
    emits('update:end',[...(item.meta as number[]),...(props.end as number[]).slice(3)])
}
</script>
<style lang="scss">
.ph-dt-datecascade-body{
    .ph-dt-content-wrapper{
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: var(--ph-pd-sm);
    }
    .ph-dt-dategrid{
        flex: 1;
        grid-template-columns: repeat(7,1fr);
    }
    .ph-dt-btn{
        padding: 0;
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
}
</style>