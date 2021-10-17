<template>
    <transition name="ph-notify-fade">
        <div :class="cns" :style="style" v-if="visible">
            <circle-tick class="ph-status-icon" v-if="type=='success'" fill="var(--ph-success)" stroke="var(--ph-c-top)"/>
            <circle-exclam class="ph-status-icon" v-else-if="type=='info'" fill="var(--ph-info)" stroke="var(--ph-c-top)"/>
            <triangle class="ph-status-icon" v-else-if="type=='warning'" fill="var(--ph-c-top)" stroke="var(--ph-warning)"/>
            <circle-times class="ph-status-icon" v-else-if="type=='error'" fill="var(--ph-error)" stroke="var(--ph-c-top)"/>
            <div class="ph-notify-wrap">
                <h1 class="ph-notify-title">
                    <span>{{title}}</span>
                    <times v-if="showClose" :active="false" @click="close(0,true)" class="ph-notify-close" :hover="true"/>
                </h1>
                <p class="ph-notify-body" @click="click">{{content}}</p>
            </div>
            <div class="ph-notify-action" v-if="confirm">
                <f-button size="mini" @click="close(0,true)">{{confirm.cancelText||'关&ensp;闭'}}</f-button>
                <f-button size="mini" type="primary" @click="close(1,true)">{{confirm.doneText||'确&ensp;认'}}</f-button>
            </div>
        </div>
    </transition>
</template>
<script lang="ts" setup>
import './main.scss'
import { computed, defineProps, defineExpose, PropType, ref, defineAsyncComponent } from 'vue'
import { CircleTick, CircleTimes, CircleExclam, Triangle, Times } from '../icon'
import { NotifyPosition, CloseStatus } from './types'
const FButton = defineAsyncComponent(()=>import("../button/main.vue"))

const props = defineProps({
    position:{
        type: String as PropType<NotifyPosition>,
        default:"right-bottom"
    },
    type:String as PropType<'success'|'error'|'warning'|'info'|'default'>,
    showClose:{type:Boolean,default:true},
    autoClose:{type:Boolean,default:true},
    title:String,
    content:String,
    clickClose:Boolean,

    onClose:Function,
    onClick:Function,
    confirm:Object as PropType<{
        doneText?:string,cancelText?:string
    }>
})
const nid = (Math.random()+"").replace(".","");
const visible = ref(false)
const y = ref("")
const cns = computed(()=>{
    return {
        'ph-notify':true,
        'ph-notify-right':props.position.startsWith("right"),
        'ph-notify-left':props.position.startsWith("left")
    }
})
const style = computed(()=>{
    const style = {} as Record<string,unknown>
    const Y = props.position.split("-")[1]
    if(Y)style[Y] = y.value
    return style
})
const show = (top:string)=>{
    visible.value = true
    y.value = top
    if(props.autoClose&&!props.confirm){
        setTimeout(()=>{
            close(CloseStatus.close)
        },10000)
    }
}
const close = (status:number,manu?:boolean)=>{
    if(visible.value){
        props.onClose&&props.onClose(nid,status,manu)
        visible.value = false
    }
}
const click = ()=>{
    props.onClick&&props.onClick({nid,manu:true})
    if(!props.confirm&&props.clickClose)
    close(CloseStatus.close)
}

defineExpose({
    show,
    nid,
    position:props.position,
    autoClose:props.autoClose,
    showClose:props.showClose,
    confirm:!!props.confirm
})
</script>
