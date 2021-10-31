<template>
    <dt-layout>
        <template #header>
            <dt-header class="ph-dt-year-header" justify="space-between">
                <arrow class="ph-dt-iaction" :double="true" direction="left" @click="emits('shiftYear',-15)"/>
                <span>{{startState.yyyy-7}}{{lang.year}}&ensp;~&ensp;{{endState.yyyy+7}}{{lang.year}}</span>
                <arrow class="ph-dt-iaction" :double="true" direction="right" @click="emits('shiftYear',15)"/>
            </dt-header>
        </template>
        <dt-body class="ph-dt-year-body">
            <dt-grid :dataSource="itemsStart" @item-click="onStartItemClick"></dt-grid>
            <dt-grid :dataSource="itemsEnd" @item-click="onEndItemClick"></dt-grid>
        </dt-body>
        <template #footer>
            <dt-footer justify="space-between">
                <div class="ph-dt-footer-left"><dt-preview :startString="startString" :endString="endString"/></div>
                <div class="ph-dt-footer-right">
                    <template v-if="utype===DtType.year">
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
import DtGrid from './grid.vue'
import DtPreview from './date-preview.vue'
import { defineProps, defineEmits, computed } from 'vue'
import { SharedCascadeProps, DtType } from '../shared'
import { IDateObject, IGridItem } from '../types'

const emits = defineEmits(['update:start','update:end','done','clear','now','shiftYear'])
const props = defineProps({
    ...SharedCascadeProps,
    format:{type:String,default:"yyyy"},
    utype:{type:String,default:"year"}
})
const startState = props.startState as IDateObject
const endState = props.endState as IDateObject
const isStartDisabled = (y:number)=>{
    return y<props.min[0]||y>props.smax[0]
}
const isEndDisabled = (y:number)=>{
    return y<props.emin[0]||y>props.max[0]
}
const itemsStart = computed(()=>{
    const items:IGridItem[] = []
    for(let i=startState.yyyy-7;i<=startState.yyyy+7;i++)
        items.push({
            text:i,
            disabled:isStartDisabled(i),
            active:(props.start as number[])[0]===i,
            meta:i
        })
    return items
})
const itemsEnd = computed(()=>{
    const items:IGridItem[] = []
    for(let i=endState.yyyy-7;i<=endState.yyyy+7;i++)
        items.push({
            text:i,
            disabled:isEndDisabled(i),
            active:(props.end as number[])[0]===i,
            meta:i
        })
    return items
})
const onStartItemClick = (item:IGridItem)=>{
    emits('update:start',[item.meta as number,...(props.start as number[]).slice(1)])
}
const onEndItemClick = (item:IGridItem)=>{
    emits('update:end',[item.meta as number,...(props.end as number[]).slice(1)])
}
</script>