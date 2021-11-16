<template>
    <div class="toolbox">
        <div class="toolbox-item" @mouseenter="onEnter" @mouseleave="onLeave" ref="epophandle">
            <custom-icon name="wechat"/>
        </div>
        <div v-if="ptype==='demo'" class="toolbox-item" v-tooltip="{position:'l',content:'在线文档'}" @click="navigate('doc')">
            <custom-icon name="file"/>
        </div>
        <div v-if="ptype==='doc'" class="toolbox-item" v-tooltip="{position:'l',content:'在线案例'}" @click="navigate('demo')">
            <custom-icon name="file"/>
        </div>
        <div class="toolbox-item" v-tooltip="{position:'l',content:'源码地址'}" @click="navigate('git')">
            <custom-icon name="github"/>
        </div>
        <f-pop-container class="ph-theme-card" 
                v-model="state.visible" 
                :rect="state.rect"
                position="lc"
                @enter="onPopEnter" 
                @leave="onPopLeave">
            <img style="width:180px;height:auto;" alt="个人微信，加我技术交流" src="../assets/wx.jpeg">
        </f-pop-container>
    </div>
</template>
<script lang="ts" setup>
import { FIcon, FPopContainer } from '@/components'
import { vTooltip } from '@/directives'
import { reactive, Ref, ref } from 'vue'
const { CustomIcon } = FIcon

const epophandle = ref() as Ref<HTMLElement>
const ptype = process.env.VUE_APP_PRO_TYPE
const state = reactive({
    visible:false,
    enter:false,
    rect:{left:0,top:0,width:0,height:0}
})
const onPopEnter = ()=>state.enter = true
const onPopLeave = ()=>{
    state.visible = false
    state.enter = false
}
const onEnter = ()=>{
    state.rect = epophandle.value.getBoundingClientRect()
    state.visible = true
}
const onLeave = ()=>{
    setTimeout(()=>{
        if(state.enter)return
        state.visible = false
        state.enter = false
    },50)
}
const navigate = (t:string)=>{
    let url = location.href
    if(t==='doc')
        url = 'https://phoeon.gitee.io/free-ui/doc/'+location.hash
    else if(t==='demo')
        url = 'https://phoeon.gitee.io/free-ui/demo/'+location.hash
    else url = 'https://gitee.com/phoeon/free-ui'
    window.open(url,'_blank')
}
</script>
<style lang="scss">
.toolbox{
    position: fixed;
    right: 30px;
    bottom: 200px;
    width: 40px;
    z-index: 999;
    background-color: var(--ph-modal-bg);
    &-item{
        width: 40px;
        height: 40px;
        margin: 2px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        --ph-i-size:24px;
        &:hover{
            background-color: var(--ph-bg-a1-reverse);
        }
    }
}
</style>