<template>
<div class="ph-notify">
    <div class="ph-notify-layout">
        <custom-icon class="ph-status-icon" :name="icon" v-if="icon" :type="type"/>
        <circle-success class="ph-status-icon" v-else-if="type=='success'" type='success'/>
        <circle-info class="ph-status-icon" v-else-if="type=='info'" type='info'/>
        <circle-warning class="ph-status-icon" v-else-if="type=='warning'" type='warning'/>
        <circle-danger class="ph-status-icon" v-else-if="type=='error'" type='danger'/>
        <div class="ph-notify-wrap">
            <h1 class="ph-notify-title">
                <span>{{title||'通知'}}</span>
                <times v-if="showClose" :active="false" @click="close(0,true)" class="ph-notify-close" :hover="true"/>
            </h1>
            <p class="ph-notify-body" @click="click">{{content}}</p>
        </div>
    </div>
    <div class="ph-notify-action" v-if="confirm">
        <f-button size="mini" @click="close(0,true)">{{confirm.cancelText||'关&ensp;闭'}}</f-button>
        <f-button size="mini" type="primary" @click="close(1,true)">{{confirm.doneText||'确&ensp;认'}}</f-button>
    </div>
</div>
</template>
<script lang="ts" setup>
import './item.scss';
import { defineEmits, defineProps, PropType, defineAsyncComponent, onMounted } from 'vue'
import { CircleSuccess, CircleDanger, CircleInfo, CircleWarning, Times, CustomIcon } from '../icon'
import { INotifyPosition } from '../../shared/types'
import { CloseStatus } from './types'
import type IEvt from 'ph-evt'

const FButton = defineAsyncComponent(()=>import("../button/main.vue"))
const emits = defineEmits(["close"])
const props = defineProps({
    type:String as PropType<'success'|'error'|'warning'|'info'|'default'>,
    showClose:{type:Boolean,default:true},
    autoClose:{type:Boolean,default:false},
    clickClose:{type:Boolean,default:true},
    idx:Number,
    title:String,
    content:String,
    icon:String,
    nid:String,
    evt: Object as PropType<IEvt> ,
    confirm:Object as PropType<{
        doneText?:string,cancelText?:string
    }>
})
const getMeta = ()=>{
    const {type,title,content,autoClose,showClose,confirm} = props
    return {type,title,content,autoClose,showClose,confirm}
}
const close = (status:number,man?:boolean)=>{
    const en = status==CloseStatus.confirm?'confirm':'close'
    if(man)
    props.evt?.emit(en,{
        man,
        action:en,
        meta:getMeta()
    })
    emits("close")
}
const click = ()=>{
    props.evt?.emit("click",{
            action:"click",
            man:true,
            meta:getMeta()
    })
    if(!props.confirm&&props.clickClose)
    close(CloseStatus.close)
}
onMounted(()=>{
    if(props.autoClose&&!props.confirm){
        setTimeout(()=>{
            close(CloseStatus.close)
        },10000)
    }
})
</script>