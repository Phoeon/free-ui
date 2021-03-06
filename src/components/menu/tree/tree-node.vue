<template>
    <div :class="['ph-menu-item',isRoot?'ph-menu-item-root':'']" :simple="simple" @mouseenter="onEnter" @mouseleave="onLeave" :style="{'--ph-menu-depth':depth}">
        <button class="ph-menu-btn ph-group" :data-title="node.text" v-if="isGroup" :flex="true" ref="emenu" :active="state.open||active" :hover="state.hover&&!state.open&&!active" @click="toggle">
            <custom-icon v-if="node.icon" :name="node.icon"/>
            <template v-if="showDetail">
                <span class="ph-btn-text">{{node.text}}</span>
                <arrow :direction="state.open?'up':'down'"/>
            </template>
        </button>
        <button v-stv="active" :data-title="node.text" class="ph-menu-btn ph-leaf" v-else :active="active" :hover="state.hover&&!active" @click="navigate">
            <custom-icon v-if="node.icon" :name="node.icon"/>
            <template v-if="showDetail">
                <span class="ph-btn-text">{{node.text}}</span>
            </template>
            <transition name="ph-menuitem" mode="out-in" v-if="isRoot&&simple">
                <div class="ph-menu-btn-mirror" v-if="state.hoverDetail">{{node.text}}</div>
            </transition>
        </button>
        <template v-if="isGroup">
            <transition name="ph-menuitem" mode="out-in" v-if="simple">
                <nav class="ph-menu-tree ph-menu-tree-abs" v-if="state.open" ref="esubstree" :show-title="state.hoverDetail" :data-title="node.text">
                    <menu-tree :paths="paths?paths.slice(1):[]" :node="item" v-for="(item,idx) in node.children" :key="idx"/>
                </nav>
            </transition>
            <nav v-else class="ph-menu-tree" v-toggle-height="state.open" ref="esubstree">
                <menu-tree :depth="depth+1" :paths="paths?paths.slice(1):[]" :node="item" v-for="(item,idx) in node.children" :key="idx"/>
            </nav>
        </template>
    </div>
</template>
<script lang="ts">
import vToggleHeight from '../../../directives/toggle-height'
export default {
    name:"MenuTree"
}
</script>
<script lang="ts" setup>
import { computed, defineProps, inject, nextTick, onMounted, PropType, provide, reactive, ref, Ref, watch } from 'vue'
import { INavNode } from '../../../shared/types'
import { Arrow, CustomIcon } from '../../icon'
import getPosition from 'ph-position'
import vStv from '../../../directives/scroll-to-view'

const notify = inject("notify") as (paths:INavNode[])=>void
const simple = inject("simple") as Ref<boolean>
const props = defineProps({
    paths:{
        type:Array as PropType<Array<INavNode>>,
        default:()=>[]
    },
    node:Object as PropType<INavNode>,
    isRoot:Boolean,
    depth:Number
})

const isGroup = computed(()=>props.node?.children&&props.node?.children.length>0)
const active = computed(()=>props.paths&&props.paths[0]&&props.paths[0].id==props.node?.id)

const esubstree = ref() as Ref<HTMLElement>
const emenu = ref() as Ref<HTMLElement>

const cst = {
    ct:0
}
const state = reactive({
    open:active.value&&!simple.value,
    hover:!("ontouchstart" in window),
    hoverDetail:false
})
const showDetail = computed(()=>!props.isRoot||!simple.value)
const restoreState = ()=>{
    if(!simple.value){
        state.open = state.open||active.value
        return
    }
    if(props.isRoot)
        state.hoverDetail = false
    state.open = false
}
const onLeave = ()=>{
    if(!simple.value)return
    restoreState()
}
const navigate = ()=>{
    const {text,icon,action,id} = props.node as INavNode
    notify&&notify([{text,icon,action,id}])
    restoreState()
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
    if(props.isRoot)
        state.hoverDetail = true
    if(Date.now()-cst.ct<50)return
    if(!isGroup.value)return
    state.open = true
    nextTick(()=>{
        if(!esubstree.value)return
        const rect = emenu.value.getBoundingClientRect()
        const {offsetWidth,offsetHeight} = esubstree.value
        const {y} = getPosition({offsetWidth,offsetHeight},rect,{top:false,dir:'vt'})
        const ny = y<0?y+rect.height:y-rect.height
        esubstree.value.style.cssText = `top:${ny}px`
    })
}

if(isGroup.value)
provide("notify",(paths:INavNode[])=>{
    restoreState()
        
    const {text,icon,action,id} = props.node as INavNode
    notify&&notify([{
        text,icon,action,id
    },...paths])
    
})
watch(()=>simple.value,(v)=>{
    restoreState()
})
onMounted(()=>{
    cst.ct = Date.now()
})
</script>
<style lang="scss">
.ph-menu-item{
    position: relative;
    color: var(--ph-c);
    .ph-menu-btn{
        text-align: left;
        padding: 0 var(--ph-pd) 0 var(--ph-pd-lg);
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
            background-color: var(--ph-primary-a1);
        }
    }
    &-root{
        .ph-menu-btn{
            &-mirror{
                position: absolute;
                z-index: var(--ph-zdx-popover);
                width: var(--ph-aside-width);
                height: 100%;
                right: 0;
                top: 0 ;
                padding-left: 5px;
                transform: translate3d(100%,0,0);
                background-color: var(--ph-block-bg);
                background-clip: content-box;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                text-indent: var(--ph-pd-lg);
                box-shadow: var(--ph-shadow-1);
            }
        }
    }
    &-root[simple=true]{
        & > .ph-group,
        & > .ph-leaf{
            position: relative;
            z-index: 1;
            &[active=true]{
                background-color: var(--ph-primary-a1);
            }
        }
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
        --ph-menu-item-pdl:calc(var(--ph-menu-depth) * 16px + var(--ph-pd-lg));
        background-color: var(--ph-menu-bg);
        .ph-menu-tree{
            --ph-menu-item-height:40px;
        }
        &:not(.ph-menu-tree-abs){
            .ph-menu-btn{
                padding-left: var(--ph-menu-item-pdl);
            }
        }
    }
    .ph-menu-tree-abs{
        padding-left: 5px;
        background-clip: content-box;
        position: absolute;
        width: var(--ph-aside-width);
        top: 0;
        right: 0;
        transform: translate3d(100%,0,0);

        &:after{
            content: "";
            position: absolute;
            height: 100%;
            left: 5px;
            right: 0;
            top: 0;
            background-color: var(--ph-block-bg);
            box-shadow: var(--ph-shadow-1);
        }
        &[show-title=true]:before{
            position: relative;
            content: attr(data-title);
            display: flex;
            align-items: center;
            background-color: var(--ph-block-bg);
            font-size: inherit;
            color: var(--ph-primary);
            font-weight: bold;
            height: var(--ph-menu-item-height);
            padding: 0 var(--ph-pd) 0 var(--ph-pd-lg);
            width: 100%;
            z-index: 1;
            border-bottom: 1px solid var(--ph-bd);
        }
        .ph-menu-item{
            z-index: 1;
        }
    }
}
</style>