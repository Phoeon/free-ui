<template>
    <li class="ph-tree-node">
        <div :class="cns" @click="onClick" :hover="!selected&&!state.touch">
            <template v-if="!isLeaf">
                <square-half-check v-if="state.open"/>
                <square-plus v-else/>
            </template>
            <span class="ph-tree-text">{{node.text}}</span>
            <template v-if="isMulti&&!isLeaf">
                <square-check v-if="selected" type="primary" @click.stop="onSelect"/>
                <square v-else @click.stop="onSelect"/>
            </template>
        </div>
        <template v-if="!isLeaf">
            <ul class="ph-tree ph-sub-tree" v-th="state.open" :style="{'--ph-tree-depth':depth+1} as StyleValue">
                <tree-node v-for="(item,idx) in node.children" :key="idx" :node="item" :depth="depth+1" :paths="getPath(item.id)"></tree-node>
            </ul>
        </template>
    </li>
</template>
<script lang="ts">
export default {
    name:"TreeNode"
}
</script>
<script lang="ts" setup>
import { computed, defineProps, inject, PropType, reactive, Ref } from 'vue'
import type { StyleValue } from 'vue'
import type { IKey, ITreeNode, IValue } from '../../shared/types'
import { SquareHalfCheck,SquarePlus,SquareCheck,Square } from '../icon'
import vTh from '../../directives/toggle-height'

const values = inject('phTreeValues') as Ref<IValue>
const isMulti = inject('phTreeMulti') as Ref<boolean>
const notifySelected = inject('phNotifySelected') as (item:{id:IKey,selected:boolean})=>void
const props = defineProps({
    node: {type:Object as PropType<ITreeNode>,required:true},
    paths: {type :Array as PropType<Array<Array<ITreeNode>>>,required:true},
    depth: {type:Number,default:0}
})
const isLeaf = computed(()=>!props.node.children||props.node.children.length===0)
const selected = computed(()=>{
    return props.paths.length>0
})
const isOpen = computed(()=>props.paths.length>0)
const state = reactive({
    open:isOpen.value,
    touch:('ontouchstart' in window)
})
const getPath = (id:IKey)=>props.paths.map(ps=>ps.slice(1)).filter(ps=>ps[0]&&ps[0].id===id)
const cns = computed(()=>{
    return {
        'ph-tree-item':true,
        'ph-tree-item-sticky':props.depth===0,
        'ph-tree-item-leaf':isLeaf.value,
        'ph-tree-item-open':state.open,
        'ph-tree-item-active':selected.value
    }
})
const onSelect = ()=>{
    notifySelected?.({
        id:props.node.id,
        selected:!selected.value
    })
}
const onClick = ()=>{
    if(isLeaf.value)
        onSelect()
    else
        state.open = !state.open
}
</script>
<style lang="scss">
.ph-tree-node{
    .ph-tree-item{
        --ph-tree-item-color:var(--ph-c);
        padding-left: calc(var(--ph-tree-depth) * 16px + var(--ph-pd));
        padding-right: var(--ph-pd);
        display: flex;
        align-items: center;
        transition: background-color .15s ease;
        height: var(--ph-tselect-ih,32px);
        font-size: var(--ph-tselect-fs,15px);
        &[hover=true]:hover,
        &:active,
        &-open{
            --ph-tree-item-color: var(--ph-c-d2);
        }
        &-sticky{
            position: sticky!important;
            top: calc(var(--ph-tree-depth) * var(--ph-24));
            background-color: var(--ph-tree-bg,transparent);
            z-index: 1;
        }
        &-leaf{
            padding-left: calc(var(--ph-tree-depth) * 16px + var(--ph-pd) + var(--ph-8));
            &[hover=true]:hover{
                background-color: var(--ph-bg-a1-reverse);
            }
        }
        &-active{
            --ph-tree-item-color: var(--ph-primary);
        }
        .ph-icon + .ph-tree-text{
            margin-left: var(--ph-8);
        }
    }
    .ph-tree-text{
        cursor: pointer;
        flex: 1;
        color: var(--ph-tree-item-color);
    }
}
</style>