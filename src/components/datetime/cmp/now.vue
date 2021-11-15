<template>
    <dt-btn :disabled="isDisabled"><slot></slot></dt-btn>
</template>
<script lang="ts" setup>
import { computed, defineProps, PropType } from 'vue'
import { nowAvaliable } from '../shared'
import DtBtn from './btn.vue'
const props = defineProps({
    min:{type:Array as PropType<Array<number>>,default:()=>[-1,0,0,0,0,0]},
    max:{type:Array as PropType<Array<number>>,default:()=>[Number.MAX_SAFE_INTEGER,0,0,0,0,0]},
})
const isDisabled = computed(()=>{
    return !nowAvaliable(props.min,props.max)
})
</script>