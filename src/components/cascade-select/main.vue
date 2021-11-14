<template>
    <div class="ph-cascade-select-picker">
        <select-panel 
            :dataSource="dataSource" 
            :depth="0"
            :paths="paths"
            :cpath="state.paths"
            @toggle="onToggle"
            @change="onChange"
            />
        <select-panel
            v-for="(path,idx) in state.paths"
            :key="path.id"
            :depth="idx+1"
            :paths="paths"
            :cpath="state.paths"
            :dataSource="path.children" 
            @toggle="onToggle"
            @change="onChange"
        />
    </div>
</template>
<script lang="ts" setup>
import { getLeafNodesById, searchPath } from '@/shared/tree'
import { defineEmits, computed, defineProps, PropType, reactive } from 'vue'
import { IKey, ITree, ITreeNode, IValue } from '../../shared/types'
import SelectPanel from './select-panel.vue'

const emits = defineEmits(['update:modelValue','resize'])
const props = defineProps({
    dataSource: { type:Array as PropType<ITree>,required:true },
    modelValue: { type:[String,Number,Array] as PropType<IValue>,required:true}
})
const state = reactive<{
    paths:Array<ITreeNode>
}>({
    paths:[]
})
const isMulti = computed(()=>props.modelValue instanceof Array)
const paths = computed(()=>{
    if(props.modelValue === undefined)return []
    const vs = isMulti.value?(props.modelValue as Array<IKey>):[props.modelValue as IKey]
    return vs.map(v=>searchPath(props.dataSource,v)||[])
})
const onToggle = (node:ITreeNode)=>{
    const 
        paths = searchPath(props.dataSource,node.id);
    if(!node.children||node.children.length===0)
        paths.pop()
    state.paths = paths
    emits('resize')
}
const onChange = (item:{id:IKey,selected:boolean})=>{
    onToggle({id:item.id} as ITreeNode)
    if(isMulti.value){
        const leafids = getLeafNodesById(props.dataSource,item.id).map(t=>t.id)
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
}
</script>
<style lang="scss">
.ph-cascade-select-picker{
    display: flex;
    height: 100%;
    position: relative;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}
</style>