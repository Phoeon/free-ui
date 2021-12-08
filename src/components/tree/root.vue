<template>
    <ul class="ph-tree ph-tree-root" :style="{'--ph-tree-depth':'0'} as StyleValue">
        <tree-node v-for="(node,idx) in tree" :key="idx" :node="node" :depth="0" :paths="getPath(node.id)"></tree-node>
    </ul>
</template>
<script lang="ts" setup>
import { computed, defineProps, defineEmits, PropType, provide, toRef } from 'vue'
import type { StyleValue } from 'vue'
import { getLeafNodesById, searchPath } from '../../shared/tree'
import type { IValue, ITree,IKey } from '../../shared/types'
import TreeNode from './node.vue'

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
    tree:{type:Array as PropType<ITree>,required:true},
    modelValue:[String,Number,Array] as PropType<IValue>
})
const isMulti = computed(()=>props.modelValue instanceof Array)
const paths = computed(()=>{
    if(props.modelValue === undefined)return []
    const vs = isMulti.value?(props.modelValue as Array<IKey>):[props.modelValue as IKey]
    return vs.map(v=>searchPath(props.tree,v))
})
const getPath = (id:IKey)=>paths.value.filter(ps=>ps[0]&&ps[0].id===id)

provide('phTreeMulti',isMulti)
provide('phTreeValues',toRef(props,'modelValue'))
provide('phNotifySelected',(item:{id:IKey,selected:boolean})=>{
    if(isMulti.value){
        const leafids = getLeafNodesById(props.tree,item.id).map(t=>t.id)
        const mv = (props.modelValue as Array<IKey>)||[]
        let vs = [] as Array<IKey>
        if(item.selected){
            vs = [...mv]
            leafids.forEach(id=>!vs.includes(id)&&vs.push(id))
        }else{
            vs = mv.filter(id=>!leafids.includes(id))
        }
        emits('update:modelValue',vs)
    }else emits('update:modelValue',item.selected?item.id:'')
})
</script>
<style lang="scss">
.ph-tree-root{
    line-height:var(--ph-24);
    font-size: var(--ph-fs,15px);
    color: var(--ph-c);
    user-select: none;
    padding: var(--ph-pd-sm) 0;
    position: relative;
}
</style>