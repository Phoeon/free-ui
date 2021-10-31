<template>
    <dt-layout>
        <template #header>
            <dt-header class="ph-dt-date-header" justify="center">
                <template #default="scope">
                    <div class="ph-dt-header-left">
                        <arrow class="ph-dt-iaction" :hover="scope.hover" v-if="state.status" direction="left" @click="notify(0,0)"/>
                    </div>
                    <div class="ph-dt-header-center">
                        {{state.status?'结束时间':'开始时间'}}
                    </div>
                    <div class="ph-dt-header-right">
                        <arrow class="ph-dt-iaction" :hover="scope.hover" v-if="!state.status" direction="right" @click="notify(-eswiper.offsetWidth/2,1)"/>
                    </div>
                </template>
            </dt-header>
        </template>
        <dt-body style="padding: var(--ph-pd-sm);">
            <div class="ph-dt-swiper" ref="eswiper" v-touchmove="onTouchmove" :style="{transform:'translate3d('+state.tx+'px,0,0)'}">
                <DtSimplepicker 
                    :modelValue="start"
                    :ctype="ctype"
                    :utype="utype"
                    :lang="lang"
                    :min="min"
                    :max="smax"
                    @update="updateStart"
                />
                <DtSimplepicker 
                    :modelValue="end"
                    :ctype="ctype"
                    :utype="utype"
                    :lang="lang"
                    :min="emin"
                    :max="max"
                    @update="updateEnd"
                />
            </div>
        </dt-body>
        <template #footer>
            <dt-footer>
                <div class="ph-dt-footer-left">{{state.status?endString:startString}}</div>
                <div class="ph-dt-footer-right">
                    <dt-btn @click="emits('clear')" v-if="clear">{{lang.clear}}</dt-btn>
                    <dt-now @click="emits('now')" :min="min" :max="max" v-if="now">{{lang.now}}</dt-now>
                    <dt-btn @click="emits('done')">{{lang.done}}</dt-btn>
                </div>
            </dt-footer>
        </template>
    </dt-layout>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, reactive, ref } from 'vue'
import { SharedCascadeProps, DtType } from '../shared'
import { touchmove as vTouchmove } from '../../../directives/gesture'
import { Arrow}  from '../../icon'
import DtLayout from '../layout/layout.vue'
import DtHeader from '../layout/layout-header.vue'
import DtFooter from '../layout/layout-footer.vue'
import DtBody from '../layout/layout-body.vue'
import DtBtn from '../cmp/btn.vue'
import DtNow from '../cmp/now.vue'
import DtSimplepicker from './simple-picker.vue'

const emits = defineEmits(['update:start','update:end','done','clear','now'])
const eswiper = ref<HTMLElement>()
const props = defineProps({
    ...SharedCascadeProps,
    utype:String,
    ctype:String
})
const state = reactive({
    status:0,
    tx:0
})
const updateStart = (v:Array<number>)=>{
    emits('update:start',v)
}
const updateEnd = (v:Array<number>)=>{
    emits('update:end',v)
}
const onTouchmove = (e:Event,meta:{dx:number,dy:number,tx:number,end:boolean,speed:number})=>{
    if(!eswiper.value)return
    const w = eswiper.value.clientWidth;
    const {dx,dy,tx,end,speed} = meta
    if(Math.abs(dx)<Math.abs(dy)||Math.abs(dx)<20)return
    if(meta.dx<0)onSwipeleft(dx,tx,end,speed,w)
    else onSwiperight(dx,tx,end,speed,w)
}
const onSwipeleft = (dx:number,tx:number,end:boolean,speed:number,w:number)=>{
    if(state.status)return
    let tx1 = tx
    let status = 0
    if(end){
        const shift = speed>3||Math.abs(dx*speed)>w/4
        tx1 = shift ?  -w/2 : 0
        status = shift ? 1 : 0
    }
    notify(tx1,status)
}
const onSwiperight = (dx:number,tx:number,end:boolean,speed:number,w:number)=>{
    if(!state.status)return
    let tx1 = tx
    let status = 1
    if(end){
        const shift = speed>3||Math.abs(dx*speed)>w/4
        tx1 = shift ? 0 : -w/2
        status = shift ? 0 : 1
    }
    notify(tx1,status)
}
const notify = (tx:number,status:number)=>{
    Object.assign(state,{
        tx,
        status
    })
}
</script>
<style lang="scss">
.ph-dt-swiper{
    height: 100%;
    width: 200%;
    flex: 1 0 auto;
    transition: transform .3s ease-in-out;
    display: flex;
}
</style>