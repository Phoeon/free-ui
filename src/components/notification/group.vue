<template>
    <div class="ph-notify-group" v-if="list.length" :collapsed="canCollapse&&state.collapsed">
        <div class="ph-notify-group-actionbar" v-if="canCollapse">
            <span class="ph-notify-group-title">{{group.v||'通知中心'}}</span>
            <div class="ph-notify-group-actions">
                <circle-times @click="$emit('closeAll',group.k)" title="移除全部"/>
                <arrow shape="circle" :double="true" :position="state.collapsed?'down':'up'" @click="toggle" :title="state.collapsed?'展开':'收起'"/>
            </div>
        </div>
        <transition-group name="ph-notify-fade" mode="out-in">
            <notification :class="'ph-notify-'+hrp" 
                v-for="(item,i) in (list||[])" 
                :key="item.nid"
                :type="item.type"
                :icon="item.icon"
                :showClose="item.showClose"
                :autoClose="item.autoClose"
                :title="item.title"
                :content="item.content"
                :clickClose="item.clickClose"
                :nid="item.nid"
                :evt="item.evt"
                :confirm="item.confirm"
                :simple="canCollapse&&state.collapsed"
                :style="styleFn(list.length,i)"
                @close="$emit('close',{nid:item.nid,groupId:group.k})"
            ></notification>
        </transition-group>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, PropType, computed, reactive } from 'vue'
import Notification from './item.vue'
import { CircleTimes,Arrow } from '../icon'
import { Igroup, IPhNotifyOpt } from './types'
const props = defineProps({
    group:Object as PropType<Igroup>,
    hrp:String,
    vtp:String,
    collapsed:Boolean,
    list:{
        type:Array as PropType<Array<IPhNotifyOpt>>,
        default:()=>[]
    }
})

const canCollapse = computed(()=>props.list.length>3)
const styleFn = (l:number,i:number)=>{
    return props.vtp=="top"?{
        '--ph-notify-idx':l-i-1,
        '--ph-notify-alpha':1-(l-i-1)*0.33,
        zIndex:i
    }:{
        '--ph-notify-idx':i,
        '--ph-notify-alpha':1-i*0.33,
        zIndex:l-1-i
    }
}
const state = reactive({
    collapsed:true
})
const toggle = ()=>{
    state.collapsed = !state.collapsed
}
</script>
<style lang="scss">
.ph-notify-fade-enter-from.ph-notify-right,
.ph-notify-fade-leave-to.ph-notify-right {
    opacity: 0;
    transform: translateX(100%)
}
.ph-notify-fade-leave-from.ph-notify-right,
.ph-notify-fade-enter-to.ph-notify-right {
    transform: translateX(0%);
    opacity: 1;
}


.ph-notify-fade-enter-from.ph-notify-left,
.ph-notify-fade-leave-to.ph-notify-left {
    opacity: 0;
    transform: translateX(-100%)
}
.ph-notify-fade-leave-from.ph-notify-left,
.ph-notify-fade-enter-to.ph-notify-left {
    transform: translateX(0%);
    opacity: 1;
}
.ph-notify-fade-enter-active,
.ph-notify-fade-leave-active {
	transition: all .3s ease;
    position: relative;
    z-index: 999;
}
.ph-notify-group{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex: 0 0 auto;
    &[collapsed=true]{
        min-height: 160px;
        transform-style: preserve-3d;
        perspective: 1000px;
    }
    &-title{
        color: var(--ph-c-d1);
        font-weight: 500;
    }
    
    &-actionbar{
        width: 100%;
        height: 32px;
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        background-color: var(--ph-notify-bg);
        backdrop-filter: var(--ph-notify-backdrop);
        padding: var(--ph-notify-pd);
        box-shadow: var(--ph-shadow-1);
        border-radius: 4px;
        margin-bottom: 8px;
        .ph-notify-group-actions{
            flex: 1;
            text-align: right;
            .ph-icon{
                margin-left: 8px;
                cursor: pointer;
            }
        }
    }
}
</style>