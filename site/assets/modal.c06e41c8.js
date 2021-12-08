var j=Object.defineProperty;var $=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var b=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t)=>{for(var n in t||(t={}))N.call(t,n)&&b(e,n,t[n]);if($)for(var n of $(t))Q.call(t,n)&&b(e,n,t[n]);return e};import{d as v,N as W,k as M,s as U,o as r,e as E,w as s,l as i,a as _,f as F,u as a,b as S,m as V,p,T as q,r as D,X as z,A as d,B as I,F as L,E as x,q as A,I as P}from"./vendor.adc10202.js";import{g as w}from"./gen-code.94dbf386.js";import{u as X,M as k,h as G,z as H,_ as f,i as h}from"./index.513ab18a.js";import{_ as J}from"./main.90288d63.js";const K={key:0,class:"ph-modal"},R={class:"ph-modal-layout"},Y={key:0,class:"ph-icon-wrap"},Z={class:"ph-content-wrap"},tt={class:"ph-modal-title"},et={class:"ph-modal-body"},nt={class:"ph-modal-action"},T=v({props:{cancelText:String,doneText:String,title:String,content:String,icon:String,evt:Object},setup(e){const t=e,n=W(),u=M(!1),c=o=>{var l;u.value=!1,(l=t.evt)==null||l.emit("close",o)};return U(()=>{u.value=!0}),(o,l)=>(r(),E(X,{class:"ph-modal-mask",modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=m=>u.value=m)},{default:s(()=>[i(q,{name:"ph-scalein",mode:"out-in"},{default:s(()=>[u.value?(r(),_("div",K,[F("div",R,[a(n).icon?(r(),_("div",Y,[S(o.$slots,"icon")])):V("v-if",!0),F("div",Z,[F("h1",tt,[F("span",null,p(e.title),1)]),F("p",et,p(e.content),1)])]),F("div",nt,[S(o.$slots,"action",{close:c})])])):V("v-if",!0)]),_:3})]),_:3},8,["modelValue"]))}}),ot=v({props:{cancelText:String,doneText:String,title:String,content:String,icon:String},setup(e){const t=D({sm:!1}),n=(u,c)=>{t.sm=c<769};return k.all(n),n(!0,document.documentElement.clientWidth),(u,c)=>(r(),E(T,{class:"ph-modal-confirm",title:e.title,content:e.content},z({action:s(o=>[i(f,{fillMode:a(t).sm?"none":void 0,onClick:l=>o.close(0)},{default:s(()=>[d(p(e.cancelText||"\u5173\u2002\u95ED"),1)]),_:2},1032,["fillMode","onClick"]),i(f,{fillMode:a(t).sm?"none":void 0,type:"primary",onClick:l=>o.close(1)},{default:s(()=>[d(p(e.doneText||"\u786E\u2002\u8BA4"),1)]),_:2},1032,["fillMode","onClick"])]),_:2},[a(t).sm?void 0:{name:"icon",fn:s(()=>[e.icon?(r(),E(a(G),{key:0,class:"ph-status-icon",name:e.icon},null,8,["name"])):(r(),E(a(H),{key:1,type:"warning",class:"ph-status-icon"}))])}]),1032,["title","content"]))}}),ut=v({props:{doneText:String,title:String,content:String},setup(e){const t=D({sm:!1}),n=(u,c)=>{t.sm=c<769};return k.all(n),n(!0,document.documentElement.clientWidth),(u,c)=>(r(),E(T,{class:"ph-modal-alert",title:e.title,content:e.content},{action:s(o=>[i(f,{fillMode:a(t).sm?"none":"outline",type:a(t).sm?"primary":void 0,onClick:l=>o.close(1)},{default:s(()=>[d(p(e.doneText||"\u77E5\u9053\u4E86"),1)]),_:2},1032,["fillMode","type","onClick"])]),_:1},8,["title","content"]))}}),st=d("\u53D6\u6D88"),at=v({props:{title:String,content:String,options:Object},setup(e){const t=D({sm:!1}),n=(u,c)=>{t.sm=c<769};return k.all(n),n(!0,document.documentElement.clientWidth),(u,c)=>(r(),E(T,{class:"ph-modal-option",title:e.title,content:e.content},{action:s(o=>[(r(!0),_(L,null,I(e.options,(l,m)=>(r(),E(f,{key:m,block:a(t).sm,fillMode:a(t).sm?"none":"outline",type:l.type||"primary",onClick:B=>o.close(l.value)},{default:s(()=>[d(p(l.text),1)]),_:2},1032,["block","fillMode","type","onClick"]))),128)),i(f,{block:a(t).sm,fillMode:a(t).sm?"none":"outline",onClick:l=>o.close()},{default:s(()=>[st]),_:2},1032,["block","fillMode","onClick"])]),_:1},8,["title","content"]))}}),ct=(e={})=>{const t=new x,n=A(ot,C({evt:t},e)),u=n.mount(document.createElement("div"));return document.body.appendChild(u.$el),{done(c){t.on("close",o=>{c(o),window.setTimeout(()=>n.unmount(),300)})}}},lt=(e={})=>{const t=new x,n=A(ut,C({evt:t},e)),u=n.mount(document.createElement("div"));return document.body.appendChild(u.$el),{done(c){t.on("close",o=>{c(o),window.setTimeout(()=>n.unmount(),300)})}}},it=(e={options:[]})=>{const t=new x,n=A(at,C({evt:t},e)),u=n.mount(document.createElement("div"));return document.body.appendChild(u.$el),{done(c){t.on("close",o=>{c(o),window.setTimeout(()=>n.unmount(),300)})}}};var g={confirm:ct,alert:lt,option:it};const rt={class:"www-doc"},dt={class:"www-doc-left"},mt=d("\u786E\u8BA4\u6846"),pt=d("\u8B66\u544A\u6846"),Ft=d("\u591A\u9009\u9879\u6846"),ft={class:"www-doc-right","sm-visible":"false"},Bt=v({setup(e){const t=()=>{g.confirm({title:"\u64CD\u4F5C\u5931\u8D25",content:"\u8D26\u53F7\u5BC6\u7801\u4E0D\u4E00\u81F4\uFF0C\u662F\u5426\u91CD\u8BD5\uFF1F",cancelText:"\u5173\u95ED",doneText:"\u91CD\u8BD5"}).done(m=>{m?h.success("\u786E\u8BA4\u4E8B\u4EF6"):h.error("\u53D6\u6D88\u4E8B\u4EF6")})},n=()=>{g.alert({title:"\u6B22\u8FCE\uFF01",content:"\u5317\u4EAC\u6B22\u8FCE\u60A8\uFF01"})},u=[{text:"\u9009\u9879\u4E00",value:0,type:"success"},{text:"\u9009\u9879\u4E8C",value:1,type:"danger"},{text:"\u9009\u9879\u4E09",value:2,type:"warning"}],c=()=>{g.option({title:"\u6B22\u8FCE\uFF01",content:"\u5317\u4EAC\u6B22\u8FCE\u60A8\uFF01",options:u}).done(m=>{m===void 0?h.error("\u53D6\u6D88\u4E8B\u4EF6"):h.success(u[m].text)})},o={parts:[{title:"\u786E\u8BA4\u6846",nowrap:!1,type:"card",id:"nav_0",template:'    <f-button type="primary" @click="openConfirm">\u786E\u8BA4\u6846</f-button>',script:`import { FButton, FModal, FToast } from '@phoeon/free-ui'
const openConfirm = ()=>{
    FModal.confirm({
        title:"\u64CD\u4F5C\u5931\u8D25",
        content:"\u8D26\u53F7\u5BC6\u7801\u4E0D\u4E00\u81F4\uFF0C\u662F\u5426\u91CD\u8BD5\uFF1F",
        cancelText:"\u5173\u95ED",
        doneText:"\u91CD\u8BD5"
    }).done((status:number)=>{
        if(status)
        FToast.success("\u786E\u8BA4\u4E8B\u4EF6")
        else FToast.error("\u53D6\u6D88\u4E8B\u4EF6")
    })
}`},{title:"\u8B66\u544A\u6846",nowrap:!1,type:"card",id:"nav_1",template:'    <f-button type="danger" @click="openAlert">\u8B66\u544A\u6846</f-button>',script:`import { FButton, FModal } from '@phoeon/free-ui'
const openAlert = ()=>{
    FModal.alert({
        title:"\u6B22\u8FCE\uFF01",
        content:"\u5317\u4EAC\u6B22\u8FCE\u60A8\uFF01"
    })
}`},{title:"\u591A\u9009\u9879\u6846",nowrap:!1,type:"card",id:"nav_2",template:'<f-button type="primary" @click="openOption">\u591A\u9009\u9879\u6846</f-button>',script:`import { FButton, FModal, FToast } from '@phoeon/free-ui'
const options = [{
    text:"\u9009\u9879\u4E00",
    value:0,
    type:"success"
},{
    text:"\u9009\u9879\u4E8C",
    value:1,
    type:"danger"
},{
    text:"\u9009\u9879\u4E09",
    value:2,
    type:"warning"
}]
const openOption = ()=>{
    FModal.option({
        title:"\u6B22\u8FCE\uFF01",
        content:"\u5317\u4EAC\u6B22\u8FCE\u60A8\uFF01",
        options
    }).done((a?:unknown)=>{
        if(a===undefined)FToast.error("\u53D6\u6D88\u4E8B\u4EF6")
        else 
            FToast.success(options[a as number].text)
    })
}`}],title:"\u5BF9\u8BDD\u6846",root:!1,script:`import { FButton, FModal, FToast } from '@phoeon/free-ui'
const openConfirm = ()=>{
    FModal.confirm({
        title:"\u64CD\u4F5C\u5931\u8D25",
        content:"\u8D26\u53F7\u5BC6\u7801\u4E0D\u4E00\u81F4\uFF0C\u662F\u5426\u91CD\u8BD5\uFF1F",
        cancelText:"\u5173\u95ED",
        doneText:"\u91CD\u8BD5"
    }).done((status:number)=>{
        if(status)
        FToast.success("\u786E\u8BA4\u4E8B\u4EF6")
        else FToast.error("\u53D6\u6D88\u4E8B\u4EF6")
    })
}
const openAlert = ()=>{
    FModal.alert({
        title:"\u6B22\u8FCE\uFF01",
        content:"\u5317\u4EAC\u6B22\u8FCE\u60A8\uFF01"
    })
}
const options = [{
    text:"\u9009\u9879\u4E00",
    value:0,
    type:"success"
},{
    text:"\u9009\u9879\u4E8C",
    value:1,
    type:"danger"
},{
    text:"\u9009\u9879\u4E09",
    value:2,
    type:"warning"
}]
const openOption = ()=>{
    FModal.option({
        title:"\u6B22\u8FCE\uFF01",
        content:"\u5317\u4EAC\u6B22\u8FCE\u60A8\uFF01",
        options
    }).done((a?:unknown)=>{
        if(a===undefined)FToast.error("\u53D6\u6D88\u4E8B\u4EF6")
        else 
            FToast.success(options[a as number].text)
    })
}`,anchors:[{text:"\u786E\u8BA4\u6846",value:"nav_0"},{text:"\u8B66\u544A\u6846",value:"nav_1"},{text:"\u591A\u9009\u9879\u6846",value:"nav_2"}],anchor:"nav_0"},l=M(o.anchor);return(m,B)=>{const y=P("demo-card");return r(),_("div",rt,[F("div",dt,[i(y,{id:"nav_0",title:"\u786E\u8BA4\u6846"},{code:s(()=>[d(p(a(w)(o.parts[0])),1)]),default:s(()=>[i(a(f),{type:"primary",onClick:t},{default:s(()=>[mt]),_:1})]),_:1}),i(y,{id:"nav_1",title:"\u8B66\u544A\u6846"},{code:s(()=>[d(p(a(w)(o.parts[1])),1)]),default:s(()=>[i(a(f),{type:"danger",onClick:n},{default:s(()=>[pt]),_:1})]),_:1}),i(y,{id:"nav_2",title:"\u591A\u9009\u9879\u6846"},{code:s(()=>[d(p(a(w)(o.parts[2])),1)]),default:s(()=>[i(a(f),{type:"primary",onClick:c},{default:s(()=>[Ft]),_:1})]),_:1})]),F("div",ft,[i(a(J),{class:"www-anchors",modelValue:l.value,"onUpdate:modelValue":B[0]||(B[0]=O=>l.value=O),dataSource:o.anchors},null,8,["modelValue","dataSource"])])])}}});export{Bt as default};
