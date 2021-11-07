<template>
    <input-wrap>
        <template v-slot:left v-if="slots.left">
            <slot name="left"></slot>
        </template>
        <template v-slot:default="scope">
            <input 
            class="ph-input"
            :placeholder="scope.placeholder" 
            :disabled="scope.disabled"
            :value="modelValue"
            @input.stop="onInput"
            @keydown.up.prevent="onUp"
            @keydown.down.prevent="onDown"
            />
        </template>
        <template v-slot:right v-if="slots.right">
            <slot name="right"></slot>
        </template>
    </input-wrap>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, useSlots } from 'vue'
import InputWrap from './input-wrap.vue'
const props = defineProps({
    modelValue:Number,
    step:{type:Number,default:1},
    min:{type:Number,default:-Number.MAX_SAFE_INTEGER},
    max:{type:Number,default:Number.MAX_SAFE_INTEGER},
})
const cst = {
    lock:false,
    timer:-1
}
const slots = useSlots()
const emits = defineEmits(['update:modelValue','input'])
const onNotify = (v:number)=>{
    emits('update:modelValue',v);
    emits('input',v);
}
const getValue = (t:HTMLInputElement,offset=0)=>{
    const value = Number(t.value)||0
    return Math.min(props.max,Math.max(props.min,value+offset));
}
const onKey = (t:HTMLInputElement,offset:number)=>{
    const v = getValue(t,offset)
    t.value = v+""
    clearTimeout(cst.timer)
    cst.timer = setTimeout(()=>{
        onNotify(v)
    },300)
}
const onInput = (e:Event)=>{
    const t = e.target as HTMLInputElement
    if(cst.lock)return
    cst.lock = true
    setTimeout(()=>{
        const v = getValue(t,0)
        t.value = v+""
        onNotify(v)
        cst.lock = false
    },300)
}
const onUp = (e:Event)=>{
    onKey(e.target as HTMLInputElement,1)
}
const onDown = (e:Event)=>{
    onKey(e.target as HTMLInputElement,-1)
}
</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-input{
    @include input();
}
</style>