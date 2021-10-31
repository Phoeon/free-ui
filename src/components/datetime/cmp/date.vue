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
                        <span class="ph-dt-iaction" :hover="scope.hover" title="设置年份" @click="emits('navigate',DtType.year)">{{state.yyyy}}年</span>
                        &ensp;
                        <span class="ph-dt-iaction" :hover="scope.hover" title="设置月份" @click="emits('navigate',DtType.month)">{{state.MM+1}}月</span>
                        <template v-if="utype===DtType.datetime">
                            &ensp;<Time class="ph-dt-iaction" title="设置时间" @click="emits('navigate',DtType.time)"/>
                        </template>
                    </div>
                    <div class="ph-dt-header-right">
                        <arrow class="ph-dt-iaction" direction="right" @click="emits('shiftMonth',1)"/>
                        <arrow class="ph-dt-iaction" :double="true" direction="right" @click="emits('shiftYear',1)"/>
                    </div>
                </template>
            </dt-header>
        </template>
        <dt-body class="ph-dt-date-body">
            <div class="ph-dt-date-th">
                <div v-for="item in cst.weekText" :key="item" class="ph-dt-date-thcell">{{item}}</div>
            </div>
            <dt-grid class="ph-dt-dategrid" :dataSource="items" @item-click="onItemClick"></dt-grid>
        </dt-body>
        <template #footer>
            <dt-footer justify="space-between">
                <div class="ph-dt-footer-left">{{dtstring}}</div>
                <div class="ph-dt-footer-right">
                    <dt-btn @click="emits('clear')" v-if="clear">清除</dt-btn>
                    <dt-now @click="emits('now')" :min="min" :max="max" v-if="now">现在</dt-now>
                    <dt-btn @click="emits('done')" v-if="utype!==DtType.date">完成</dt-btn>
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
import { SharedSingleProps, DtType } from '../shared'
import { IDateObject, IGridItem } from '../types'

const emits = defineEmits(['update:modelValue','navigate','done','clear','now','shiftYear','shiftMonth'])
const cst = {
    weekText:['日','一','二','三','四','五','六']
}
const props = defineProps({
    ...SharedSingleProps,
    format:{type:String,default:"yyyy-MM-dd"},
    utype:{type:String,default:"date"}
})
const isDisabled = (da:Array<number>,offset:number)=>{
    return compare(da,props.min.slice(0,offset))<0||compare(da,props.max.slice(0,offset))>0
}
const state = props.innerState as IDateObject

const items = computed(()=>{
    const items:Array<IGridItem> = []
    const ymds = printDate(state.yyyy,state.MM)
    ymds.forEach(ymd=>{
        ymd.forEach(item=>{
            items.push({
                text:item[2],
                cn:item[1]==state.MM?'ph-dt-date-cell-cm':'',
                active:compare((props.modelValue as number[]).slice(0,3),item)===0,
                disabled:isDisabled(item,3),
                meta:item
            })
        })
    })
    return items
})

const onItemClick = (item:IGridItem)=>{
    emits('update:modelValue',[...(item.meta as number[]),...(props.modelValue as number[]).slice(3)])
}
</script>
<style lang="scss">
.ph-dt-date-body{
    flex-direction: column;
    padding: var(--ph-pd-sm);
    padding-top: 0;
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