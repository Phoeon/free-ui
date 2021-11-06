<template>
<f-page :mode="mode">
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
        <f-button @click="state.preview=true" shape="square" fillMode="none" v-tooltip="{content:'自适应预览',position:'br'}" v-if="state.isTop"><mobile/></f-button>
        <f-button @click="onShiftMode" shape="square" fillMode="none" v-tooltip="{content:'黑白切换',position:'br'}"><moon v-if="mode==='light'"/><sun v-else/></f-button>
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
  <teleport to="body">
  <f-drawer v-model="state.preview" position="right" :alpha="true" class="ph-preview-drawer">
    <iframe class="ph-preview-frame" :src="state.cpath" frameborder="0"></iframe>
  </f-drawer>
  </teleport>
</f-page>
</template>
<script lang="ts" setup>
import { 
  FDrawer,
  FGLoading,
  FPage,
  FAside,
  FMenuTree,
  FMain,
  FButton } from '@/components'
import { Sun,Moon,Mobile } from '@/components/icon'
import { onMounted, reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { searchPath } from '@/shared/tree'
import vTooltip from '@/directives/tooltip'
import menuData from './data/nav'

const state = reactive<{
  isTop?:boolean,
  preview:boolean,
  aside:unknown,
  cpath:any,
  paths:Array<Record<string,any>>}>({
  isTop:window===top,
  preview:false,
  aside:{
    showLogo:true,
    avatar:"https://v3.cn.vuejs.org/logo.png",
    appName:"ui组件库"
  },
  paths:[],
  cpath:location.pathname
})

const { aside } = toRefs(state)
const router = useRouter()
const mode = ref("dark")

const onShiftMode = ()=>{
  mode.value = mode.value=='dark'?'light':'dark'
}
const onLogoClick = ()=>{
  router.push("/")
}
const onNavigate = (paths:Array<{id:string,action:string}>)=>{
  const cpath = paths[paths.length-1].action
  state.paths = paths
  state.cpath = cpath
  router.push(cpath)
}
onMounted(()=>{
  state.paths = searchPath(menuData,location.pathname)||[]
  state.cpath = state.paths[state.paths.length-1].action
  FGLoading.show().then(a=>{
    setTimeout(()=>a(),500)
  })
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
.ph-preview-frame{
  width: 100%;
  height: 100%;
  border: none;
}
.ph-preview-drawer{
  --ph-drawer-w: 375px;
  
}
</style>
