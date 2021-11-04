<template>
    <div class="ph-accordion-item">
        <div class="ph-acd-header" @click="onToggle" :disabled="disabled">
            <p class="ph-acd-title">{{title}}</p>
            <arrow class="ph-acd-arrow" :direction="expand1?'up':'down'"/>
        </div>
        <div class="ph-acd-body" v-toggle-height="expand1">
            <div class="ph-acd-content"><slot></slot></div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name:"FAccordionItem"
}
</script>
<script lang="ts" setup>
import { defineProps, computed, reactive } from 'vue'
import { Arrow } from '../icon'
import vToggleHeight from '../../directives/toggle-height'
const props = defineProps({
    title:{type:String,required:true},
    index:Number,
    disabled:Boolean,
    expand:Boolean,
    accordion:Boolean,
    update:Function
})
const state = reactive({
    expand:props.expand&&!props.disabled
})
const expand1 = computed(()=>props.accordion?props.expand&&!props.disabled:state.expand)
const onToggle = ()=>{
    if(props.disabled)return
    if(props.accordion)
    props.update?.(props.expand?-1:props.index)
    else state.expand = !state.expand
}
</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-accordion-item{
    border: 1px solid var(--ph-c-l3);
    border-left-width: var(--ph-li-blr);
    border-right-width: var(--ph-li-blr);
    margin-top: -1px;
    .ph-acd-header{
        height: var(--ph-gacd-h);
        display: flex;
        align-items: center;
        padding: 0 var(--ph-pd);
        color: var(--ph-d1);
        font-weight: var(--ph-fw-m);
        background-color: var(--ph-block-bg);
        position: relative;
        &:before{
            @include blMx(var(--ph-c-l3));
            bottom: -1px;
        }
        .ph-acd-title{
            flex: 1;
        }
        &[disabled=true]{
            cursor: not-allowed;
            color: var(--ph-c-l3);
            .ph-acd-arrow{
                opacity: .3;
            }
        }
    }
    .ph-acd-body{
        transition: height .3s ease;
    }
    .ph-acd-content{
        padding: var(--ph-pd);
    }
    &:nth-of-type(1){
        border-radius: var(--ph-li-brt);
    }
    &:nth-last-of-type(1){
        border-radius: var(--ph-li-brl);
    }
}
</style>