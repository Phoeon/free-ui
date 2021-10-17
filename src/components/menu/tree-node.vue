<template>
    <div :class="['ph-menu-item',isRoot?'ph-menu-item-root':'']" :simple="simple" @mouseenter="onEnter" @mouseleave="onLeave">
        <button class="ph-menu-btn ph-group" v-if="isGroup" :flex="true" :active="state.open" :hover="state.hover&&!state.open" @click="toggle">
            <square-plus/>
            <template v-if="!hideDetail">
                <span class="ph-btn-text">{{node.name}}</span>
                <caret :position="state.open?'up':'down'"/>
            </template>
        </button>
        <button v-stv="active" class="ph-menu-btn ph-leaf" v-else :active="active" :hover="state.hover&&!active" @click="navigate">
            <square-minus/>
            <template v-if="!hideDetail">
                <span class="ph-btn-text">{{node.name}}</span>
            </template>
        </button>
        <template v-if="isGroup">
            <transition name="ph-menuitem" mode="out-in" v-if="simple">
                <nav class="ph-menu-tree ph-menu-tree-abs" v-show="state.open">
                    <menu-tree :paths="paths?paths.slice(1):[]" :node="item" v-for="(item,idx) in node.children" :key="idx"/>
                </nav>
            </transition>
            <nav v-else class="ph-menu-tree" v-toggle-height="state.open" ref="esubstree">
                <menu-tree :paths="paths?paths.slice(1):[]" :node="item" v-for="(item,idx) in node.children" :key="idx"/>
            </nav>
        </template>
    </div>
</template>
<script lang="ts">
import vToggleHeight from '../../directives/toggle-height'
export default {
    name:"MenuTree"
}
</script>
<script lang="ts" setup>
import { computed, defineProps, inject, PropType, provide, reactive, ref, Ref } from 'vue'
import { INavNode, ITreeNode } from './struct'
import { Caret, SquarePlus, SquareMinus } from '../icon'
import vStv from '../../directives/scroll-to-view'

const notify = inject("notify") as (paths:INavNode[])=>void
const simple = inject("simple") as Ref<boolean>
const props = defineProps({
    node:Object as PropType<ITreeNode>,
    paths:{
        type:Array as PropType<Array<INavNode>>,
        default:()=>[]
    },
    isRoot:Boolean
})

const isGroup = computed(()=>props.node?.children&&props.node?.children.length)
const active = computed(()=>props.paths&&props.paths[0]&&props.paths[0].id==props.node?.id)
const hideDetail = computed(()=>props.isRoot&&simple.value)
const esubstree = ref() as Ref<HTMLElement>
const state = reactive({
    open:active.value,
    hover:!("ontouchstart" in window),
})
const navigate = ()=>{
    const {name,icon,action,id} = props.node as ITreeNode
    notify&&notify([{name,icon,action,id}])
}
const toggle = ()=>{
    if(simple.value)return
    state.open = !state.open
    setTimeout(()=>{
        const lastChild = esubstree.value?.lastElementChild as any
        lastChild?.scrollIntoViewIfNeeded(false)
    },300)
}
const onEnter = ()=>{
    if(!simple.value)return
    state.open = true
}
const onLeave = ()=>{
    if(!simple.value)return
    state.open = false
}
if(isGroup.value)
provide("notify",(paths:INavNode[])=>{
    const {name,icon,action,id} = props.node as ITreeNode
    notify&&notify([{
        name,icon,action,id
    },...paths])
})
</script>
<style lang="scss">
.ph-menu-item{
    position: relative;
    color: var(--ph-c);
    .ph-menu-btn{
        text-align: left;
        padding: 0 var(--ph-pd-small) 0 var(--ph-pd);
        height: var(--ph-menu-item-height);
        width: 100%;
        border: none;

        position: relative;
        display: block;
        box-sizing: border-box;
        outline:none;
        margin: 0;
        line-height: 1;
        cursor: pointer;
        user-select: none;
        appearance: none;
        flex: 0 0 auto;
        white-space: nowrap;
        transition: opacity .15s ease,color .15s ease,background-color .15s ease;
        background-color: transparent;
        color: inherit;
        font-size: var(--ph-fs);
        font-weight: 500;
        &:before{
            content:'';
            display: inline-block;
            height: 100%;
            vertical-align: middle;
        }
        &[hover=true]:hover{
            color: var(--ph-c-reverse);
        }
        &[active=true]{
            color: var(--ph-primary);
        }
        .ph-icon,
        .ph-btn-text{
            vertical-align: middle;
        }
        .ph-icon + .ph-btn-text{
            margin-left: 8px;
        }
    }
    .ph-group{
        display: flex;
        align-items: center;
        padding-right: 8px;
        .ph-btn-text{
            flex: 1;
        }
    }
    .ph-leaf{
        position: relative;
        &:after{
            content: "";
            position: absolute;
            width: 3px;
            top: 3px;
            bottom: 3px;
            right: 0;
            background-color: var(--ph-primary);
            transform: scaleY(0);
            transition: transform .3s ease;
        }
        &[active=true]:after,
        &[hover=true]:hover:after{
            transform: scaleY(1);
        }
        &[hover=true]:hover{
            background-color: var(--ph-menu-bg);
        }
        &[active=true]{
            background-color: var(--ph-ctr-bg-info);
        }
    }
    &-root[simple=true]{
        & > .ph-group{
            justify-content: center;
            padding: 0;
        }
        & > .ph-leaf{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
        }
    }
    .ph-menu-tree{
        --ph-menu-item-height:45px;
        background-color: var(--ph-menu-bg);
        .ph-menu-tree{
            --ph-menu-item-height:40px;
        }
    }
    .ph-menu-tree-abs{
        padding-left: 5px;
        background-clip: content-box;
        position: absolute;
        width: 208px;
        top: 0;
        right: 0;
        transform: translate3d(calc(100% - 1px),0,0);
        &:before{
            content: "";
            position: absolute;
            height: 100%;
            left: 5px;
            right: 0;
            top: 0;
            background-color: var(--ph-block-bg);
            box-shadow: var(--ph-shadow-3);
        }
        .ph-menu-item{
            z-index: 1;
        }
    }
}
</style>