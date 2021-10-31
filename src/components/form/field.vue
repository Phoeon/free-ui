<template>
    <grid-item :class="{'ph-field':true,'ph-field-required':isRequired}">
        <label class="ph-field-label" :inline="labelInline">{{label}}</label>
        <slot 
        :onInput="onInput"
        :value="modelValue"
        :placeholder="placeholder"
        :valid="state.valid"
        :type="type"
        :size="size"
        :disabled="disabled"></slot>
        <field-tip v-if="!state.valid">{{state.tip}}</field-tip>
    </grid-item>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, PropType, inject, onMounted, onBeforeUnmount, reactive, computed } from 'vue'
import { IValidOption, IValidator } from './validator/types'
import { rand } from '../../shared/utils'
import GridItem from '../grid/grid-item.vue'
import FieldTip from './tip.vue'


const $validator = inject<IValidator|null>('validator')
const fid = rand()
const props = defineProps({
    modelValue:[String,Number,Boolean,Array],
    type:String,
    size:String as PropType<'small'|'large'|'normal'>,
    label:String,
    labelInline:Boolean,
    disabled:Boolean,
    placeholder:String,
    validators:Array as PropType<Array<IValidOption>>,
})
const state = reactive({
    tip:'',
    valid:true
})
const emits = defineEmits(['update:modelValue','input'])

const isRequired = computed(()=>{
    if(!props.validators)return false
    return props.validators.some(item=>{
        if(typeof item==='string'&&item==="required")return true
        else return (item as {name:string}).name==="required"
    })
})
const validSelf = (value:unknown,validMeta:Array<IValidOption>)=>{
    return ($validator as IValidator).validField(value,validMeta).then(res=>{
        state.valid = true
        state.tip = ""
        return Promise.resolve(true)
    }).catch(res=>{
        Object.assign(state,res)
        return Promise.reject(res)
    })
}
const onInput = (v:unknown)=>{
    console.log(v)
    emits('update:modelValue',v)
    emits('input',v)
    //validator to go
    if(!props.validators)return
    if(!$validator)return 
    validSelf(v,props.validators)
}
onMounted(()=>{
    if(!props.validators)return
    if($validator){
        $validator.registerField(fid,()=>{
            return validSelf(props.modelValue,props.validators as Array<IValidOption>)
        })
    }
})
onBeforeUnmount(()=>{
    if(!props.validators)return
    if($validator){
        $validator.ungisterField(fid)
    }
})
</script>
<style lang="scss">
.ph-field{
    display: flex;
    position: relative;
    .ph-field-label{
        flex: 0 0 auto;
        color: var(--ph-c-d1);
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 8px;
        position: relative;
        width: 120px;
        &:after{
            content: ":";
        }
        &:after,
        &:before{
            display: inline-block;
            padding: 0 5px;
        }
    }
    &-required{
        .ph-field-label{
            &:before{
                content: "*";
                color: var(--ph-danger);
            }
        }
    }
}
@media screen and (max-width:768px){
    .ph-field{
        flex-wrap: wrap;
        .ph-field-label{
            width: 100%;
            justify-content: flex-start;
            margin-right: 0;
            margin-bottom: 8px;
            &:before,
            &:after{
                display: none;
            }
            &[inline=true]{
                width: auto;
                margin-bottom: 0;
            }
        }
    }
}
</style>