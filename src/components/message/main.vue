<template>
    <transition name="ph-msg-fade">
        <div :class="['ph-msg','ph-msg-'+position,'ph-msg-'+type]" :style="style" v-if="state.visible">
            <div class="ph-msg-icon-wrap" v-if="type||icon">
                <custom-icon :style="{color:iconColor}" class="ph-status-icon" :name="icon" v-if="icon" :type="type"/>
                <circle-success class="ph-status-icon" type='success' v-else-if="type=='success'"/>
                <circle-info class="ph-status-icon" type='info' v-else-if="type=='info'"/>
                <circle-warning class="ph-status-icon" type='warning' v-else-if="type=='warning'"/>
                <circle-danger class="ph-status-icon" type='danger' v-else-if="type=='error'"/>
            </div>
            <p class="ph-msg-body" @click.stop="clickClose&&onClose(1)">{{content}}</p>
        </div>
    </transition>
</template>
<script lang="ts" setup>
import { computed, defineProps, defineExpose, PropType, reactive, toRef } from 'vue'
import { CircleSuccess, CircleDanger, CircleInfo, CircleWarning, CustomIcon } from '../icon'
import { IMsgType } from './types'
const props = defineProps({
    type:{
        type:String as PropType<IMsgType>,default:"default"
    },
    position:{type:String as PropType<'top'|'bottom'>,default:'top'},
    icon:String,
    iconColor:String,
    // showClose:{type:Boolean,default:true},
    autoClose:{type:Boolean,default:true},
    clickClose:{type:Boolean,default:true},
    content:String,
    nid:String,
    close:Function as PropType<(a?:any)=>void>
})
const state = reactive({
    y:0,
    visible:false
})
const style = computed(()=>{
    const style = {} as Record<string,unknown>
    style[props.position] = state.y+"px"
    return style
})
const show = (y:number)=>{
    state.visible = true
    state.y = y
    if(props.autoClose){
        setTimeout(()=>{
            onClose()
        },5000)
    }
}
const onClose = (status?:number)=>{
    props.close?.(status)
    state.visible = false
}
defineExpose({
    show,
    nid:props.nid,
    position:props.position,
    y:toRef(state,'y')
})

</script>
<style lang="scss">
.ph-msg-fade-enter-from.ph-msg-top,
.ph-msg-fade-leave-to.ph-msg-top {
    opacity: 0;
    transform: translate(-50%,-100%);
}
.ph-msg-fade-leave-from.ph-msg-top,
.ph-msg-fade-enter-to.ph-msg-top {
    transform: translate(-50%,0%);
    opacity:1;
}
.ph-msg-fade-enter-from.ph-msg-bottom,
.ph-msg-fade-leave-to.ph-msg-bottom {
    opacity: 0;
    transform: translate(-50%,100%);
}
.ph-msg-fade-leave-from.ph-msg-bottom,
.ph-msg-fade-enter-to.ph-msg-bottom {
    transform: translate(-50%,0%);
    opacity:1;
}
.ph-msg{
    position: fixed;
    box-sizing: border-box;
    backface-visibility: hidden;
    width: var(--ph-gmsg-w);
    font-size: var(--ph-gmsg-fs);
    border-radius: 4px;
    left: 50%;
    transform: translate(-50%,0%);
    transition: opacity .3s,transform .3s,top .3s,bottom .3s;
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
    padding: var(--ph-pd-sm) var(--ph-pd);
    z-index:var(--ph-zdx-modal);
    background-color: var(--ph-msg-bg);
    border: 1px solid var(--ph-bd-1);
    color: var(--ph-c-d1);
    font-weight: var(--ph-fw-m);
    
    &-icon-wrap{
        height: var(--ph-gmsg-lh);
        display: flex;
        align-items: center;
    }
    &-body{
        line-height: var(--ph-gmsg-lh);
        word-break: break-word;
        flex: 1;
    }
    .ph-icon{
        --ph-i-size:16px;
        font-size: var(--ph-gmsg-ih);
        margin-right: var(--ph-pd-sm);
    }
    &-default{
        box-shadow: var(--ph-shadow-l8);
    }
    &-warning{
        background-color: var(--ph-warning-bg);
        color: var(--ph-warning-c);
        border-color: var(--ph-warning-bd);
    }
    &-success{
        background-color: var(--ph-success-bg);
        color: var(--ph-success-c);
        border-color: var(--ph-success-bd);
    }
    &-info{
        background-color: var(--ph-info-bg);
        color: var(--ph-info-c);
        border-color: var(--ph-info-bd);
    }
    &-error{
        background-color: var(--ph-danger-bg);
        color: var(--ph-danger-c);
        border-color: var(--ph-danger-bd);
    }
}
</style>
