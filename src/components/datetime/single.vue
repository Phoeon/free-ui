<template>
    <component 
    v-model="modelValue" 
    @navigate="onNavigate"
    @done="onDone(state.ctype)"
    @clear="onClear(state.ctype)"
    @now="onNow(state.ctype)"
    @update:modelValue="onUpdate($event,state.ctype)"
    @shiftYear="onShiftYear"
    @shiftMonth="onShiftMonth"
    :min="state.min" 
    :max="state.max" 
    :utype="type" 
    :format="state.format" 
    :dtstring="dtfmt"
    :innerState="innerState"
    :is="dcmp"/>
</template>
<script lang="ts" setup>
import { dt2obj, formatDate, parseDate, dt2arr, arr2dtobj, compare } from '../../shared/datetime'
import { computed, defineAsyncComponent, defineProps, defineEmits, PropType, reactive } from 'vue'
import { DtFormat, getInitCType, DtType, getNow, getState} from './shared'
import { IDtType, IDateObject} from './types'

import DtDate from './cmp/date.vue'

const DtTime = defineAsyncComponent(()=>import('./cmp/time.vue'))
const DtMonth = defineAsyncComponent(()=>import('./cmp/month.vue'))
const DtYear = defineAsyncComponent(()=>import('./cmp/year.vue'))

const emits = defineEmits(["done"])
const props = defineProps({
    value:String as PropType<string>,
    min:String,
    max:String,
    format:String,
    type: {type:String as PropType<IDtType>,default:'date'}
})

const state = reactive<{
    ctype:IDtType,
    format:string,
    typeStack:Array<IDtType>,
    value:Array<number>,
    min:Array<number>|undefined,
    max:Array<number>|undefined,
}>({
    ctype:getInitCType(props.type),
    format:props.format||DtFormat[props.type],
    typeStack:[],
    value:[],
    min:undefined,
    max:undefined,
})
const innerState = reactive<IDateObject>({
    yyyy:0,
    MM:0,
    dd:0,
    hh:0,
    mm:0,
    ss:0,
})
const initState = ()=>{
    state.min = props.min?dt2arr(parseDate(props.min,state.format)):[-1,0,0,0,0,0]
    state.max = props.max?dt2arr(parseDate(props.max,state.format)):[Number.MAX_SAFE_INTEGER,0,0,0,0,0]
    console.log(props.min,state.min,state.format)
    if(props.value){
        state.value = dt2arr(parseDate(props.value,state.format))
    }else{
        state.value = state.min||state.max||[]
    }
    Object.assign(innerState,getState(state.value,getNow()))
}
const modelValue = computed({
    set(v:Array<number>){
        const date = new Date(v[0],v[1],v[2],v[3],v[4],v[5])
        state.value = dt2arr(date)
    },
    get(){
        return state.value
    }
})
const dcmp = computed(()=>{
    switch(state.ctype){
        case DtType.date:
            return DtDate
        case DtType.month:
            return DtMonth
        case DtType.year:
            return DtYear
        default:
            return DtTime
    }
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
    innerState.yyyy+=span
}
const onShiftMonth = (span:number)=>{
    innerState.yyyy += Math.floor((innerState.MM+span)/12);
    innerState.MM = (innerState.MM+span+12)%12
}
const updateState = (v:Array<number>)=>{
    Object.assign(innerState,arr2dtobj(v))
}
const onUpdate = (v:Array<number>,type:IDtType)=>{
    console.log(v,type)
    if(type===DtType.time)return
    updateState(v)
    if(props.type===type){
        //close done
        emits('done',formatDate(v,state.format))
    }else{
        //back type
        router.back()
    }
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
        const nov = !state.value||state.value.length===0
        emits('done',nov?'':formatDate(state.value,state.format))
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
        emits('done','')
    }else{
        //back type
        router.back()
    }
}
const onNow = (type:IDtType)=>{
    console.log('now',type)
    const utype = getInitCType(props.type);
    const { yyyy,MM,dd,hh,mm,ss } = dt2obj(new Date())
    state.value = [yyyy,MM,dd,hh,mm,ss]
    updateState(state.value)
    if(utype===type){
        //close done
        emits('done',formatDate(state.value,state.format))
    }else{
        //back type
        router.back()
    }
}
initState()
const dtfmt = computed(()=>formatDate(state.value,state.format))
</script>