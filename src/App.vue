<template>
<f-page :mode="state.mode" :theme="state.theme">
  <template #aside>
    <f-aside :showLogo="aside.showLogo" :avatar="aside.avatar" :appName="aside.appName" @logo-click="onLogoClick">
      <template v-slot:default="props">
        <f-menu-tree :simple="props.toggle" :tree="menuData" :paths="state.paths" @navigate="onNavigate"/>
      </template>
    </f-aside>
  </template>
  <f-main>
    <template #header>
      <f-header>
        <template #left>
          <f-breadcrumb :paths="state.paths"></f-breadcrumb>
        </template>
        <template #right>
          <f-button sm-visible="false" @click="state.preview=true" shape="square" fillMode="none" v-tooltip="{content:'自适应预览',position:'br'}" v-if="state.isTop"><mobile/></f-button>
          <f-theme-picker v-model:mode="state.mode" v-model:theme="state.theme" popposition="br"/>
        </template>
      </f-header>
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
    <iframe class="ph-preview-frame" :src="iurl" frameborder="0"></iframe>
  </f-drawer>
  </teleport>
</f-page>
</template>
<script lang="ts" setup>
import { 
  FDrawer,
FGLoading,
  FThemePicker,
  FBreadcrumb,
  FPage,
  FAside,
  FHeader,
  FMenuTree,
  FMain,
  FButton } from '@/components'
import { Sun,Moon,Mobile } from '@/components/icon'
import { computed, onMounted, reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { searchPath } from '@/shared/tree'
import vTooltip from '@/directives/tooltip'
import menuData from './data/nav'

const hash = location.hash.replace(/#/g,"").replace("//","/")

const state = reactive<{
  isTop?:boolean,
  preview:boolean,
  aside:unknown,
  cpath:any,
  theme:string,
  mode:string,
  paths:Array<Record<string,any>>}>({
  isTop:window===top,
  preview:false,
  aside:{
    showLogo:true,
    avatar:"https://v3.cn.vuejs.org/logo.png",
    appName:"FreeUi"
  },
  paths:searchPath(menuData,hash)||[],
  theme:"danger",
  mode:"dark",
  cpath:hash||"/"
})

const { aside } = toRefs(state)
const router = useRouter()
const iurl = computed(()=>{
  const url = location.pathname+"#"+state.cpath
  return url
})
const onLogoClick = ()=>{
  router.push("/")
}
const onNavigate = (paths:Array<{id:string,action:string}>)=>{
  const cpath = paths[paths.length-1].action
  state.paths = paths
  state.cpath = cpath
  router.push(cpath)
}
router.beforeEach((to,from)=>{
  // console.log("before",from,to)
  FGLoading.showBar()
})

router.afterEach((to,from)=>{
  // console.log("after",from,to)
  FGLoading.endBar()
})

onMounted(()=>{
  state.paths = searchPath(menuData,hash)||[]
  state.cpath = (state.paths[state.paths.length-1]?.action)||"/"
})
</script>
<style lang="scss">
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
