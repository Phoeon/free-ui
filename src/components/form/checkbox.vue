<template>
    <input-wrap class="ph-checkbox-wrap">
        <template v-slot:default="scope">
            <div 
                v-for="(item,idx) in options" 
                @click="onClick(item,scope.disabled||item.disabled)"
                :class="['ph-checkbox',modelValue.includes(item.value)?'ph-ck-checked':'',scope.disabled||item.disabled?'ph-ck-disabled':'']" 
                :key="idx" >
                <square-check class="ph-ck-icon" v-if="modelValue.includes(item.value)" type="primary"/>
                <Square class="ph-ck-icon" v-else/>
                <span class="ph-ck-text">{{item.text}}</span>
            </div>
        </template>
    </input-wrap>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, PropType } from 'vue'
import { IOption } from './types'
import { Square, SquareCheck } from '../icon'
import InputWrap from './input-wrap.vue'
const props = defineProps({
    modelValue:{type:Array as PropType<Array<string|number>>,required:true},
    type:String as PropType<'text'|'number'>,
    options:{
        type:Array as PropType<Array<IOption>>,
        default:()=>[]
    }
})
const emits = defineEmits(['update:modelValue','input'])
const update = (v:Array<string|number>)=>{
    emits('update:modelValue',v);
    emits('input',v);
}
const onClick= (item:IOption,disabled:boolean)=>{
    if(disabled)return
    const checked = props.modelValue.findIndex(v=>v===item.value)>-1
    if(checked) update(props.modelValue.filter(v=>v!==item.value))
    else update([...props.modelValue,item.value])
}
</script>
<style lang="scss">
.ph-checkbox-wrap{
    flex-wrap: wrap;
}
.ph-checkbox{
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