<template>
<div :class="['ph-notify-container', 'ph-notify-'+position]" v-if="visible">
    <NotificationGroup
        v-for="item in state.groups"
        :key="item.k"
        :group="item" 
        :list="state.notifications[item.k]" 
        :hrp="dirs[0]" 
        :vtp="dirs[1]"
        @closeAll="onCloseGroup"
        @close="onClose"/>
</div>
</template>
<script lang="ts" setup>
import { computed, defineExpose, defineProps, PropType, reactive } from 'vue'
import { INotifyOption, INotifyGroup} from '../../shared/types'
import type IEvt from 'ph-evt'
import Env from '../../shared/env'
import NotificationGroup from './group.vue'

const notifyConfig = Env.get("notify")
const position = (notifyConfig?.position)||"right-top"

const dirs = position.split("-")
const props = defineProps({
    evt: Object as PropType<IEvt>
})
const state = reactive<{
    groups:Array<INotifyGroup>,
    notifications:Record<string,Array<INotifyOption>>,
}>({
    groups:[],
    notifications:{
        "default":[]
    }
})
const visible = computed(()=>{
    let i=0;
    for(const key in state.notifications)
        i+= state.notifications[key].length
    return i
})
const show = (n:INotifyOption)=>{
    const group = n.group||"default"
    const idx = state.groups.findIndex(t=>t.k===group)
    if(idx<0){
        state.groups.push({k:group,v:n.groupDesc})
        state.notifications[group] = []
    }
    
    const notifications = state.notifications[group]
    if(dirs[1]=="top")
    notifications.push(n)
    else
    notifications.unshift(n)
}
const onClose = ({nid,groupId}:{nid:string,groupId?:string})=>{
    const group = groupId||"default"
    const notifications = state.notifications[group]
    state.notifications[group] = notifications.filter(item=>item.nid!=nid)
}
const onCloseGroup = (gid:string)=>{
    state.notifications[gid] = []
}
defineExpose({
    show
})
</script>
<style lang="scss">
.ph-notify-container{
    position: fixed;
    overflow: auto;
    width: var(--ph-notify-width);
    padding: var(--ph-notify-pd);
    z-index:var(--ph-zdx-notify);
    font-size: var(--ph-fs);
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 100%;
    -webkit-overflow-scrolling: touch;
    &.ph-notify-right-top{
        right: 8px;
        top: 8px;
        --ph-notify-mb: var(--ph-pd);
        --ph-notify-mt: 0;
    }
    &.ph-notify-right-bottom{
        right: 8px;
        bottom: 8px;
        --ph-notify-mt: var(--ph-pd);
        --ph-notify-mb: 0;
    }
    &.ph-notify-left-top{
        left: 8px;
        top: 8px;
        --ph-notify-mb: var(--ph-pd);
        --ph-notify-mt: 0;
    }
    &.ph-notify-left-bottom{
        left: 8px;
        bottom: 8px;
        --ph-notify-mt: var(--ph-pd);
        --ph-notify-mb: 0;
    }
}

@media screen and (max-width: 768px) {
    .ph-notify-container{
        left: 0;
        right: 0;
        margin: auto;
        --ph-notify-title-mp:4px;
        --ph-notify-title-lh:inherit;
        --ph-notify-body-lh:inherit;
        --ph-notify-body-mp:8px;
        --ph-notify-title-fs:12px;
        --ph-notify-body-fs:14px;
        --ph-notify-width:320px;
        --ph-notify-pd:16px;
        --ph-notify-bg:var(--ph-backdrop-alpha);
        --ph-notify-backdrop: blur(20px);
    }
}
@media screen and (min-width: 769px){
    .ph-notify-container{
        --ph-notify-width:384px;
        --ph-notify-title-fs:16px;
        --ph-notify-body-fs:14px;
        --ph-notify-title-mp:8px;
        --ph-notify-title-lh:24px;
        --ph-notify-body-lh:22px;
        --ph-notify-body-mp:8px;
        --ph-notify-pd:16px 24px;
    }
}
@media screen and (min-width: 769px) and (-webkit-min-device-pixel-ratio:2){
    .ph-notify-container{
        --ph-notify-width:320px;
        --ph-notify-title-fs:16px;
        --ph-notify-body-fs:14px;
        --ph-notify-title-mp:8px;
        --ph-notify-title-lh:24px;
        --ph-notify-body-lh:22px;
        --ph-notify-body-mp:8px;
        --ph-notify-pd:16px 24px;
    }
}

</style>
