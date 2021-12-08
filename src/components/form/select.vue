<template>
    <input-wrap @click.stop="onClick" :disabled="disabled" :placeholder="placeholder" ref="ewrap">
        <template #default="scope">
            <input 
            class="ph-select"
            :readonly="true"
            :placeholder="scope.placeholder" 
            :disabled="scope.disabled"
            :value="textValue"
            />
        </template>
        <template #right>
            <caret direction="down"/>
        </template>
    </input-wrap>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, PropType, reactive, computed, ref } from 'vue'
import type { IDropdownItem, IKey, IValue } from '../../shared/types'
import { Caret } from '../icon'

import FPop from '../pop'
import InputWrap from './input-wrap.vue'

let hide:()=>void;
const ewrap = ref<InstanceType<typeof InputWrap>>()
const emits = defineEmits(['update:modelValue','input'])
const state = reactive({
    lock:false,
})
const props = defineProps({
    modelValue:{type:[Array,String,Number] as PropType<IValue>,required:true},
    disabled:Boolean,
    placeholder:String,
    theme:String as PropType<'reverse'|'normal'>,
    options:{
        type:Array as PropType<Array<IDropdownItem>>,
        default:()=>[]
    }
})
const textValue = computed(()=>{
    const vs = props.modelValue instanceof Array ? (props.modelValue as Array<IKey>) : [props.modelValue as IKey] 
    const res = props.options.filter(opt=>vs.includes(opt.value))
    return res.map(r=>r.text).join(",")
})

const done = (vs:IValue)=>{
    emits('update:modelValue',vs);
    emits('input',vs);
}
const onClick = ()=>{
    if(props.disabled)return
    if(state.lock)return
    state.lock = true
    const rect = (ewrap.value?.$el as HTMLElement).getBoundingClientRect()
    FPop.showPopSelect({
        dataSource:props.options,
        title:props.placeholder,
        value:props.modelValue,
        rect
    })
    .done(done)
    window.setTimeout(()=>{
        state.lock = false
    },300)
}

</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-select{
    @include input()
}
</style>