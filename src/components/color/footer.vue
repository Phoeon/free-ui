<template>
    <div :class="['ph-color-footer',state.mode===1?'':'ph-color-footer-edit']">
        <square-plus @click="onPlus"/>
        <template v-if="state.mode===1">
            <square-half-check :outline="true" @click="state.mode=0"/>
            <span class="ph-color-predef-item" v-for="(c,i) in state.colors||[]" :key="i" :style="{backgroundColor:c}" @click="$emit('pre-click',c)"></span>
        </template>
        <template v-else>
            <square-tick @click="state.mode=1"/>
            <span class="ph-color-predef-item" v-for="(c,i) in state.colors||[]" :key="i" :style="{backgroundColor:c}" @click="onMinus(i)"><times/></span>
        </template>
    </div>
</template>
<script lang="ts" setup>
import { reactive, defineProps } from 'vue'
import { SquareTick,SquareHalfCheck,SquarePlus,Times } from '../icon'
import Storage from '../../shared/storage'
const __FKEY = 'free_custom_colors'
const props = defineProps({
    color:String
})
const state = reactive<{
    mode:number,
    colors:Array<string>
}>({
    mode:1,
    colors:Storage.getItem(__FKEY,true)||[]
})
const onPlus = ()=>{
    if(!props.color)return
    state.colors.unshift(props.color)
    Storage.setItem(__FKEY,state.colors,true)
}
const onMinus = (i:number)=>{
    state.colors.splice(i,1)
    Storage.setItem(__FKEY,state.colors,true)
}
</script>
<style lang="scss">
.ph-color-footer{
    height: var(--ph-c-bar);
    color: #fff;
    display: grid;
    grid-template-columns: repeat(9, var(--ph-c-predef-item));
    gap: var(--ph-c-predef-item-gap);
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    &.ph-color-footer-edit{
        .ph-color-predef-item{
            display: flex;
            justify-content: center;
            align-items: center;
            .ph-icon{
                transform: scale(.5);
            }
        }
    }
    .ph-icon{
        cursor: pointer;
    }
    .ph-color-predef-item{
        width: var(--ph-c-predef-item);
        height: var(--ph-c-predef-item);
        border-radius: 2px;
        position: relative;
        cursor: pointer;
        &:after{
            border-radius: inherit;
            position: absolute;
            width: 100%;
            height: 100%;
            border: 1px solid var(--ph-c-white);
        }
        &:hover:after{
            content: "";
        }
    }
}
</style>