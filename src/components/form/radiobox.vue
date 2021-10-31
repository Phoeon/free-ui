<template>
    <input-wrap class="ph-radio-wrap">
        <template v-slot:default="scope">
            <div 
                v-for="(item,idx) in options" 
                @click="onClick(item,scope.disabled||item.disabled)"
                :class="['ph-radio',modelValue===item.value?'ph-ck-checked':'',scope.disabled||item.disabled?'ph-ck-disabled':'']" 
                :key="idx" >
                <circle-radio class="ph-ck-icon" v-if="modelValue === item.value" type="primary"/>
                <Circle class="ph-ck-icon" v-else/>
                <span class="ph-ck-text">{{item.text}}</span>
            </div>
        </template>
    </input-wrap>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, PropType } from 'vue'
import { IOption } from './types'
import { Circle, CircleRadio } from '../icon'
import InputWrap from './input-wrap.vue'
const props = defineProps({
    modelValue:{type:[String,Number],required:true},
    type:String as PropType<'text'|'number'>,
    options:{
        type:Array as PropType<Array<IOption>>,
        default:()=>[]
    }
})
const emits = defineEmits(['update:modelValue','input'])
const update = (v:string|number)=>{
    emits('update:modelValue',v);
    emits('input',v);
    console.log(v)
}
const onClick= (item:IOption,disabled:boolean)=>{
    if(disabled)return
    const checked = props.modelValue===item.value
    if(checked) update('')
    else update(item.value)
}
</script>
<style lang="scss">
.ph-radio-wrap{
    flex-wrap: wrap;
}
.ph-radio{
    font-size: var(--ph-ip-fs);
    color: var(--ph-c);
    padding: 0 12px;
    padding-left: 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    height: var(--ph-ip-h);
    .ph-ck-icon{
        margin-right: var(--ph-pd-sm);
    }
    .ph-ck-icon,
    .ph-ck-text{
        cursor: inherit;
        color: inherit;
    }
    &.ph-ck-checked{
        color: var(--ph-primary);
    }
    &.ph-ck-disabled{
        cursor: not-allowed;
        color: var(--ph-c-disabled);
    }
}
</style>