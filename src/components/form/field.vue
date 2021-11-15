<template>
    <grid-item :class="cns">
        <label class="ph-field-label">{{label}}</label>
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
import { IValidOption, IValidator } from '../../shared/types'
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
    flow:{type:String as PropType<'hr'|'vt'|'auto'>,default:"auto"},//内容水平或者垂直排列
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
const cns = computed(()=>{
    return {
        'ph-field':true,
        'ph-field-required':isRequired.value,
        'ph-field-hr':props.flow==='hr',
        'ph-field-vt':props.flow==='vt',
        'ph-field-auto':props.flow==='auto',
    }
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
    flex-wrap: wrap;
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
    &-hr{
        flex-direction: row;
    }
    &-vt{
        flex-direction: column;
        .ph-field-label{
            width: 100%;
            justify-content: flex-start;
            margin-right: 0;
            margin-bottom: 8px;
        }
    }
}
@media screen and (max-width:768px){
    .ph-field{
        .ph-field-label{
            justify-content: flex-start;
            &:after{
                display: none;
            }
        }
        &-auto{
            flex-direction: column;
            .ph-field-label{
                width: 100%;
                margin-right: 0;
                margin-bottom: 8px;
            }
        }
    }
}
</style>