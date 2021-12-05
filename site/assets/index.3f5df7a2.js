import{d as l,k as c,a as F,f as u,l as t,w as e,u as n,o as p,A as o}from"./vendor.6c48bfff.js";import{_ as i,$ as a}from"./index.898e7603.js";import{_ as E}from"./group.529e0764.js";const f={class:"www-container"},m={class:"www-intro"},d=u("h1",null,"FREE UI",-1),_=u("p",null,"\u4E00\u6B3E\u4E2A\u4EBA\u8F7B\u91CFui\u7EC4\u4EF6\u5E93\uFF0C\u57FA\u4E8E vue3+typescript,\uFF08\u4E1A\u4F59\u65F6\u95F4\u7684\u7EC3\u624B\u9879\u76EE\uFF0C\u76EE\u524D\u8FD8\u5728\u5B8C\u5584\u4E2D\uFF0C\u6B22\u8FCE\u63D0\u610F\u89C1\u6216\u5EFA\u8BAE\u54C8\uFF09",-1),h=o("\u6362\u4E2A\u4E3B\u9898"),C=o("\u5F00\u59CB\u4F7F\u7528"),b=l({setup(g){const r=()=>a.emit("theme-shift"),s=()=>a.emit("start-tutorial");return c({parts:[{nowrap:!0,type:"empty",template:`<div class="www-intro">
    <h1>FREE UI</h1>
    <p>\u4E00\u6B3E\u4E2A\u4EBA\u8F7B\u91CFui\u7EC4\u4EF6\u5E93\uFF0C\u57FA\u4E8E vue3+typescript,\uFF08\u4E1A\u4F59\u65F6\u95F4\u7684\u7EC3\u624B\u9879\u76EE\uFF0C\u76EE\u524D\u8FD8\u5728\u5B8C\u5584\u4E2D\uFF0C\u6B22\u8FCE\u63D0\u610F\u89C1\u6216\u5EFA\u8BAE\u54C8\uFF09</p>
    <f-button-group class="www-action-group">
        <f-button fillMode="outline" size="large" @click="onThemeShift">\u6362\u4E2A\u4E3B\u9898</f-button>
        <f-button fillMode="outline" type="primary" size="large" @click="onTutorial">\u5F00\u59CB\u4F7F\u7528</f-button>
    </f-button-group>
</div>`}],title:"\u4E3B\u9875",icon:"gg",root:!0,script:`import { FButton,FButtonGroup } from '@phoeon/free-ui'
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
    p{
        margin-bottom: var(--ph-pd-lg);
        text-align:center;
    }
    .www-action-group{
        gap: var(--ph-pd);
    }
}`,anchors:[]}.anchor),(B,v)=>(p(),F("div",f,[u("div",m,[d,_,t(n(E),{class:"www-action-group"},{default:e(()=>[t(n(i),{fillMode:"outline",size:"large",onClick:r},{default:e(()=>[h]),_:1}),t(n(i),{fillMode:"outline",type:"primary",size:"large",onClick:s},{default:e(()=>[C]),_:1})]),_:1})])]))}});export{b as default};
