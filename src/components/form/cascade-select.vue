<template>
    <input-wrap @click.stop="onClick" :disabled="disabled" :placeholder="placeholder" ref="ewrap">
        <template #default="scope">
            <input 
            class="ph-cascade-select"
            :readonly="true"
            :placeholder="scope.placeholder" 
            :disabled="scope.disabled"
            :value="textValue"
            />
        </template>
        <template #right>
            <cselect/>
        </template>
    </input-wrap>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, PropType, reactive, computed, ref } from 'vue'
import { IKey, ITree, IValue } from '../../shared/types'
import { Cselect } from '../icon'

import FPop from '../pop'
import InputWrap from './input-wrap.vue'
import { getNodesNameByIds } from '@/shared/tree'

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
    options:{
        type:Array as PropType<ITree>,
        default:()=>[]
    }
})
const textValue = computed(()=>{
    return getNodesNameByIds(props.options,(props.modelValue instanceof Array)?(props.modelValue as Array<IKey>):[props.modelValue as IKey])
})
const done = (vs:IValue)=>{
    emits('update:modelValue',vs);
    emits('input',vs);
}
const onClick = ()=>{
    if(props.disabled)return
    if(state.lock)return
    state.lock = true
    const rect = (ewrap.value.$el as HTMLElement).getBoundingClientRect()
    FPop.showCascadeSelect({
        dataSource:props.options,
        rect,
        value:props.modelValue,
        title:props.placeholder
    }).done(done)
    setTimeout(()=>{
        state.lock = false
    },300)
}

</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-cascade-select{
    @include input()
}
</style>