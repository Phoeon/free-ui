<template>
    <dt-layout>
        <template #header>
            <dt-header class="ph-dt-year-header" justify="space-between">
                <arrow class="ph-dt-iaction" :double="true" direction="left" @click="emits('shiftYear',-15)"/>
                <span>{{state.yyyy-7}}年&ensp;-&ensp;{{state.yyyy+7}}年</span>
                <arrow class="ph-dt-iaction" :double="true" direction="right" @click="emits('shiftYear',15)"/>
            </dt-header>
        </template>
        <dt-body class="ph-dt-year-body">
            <dt-grid :dataSource="items" @item-click="onItemClick"></dt-grid>
        </dt-body>
        <template #footer>
            <dt-footer justify="space-between">
                <div class="ph-dt-footer-left">{{dtstring}}</div>
                <div class="ph-dt-footer-right">
                    <template v-if="utype===DtType.year">
                        <dt-btn @click="emits('clear')" v-if="clear">清除</dt-btn>
                        <dt-now @click="emits('now')" :min="min" :max="max" v-if="now">现在</dt-now>
                    </template>
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
import { defineProps, defineEmits, computed } from 'vue'
import { SharedSingleProps, DtType } from '../shared'
import { IDateObject, IGridItem } from '../types'

const emits = defineEmits(['update:modelValue','done','clear','now','shiftYear'])
const props = defineProps({
    ...SharedSingleProps,
    format:{type:String,default:"yyyy"},
    utype:{type:String,default:"year"}
})
const state = props.innerState as IDateObject
const isDisabled = (y:number)=>{
    return y<props.min[0]||y>props.max[0]
}
const items = computed(()=>{
    const items:IGridItem[] = []
    for(let i=state.yyyy-7;i<=state.yyyy+7;i++)
        items.push({
            text:i,
            disabled:isDisabled(i),
            active:(props.modelValue as number[])[0]===i,
            meta:i
        })
    return items
})
const onItemClick = (item:IGridItem)=>{
    emits('update:modelValue',[item.meta as number,...(props.modelValue as number[]).slice(1)])
}
</script>