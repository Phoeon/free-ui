<template>
    <div class="ph-infinite-scroll">
        <div class="ph-is-title" v-if="title">{{title}}</div>
        <div class="ph-is-mask">
        <div class="ph-is-column" ref="emonth" v-touchmove="onScroll" :transition="state.end" :style="style">
            <dt-btn :transparent="true" 
                :style="{'--ph-idx':i}"
                :data-id="i"
                :hover="false"
                :check="v.value==value"
                :disabled="v.disabled"
                class="ph-dt-isbtn"
                @click="onSelect(i)"
                v-for="(v,i) in list" :key="i">
                <template v-if="dtype=='month'">
                {{ ( 10 > v.value+1)?('0'+(v.value+1)):(v.value+1) }}    
                </template>
                <template v-else>
                {{ ( 10 > v.value)?('0'+v.value):v.value }}
                </template>
            </dt-btn>
        </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, defineEmits, PropType, reactive } from 'vue'
import DtBtn from '../cmp/btn.vue'
import PhGesture,{ GestureType } from 'ph-gesture'

const emit = defineEmits(['update'])
import {touchmove as vTouchmove} from '../../../directives/gesture'
const props = defineProps({
    title:String,
    dtype:String,
    tz:{type:String,default:'120px'},
    value:{type:Number,default:-1},
    list:{type:Array as PropType<Array<{value:number,disabled:boolean}>>,default:()=>[]}
})
const idx = props.list.findIndex(a=>a.value==props.value)
const state = reactive({
    cv:-idx,
    tmp:-idx,
    end:true
})
const style = computed(()=>{
    return {
        '--ph-dt-rotate':state.tmp,
        '--ph-dt-deg':(360/props.list.length)+"deg",
        '--ph-dt-tz':props.tz
    }
})
const getIndex = (tmp:number)=>{
    const len = props.list.length
    const t1 = tmp%len,
        t2 = t1<0?t1+len:t1;
    return t2
}
const onScroll = (e:Event,meta:{dx:number,dy:number,end?:boolean,speed:number})=>{
    if(props.list.length==0)return
    const c = meta.dy*12/192
    const isV = Math.abs(meta.dy)>Math.abs(meta.dx)
    if(meta&&meta.end){
        const valid = +isV;
        state.end = true
        state.cv = Math.round(state.cv + meta.speed*c*valid)
        state.tmp = state.cv
        emit('update',props.list[getIndex(-state.cv)]?.value)
    }else{
        state.end = false
        if(isV){
            state.tmp = state.cv + c
        }
    }
}
const onSelect = (idx:number)=>{
    const cidx = getIndex(Math.round(-state.tmp))
    state.cv = state.cv + (cidx - idx);
    state.tmp = state.cv
    emit('update',props.list[getIndex(idx)]?.value)
}
</script>
<style lang="scss">
.ph-infinite-scroll{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    width: 100%;
    overflow: hidden;
    height: 100%;

    .ph-is-title{
        flex: 0 0 auto;
        text-align: center;
        font-weight: bold;
        padding: 7px 0;
        width:100%;
    }
    .ph-is-mask{
        width:100%;
        flex:1;
        z-index: 1;
        overflow: hidden;
        position: relative;
        &:before{
            content: "";
            position: absolute;
            height: 32px;
            width: 100%;
            top: 0;
            bottom: 0;
            margin: auto;
            background-color: var(--ph-modal-bg);
            border-top: 1px solid var(--ph-bd-2);
            border-bottom: 1px solid var(--ph-bd-2);
            box-sizing: border-box;
        }
    }
    .ph-is-column{
        --ph-dt-rotate:0;
        --ph-dt-deg:0deg;
        --ph-dt-tz:120px;
        width:100%;
        height: 100%;
        position: relative;
        z-index: 1;
        transform-style: preserve-3d;
        perspective-origin: center;
        perspective: 90000px;
        transform: rotateY(-90deg) rotateZ(calc(var(--ph-dt-rotate) * var(--ph-dt-deg)));
        &[transition=true]{
            transition: transform .3s ease-out;
        }
        .ph-dt-isbtn{
            position: absolute;
            height: 32px;
            width: 100%;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            top:0;
            bottom:0;
            margin: auto;
            font-weight: 500;
            backface-visibility: hidden;
            transform-origin: center center;
            transform: rotateY(90deg) rotateX(calc(var(--ph-idx) * var(--ph-dt-deg) * -1)) translateZ(var(--ph-dt-tz));
            opacity: 0.8;
            &:disabled{
                opacity: 0.3!important;
            }
            &[check=true]{
                font-size: 16px!important;
                color:var(--ph-c-reverse)!important;
                opacity: 1;
            }
        }
    } 
}
</style>
