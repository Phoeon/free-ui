<template>
    <input-wrap :type="type">
        <template v-slot:left v-if="slots.left">
            <slot name="left"></slot>
        </template>
        <template v-slot:default="scope">
            <input 
            class="ph-input"
            :placeholder="scope.placeholder" 
            :disabled="scope.disabled"
            :type="inputType"
            :value="modelValue"
            @input.stop="onInput"
            />
        </template>
        <template v-slot:right v-if="slots.right||isPsd">
            <slot name="right">
                <template v-if="isPsd">
                    <eye :open="!showPsd" @click="showPsd=!showPsd"/>
                </template>
            </slot>
        </template>
    </input-wrap>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, useSlots, computed, ref } from 'vue'
import Eye from '../icon/eye.vue'
import InputWrap from './input-wrap.vue'
const props = defineProps({
    modelValue:[String,Number],
    type:String
})
const isPsd = computed(()=>props.type==="password")
const showPsd = ref(false)
const slots = useSlots()
const cst = {
    lock:false
}
const emits = defineEmits(['update:modelValue','input'])
const onInput = (e:Event)=>{
    const t = e.target as HTMLInputElement
    if(cst.lock)return
    cst.lock = true
    setTimeout(()=>{
        const v = t.value
        emits('update:modelValue',v);
        emits('input',v);
        cst.lock = false
    },300)
}
const inputType = computed(()=>{
    if(isPsd.value)return showPsd.value?'text':'password'
    return props.type
})

</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-input{
    @include input();
}
</style>