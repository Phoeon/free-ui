<template>
    <dt-btn :disabled="isDisabled"><slot></slot></dt-btn>
</template>
<script lang="ts" setup>
import { compare, dt2obj } from '../../../shared/datetime'
import { computed, defineProps, PropType } from 'vue'
import DtBtn from './btn.vue'
import { nowAvaliable } from '../shared'
const props = defineProps({
    min:{type:Array as PropType<Array<number>>,default:()=>[-1,0,0,0,0,0]},
    max:{type:Array as PropType<Array<number>>,default:()=>[Number.MAX_SAFE_INTEGER,0,0,0,0,0]},
})
const isDisabled = computed(()=>{
    return !nowAvaliable(props.min,props.max)
})
</script>