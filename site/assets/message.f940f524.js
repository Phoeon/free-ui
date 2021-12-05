import{d as B,k as M,I as y,a as v,f as E,l as e,w as u,u as t,o as D,A as o,p as c}from"./vendor.6c48bfff.js";import{g as l}from"./gen-code.94dbf386.js";import{_ as a,D as p,h as C}from"./index.898e7603.js";import{_ as A}from"./group.529e0764.js";import{_ as w}from"./main.9982799e.js";const b={class:"www-doc"},k={class:"www-doc-left"},h=o("\u6253\u5F00msg"),z=o("\u6253\u5F00msg"),$=o("\u6253\u5F00msg"),x=o("\u6253\u5F00msg"),T=o("\u6253\u5F00msg"),V=o("\u6253\u5F00msg"),j=o("\u6253\u5F00msg"),N=o("\u6253\u5F00msg"),S={class:"www-doc-right","sm-visible":"false"},J=B({setup(G){const r=m=>{p.show("\u6211\u7231\u4F60\u4E2D\u56FD",{type:m})},f=()=>{p.success("\u6211\u7231\u4F60\u4E2D\u56FD",{position:"bottom"})},g=()=>{p.success("\u89C2\u81EA\u5728\u83E9\u8428\uFF0C\u884C\u6DF1\u822C\u82E5\u6CE2\u7F57\u871C\u591A\u65F6\uFF0C\u7167\u89C1",{icon:"chrome",iconColor:"red"})},_=()=>{p.success("\u89C2\u81EA\u5728\u83E9\u8428\uFF0C\u884C\u6DF1\u822C\u82E5\u6CE2\u7F57\u871C\u591A\u65F6\uFF0C\u7167\u89C1").click(()=>{C.success("\u70B9\u51FB\u4E8B\u4EF6")}).close(m=>{C.error("\u5173\u95ED\u4E8B\u4EF6")})},i={parts:[{title:"\u6848\u4F8B\u5C55\u793A",nowrap:!1,type:"card",id:"nav_0",template:`    <f-button-group :container="true">
        <f-button size="small" type="primary" @click="openMsg('info')">\u6253\u5F00msg</f-button>
        <f-button size="small" type="success" @click="openMsg('success')">\u6253\u5F00msg</f-button>
        <f-button size="small" type="danger" @click="openMsg('error')">\u6253\u5F00msg</f-button>
        <f-button size="small" type="warning" @click="openMsg('warning')">\u6253\u5F00msg</f-button>
        <f-button size="small" @click="openMsg()">\u6253\u5F00msg</f-button>
    </f-button-group>`,script:`import { FButtonGroup, FButton, FMessage } from '@phoeon/free-ui'
const openMsg = (type:string)=>{
    FMessage.show("\u6211\u7231\u4F60\u4E2D\u56FD",{type: type as 'success'})
}`},{title:"\u5E95\u90E8\u51FA\u73B0",nowrap:!1,type:"card",id:"nav_1",template:'    <f-button type="primary" @click="openMsg2">\u6253\u5F00msg</f-button>',script:`import { FButton, FMessage } from '@phoeon/free-ui'
const openMsg2 = ()=>{
    FMessage.success("\u6211\u7231\u4F60\u4E2D\u56FD",{position:"bottom"})
}`},{title:"\u81EA\u5B9A\u4E49\u56FE\u6807",nowrap:!1,type:"card",id:"nav_2",template:'    <f-button size="small" type="primary" @click="openMsg1()">\u6253\u5F00msg</f-button>',script:`import { FButton, FMessage } from '@phoeon/free-ui'
const openMsg1 = ()=>{
    FMessage.success("\u89C2\u81EA\u5728\u83E9\u8428\uFF0C\u884C\u6DF1\u822C\u82E5\u6CE2\u7F57\u871C\u591A\u65F6\uFF0C\u7167\u89C1",{
        icon:"chrome",
        iconColor:"red"
    })
}`},{title:"\u70B9\u51FB\u548C\u5173\u95ED\u4E8B\u4EF6",nowrap:!1,type:"card",id:"nav_3",template:'    <f-button size="small" type="primary" @click="openMsg3()">\u6253\u5F00msg</f-button>',script:`import { FButton, FMessage, FToast } from '@phoeon/free-ui'
const openMsg3 = ()=>{
    FMessage.success("\u89C2\u81EA\u5728\u83E9\u8428\uFF0C\u884C\u6DF1\u822C\u82E5\u6CE2\u7F57\u871C\u591A\u65F6\uFF0C\u7167\u89C1").click(()=>{
        FToast.success("\u70B9\u51FB\u4E8B\u4EF6")
    }).close(a=>{
        FToast.error("\u5173\u95ED\u4E8B\u4EF6")
    })
}`}],title:"\u6D88\u606F\u63D0\u793A",root:!1,script:`import { FButtonGroup, FButton, FMessage, FToast } from '@phoeon/free-ui'
const openMsg = (type:string)=>{
    FMessage.show("\u6211\u7231\u4F60\u4E2D\u56FD",{type: type as 'success'})
}
const openMsg2 = ()=>{
    FMessage.success("\u6211\u7231\u4F60\u4E2D\u56FD",{position:"bottom"})
}
const openMsg1 = ()=>{
    FMessage.success("\u89C2\u81EA\u5728\u83E9\u8428\uFF0C\u884C\u6DF1\u822C\u82E5\u6CE2\u7F57\u871C\u591A\u65F6\uFF0C\u7167\u89C1",{
        icon:"chrome",
        iconColor:"red"
    })
}
const openMsg3 = ()=>{
    FMessage.success("\u89C2\u81EA\u5728\u83E9\u8428\uFF0C\u884C\u6DF1\u822C\u82E5\u6CE2\u7F57\u871C\u591A\u65F6\uFF0C\u7167\u89C1").click(()=>{
        FToast.success("\u70B9\u51FB\u4E8B\u4EF6")
    }).close(a=>{
        FToast.error("\u5173\u95ED\u4E8B\u4EF6")
    })
}`,anchors:[{text:"\u6848\u4F8B\u5C55\u793A",value:"nav_0"},{text:"\u5E95\u90E8\u51FA\u73B0",value:"nav_1"},{text:"\u81EA\u5B9A\u4E49\u56FE\u6807",value:"nav_2"},{text:"\u70B9\u51FB\u548C\u5173\u95ED\u4E8B\u4EF6",value:"nav_3"}],anchor:"nav_0"},d=M(i.anchor);return(m,s)=>{const F=y("demo-card");return D(),v("div",b,[E("div",k,[e(F,{id:"nav_0",title:"\u6848\u4F8B\u5C55\u793A"},{code:u(()=>[o(c(t(l)(i.parts[0])),1)]),default:u(()=>[e(t(A),{container:!0},{default:u(()=>[e(t(a),{size:"small",type:"primary",onClick:s[0]||(s[0]=n=>r("info"))},{default:u(()=>[h]),_:1}),e(t(a),{size:"small",type:"success",onClick:s[1]||(s[1]=n=>r("success"))},{default:u(()=>[z]),_:1}),e(t(a),{size:"small",type:"danger",onClick:s[2]||(s[2]=n=>r("error"))},{default:u(()=>[$]),_:1}),e(t(a),{size:"small",type:"warning",onClick:s[3]||(s[3]=n=>r("warning"))},{default:u(()=>[x]),_:1}),e(t(a),{size:"small",onClick:s[4]||(s[4]=n=>r())},{default:u(()=>[T]),_:1})]),_:1})]),_:1}),e(F,{id:"nav_1",title:"\u5E95\u90E8\u51FA\u73B0"},{code:u(()=>[o(c(t(l)(i.parts[1])),1)]),default:u(()=>[e(t(a),{type:"primary",onClick:f},{default:u(()=>[V]),_:1})]),_:1}),e(F,{id:"nav_2",title:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{code:u(()=>[o(c(t(l)(i.parts[2])),1)]),default:u(()=>[e(t(a),{size:"small",type:"primary",onClick:s[5]||(s[5]=n=>g())},{default:u(()=>[j]),_:1})]),_:1}),e(F,{id:"nav_3",title:"\u70B9\u51FB\u548C\u5173\u95ED\u4E8B\u4EF6"},{code:u(()=>[o(c(t(l)(i.parts[3])),1)]),default:u(()=>[e(t(a),{size:"small",type:"primary",onClick:s[6]||(s[6]=n=>_())},{default:u(()=>[N]),_:1})]),_:1})]),E("div",S,[e(t(w),{class:"www-anchors",modelValue:d.value,"onUpdate:modelValue":s[7]||(s[7]=n=>d.value=n),dataSource:i.anchors},null,8,["modelValue","dataSource"])])])}}});export{J as default};
