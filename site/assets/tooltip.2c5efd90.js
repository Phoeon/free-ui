var w=Object.defineProperty,y=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var E=(a,t,o)=>t in a?w(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,p=(a,t)=>{for(var o in t||(t={}))A.call(t,o)&&E(a,o,t[o]);if(C)for(var o of C(t))x.call(t,o)&&E(a,o,t[o]);return a},r=(a,t)=>y(a,g(t));import{d as D,k as j,I as T,a as V,f as s,l as u,w as n,u as e,o as k,A as i,p as v,i as l}from"./vendor.adc10202.js";import{g as B}from"./gen-code.94dbf386.js";import{r as c,m as F,_ as d}from"./index.513ab18a.js";import{_ as $}from"./group.c7619c52.js";import{_ as N}from"./main.90288d63.js";import{_ as b}from"./main.d9d1ef14.js";const S={class:"www-doc"},q={class:"www-doc-left"},G=i("\u8BE5\u7EC4\u4EF6\u4E3Aweb\u7AEF\u7EC4\u4EF6 "),I={class:"tooltip"},M=s("br",null,null,-1),P=s("br",null,null,-1),U=s("br",null,null,-1),z=i("\u8BE5\u7EC4\u4EF6\u4EE5vue\u6307\u4EE4\u7684\u5F62\u5F0F\u5BF9\u5916\u63D0\u4F9B "),H=i("\u4E0A"),J=i("\u4E0B"),K=i("\u5DE6"),L=i("\u53F3"),O={class:"www-doc-right","sm-visible":"false"},ut=D({setup(a){const t={content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57"},o={parts:[{template:`\u8BE5\u7EC4\u4EF6\u4E3Aweb\u7AEF\u7EC4\u4EF6
`,type:"blockquote",nowrap:!0},{title:"\u9759\u6001\u5C55\u793A",nowrap:!1,type:"card",id:"nav_1",template:`    <div class="tooltip">
        <f-tooltip :sample="true" content="\u63CF\u8FF0" position="tc"></f-tooltip>
        <br/>
        <f-tooltip :sample="true" content="\u63CF\u8FF0\u6587\u5B57" position="bc"></f-tooltip>
        <br/>
        <f-tooltip :sample="true" content="\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587" position="l"></f-tooltip>
        <br/>
        <f-tooltip :sample="true" content="\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0" position="r"></f-tooltip>
    </div>`,script:"import FTooltip from '@phoeon/free-ui/components/pop/tooltip.vue'"},{template:`\u8BE5\u7EC4\u4EF6\u4EE5vue\u6307\u4EE4\u7684\u5F62\u5F0F\u5BF9\u5916\u63D0\u4F9B
`,type:"blockquote",nowrap:!0},{title:"\u52A8\u6001\u5C55\u793A",nowrap:!1,type:"card",id:"nav_3",template:`    <f-button-group :container="true">
        <f-button type="success" v-tooltip="{...data,position:'tc'}">\u4E0A</f-button>
        <f-button type="danger" v-tooltip="{...data,position:'bc'}">\u4E0B</f-button>
        <f-button type="warning" v-tooltip="{...data,position:'l'}">\u5DE6</f-button>
        <f-button type="warning" v-tooltip="{...data,position:'r'}">\u53F3</f-button>
    </f-button-group>`,script:`import { FButtonGroup, FButton, vTooltip } from '@phoeon/free-ui'
const data = {
    content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57"
}`}],title:"\u63D0\u793Atooltip",root:!1,script:`import { FButtonGroup, FButton, vTooltip } from '@phoeon/free-ui'
import FTooltip from '@phoeon/free-ui/components/pop/tooltip.vue'
const data = {
    content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57"
}`,style:`.tooltip{
    .ph-tooltip{
        margin-bottom: 20px;
    }
}`,anchors:[{text:"\u9759\u6001\u5C55\u793A",value:"nav_1"},{text:"\u52A8\u6001\u5C55\u793A",value:"nav_3"}],anchor:"nav_1"},_=j(o.anchor);return(Q,f)=>{const m=T("demo-card");return k(),V("div",S,[s("div",q,[u(e(b),{type:"primary"},{default:n(()=>[G]),_:1}),u(m,{id:"nav_1",title:"\u9759\u6001\u5C55\u793A"},{code:n(()=>[i(v(e(B)(o.parts[1])),1)]),default:n(()=>[s("div",I,[u(c,{sample:!0,content:"\u63CF\u8FF0",position:"tc"}),M,u(c,{sample:!0,content:"\u63CF\u8FF0\u6587\u5B57",position:"bc"}),P,u(c,{sample:!0,content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587",position:"l"}),U,u(c,{sample:!0,content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0",position:"r"})])]),_:1}),u(e(b),{type:"primary"},{default:n(()=>[z]),_:1}),u(m,{id:"nav_3",title:"\u52A8\u6001\u5C55\u793A"},{code:n(()=>[i(v(e(B)(o.parts[3])),1)]),default:n(()=>[u(e($),{container:!0},{default:n(()=>[l(u(e(d),{type:"success"},{default:n(()=>[H]),_:1},512),[[e(F),r(p({},t),{position:"tc"})]]),l(u(e(d),{type:"danger"},{default:n(()=>[J]),_:1},512),[[e(F),r(p({},t),{position:"bc"})]]),l(u(e(d),{type:"warning"},{default:n(()=>[K]),_:1},512),[[e(F),r(p({},t),{position:"l"})]]),l(u(e(d),{type:"warning"},{default:n(()=>[L]),_:1},512),[[e(F),r(p({},t),{position:"r"})]])]),_:1})]),_:1})]),s("div",O,[u(e(N),{class:"www-anchors",modelValue:_.value,"onUpdate:modelValue":f[0]||(f[0]=h=>_.value=h),dataSource:o.anchors},null,8,["modelValue","dataSource"])])])}}});export{ut as default};
