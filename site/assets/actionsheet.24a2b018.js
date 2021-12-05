import{d as A,c as S,o as c,e as _,w as l,f as b,a as m,p as v,m as h,B as U,F as k,l as u,W as V,u as e,A as p,g as z,y as j,r as w,k as R,I as G}from"./vendor.6c48bfff.js";import{g as C}from"./gen-code.94dbf386.js";import{g as T,_ as y,h as x}from"./index.898e7603.js";import{_ as L}from"./main.750f659b.js";import{_ as N}from"./main.9982799e.js";import{C as O}from"./console.2352fe43.js";const I={key:0,class:"ph-as-topbar"},M={key:0,class:"ph-as-title"},Q={key:1,class:"ph-as-desc"},q={class:"ph-as-ul"},P={class:"ph-as-gtext"},W={class:"ph-as-cancelwrap"},D=A({props:{modelValue:[String,Number],visible:Boolean,autoClose:{type:Boolean,default:!0},title:String,desc:String,cancelText:String,type:{type:String,default:"list"},options:{type:Array,default:()=>[]},notify:Function},emits:["update:modelValue","update:visible","action"],setup(r,{emit:n}){const o=r,B=()=>{n("update:visible",!1)},E=(f,i)=>{var t;n("update:modelValue",f,i),n("action",i,B),(t=o.notify)==null||t.call(o,i,B),(o.autoClose||f===void 0)&&B()},F=S({set(f){n("update:visible",f)},get(){return o.visible}});return(f,i)=>(c(),_(L,{class:"ph-as-mask",position:"bottom",padding:"0px",modelValue:e(F),"onUpdate:modelValue":i[1]||(i[1]=t=>j(F)?F.value=t:null)},{default:l(()=>[b("div",{class:z(["ph-as","ph-as-"+r.type])},[r.desc&&r.title?(c(),m("div",I,[r.title?(c(),m("div",M,v(r.title),1)):h("v-if",!0),r.desc?(c(),m("div",Q,v(r.desc),1)):h("v-if",!0)])):h("v-if",!0),b("ul",q,[(c(!0),m(k,null,U(r.options,(t,d)=>(c(),m("li",{class:"ph-as-li",key:d},[r.type==="grid"?(c(),m(k,{key:0},[u(y,{shape:"square",class:"ph-as-gicon",disabled:t.disabled,onClick:s=>E(t.value,t)},V({_:2},[t.icon?{name:"leftIcon",fn:l(()=>[u(e(T),{color:t.iconColor,name:t.icon},null,8,["color","name"])])}:void 0]),1032,["disabled","onClick"]),b("span",P,v(t.text),1)],64)):(c(),_(y,{key:1,fillMode:"reverse",radius:!1,disabled:t.disabled,block:!0,type:t.type,onClick:s=>E(t.value,t)},V({default:l(()=>[p(" "+v(t.text),1)]),_:2},[t.icon?{name:"leftIcon",fn:l(()=>[u(e(T),{color:t.iconColor,name:t.icon},null,8,["color","name"])])}:void 0]),1032,["disabled","type","onClick"]))]))),128))]),b("div",W,[u(y,{radius:!1,block:!0,onClick:i[0]||(i[0]=t=>E())},{default:l(()=>[p(v(r.cancelText||"\u53D6\u6D88"),1)]),_:1})])],2)]),_:1},8,["modelValue"]))}}),$=[{text:"\u53D1\u9001\u597D\u53CB",value:0,icon:"chrome",iconColor:"#f00"},{text:"\u65B0\u6D6A\u5FAE\u535A",value:1,icon:"firefox"},{text:"\u5FAE\u4FE1\u597D\u53CB",value:2,icon:"safari"},{text:"\u5FAE\u4FE1\u597D\u53CB",value:3,icon:"internet-explorer"},{text:"QQ\u597D\u53CB",value:4,icon:"opera",iconColor:"#00f"},{text:"\u670B\u53CB\u5708",value:5,icon:"wechat",disabled:!0},{text:"telegram",value:5,icon:"telegram",iconColor:"#00f"},{text:"\u5C0F\u7EA2\u4E66",value:6,icon:"reddit",iconColor:"#ff0"},{text:"twitter",value:6,icon:"twitter"}],H={class:"www-doc"},J={class:"www-doc-left"},K=p("\u6253\u5F00list"),X=p("\u6253\u5F00grid"),Y=p("\u7981\u6B62\u5173\u95ED"),Z={class:"www-doc-right","sm-visible":"false"},le=A({setup(r){O.noble("options",$);const n=w({visible:!1,title:"\u652F\u4ED8\u65B9\u5F0F",desc:"\u8BF7\u9009\u62E9\u60A8\u7684\u652F\u4ED8\u65B9\u5F0F",value:1,options:[{text:"\u652F\u4ED8\u5B9D",value:0,type:"primary"},{text:"\u5FAE\u4FE1",value:1},{text:"\u4FE1\u7528\u5361",value:2}]}),o=w({visible:!1,visible1:!1,value:1,options:$}),B=()=>{n.visible=!0},E=()=>{o.visible=!0},F=(d,s)=>{d?x.success(d.text):x.error("\u53D6\u6D88\u4E8B\u4EF6")},f=(d,s)=>{d?x.success(d.text):x.error("\u53D6\u6D88\u4E8B\u4EF6")},i={parts:[{title:"\u6848\u4F8B\u5C55\u793Alist",nowrap:!1,type:"card",id:"nav_0",template:`    <f-button size="small" type="primary" @click="openList">\u6253\u5F00list</f-button>
    <f-actionsheet 
        v-model="state.value" 
        v-model:visible="state.visible" 
        :title="state.title" 
        :desc="state.desc" 
        :options="state.options" @action="onAction"></f-actionsheet>`,script:`import { FButton, FActionsheet, FToast } from '@phoeon/free-ui'
import { reactive } from 'vue'
const state  = reactive({
    visible:false,
    title:"\u652F\u4ED8\u65B9\u5F0F",
    desc:"\u8BF7\u9009\u62E9\u60A8\u7684\u652F\u4ED8\u65B9\u5F0F",
    value:1,
    options:[{
        text:"\u652F\u4ED8\u5B9D",
        value:0,
        type:"primary"
    },{
        text:"\u5FAE\u4FE1",
        value:1,
    },{
        text:"\u4FE1\u7528\u5361",
        value:2,
    }]
})
const openList = ()=>{
    state.visible = true
}
const onAction = (b:Record<string,any>,c:()=>void)=>{
    if(b){
        FToast.success(b.text)
    }else 
        FToast.error("\u53D6\u6D88\u4E8B\u4EF6")
}`},{title:"\u6848\u4F8B\u5C55\u793Agrid",nowrap:!1,type:"card",id:"nav_1",template:`    <f-button size="small" type="primary" @click="openGrid">\u6253\u5F00grid</f-button>
    <f-actionsheet 
        type="grid" 
        v-model="state1.value" 
        v-model:visible="state1.visible" 
        :title="state1.title" 
        :desc="state1.desc" 
        :options="state1.options" @action="onAction"></f-actionsheet>`,script:`import { FButton, FActionsheet, FToast } from '@phoeon/free-ui'
import { reactive } from 'vue'
const state1  = reactive({
    visible:false,
    value:1,
    options:[{/** \u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u6570\u636E **/}]
})
const openGrid = ()=>{
    state1.visible = true
}
const onAction1 = (b:Record<string,any>,c:()=>void)=>{
    if(b){
        FToast.success(b.text)
    }else 
        FToast.error("\u53D6\u6D88\u4E8B\u4EF6")
    // c()
}`},{title:"\u7981\u6B62\u5173\u95ED",nowrap:!1,type:"card",id:"nav_2",template:`    <f-button size="small" type="primary" @click="state1.visible1=true">\u7981\u6B62\u5173\u95ED</f-button>
    <f-actionsheet 
        type="grid" 
        v-model="state1.value" 
        v-model:visible="state1.visible1" 
        :autoClose="false" 
        :title="state1.title" 
        :desc="state1.desc" 
        :options="state1.options" @action="onAction1"></f-actionsheet>`,script:`import { FButton, FActionsheet, FToast } from '@phoeon/free-ui'
import { reactive } from 'vue'
const state1  = reactive({
    visible1:false,
    value:1,
    options:[{/** \u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u6570\u636E **/}]
})
const openGrid = ()=>{
    state1.visible = true
}
const onAction1 = (b:Record<string,any>,c:()=>void)=>{
    if(b){
        FToast.success(b.text)
    }else 
        FToast.error("\u53D6\u6D88\u4E8B\u4EF6")
    // c()
}`}],title:"actionsheet",root:!1,script:`import { FButton, FActionsheet, FToast } from '@phoeon/free-ui'
import { reactive } from 'vue'
import { gridOption } from '@demo/data/actionsheet'
import Console from '@phoeon/free-ui/shared/console'

Console.noble("options",gridOption)
const state  = reactive({
    visible:false,
    title:"\u652F\u4ED8\u65B9\u5F0F",
    desc:"\u8BF7\u9009\u62E9\u60A8\u7684\u652F\u4ED8\u65B9\u5F0F",
    value:1,
    options:[{
        text:"\u652F\u4ED8\u5B9D",
        value:0,
        type:"primary"
    },{
        text:"\u5FAE\u4FE1",
        value:1,
    },{
        text:"\u4FE1\u7528\u5361",
        value:2,
    }]
})
const state1  = reactive({
    visible:false,
    visible1:false,
    value:1,
    options:gridOption
})
const openList = ()=>{
    state.visible = true
}
const openGrid = ()=>{
    state1.visible = true
}

const onAction = (b:Record<string,any>,c:()=>void)=>{
    if(b){
        FToast.success(b.text)
    }else 
        FToast.error("\u53D6\u6D88\u4E8B\u4EF6")
}
const onAction1 = (b:Record<string,any>,c:()=>void)=>{
    if(b){
        FToast.success(b.text)
    }else 
        FToast.error("\u53D6\u6D88\u4E8B\u4EF6")
    // c()
}`,anchors:[{text:"\u6848\u4F8B\u5C55\u793Alist",value:"nav_0"},{text:"\u6848\u4F8B\u5C55\u793Agrid",value:"nav_1"},{text:"\u7981\u6B62\u5173\u95ED",value:"nav_2"}],anchor:"nav_0"},t=R(i.anchor);return(d,s)=>{const g=G("demo-card");return c(),m("div",H,[b("div",J,[u(g,{id:"nav_0",title:"\u6848\u4F8B\u5C55\u793Alist"},{code:l(()=>[p(v(e(C)(i.parts[0])),1)]),default:l(()=>[u(e(y),{size:"small",type:"primary",onClick:B},{default:l(()=>[K]),_:1}),u(e(D),{modelValue:e(n).value,"onUpdate:modelValue":s[0]||(s[0]=a=>e(n).value=a),visible:e(n).visible,"onUpdate:visible":s[1]||(s[1]=a=>e(n).visible=a),title:e(n).title,desc:e(n).desc,options:e(n).options,onAction:F},null,8,["modelValue","visible","title","desc","options"])]),_:1}),u(g,{id:"nav_1",title:"\u6848\u4F8B\u5C55\u793Agrid"},{code:l(()=>[p(v(e(C)(i.parts[1])),1)]),default:l(()=>[u(e(y),{size:"small",type:"primary",onClick:E},{default:l(()=>[X]),_:1}),u(e(D),{type:"grid",modelValue:e(o).value,"onUpdate:modelValue":s[2]||(s[2]=a=>e(o).value=a),visible:e(o).visible,"onUpdate:visible":s[3]||(s[3]=a=>e(o).visible=a),title:e(o).title,desc:e(o).desc,options:e(o).options,onAction:F},null,8,["modelValue","visible","title","desc","options"])]),_:1}),u(g,{id:"nav_2",title:"\u7981\u6B62\u5173\u95ED"},{code:l(()=>[p(v(e(C)(i.parts[2])),1)]),default:l(()=>[u(e(y),{size:"small",type:"primary",onClick:s[4]||(s[4]=a=>e(o).visible1=!0)},{default:l(()=>[Y]),_:1}),u(e(D),{type:"grid",modelValue:e(o).value,"onUpdate:modelValue":s[5]||(s[5]=a=>e(o).value=a),visible:e(o).visible1,"onUpdate:visible":s[6]||(s[6]=a=>e(o).visible1=a),autoClose:!1,title:e(o).title,desc:e(o).desc,options:e(o).options,onAction:f},null,8,["modelValue","visible","title","desc","options"])]),_:1})]),b("div",Z,[u(e(N),{class:"www-anchors",modelValue:t.value,"onUpdate:modelValue":s[7]||(s[7]=a=>t.value=a),dataSource:i.anchors},null,8,["modelValue","dataSource"])])])}}});export{le as default};
