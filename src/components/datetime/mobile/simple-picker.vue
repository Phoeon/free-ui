<template>
    <div class="ph-dt-simplepicker">
        <div class="ph-dt-loading" v-if="loading">
            <LoadingBounce/>
        </div>
        <template v-else>
            <iscroll 
                v-if="ctype==DtType.date||ctype==DtType.year||ctype==DtType.month"
                :title="lang.year" :value="modelValue[0]" :list="years" tz="270px" @update="update([$event,...modelValue.slice(1)])"/>
            <iscroll
                v-if="ctype==DtType.date||ctype==DtType.month" 
                dtype="month"
                :title="lang.mon" :value="modelValue[1]" :list="months" tz="120px" @update="update([modelValue[0],$event,...modelValue.slice(2)])"/>
            <iscroll 
                v-if="ctype==DtType.date"
                :title="lang.date" :value="modelValue[2]" :list="days" tz="145px" @update="update([...modelValue.slice(0,2),$event,...modelValue.slice(3)])"/>
            <iscroll 
                v-if="utype==DtType.datetime||utype==DtType.time"
                :title="lang.hour" :value="modelValue[3]" :list="hours" tz="120px" @update="update([...modelValue.slice(0,3),$event,...modelValue.slice(4)])"/>
            <iscroll 
                v-if="utype==DtType.datetime||utype==DtType.time"
                :title="lang.min" :value="modelValue[4]" :list="minutes" tz="270px" @update="update([...modelValue.slice(0,4),$event,...modelValue.slice(5)])"/>
            <iscroll 
                v-if="utype==DtType.datetime||utype==DtType.time"
                :title="lang.sec" :value="modelValue[5]" :list="seconds" tz="270px" @update="update([...modelValue.slice(0,5),$event])"/>
        </template>
    </div>
</template>
<script lang="ts" setup>
import { compare, getMonthDays } from '../../../shared/datetime'
import { computed, defineProps, ref, defineEmits, PropType, onMounted } from 'vue'
import { IDateObject } from '../../../shared/types'
import { SharedSingleProps, DtType } from '../shared'
import { LoadingBounce } from '../../icon'
import Iscroll from './iscroll.vue'

const emits = defineEmits(['update'])
const props = defineProps({
    ...SharedSingleProps,
    utype:String,
    ctype:String,
    innerState:Object as PropType<IDateObject>
})
const loading = ref(true)
const isDisabled = (t:number[],s:number[],e:number[])=>{
    return compare(t,s)<0||compare(t,e)>0
}
const years = computed(()=>{
    if(loading.value)return []
    const s = props.min[0]
    const e = props.max[0]
    return new Array(60).fill(null).map((a:any,b:number)=>{
        return {value:1980+b,disabled:isDisabled([1980+b],[s],[e])}
    })
})
const months = computed(()=>{
    if(loading.value)return []
    const s = props.min.slice(0,2)
    const e = props.max.slice(0,2)
    const v = props.modelValue as number[]
    return Array(24).fill(null).map((a:any,b:number)=>{
        return {value:b%12,disabled:isDisabled([v[0],b%12],s,e)}
    })
})
const days = computed(()=>{
    if(loading.value)return []
    const s = props.min.slice(0,3)
    const e = props.max.slice(0,3)
    const v = props.modelValue as number[]
    const days = getMonthDays(v[0])[v[1]] 
    return new Array(days).fill(null).map((a:any,b:number)=>{
        return {value:b,disabled:isDisabled([v[0],v[1],b],s,e)}
    })
})
const hours = computed(()=>{
    if(loading.value)return []
    const s = props.min.slice(0,4)
    const e = props.max.slice(0,4)
    const v = props.modelValue as number[]
    return new Array(24).fill(null).map((a:any,b:number)=>{
        return {value:b,disabled:isDisabled([v[0],v[1],v[2],b],s,e)}
    })
})
const minutes = computed(()=>{
    if(loading.value)return []
    const s = props.min.slice(0,5)
    const e = props.max.slice(0,5)
    const v = props.modelValue as number[]
    return new Array(60).fill(null).map((a:any,b:number)=>{
        return {value:b,disabled:isDisabled([v[0],v[1],v[2],v[3],b],s,e)}
    })
})
const seconds = computed(()=>{
    if(loading.value)return []
    const s = props.min
    const e = props.max
    const v = props.modelValue as number[]
    return new Array(60).fill(null).map((a:any,b:number)=>{
        return {value:b,disabled:isDisabled([v[0],v[1],v[2],v[3],v[4],b],s,e)}
    })
})
const update = (v:Array<number>)=>{
    emits('update',v)
}
onMounted(()=>{
    setTimeout(()=>{
        loading.value = false
    },300)
})
</script>
<style lang="scss">
.ph-dt-simplepicker{
    display: flex;
    flex-direction: row;
    transform: translate3d(0,0,0);
    flex: 1 0 auto;
    position: relative;
    .ph-dt-loading{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>