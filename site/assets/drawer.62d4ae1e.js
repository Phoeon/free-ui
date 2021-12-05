import{d as _,r as v,k as b,I as y,e as l,w as o,o as w,A as s,p as f,u as t,l as r,K as g,f as m}from"./vendor.6c48bfff.js";import{g as h}from"./gen-code.94dbf386.js";import{_ as p}from"./index.898e7603.js";import{_ as C}from"./group.529e0764.js";import{_ as B}from"./main.750f659b.js";import{s as F}from"./sutra.5cb6dd6e.js";const D=s("\u4E0A"),k=s("\u4E0B"),x=s("\u5DE6"),A=s("\u53F3"),E=m("h1",{class:"www-drawer-title"},"\u300A\u5FC3\u7ECF\u300B",-1),$={class:"www-drawer-content"},K=_({setup(j){const a=v({visible:!1,position:""}),i=d=>{a.visible=!0,a.position=d},u={parts:[{title:"\u6848\u4F8B\u5C55\u793A",nowrap:!1,type:"card",id:"nav_0",template:`    <f-button-group>
        <f-button type="primary" @click="openDrawer('top')">\u4E0A</f-button>
        <f-button type="primary" @click="openDrawer('bottom')">\u4E0B</f-button>
        <f-button type="primary" @click="openDrawer('left')">\u5DE6</f-button>
        <f-button type="primary" @click="openDrawer('right')">\u53F3</f-button>
    </f-button-group>
    <teleport to="body">
    <f-drawer class="www-drawer" v-model="state.visible" :position="state.position">
        <h1 class="www-drawer-title">\u300A\u5FC3\u7ECF\u300B</h1>
        <p class="www-drawer-content">{{sutra}}</p>
    </f-drawer>
    </teleport>`,script:`import { FButtonGroup, FButton, FDrawer } from '@phoeon/free-ui'
import { reactive } from 'vue'
const state = reactive({
    visible:false,
    position:""
})
const openDrawer = (position:string)=>{
    state.visible = true
    state.position = position
}`}],title:"\u62BD\u62C9drawer",root:!1,script:`import { FButtonGroup, FButton, FDrawer } from '@phoeon/free-ui'
import { reactive } from 'vue'
import { sutra } from '@demo/data/sutra'
const state = reactive({
    visible:false,
    position:""
})
const openDrawer = (position:string)=>{
    state.visible = true
    state.position = position
}`,style:`.www-drawer{
    .right,
    .left{
        .www-drawer-content{
            width:250px;
        }    
    }
    .www-drawer-title{
        display:flex;
        align-items:center;
        padding:var(--ph-pd-lg) var(--ph-pd) var(--ph-pd) var(--ph-pd);
        font-size:22px;
        border-bottom:1px solid var(--ph-bg-a1-reverse);
    }
    .www-drawer-content{
        padding:var(--ph-pd);
    }
}`,anchors:[{text:"\u6848\u4F8B\u5C55\u793A",value:"nav_0"}],anchor:"nav_0"};return b(u.anchor),(d,e)=>{const c=y("demo-card");return w(),l(c,{id:"nav_0",title:"\u6848\u4F8B\u5C55\u793A"},{code:o(()=>[s(f(t(h)(u.parts[0])),1)]),default:o(()=>[r(t(C),null,{default:o(()=>[r(t(p),{type:"primary",onClick:e[0]||(e[0]=n=>i("top"))},{default:o(()=>[D]),_:1}),r(t(p),{type:"primary",onClick:e[1]||(e[1]=n=>i("bottom"))},{default:o(()=>[k]),_:1}),r(t(p),{type:"primary",onClick:e[2]||(e[2]=n=>i("left"))},{default:o(()=>[x]),_:1}),r(t(p),{type:"primary",onClick:e[3]||(e[3]=n=>i("right"))},{default:o(()=>[A]),_:1})]),_:1}),(w(),l(g,{to:"body"},[r(t(B),{class:"www-drawer",modelValue:t(a).visible,"onUpdate:modelValue":e[4]||(e[4]=n=>t(a).visible=n),position:t(a).position},{default:o(()=>[E,m("p",$,f(t(F)),1)]),_:1},8,["modelValue","position"])]))]),_:1})}}});export{K as default};
