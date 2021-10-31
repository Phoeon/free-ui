<template>
    <dt-layout>
        <template #header>
            <dt-header class="ph-dt-yearmonth-header" justify="space-between">
                <arrow class="ph-dt-iaction" direction="left" @click="emits('shiftYear',-1)"/>
                <span>{{state.yyyy}}{{lang.year}}</span>
                <arrow class="ph-dt-iaction" direction="right" @click="emits('shiftYear',1)"/>
            </dt-header>
        </template>
        <dt-body class="ph-dt-yearmonth-body">
            <dt-grid :dataSource="items" @item-click="onItemClick"></dt-grid>
        </dt-body>
        <template #footer>
            <dt-footer justify="space-between">
                <div class="ph-dt-footer-left">{{dtstring}}</div>
                <div class="ph-dt-footer-right">
                    <template v-if="utype===DtType.month">
                        <dt-btn @click="emits('clear')" v-if="clear">{{lang.clear}}</dt-btn>
                        <dt-now @click="emits('now')" :min="min" :max="max" v-if="now">{{lang.now}}</dt-now>
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
import { compare } from '../../../shared/datetime'
import { SharedSingleProps, DtType } from '../shared'
import { IDateObject, IGridItem } from '../types'

const emits = defineEmits(['update:modelValue','done','clear','now','shiftYear'])

const props = defineProps({
    ...SharedSingleProps,
    format:{type:String,default:"yyyy-MM"},
    utype:{type:String,default:"month"}
})
const state = props.innerState as IDateObject
const isDisabled = (da:Array<number>,offset:number)=>{
    return compare(da,props.min.slice(0,offset))<0||compare(da,props.max.slice(0,offset))>0
}
const items = computed(()=>{
    return [0,1,2,3,4,5,6,7,8,9,10,11].map(i=>{
        return {
            text:i+1,
            active:compare((props.modelValue as number[]).slice(0,2),[state.yyyy,i])===0,
            disabled:isDisabled([state.yyyy,i],2),
            meta:i
        }
    })
})
const onItemClick = (item:IGridItem)=>{
    emits('update:modelValue',[state.yyyy,item.meta as number,...(props.modelValue as number[]).slice(2)])
}
</script>