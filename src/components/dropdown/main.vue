<template>
    <f-button :dropdown="state.open?'up':'down'" @mouseenter="onEnter" @mouseleave="onLeave" @click.stop="onClick" ref="edom">
        <template v-if="icon" v-slot:leftIcon><custom-icon :name="icon"/></template>
        <slot></slot>
    </f-button>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, onBeforeUnmount, onMounted, PropType, reactive, Ref, ref } from 'vue'
import { CustomIcon } from '../icon'
import { IDropdownItem, IDropdownPosition } from '../pop/types'
import FPop from '../pop'
import FButton from '../button/main.vue'
import { sumArray } from '../../shared/utils'
import { xmatrix,ymatrix} from '../../shared/popover'

let hide:()=>void;
const emits = defineEmits(['action'])
const edom = ref() as Ref<FButton>
const props = defineProps({
    dataSource:{
        type:Array as PropType<Array<IDropdownItem>>,
        default:()=>[]
    },
    position:{
        type:String as PropType<IDropdownPosition>,
        default:"bc"
    },
    trigger:{
        type:String as PropType<'click'|'hover'>,
        default:'hover'
    },
    theme:String as PropType<'normal'|'reverse'>,
    icon:String
})
const state = reactive({
    open:false,
    lock:false,
    enter:false
})
const onHide = ()=>{
    if(!state.open)return
    hide?.()
    state.open = false
    state.enter = false
}
const done = (a:IDropdownItem)=>{
    onHide()
    emits('action',a)
}
const enter = ()=>{
    state.enter = true
}
const leave = ()=>{
    state.open = false
    state.enter = false
}
const showDropdown = (el:HTMLElement,opt:{
    dataSource:Array<IDropdownItem>,
    position:IDropdownPosition,
    theme?:'normal'|'reverse'
})=>{
    if(state.lock)return
    state.lock = true
    state.open = true
    const {left,top,width,height} = el.getBoundingClientRect()
    const {dataSource,position,theme} = opt 
    const pos = position||"bc"
    const 
        x = sumArray(xmatrix[pos],[left,top,width,height]),
        y = sumArray(ymatrix[pos],[left,top,width,height]);
    hide = FPop.showDropdown({dataSource,x,y,height,theme,position:pos})
    .done(done)
    .enter(enter)
    .leave(leave)
    .hide
    setTimeout(()=>{
        state.lock = false
    },300)
}
const onClick = (e:Event)=>{
    if(props.trigger!=='click')return
    if(state.open)return
    showDropdown(e.target as HTMLElement,{
        dataSource:props.dataSource,
        position:props.position,
        theme:props.theme
    })
}
const onEnter = (e:Event)=>{
    if(props.trigger!=='hover')return
    if(state.open)return
    showDropdown(e.target as HTMLElement,{
        dataSource:props.dataSource,
        position:props.position,
        theme:props.theme
    })
}
const onLeave = ()=>{
    if(props.trigger!=='hover')return
    if(!state.open)return
    setTimeout(()=>{
        if(state.enter)return
        onHide()
    },50)
}
onMounted(()=>{
    document.addEventListener("click",onHide)
})
onBeforeUnmount(()=>{
    document.removeEventListener("click",onHide)
})
</script>