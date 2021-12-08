<template>
    <f-page :class="['ph-app',showAside?'':'www-fullscreen']" :mode="state.mode" :theme="state.theme">
        <f-aside v-show="showAside" :showLogo="state.showLogo" :avatar="state.avatar" :appName="state.appName" @logo-click="onLogoClick">
            <template #logo>
                <FreeUiLogo @click="goHome"/>
            </template>
            <template v-slot:default="props">
            <f-menu-tree :simple="props.toggle" :tree="cnavs" :paths="state.paths" @navigate="onNavigate"/>
            </template>
        </f-aside>
        <f-main>

            <f-header class="www-header">
                <template #left>
                    <template  v-if="!state.sm&&state.cpath==='/'">
                    <FreeUiLogo class="www-logo" @click="goHome"/>
                    </template>
                    <template v-if="!state.sm">
                    <f-action :type="state.cpath==='/'?'primary':'normal'" @click="router.push('/')">首页</f-action>
                    <f-action :type="state.cpath.startsWith('/cmp')?'primary':'normal'" @click="router.push('/cmp/button')">组件</f-action>
                    <!-- <f-action :type="state.cpath.startsWith('/doc')?'primary':'normal'" >文档</f-action> -->
                    </template>
                </template>
                <template #right>
                    <template v-if="!state.sm">
                    <f-action href="https://gitee.com/phoeon/free-ui" target="_blank">Gitee</f-action>
                    <f-text>{{AppInfo.version}}</f-text>
                    </template>
                    <f-theme-picker v-model:mode="state.mode" v-model:theme="state.theme" popposition="br"/>
                </template>
            </f-header>

            <f-view class="www-view" ref="eview">
                <router-view />
                <site-footer></site-footer>
            </f-view>

        </f-main>
    </f-page>
</template>
<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { FPage,
        FMain,
        FView,
        FHeader,
        FAction,
        FText,
        FAside,
        FMenuTree,
        FGLoading,
        FThemePicker,
        FMessage,
        MediaQuery,
        MediaBreak,
        searchPath,

        } from '@phoeon/free-ui'
import SiteFooter from './components/footer.vue'
import FreeUiLogo from './components/logo.vue'
import AppInfo from './app-meta'
import $evt from './shared/evt'
import { genNavs } from './shared/genNavs'
import { routes } from 'demo-route'

const eview = ref<InstanceType<typeof FView>>()
const hash = location.hash.replace(/#/g,"").replace("//","/")
const navs = genNavs(routes)
const state = reactive({
    cpath:hash,
    mode:"dark",
    theme:"danger",
    showLogo:true,
    avatar:"https://v3.cn.vuejs.org/logo.png",
    appName:"FreeUi",
    sm:document.documentElement.clientWidth<=MediaBreak.sm,
    paths:[],
    timer:-1
})
const showAside = computed(()=>state.cpath!=='/'||state.sm)
const router = useRouter()
router.beforeEach((to,from)=>{
    FGLoading.showBar()
})
const cnavs = computed(()=>{
    if(state.sm)return navs
    else {
        if(state.cpath.match("cmp"))
            return navs.filter(n=>n.id==="/cmp")[0].children
        else if(state.cpath.match("doc"))
            return navs.filter(n=>n.id==="/doc")[0].children
        else return []
    }
})
state.paths = searchPath(cnavs.value,hash)

router.afterEach((to,from)=>{
    state.cpath = to.path
    FGLoading.endBar()
    eview.value?.scrollTo(0)
})
const onLogoClick = ()=>{
  router.push("/")
}
const onNavigate = (paths:Array<{id:string,action:string}>)=>{
  const cpath = paths[paths.length-1].action
  state.paths = paths
  router.push(cpath)
}
const onThemeShift = ()=>{
    state.mode = state.mode==="dark"?'light':"dark"
}
const onTutorial = ()=>{
    router.push("/cmp/button")
}
const goHome = ()=>{
    if(state.cpath==="/")
        FMessage.warning('已经在首页了，再点，扁你哟！')
    else 
        router.push("/")
}
const mediaQuery = (match:boolean,dw:number)=>{
    state.sm = dw<=MediaBreak.sm
}

MediaQuery.all(mediaQuery)

onMounted(()=>{
    $evt.on("theme-shift",onThemeShift)
    $evt.on("start-tutorial",onTutorial)
})

</script>
<style lang="scss">
.www-fullscreen{
    &:before{
        display: none!important;
    }
}
.www-header{
    .www-logo{
        cursor: pointer;
        flex: 0 0 auto;
    }
    .www-logo{
        margin-right: 80px;
        margin-left:var(--ph-pd);
    }
    .ph-action{
        margin-right: var(--ph-pd-lg);
    }
}
.www-view{
    padding: 0;
    position: relative;
    .ph-scroll-zone{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
.www-container{
    padding: var(--ph-pd-lg);
}
.www-title{
    padding: var(--ph-pd);
    color: var(--ph-c-d2);
    font-size: 18px;
}
.www-doc{
    display: flex;
    &-left{
        flex: 1;
        overflow-x: auto;
    }
    &-right{
        width: 180px;
        flex: 0 0 auto;
        padding: var(--ph-pd);
        .ph-anchors{
            top: var(--ph-pd-lg);
            position: sticky;
        }
    }
}
@media screen and (max-width:768px){
    .www-container{
        min-height: calc(100vh - 60px);
        flex: 1 0 auto;
    }
}
</style>