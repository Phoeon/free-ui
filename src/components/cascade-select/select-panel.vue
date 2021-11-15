<template>
    <div class="ph-cselect-panel" v-stv>
        <ul class="ph-cselect-list">
            <CsItem 
                v-for="node in dataSource" 
                :key="node.id" 
                :depth="depth"
                :paths="paths"
                :node="node"
                :cpathnode="cpath[depth]"
                @change="emits('change',$event)"
                @toggle="emits('toggle',$event)"/>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, PropType, defineEmits, nextTick } from 'vue'
import { IKey, ITree, ITreeNode } from '../../shared/types'
import CsItem from './item.vue'

const vStv = {
    mounted(el:HTMLElement){
        nextTick(()=>{
            (el as any).scrollIntoViewIfNeeded()
        })
    }
}
const emits = defineEmits(['change','toggle'])
const props = defineProps({
    dataSource: { type:Array as PropType<ITree>,required:true },
    depth: {type:Number,default:0},
    paths: {type :Array as PropType<Array<Array<ITreeNode>>>,required:true},
    cpath: {type :Array as PropType<Array<ITreeNode>>,required:true}
})
</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-cselect-panel{
    min-width: var(--ph-gcselect-w);
    height: 100%;
    overflow: hidden;
    position: relative;
    .ph-cselect-list{
        height: 100%;
        overflow-y: auto;
        padding: var(--ph-pd-sm) 0;
        -webkit-overflow-scrolling: touch;
    }
    &:nth-of-type(n+2){
        &:before{
            @include llMx(var(--ph-bd-1))
        }
    }
}
</style>