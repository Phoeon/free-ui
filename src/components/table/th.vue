<template>
    <th class="ph-tb-cell ph-tb-th">
        <div class="ph-th-wrap">
            <span><slot></slot></span>
            <sort v-if="sort" @click="onSort" :direction="direction" class="ph-pointer"/>
            <circle-danger type="info" v-tooltip="{content:tip,position:'tc'}" color="var(--ph-c-l1)" v-if="tip"/>
        </div>
    </th>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, reactive, computed } from 'vue'
import { Sort,CircleInfo } from '../icon'
import vTooltip from '../../directives/tooltip'

const emits = defineEmits(['sort'])
const props = defineProps({
    sort:Boolean,
    tip:String
})
const state = reactive({
    sort:0
})
const direction = computed(()=>{
    if(state.sort===1)return 'up'
    else if(state.sort===-1)return 'down'
    else return ''
})
const onSort = ()=>{
    if(state.sort)
        state.sort *= -1
    else state.sort = 1
    emits('sort',state.sort)
}
</script>
<style lang="scss">
@import './cell.scss';
.ph-tb-cell{
    &.ph-tb-th{
        height: 54px;
        color: var(--ph-c-d1);
        font-weight: var(--ph-fw-m);
        background-color: var(--ph-bg-a15);
        position: relative;
        &:after{
            content: "";
            height: 80%;
            width: 1px ;
            background-color: var(--ph-bd);
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            position: absolute;
        }
        &:nth-last-of-type(1):after{
            display: none;
        }
        .ph-th-wrap{
            white-space: nowrap;
            display: flex;
            align-items: center;
            justify-content: center;
            .ph-icon{
                margin-left: 5px;
            }
        }
    }
}
</style>