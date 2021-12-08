import{d as l,k as c,a as F,f as t,l as u,w as e,u as o,o as p,A as n}from"./vendor.adc10202.js";import{F as E,_ as i,$ as a}from"./index.513ab18a.js";import{_ as m}from"./group.c7619c52.js";const d={class:"www-container"},f={class:"www-intro"},w=t("p",null,"\u4E00\u6B3E\u4E2A\u4EBA\u8F7B\u91CFui\u7EC4\u4EF6\u5E93\uFF0C\u57FA\u4E8E vue3+typescript,\uFF08\u4E1A\u4F59\u65F6\u95F4\u7684\u7EC3\u624B\u9879\u76EE\uFF0C\u76EE\u524D\u8FD8\u5728\u5B8C\u5584\u4E2D\uFF0C\u6B22\u8FCE\u63D0\u610F\u89C1\u6216\u5EFA\u8BAE\u54C8\uFF09",-1),g=n("\u6362\u4E2A\u4E3B\u9898"),_=n("\u5F00\u59CB\u4F7F\u7528"),b=l({setup(h){const r=()=>a.emit("theme-shift"),s=()=>a.emit("start-tutorial");return c({parts:[{nowrap:!0,type:"empty",template:`<div class="www-intro">
    <div><FreeUiLogo class="www-logo-title"/></div>
    <p>\u4E00\u6B3E\u4E2A\u4EBA\u8F7B\u91CFui\u7EC4\u4EF6\u5E93\uFF0C\u57FA\u4E8E vue3+typescript,\uFF08\u4E1A\u4F59\u65F6\u95F4\u7684\u7EC3\u624B\u9879\u76EE\uFF0C\u76EE\u524D\u8FD8\u5728\u5B8C\u5584\u4E2D\uFF0C\u6B22\u8FCE\u63D0\u610F\u89C1\u6216\u5EFA\u8BAE\u54C8\uFF09</p>
    <f-button-group class="www-action-group">
        <f-button fillMode="outline" size="large" @click="onThemeShift">\u6362\u4E2A\u4E3B\u9898</f-button>
        <f-button fillMode="outline" type="primary" size="large" @click="onTutorial">\u5F00\u59CB\u4F7F\u7528</f-button>
    </f-button-group>
</div>`}],title:"\u4E3B\u9875",icon:"gg",root:!0,script:`import { FButton,FButtonGroup } from '@phoeon/free-ui'
import FreeUiLogo from '@demo/components/logo.vue'
import { onMounted } from 'vue'
import $evt from '../shared/evt'
const onThemeShift = ()=>$evt.emit('theme-shift')
const onTutorial = ()=>$evt.emit('start-tutorial')`,style:`.www-intro{
    padding: 60px 0;
    max-width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        margin-bottom: var(--ph-pd-lg);
        text-align:center;
    }
    .www-logo-title{
        height:80px;
    }
    p{
        margin-bottom: var(--ph-pd-lg);
        text-align:center;
    }
    .www-action-group{
        gap: var(--ph-pd);
    }
}`,anchors:[]}.anchor),(B,v)=>(p(),F("div",d,[t("div",f,[t("div",null,[u(E,{class:"www-logo-title"})]),w,u(o(m),{class:"www-action-group"},{default:e(()=>[u(o(i),{fillMode:"outline",size:"large",onClick:r},{default:e(()=>[g]),_:1}),u(o(i),{fillMode:"outline",type:"primary",size:"large",onClick:s},{default:e(()=>[_]),_:1})]),_:1})])]))}});export{b as default};
