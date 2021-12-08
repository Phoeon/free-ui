<template>
    <div class="ph-anchors">
        <div :hover="state.hover&&item.value!=modelValue" :class="{'ph-anchor':true,'ph-anchor-active':modelValue===item.value}" v-for="(item,idx) in dataSource" :key="idx" @click="notify(item)">
            <i class="ph-anchor-indicator"></i>
            {{item.text}}
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, PropType, reactive, onMounted, onBeforeUnmount } from 'vue'
import type { IAnchor } from '../../shared/types'
import evt from '../../shared/evt'
const emits = defineEmits(['update:modelValue','navigate'])
const props = defineProps({
    dataSource:{
        type:Array as PropType<Array<IAnchor>>,
        default:()=>[]
    },
    modelValue:String,
})
const state = reactive({
    hover:!('ontouchstart' in window)
})
const cst = {
    st:0,
    lock:false
}
const notify = (item:IAnchor)=>{
    if(item.value===props.modelValue)return
    emits('update:modelValue',item.value)
    emits('navigate',item)
    cst.lock = true
    const target = document.querySelector("#"+item.value) as any
    target?.scrollIntoViewIfNeeded?.()
    window.setTimeout(()=>{
        cst.lock = false
    },50)
}
const onViewScroll = (t:HTMLElement)=>{
    const up = t.scrollTop-cst.st>=0
    const vh = document.documentElement.clientHeight
    cst.st = t.scrollTop
    if(cst.lock)return
    const rank1 = props.dataSource.filter(({value})=>{
        const el = document.querySelector("#"+value) as HTMLElement
        const rect = el.getBoundingClientRect()
        return ((rect.top<vh&&rect.top>=0)
        ||(rect.top+rect.height<vh&&rect.top+rect.height>=0)
        ||(rect.top<=0&&rect.top+rect.height>=vh))
    })
    const rank2 = rank1.filter(({value})=>{
        const el = document.querySelector("#"+value) as HTMLElement
        const rect = el.getBoundingClientRect()
        return ((rect.top>0&&rect.top+rect.height<vh)||(rect.top<=0&&rect.top+rect.height>=vh))
    })
    const res = rank2.length?rank2:rank1
    let value = ''
    if(up){
        value = res[res.length-1]?.value||props.dataSource[props.dataSource.length-1]?.value
    }else{
        value = res[0]?.value||props.dataSource[0]?.value
    }
    emits('update:modelValue',value)
}
onMounted(()=>{
    window.setTimeout(()=>{
        evt.on('view-scroll',onViewScroll)
    },50)
})
onBeforeUnmount(()=>{
    evt.off('view-scroll',onViewScroll)
})
</script>
<style lang="scss">
.ph-anchors{
    position: relative;
    overflow: auto;
    &:before{
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 11px;
        border-left: 2px dashed var(--ph-c-l2);
    }
    .ph-anchor{
        font-size: 14px;
        color: var(--ph-c-l1);
        position: relative;
        z-index: 1;
        padding-left: 28px;
        margin: 12px 0;
        transition: font-size .15s ease,color .15s ease;
        &-active{
            color: var(--ph-primary);
            font-size: 16px;
            font-weight: bold;
            .ph-anchor-indicator{
                transform: scale(1.5);
                opacity: 1;
            }
        }
        &[hover=true]:hover{
            cursor: pointer;
            color: var(--ph-c-d1);
        }
        &-indicator{
            display: inline-block;
            position: absolute;
            width: 8px;
            height: 8px;
            left: 8px;
            top: 0;
            bottom: 0;
            margin: auto;
            border-radius: 50%;
            background-color: currentColor;
            transition: transform .3s ease,opacity .3s ease;
            transform: scale(0);
            opacity: 0;
            &:after{
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                width: 4px;
                height: 4px;
                margin: auto;
                border-radius: inherit;
                background-color: var(--ph-c-white);
            }
        }
    }
}
</style>