<template>
    <nav :class="['ph-menu-tree-root',simple?'ph-menu-simple':'']">
        <tree-node :depth="1" :isRoot="true" :paths="paths" :node="item" v-for="(item,idx) in tree" :key="idx"></tree-node>
    </nav>
</template>
<script lang="ts" setup>
import { defineProps, PropType, provide, defineEmits, inject, toRef } from 'vue'
import { INavNode  } from '../../../shared/types'
import TreeNode from './tree-node.vue'

const phevt = inject("phevt") as {emit:(a:string,...b:any[])=>void}

const emits = defineEmits(["navigate"])
const props = defineProps({
    tree:{
        type:Array as PropType<Array<INavNode>>,
        default:()=>[]
    },
    paths:{
        type:Array as PropType<Array<INavNode>>,
        default:()=>[]
    },
    simple:Boolean
})

provide("notify",(paths:INavNode[])=>{
    emits('navigate',paths)
    phevt?.emit("aside:toggle","menu")
})
provide("simple",toRef(props,'simple'))

</script>
<style lang="scss">
.ph-menuitem-leave-to,
.ph-menuitem-enter-from
 {
	opacity: 0;
    right: 15px!important;
}
.ph-menuitem-leave-from,
.ph-menuitem-enter-to {
	opacity: 1;
    right: 0px!important;
}
.ph-menuitem-leave-active,
.ph-menuitem-enter-active
{
	transition: opacity .15s ease,right .15s ease;
}
.ph-menu-tree-root{
    flex: 1;
    overflow: auto;
    position: relative;
    z-index: 1;
    -webkit-overflow-scrolling: touch;
    --ph-menu-item-height:50px;
    &.ph-menu-simple{
        overflow: visible;
    }
}
</style>