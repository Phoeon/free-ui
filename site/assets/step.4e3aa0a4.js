import{d as h,c as w,o as i,a as p,F as g,B as x,g as F,f as c,e as k,u as s,p as d,m as z,n as S,k as A,I as v,l as u,w as r,A as B}from"./vendor.adc10202.js";import{g as _}from"./gen-code.94dbf386.js";import{w as D}from"./index.513ab18a.js";import{_ as E}from"./main.90288d63.js";const V=["line"],$={class:"ph-step-text"},b=["line"],j={key:0,class:"ph-step-desc"},f=h({props:{steps:{type:Array,default:()=>[]},size:{type:String},direction:{type:String,default:"hr"},lineOffset:Number},setup(e){const a=e,n=w(()=>{const l={};return a.lineOffset&&(l["--ph-step-line"]=a.lineOffset+"px"),l});return(l,m)=>(i(),p("div",{class:F(["ph-steps","ph-steps-"+e.direction,"ph-steps-"+e.size]),style:S(s(n))},[(i(!0),p(g,null,x(e.steps,(t,o)=>(i(),p("div",{key:o,class:F({"ph-step":!0,"ph-step-ing":t.status===0,"ph-step-to":t.status===-1})},[c("div",{class:"ph-step-icon-wrap",line:e.direction==="vt"&&o<e.steps.length-1},[t.status===1?(i(),k(s(D),{key:0,class:"ph-step-icon",type:"primary",outline:!0})):(i(),p("i",{key:1,class:F(["ph-icon","ph-step-icon",t.status===0?"ph-step-icon-ing":"ph-step-icon-to"])},d(t.value===void 0?o+1:t.value),3))],8,V),c("div",$,[c("div",{class:"ph-step-title",line:e.direction==="hr"&&o<e.steps.length-1},d(t.title),9,b),t.desc?(i(),p("div",j,d(t.desc),1)):z("v-if",!0)])],2))),128))],6))}}),N={class:"www-doc"},O={class:"www-doc-left"},I=c("br",null,null,-1),L={style:{display:"flex","justify-content":"space-around"}},M={class:"www-doc-right","sm-visible":"false"},G=h({setup(e){const a=[{title:"\u5904\u7406\u5B8C\u6210",desc:"\u63CF\u8FF0\u5185\u5BB9\u6587\u5B57",status:1},{title:"\u5904\u7406\u4E2D",desc:"\u63CF\u8FF0\u5185\u5BB9\u6587\u5B57",status:0},{title:"\u5F85\u5904\u7406",desc:"\u63CF\u8FF0\u5185\u5BB9\u6587\u5B57",status:-1}],n={parts:[{title:"\u6C34\u5E73\u6848\u4F8B",nowrap:!1,type:"card",id:"nav_0",template:`    <f-steps :steps="steps"></f-steps>
    <br/>
    <f-steps :steps="steps" size="small"></f-steps>`},{title:"\u5782\u76F4\u6848\u4F8B",nowrap:!1,type:"card",id:"nav_1",template:`    <div style="display:flex;justify-content:space-around;">
        <f-steps :steps="steps" direction="vt"></f-steps>
        <f-steps :steps="steps" direction="vt" size="small"></f-steps>
    </div>`},{title:"\u57FA\u672C\u7528\u6CD5",type:"code",lang:"typescript",code:`import { FSteps } from '@phoeon/free-ui'
const steps = [{
    title:"\u5904\u7406\u5B8C\u6210",
    desc:"\u63CF\u8FF0\u5185\u5BB9\u6587\u5B57",
    status:1
},{
    title:"\u5904\u7406\u4E2D",
    desc:"\u63CF\u8FF0\u5185\u5BB9\u6587\u5B57",
    status:0
},{
    title:"\u5F85\u5904\u7406",
    desc:"\u63CF\u8FF0\u5185\u5BB9\u6587\u5B57",
    status:-1
}]`,id:"nav_2"}],title:"\u6B65\u9AA4",root:!1,script:`import { FSteps } from '@phoeon/free-ui'
const steps = [{
    title:"\u5904\u7406\u5B8C\u6210",
    desc:"\u63CF\u8FF0\u5185\u5BB9\u6587\u5B57",
    status:1
},{
    title:"\u5904\u7406\u4E2D",
    desc:"\u63CF\u8FF0\u5185\u5BB9\u6587\u5B57",
    status:0
},{
    title:"\u5F85\u5904\u7406",
    desc:"\u63CF\u8FF0\u5185\u5BB9\u6587\u5B57",
    status:-1
}]`,anchors:[{text:"\u6C34\u5E73\u6848\u4F8B",value:"nav_0"},{text:"\u5782\u76F4\u6848\u4F8B",value:"nav_1"},{text:"\u57FA\u672C\u7528\u6CD5",value:"nav_2"}],anchor:"nav_0"},l=A(n.anchor);return(m,t)=>{const o=v("demo-card"),y=v("ph-pretty");return i(),p("div",N,[c("div",O,[u(o,{id:"nav_0",title:"\u6C34\u5E73\u6848\u4F8B"},{code:r(()=>[B(d(s(_)(n.parts[0])),1)]),default:r(()=>[u(s(f),{steps:a}),I,u(s(f),{steps:a,size:"small"})]),_:1}),u(o,{id:"nav_1",title:"\u5782\u76F4\u6848\u4F8B"},{code:r(()=>[B(d(s(_)(n.parts[1])),1)]),default:r(()=>[c("div",L,[u(s(f),{steps:a,direction:"vt"}),u(s(f),{steps:a,direction:"vt",size:"small"})])]),_:1}),u(y,{id:"nav_2",title:"\u57FA\u672C\u7528\u6CD5",lang:"typescript"},{default:r(()=>[B(d(n.parts[2].code),1)]),_:1})]),c("div",M,[u(s(E),{class:"www-anchors",modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=C=>l.value=C),dataSource:n.anchors},null,8,["modelValue","dataSource"])])])}}});export{G as default};
