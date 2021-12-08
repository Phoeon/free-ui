import{d as m,r as c,o as s,e as E,w as o,a as D,u,n as y,m as C,f,p as A,b as V,A as l,g as h,T as k,k as w,I as _,l as n}from"./vendor.adc10202.js";import{g}from"./gen-code.94dbf386.js";import{h as U,w as b,n as $,z as S,A as T,o as p,q as x,i as N}from"./index.513ab18a.js";const j={key:0,class:"ph-alert-icon-wrap"},z={class:"ph-alert-body"},q={key:0,class:"ph-alert-title"},I={class:"ph-alert-content"},L=l("\u67E5\u770B\u8BE6\u60C5"),M=l("\u67E5\u770B\u8BE6\u60C5"),r=m({props:{type:{type:String,default:"warning"},modelValue:Boolean,icon:String,iconColor:String,target:{type:String,default:"_blank"},link:String,action:Boolean,title:String,content:String},emits:["update:modelValue","action"],setup(a,{emit:t}){const B=a,i=c({hover:!("ontouchstart"in document)}),d=()=>{t("update:modelValue",!1)},F=()=>{t("action"),d()},v=()=>{if(d(),!!B.link)if(B.target==="_blank"){const e=document.createElement("a");e.href=B.link,e.target="_blank",e.click()}else location.href=B.link};return(e,ou)=>(s(),E(k,{name:"ph-fade"},{default:o(()=>[a.modelValue?(s(),D("div",{key:0,class:h(["ph-alert","ph-alert-"+a.type,a.title?"ph-alert-large":""])},[a.type||a.icon?(s(),D("div",j,[a.icon?(s(),E(u(U),{key:0,style:y({color:a.iconColor}),class:"ph-status-icon",name:a.icon,type:a.type},null,8,["style","name","type"])):a.type=="success"?(s(),E(u(b),{key:1,class:"ph-status-icon",type:"success"})):a.type=="info"?(s(),E(u($),{key:2,class:"ph-status-icon",type:"info"})):a.type=="warning"?(s(),E(u(S),{key:3,class:"ph-status-icon",type:"warning"})):a.type=="error"?(s(),E(u(T),{key:4,class:"ph-status-icon",type:"error"})):C("v-if",!0)])):C("v-if",!0),f("div",z,[a.title?(s(),D("h1",q,A(a.title),1)):C("v-if",!0),f("p",I,[V(e.$slots,"default",{},()=>[l(A(a.content),1)])])]),a.link?(s(),E(p,{key:1,type:"primary",hover:u(i).hover,class:"ph-alert-right",onClick:v},{default:o(()=>[L]),_:1},8,["hover"])):a.action?(s(),E(p,{key:2,type:"primary",hover:u(i).hover,class:"ph-alert-right",onClick:F},{default:o(()=>[M]),_:1},8,["hover"])):(s(),E(u(x),{key:3,onClick:d,class:"ph-alert-right ph-alert-close",hover:!0}))],2)):C("v-if",!0)]),_:3}))}}),P=l("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002"),G=l("\u4F60\u597D\uFF01\u6B22\u8FCE\u6765\u5230\u5929\u7A7A\u4E4B\u57CE\u3002"),H=l("\u7CFB\u7EDF\u5C06\u4E8E 15 : 00 - 17 : 00 \u8FDB\u884C\u5347\u7EA7\uFF0C\u8BF7\u53CA\u65F6\u4FDD\u5B58\u4F60\u7684\u8D44\u6599\uFF01"),J=l("\u606D\u559C\uFF01\u4F60\u6240\u63D0\u4EA4\u7684\u4FE1\u606F\u5DF2\u7ECF\u5BA1\u6838\u901A\u8FC7\uFF0C\u5982\u6709\u95EE\u9898\u8BF7\u8054\u7CFB\u5BA2\u670D\u3002"),K=l("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002"),O=l("\u4F60\u597D\uFF01\u6B22\u8FCE\u6765\u5230\u5929\u7A7A\u4E4B\u57CE\u3002"),Q=l("\u7CFB\u7EDF\u5C06\u4E8E 15 : 00 - 17 : 00 \u8FDB\u884C\u5347\u7EA7\uFF0C\u8BF7\u53CA\u65F6\u4FDD\u5B58\u4F60\u7684\u8D44\u6599\uFF01"),R=l("\u606D\u559C\uFF01\u4F60\u6240\u63D0\u4EA4\u7684\u4FE1\u606F\u5DF2\u7ECF\u5BA1\u6838\u901A\u8FC7\uFF0C\u5982\u6709\u95EE\u9898\u8BF7\u8054\u7CFB\u5BA2\u670D\u3002"),W=l("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002"),X=l("\u4F60\u597D\uFF01\u6B22\u8FCE\u6765\u5230\u5929\u7A7A\u4E4B\u57CE\u3002"),Y=l("\u7CFB\u7EDF\u5C06\u4E8E 15 : 00 - 17 : 00 \u8FDB\u884C\u5347\u7EA7\uFF0C\u8BF7\u53CA\u65F6\u4FDD\u5B58\u4F60\u7684\u8D44\u6599\uFF01"),Z=l("\u606D\u559C\uFF01\u4F60\u6240\u63D0\u4EA4\u7684\u4FE1\u606F\u5DF2\u7ECF\u5BA1\u6838\u901A\u8FC7\uFF0C\u5982\u6709\u95EE\u9898\u8BF7\u8054\u7CFB\u5BA2\u670D\u3002"),uu=l("\u4F60\u7684\u8D26\u6237\u4F1A\u5458\u4F7F\u7528\u6743\u9650\u5C06\u57283\u5929\u540E\u5230\u671F\uFF0C\u8BF7\u53CA\u65F6\u8DDF\u8FDB\u7533\u8BF7\u72B6\u51B5\u3002\u5982\u6709\u95EE\u9898\uFF0C\u8BF7\u8054\u7CFB\u5BA1\u6838\u4EBA\u5458\u3002"),eu=l("\u4F60\u597D\uFF0C\u7531\u4E8E\u4F60\u7684\u826F\u597D\u4FE1\u7528\uFF0C\u6211\u4EEC\u51B3\u5B9A\u8D60\u9001\u4F60\u4E09\u4E2A\u6708\u4EA7\u54C1\u4F1A\u5458\uFF0C\u6B32\u4E86\u89E3\u4F1A\u5458\u7279\u6743\u4E0E\u6D3B\u52A8\u8BF7\u8FDB\u9996\u9875\u4F1A\u5458\u4E13\u533A\u67E5\u770B\u3002"),tu=l("\u4F60\u6240\u63D0\u4EA4\u7684\u4FE1\u606F\u5DF2\u7ECF\u5BA1\u6838\u5931\u8D25\uFF0C\u53EF\u4EE5\u8FDB\u5165\u4E2A\u4EBA\u4FE1\u7BB1\u67E5\u770B\u539F\u56E0\uFF0C\u5982\u6709\u7591\u95EE\uFF0C\u8BF7\u8054\u7CFB\u5BA2\u670D\u4EBA\u5458\u3002"),Fu=l("\u4F60\u6240\u63D0\u4EA4\u7684\u4FE1\u606F\u5DF2\u7ECF\u5BA1\u6838\u901A\u8FC7\uFF0C\u8BF7\u53CA\u65F6\u8DDF\u8FDB\u7533\u8BF7\u72B6\u51B5\u3002\u5982\u6709\u95EE\u9898\uFF0C\u8BF7\u8054\u7CFB\u5BA1\u6838\u4EBA\u5458\u6216\u5728\u7EBF\u5BA2\u670D\u3002"),ru=m({setup(a){const t=c({v1:!0,v2:!0,v3:!0,v4:!0,v5:!0,v6:!0,v7:!0,v8:!0,v9:!0,v10:!0,v11:!0,v12:!0,v13:!0,v14:!0,v15:!0,v16:!0}),B=()=>{N.show("action \u53CD\u9988\u4E8B\u4EF6")},i={parts:[{title:"\u6848\u4F8B\u5C55\u793A",nowrap:!1,type:"card",id:"nav_0",template:`    <f-alert v-model="state.v1" type="error">\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002</f-alert>
    <f-alert v-model="state.v2" type="info">\u4F60\u597D\uFF01\u6B22\u8FCE\u6765\u5230\u5929\u7A7A\u4E4B\u57CE\u3002</f-alert>
    <f-alert v-model="state.v3">\u7CFB\u7EDF\u5C06\u4E8E 15 : 00 - 17 : 00 \u8FDB\u884C\u5347\u7EA7\uFF0C\u8BF7\u53CA\u65F6\u4FDD\u5B58\u4F60\u7684\u8D44\u6599\uFF01</f-alert>
    <f-alert v-model="state.v4" type="success">\u606D\u559C\uFF01\u4F60\u6240\u63D0\u4EA4\u7684\u4FE1\u606F\u5DF2\u7ECF\u5BA1\u6838\u901A\u8FC7\uFF0C\u5982\u6709\u95EE\u9898\u8BF7\u8054\u7CFB\u5BA2\u670D\u3002</f-alert>

    <f-alert v-model="state.v5" type="error" link="http://www.baidu.com">\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002</f-alert>
    <f-alert v-model="state.v6" type="info" link="http://www.baidu.com">\u4F60\u597D\uFF01\u6B22\u8FCE\u6765\u5230\u5929\u7A7A\u4E4B\u57CE\u3002</f-alert>
    <f-alert v-model="state.v7" link="http://www.baidu.com">\u7CFB\u7EDF\u5C06\u4E8E 15 : 00 - 17 : 00 \u8FDB\u884C\u5347\u7EA7\uFF0C\u8BF7\u53CA\u65F6\u4FDD\u5B58\u4F60\u7684\u8D44\u6599\uFF01</f-alert>
    <f-alert v-model="state.v8" type="success" link="http://www.baidu.com">\u606D\u559C\uFF01\u4F60\u6240\u63D0\u4EA4\u7684\u4FE1\u606F\u5DF2\u7ECF\u5BA1\u6838\u901A\u8FC7\uFF0C\u5982\u6709\u95EE\u9898\u8BF7\u8054\u7CFB\u5BA2\u670D\u3002</f-alert>

    <f-alert v-model="state.v9" type="error" :action="true" @action="onAction">\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002</f-alert>
    <f-alert v-model="state.v10" type="info" :action="true" @action="onAction">\u4F60\u597D\uFF01\u6B22\u8FCE\u6765\u5230\u5929\u7A7A\u4E4B\u57CE\u3002</f-alert>
    <f-alert v-model="state.v11" :action="true" @action="onAction">\u7CFB\u7EDF\u5C06\u4E8E 15 : 00 - 17 : 00 \u8FDB\u884C\u5347\u7EA7\uFF0C\u8BF7\u53CA\u65F6\u4FDD\u5B58\u4F60\u7684\u8D44\u6599\uFF01</f-alert>
    <f-alert v-model="state.v12" type="success" :action="true" @action="onAction">\u606D\u559C\uFF01\u4F60\u6240\u63D0\u4EA4\u7684\u4FE1\u606F\u5DF2\u7ECF\u5BA1\u6838\u901A\u8FC7\uFF0C\u5982\u6709\u95EE\u9898\u8BF7\u8054\u7CFB\u5BA2\u670D\u3002</f-alert>

    <f-alert v-model="state.v13" type="error" title="\u51FA\u9519\u4E86\uFF01">\u4F60\u7684\u8D26\u6237\u4F1A\u5458\u4F7F\u7528\u6743\u9650\u5C06\u57283\u5929\u540E\u5230\u671F\uFF0C\u8BF7\u53CA\u65F6\u8DDF\u8FDB\u7533\u8BF7\u72B6\u51B5\u3002\u5982\u6709\u95EE\u9898\uFF0C\u8BF7\u8054\u7CFB\u5BA1\u6838\u4EBA\u5458\u3002</f-alert>
    <f-alert v-model="state.v14" type="info" title="\u5E2E\u52A9\u4FE1\u606F">\u4F60\u597D\uFF0C\u7531\u4E8E\u4F60\u7684\u826F\u597D\u4FE1\u7528\uFF0C\u6211\u4EEC\u51B3\u5B9A\u8D60\u9001\u4F60\u4E09\u4E2A\u6708\u4EA7\u54C1\u4F1A\u5458\uFF0C\u6B32\u4E86\u89E3\u4F1A\u5458\u7279\u6743\u4E0E\u6D3B\u52A8\u8BF7\u8FDB\u9996\u9875\u4F1A\u5458\u4E13\u533A\u67E5\u770B\u3002</f-alert>
    <f-alert v-model="state.v15" title="\u8BF7\u6CE8\u610F">\u4F60\u6240\u63D0\u4EA4\u7684\u4FE1\u606F\u5DF2\u7ECF\u5BA1\u6838\u5931\u8D25\uFF0C\u53EF\u4EE5\u8FDB\u5165\u4E2A\u4EBA\u4FE1\u7BB1\u67E5\u770B\u539F\u56E0\uFF0C\u5982\u6709\u7591\u95EE\uFF0C\u8BF7\u8054\u7CFB\u5BA2\u670D\u4EBA\u5458\u3002</f-alert>
    <f-alert v-model="state.v16" type="success" title="\u64CD\u4F5C\u6210\u529F">\u4F60\u6240\u63D0\u4EA4\u7684\u4FE1\u606F\u5DF2\u7ECF\u5BA1\u6838\u901A\u8FC7\uFF0C\u8BF7\u53CA\u65F6\u8DDF\u8FDB\u7533\u8BF7\u72B6\u51B5\u3002\u5982\u6709\u95EE\u9898\uFF0C\u8BF7\u8054\u7CFB\u5BA1\u6838\u4EBA\u5458\u6216\u5728\u7EBF\u5BA2\u670D\u3002</f-alert>`,script:`import { FAlert, FToast } from '@phoeon/free-ui'
import { reactive } from 'vue'
const state = reactive({
    v1:true,
    v2:true,
    v3:true,
    v4:true,
    v5:true,
    v6:true,
    v7:true,
    v8:true,
    v9:true,
    v10:true,
    v11:true,
    v12:true,
    v13:true,
    v14:true,
    v15:true,
    v16:true,
})
const onAction = ()=>{
    FToast.show("action \u53CD\u9988\u4E8B\u4EF6")
}`}],title:"\u8B66\u544A\u53CD\u9988",root:!1,script:`import { FAlert, FToast } from '@phoeon/free-ui'
import { reactive } from 'vue'
const state = reactive({
    v1:true,
    v2:true,
    v3:true,
    v4:true,
    v5:true,
    v6:true,
    v7:true,
    v8:true,
    v9:true,
    v10:true,
    v11:true,
    v12:true,
    v13:true,
    v14:true,
    v15:true,
    v16:true,
})
const onAction = ()=>{
    FToast.show("action \u53CD\u9988\u4E8B\u4EF6")
}`,anchors:[{text:"\u6848\u4F8B\u5C55\u793A",value:"nav_0"}],anchor:"nav_0"};return w(i.anchor),(d,F)=>{const v=_("demo-card");return s(),E(v,{id:"nav_0",title:"\u6848\u4F8B\u5C55\u793A"},{code:o(()=>[l(A(u(g)(i.parts[0])),1)]),default:o(()=>[n(u(r),{modelValue:u(t).v1,"onUpdate:modelValue":F[0]||(F[0]=e=>u(t).v1=e),type:"error"},{default:o(()=>[P]),_:1},8,["modelValue"]),n(u(r),{modelValue:u(t).v2,"onUpdate:modelValue":F[1]||(F[1]=e=>u(t).v2=e),type:"info"},{default:o(()=>[G]),_:1},8,["modelValue"]),n(u(r),{modelValue:u(t).v3,"onUpdate:modelValue":F[2]||(F[2]=e=>u(t).v3=e)},{default:o(()=>[H]),_:1},8,["modelValue"]),n(u(r),{modelValue:u(t).v4,"onUpdate:modelValue":F[3]||(F[3]=e=>u(t).v4=e),type:"success"},{default:o(()=>[J]),_:1},8,["modelValue"]),n(u(r),{modelValue:u(t).v5,"onUpdate:modelValue":F[4]||(F[4]=e=>u(t).v5=e),type:"error",link:"http://www.baidu.com"},{default:o(()=>[K]),_:1},8,["modelValue"]),n(u(r),{modelValue:u(t).v6,"onUpdate:modelValue":F[5]||(F[5]=e=>u(t).v6=e),type:"info",link:"http://www.baidu.com"},{default:o(()=>[O]),_:1},8,["modelValue"]),n(u(r),{modelValue:u(t).v7,"onUpdate:modelValue":F[6]||(F[6]=e=>u(t).v7=e),link:"http://www.baidu.com"},{default:o(()=>[Q]),_:1},8,["modelValue"]),n(u(r),{modelValue:u(t).v8,"onUpdate:modelValue":F[7]||(F[7]=e=>u(t).v8=e),type:"success",link:"http://www.baidu.com"},{default:o(()=>[R]),_:1},8,["modelValue"]),n(u(r),{modelValue:u(t).v9,"onUpdate:modelValue":F[8]||(F[8]=e=>u(t).v9=e),type:"error",action:!0,onAction:B},{default:o(()=>[W]),_:1},8,["modelValue"]),n(u(r),{modelValue:u(t).v10,"onUpdate:modelValue":F[9]||(F[9]=e=>u(t).v10=e),type:"info",action:!0,onAction:B},{default:o(()=>[X]),_:1},8,["modelValue"]),n(u(r),{modelValue:u(t).v11,"onUpdate:modelValue":F[10]||(F[10]=e=>u(t).v11=e),action:!0,onAction:B},{default:o(()=>[Y]),_:1},8,["modelValue"]),n(u(r),{modelValue:u(t).v12,"onUpdate:modelValue":F[11]||(F[11]=e=>u(t).v12=e),type:"success",action:!0,onAction:B},{default:o(()=>[Z]),_:1},8,["modelValue"]),n(u(r),{modelValue:u(t).v13,"onUpdate:modelValue":F[12]||(F[12]=e=>u(t).v13=e),type:"error",title:"\u51FA\u9519\u4E86\uFF01"},{default:o(()=>[uu]),_:1},8,["modelValue"]),n(u(r),{modelValue:u(t).v14,"onUpdate:modelValue":F[13]||(F[13]=e=>u(t).v14=e),type:"info",title:"\u5E2E\u52A9\u4FE1\u606F"},{default:o(()=>[eu]),_:1},8,["modelValue"]),n(u(r),{modelValue:u(t).v15,"onUpdate:modelValue":F[14]||(F[14]=e=>u(t).v15=e),title:"\u8BF7\u6CE8\u610F"},{default:o(()=>[tu]),_:1},8,["modelValue"]),n(u(r),{modelValue:u(t).v16,"onUpdate:modelValue":F[15]||(F[15]=e=>u(t).v16=e),type:"success",title:"\u64CD\u4F5C\u6210\u529F"},{default:o(()=>[Fu]),_:1},8,["modelValue"])]),_:1})}}});export{ru as default};
