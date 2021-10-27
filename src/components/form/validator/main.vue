<template>
    <slot></slot>
</template>
<script lang="ts" setup>
import { defineProps, provide, defineExpose } from 'vue'
import { IValidOption , IFieldValidFn, IValidatorTask } from './types'
import * as BVs from './built-in-validators' //内置验证器
import ValidtorQueue from './queue'
const props = defineProps({
    validators:[]
})
const fieldMap = {} as Record<string,IFieldValidFn>

const validField = (value:unknown,validMeta:Array<IValidOption>)=>{
    const bvs = BVs as Record<string,IValidatorTask>
    const quque = ValidtorQueue.create()
    validMeta.forEach(meta=>{
        if(typeof meta==="string"&&bvs[meta]){
            quque.use(bvs[meta])
        }else {
            const meta1 = meta as {name:string,args:Array<unknown>}
            const task = bvs[meta1.name]
            if(task)
            quque.use(task,meta1.args)
        }
    })
    return quque.run(value)
}
const validForm = ()=>{
    return Promise.all(Object.keys(fieldMap).map(key=>fieldMap[key]()))
}
const registerField = (fid:string,field:IFieldValidFn)=>{
    fieldMap[fid] = field
}
const ungisterField = (fid:string)=>{
    delete fieldMap[fid]
}
provide('validator',{
    validField,
    validForm,
    registerField,
    ungisterField
})
defineExpose({
    validForm
})
</script>