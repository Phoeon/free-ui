<template>
    <li :class="cns" @click="onClick">
        <span class="ph-cselect-text">{{node.text}}</span>
        <arrow direction="right" v-if="isGroup"/>
    </li>
</template>
<script lang="ts" setup>
import { ITreeNode } from '@/shared/types'
import { computed, defineProps, defineEmits, PropType, reactive } from 'vue'
import { Arrow } from '../icon'

const emits = defineEmits(['toggle','change'])
const props = defineProps({
    node:{type:Object as PropType<ITreeNode>,required:true},
    cpathnode:{type:Object as PropType<ITreeNode>},
    depth: {type:Number,default:0},
    paths: {type :Array as PropType<Array<Array<ITreeNode>>>,required:true},
})
const state = reactive({
    touch:('ontouchstart' in window)
})
const selected = computed(()=>props.paths.some(a=>a[props.depth]&&a[props.depth].id==props.node.id))
const focused = computed(()=>props.cpathnode?.id===props.node.id)
const isGroup = computed(()=>props.node.children&&props.node.children.length)
const cns = computed(()=>{
    return {
        'ph-cselect-item':true,
        'ph-cselect-item-selected':selected.value,
        'ph-cselect-item-hover':!selected.value&&!state.touch&&!focused.value,
        'ph-cselect-item-focus':!selected.value&&focused.value
    }
})
const onClick = ()=>{
    if(isGroup.value)emits('toggle',props.node)
    else emits('change',{
        id:props.node.id,
        selected:!selected.value
    })
}
</script>
<style lang="scss">
.ph-cselect-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: var(--ph-cselect-ih,32px);
    font-size: var(--ph-cselect-fs,15px);
    padding: 0 var(--ph-pd);
    &-focus{
        --ph-cselect-c: var(--ph-primary);
        --ph-i-color: var(--ph-primary);
    }
    &-selected{
        --ph-cselect-c: var(--ph-primary);
        background-color: var(--ph-primary-a1);
    }
    &-hover:hover{
        --ph-cselect-c: var(--ph-c-d2);
        background-color: var(--ph-bg-a1-reverse);
    }
    .ph-cselect-text{
        color: var(--ph-cselect-c,var(--ph-c));
    }
}
</style>