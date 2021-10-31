<template>
<f-page>
  <template #aside>
    <f-aside :showLogo="aside.showLogo" :avatar="aside.avatar" :appName="aside.appName" @logo-click="onLogoClick">
      <template v-slot:default="props">
        <f-menu-tree :simple="props.toggle" :tree="menuData" :paths="state.paths" @navigate="onNavigate"/>
      </template>
    </f-aside>
  </template>
  <f-main>
    <template #topbar>
      <div class="block">
        <f-button @click="onShiftMode" shape="square" fillMode="none" title="切换全局主题"><Theme/></f-button>
      </div>
    </template>
    <router-view v-slot="{ Component, route }">
      <transition name="ph-fs" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </f-main>
</f-page>
</template>
<script lang="ts" setup>
import { 
  FPage,
  FAside,
  FMenuTree,
  FMain,
  FButton } from '@/components'
import { Theme } from '@/components/icon'
import { onBeforeMount, reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { searchPath } from '@/shared/tree'

import menuData from './data/nav'

const state = reactive<{aside:unknown,paths:unknown}>({
  aside:{
    showLogo:true,
    avatar:"https://v3.cn.vuejs.org/logo.png",
    appName:"ui组件库"
  },
  paths:searchPath(menuData,location.pathname)||[]
})
const { aside } = toRefs(state)
const router = useRouter()
const theme = ref("dark")

const onShiftMode = ()=>{
  theme.value = theme.value=='dark'?'light':'dark'
  document.documentElement.setAttribute("f-mode",theme.value)
}
const onLogoClick = ()=>{
  router.push("/")
}
const onNavigate = (paths:Array<{id:string,action:string}>)=>{
  state.paths = paths
  router.push(paths[paths.length-1].action)
}
onBeforeMount(()=>{
  onShiftMode()
})
</script>
<style lang="scss">
@import '@/assets/style/rebot.scss';
.btn-container{
    .ph-card-body{
        display: flex;
        flex-wrap:wrap;
        gap: var(--ph-pd)
    }
}
.flex-box-col{
    display: flex;
    flex-wrap: wrap;
    gap: var(--ph-pd);
}
.flex-box{
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    gap: var(--ph-pd);
}
</style>
