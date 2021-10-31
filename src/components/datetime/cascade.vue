<template>
    <component 
        v-model:start="start" 
        v-model:end="end" 
        class="ph-dt-cascadepanel"
        @navigate="onNavigate"
        @done="onDone(state.ctype)"
        @clear="onClear(state.ctype)"
        @now="onNow(state.ctype)"
        @update:modelValue="onUpdate($event,state.ctype)"
        @shiftYear="onShiftYear"
        @shiftMonth="onShiftMonth"
        :min="state.min" 
        :max="state.max" 
        :smax="smax" 
        :emin="emin" 
        :utype="type" 
        :format="state.format" 
        :startString="dtfmt.start"
        :endString="dtfmt.end"
        :startState="startState"
        :endState="endState"
        :is="dcmp" ></component>
</template>
<script lang="ts" setup>
import { compare, dt2obj, formatDate, parseDate, dt2arr, arr2dtobj } from '../../shared/datetime'
import { computed, defineAsyncComponent, defineProps, defineEmits, PropType, reactive, watch } from 'vue'
import { DtFormat, getInitCType, DtType, getState, getNow} from './shared'
import { IDateObject, IDtType } from './types'

import DtDateCascade from './cmp/date-cascade.vue'

const DtTimeCascade = defineAsyncComponent(()=>import('./cmp/time-cascade.vue'))
const DtMonthCascade = defineAsyncComponent(()=>import('./cmp/month-cascade.vue'))
const DtYearCascade = defineAsyncComponent(()=>import('./cmp/year-cascade.vue'))

const emits = defineEmits(["done"])
const props = defineProps({
    value:Array as PropType<Array<string>>,
    min:String,
    max:String,
    format:String,
    type: {type:String as PropType<IDtType>,default:'date'}
})
const state = reactive<{
    ctype:IDtType,
    format:string,
    typeStack:Array<IDtType>,
    start:Array<number>,
    end:Array<number>,
    min:Array<number>|undefined,
    max:Array<number>|undefined,
}>({
    ctype:getInitCType(props.type),
    format:props.format||DtFormat[props.type],
    typeStack:[],
    start:[],
    end:[],
    min:undefined,
    max:undefined,
})
const startState = reactive<IDateObject>({
    yyyy:0,
    MM:0,
    dd:0,
    hh:0,
    mm:0,
    ss:0,
})
const endState = reactive<IDateObject>({
    yyyy:0,
    MM:0,
    dd:0,
    hh:0,
    mm:0,
    ss:0,
})
const dcmp = computed(()=>{
    switch(state.ctype){
        case DtType.date:
            return DtDateCascade
        case DtType.month:
            return DtMonthCascade
        case DtType.year:
            return DtYearCascade
        default:
            return DtTimeCascade
    }
})
const initState = ()=>{
    if(props.min){
        state.min = dt2arr(parseDate(props.min,state.format))
    }
    if(props.max){
        state.max = dt2arr(parseDate(props.max,state.format))
    }
    const [v1,v2] = props.value||[]
    if(!v1&&!v2){
        const {yyyy,MM,dd,hh,mm,ss} = dt2obj(new Date())
        if(state.ctype===DtType.time){
            state.start = state.min||[yyyy,MM,dd,0,0,0]
            state.end = state.max||[yyyy,MM,dd,23,59,59]
        }else{
            state.start = state.min||[yyyy,MM,dd,hh,mm,ss]
            state.end = state.max||[yyyy,MM+1,dd,hh,mm,ss]
        }
    }else if(!v2){
        state.start = dt2arr(parseDate(v1,state.format))
        state.end = state.max||[...state.start.slice(0,3),23,59,59]
    }else if(!v1){
        state.end = dt2arr(parseDate(v2,state.format))
        state.start = state.min||[...state.end.slice(0,3),0,0,0]
    }else{
        state.start = dt2arr(parseDate(v1,state.format))
        state.end = dt2arr(parseDate(v2,state.format))
    }
    Object.assign(startState,getState(state.start,getNow()))
    Object.assign(endState,getState(state.end,getNow()))
    
}
const start = computed({
    set(v:Array<number>){
        const date = new Date(v[0],v[1],v[2],v[3],v[4],v[5])
        state.start = dt2arr(date)
    },
    get(){
        return state.start
    }
})
const end = computed({
    set(v:Array<number>){
        const date = new Date(v[0],v[1],v[2],v[3],v[4],v[5])
        state.end = dt2arr(date)
    },
    get(){
        return state.end
    }
})
const emin = computed(()=>{
    if(state.start&&state.min){
        return compare(state.start,state.min)<0?state.min:state.start
    }
    return state.min||state.start
})
const smax = computed(()=>{
    if(state.end&&state.max){
        return compare(state.end,state.max)<0?state.end:state.max
    }
    return state.max||state.end
})
const router = {
    go(type:IDtType){
        state.typeStack.push(state.ctype)
        state.ctype = type
    },
    back(){
        const ptype = state.typeStack.pop()
        if(ptype)state.ctype = ptype
    }
}
const onShiftYear = (span:number)=>{
    startState.yyyy+=span
    endState.yyyy+=span
}
const onShiftMonth = (span:number)=>{
    startState.yyyy += Math.floor((startState.MM+span)/12);
    startState.MM = (startState.MM+span+12)%12
    endState.yyyy += Math.floor((endState.MM+span)/12);
    endState.MM = (endState.MM+span+12)%12
}
const onUpdate = (v:Array<number>,type:IDtType)=>{
    console.log(v,type)
    if(type===DtType.time)return
    if(props.type===type)return
    router.back()
}
const onNavigate = (type:IDtType)=>{
    console.log('onNavigate',type)
    router.go(type)
}
const onDone = (type:IDtType)=>{
    console.log('done',type)
    const utype = getInitCType(props.type);
    if(utype===type){
        //close done
        emits('done',[formatDate(state.start,state.format),formatDate(state.end,state.format)])
    }else{
        //back type
        router.back()
    }
}
const onClear = (type:IDtType)=>{
    console.log('clear',type)
    const utype = getInitCType(props.type);
    if(utype===type){
        //close done
        emits('done',['',''])
    }else{
        //back type
        router.back()
    }
}
const onNow = (type:IDtType)=>{
    console.log('now',type)
    const utype = getInitCType(props.type);
    const { yyyy,MM,dd,hh,mm,ss } = dt2obj(new Date())
    state.start = [yyyy,MM,dd,hh,mm,ss]
    state.end = [yyyy,MM,dd,hh,mm,ss]
    if(utype===type){
        //close done
        emits('done',[formatDate(state.start,state.format),formatDate(state.start,state.format)])
    }else{
        //back type
        router.back()
    }
}
initState()
watch(()=>state.start,(v)=>{
    Object.assign(startState,arr2dtobj(v))
})
watch(()=>state.end,(v)=>{
    Object.assign(endState,arr2dtobj(v))
})
const dtfmt = computed(()=>{
    return {
        start:formatDate(state.start,state.format),
        end:formatDate(state.end,state.format)
    }
})
</script>
<style lang="scss">
.ph-dt-cascadepanel{
    .ph-dt-body{
        position: relative;
        &:after{
            content: "";
            z-index: 1;
            position: absolute;
            top: var(--ph-pd-sm);
            bottom: var(--ph-pd-sm);
            left: 50%;
            transform: translateX(-50%);
            border-left: 1px solid var(--ph-bc-1);
        }
    }
}
</style>