<template>
    <input-wrap>
        <template v-slot:default="scope">
            <input 
            class="ph-input"
            :placeholder="scope.placeholder" 
            :disabled="scope.disabled"
            :type="scope.type"
            :value="modelValue"
            @input.stop="onInput"
            />
        </template>
    </input-wrap>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, PropType } from 'vue'
import InputWrap from './input-wrap.vue'
const props = defineProps({
    modelValue:[String,Number]
})
const emits = defineEmits(['update:modelValue','input'])
const onInput = (e:Event)=>{
    const v = (e.target as HTMLInputElement).value
    emits('update:modelValue',v);
    emits('input',v);
}
</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-input{
    @include input();
}
</style>