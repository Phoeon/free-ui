var N=Object.defineProperty,S=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var A=(s,e,F)=>e in s?N(s,e,{enumerable:!0,configurable:!0,writable:!0,value:F}):s[e]=F,r=(s,e)=>{for(var F in e||(e={}))G.call(e,F)&&A(s,F,e[F]);if(h)for(var F of h(e))L.call(e,F)&&A(s,F,e[F]);return s},p=(s,e)=>S(s,q(e));import{d as M,k as T,I,a as R,f as i,l as u,w as o,u as t,o as U,A as n,p as y,i as a}from"./vendor.adc10202.js";import{g}from"./gen-code.94dbf386.js";import{s as w,x as z,y as H,j as J,k as l,_ as c}from"./index.513ab18a.js";import{_ as E}from"./group.c7619c52.js";import{_ as K}from"./main.90288d63.js";import{_ as x}from"./main.d9d1ef14.js";var d={beforeMount(s,e){const{value:F}=e;let B=!1,C;s.addEventListener("mouseenter",()=>{if(B)return;B=!0;const{left:f,top:v,width:_,height:b}=s.getBoundingClientRect(),{title:D,content:P,position:j,theme:k}=F,m=j||"tc",V=w(z[m],[f,v,_,b]),$=w(H[m],[f,v,_,b]);C=J.showPopover({title:D,content:P,x:V,y:$,theme:k,position:m}),window.setTimeout(()=>{B=!1},300)}),s.addEventListener("mouseleave",()=>{C==null||C()})}};const O={class:"www-doc"},Q={class:"www-doc-left"},W=n("\u8BE5\u7EC4\u4EF6\u4E3Aweb\u7AEF\u7EC4\u4EF6 "),X={class:"flex-box"},Y=i("br",null,null,-1),Z={class:"flex-box"},uu=i("br",null,null,-1),tu={class:"flex-box"},eu=i("br",null,null,-1),ou={class:"flex-box"},Fu=n("\u8BE5\u7EC4\u4EF6\u4EE5vue\u6307\u4EE4\u7684\u5F62\u5F0F\u5BF9\u5916\u63D0\u4F9B "),nu=n("\u4E0A\u5DE6"),su=n("\u4E0A\u4E2D"),ru=n("\u4E0A\u53F3"),pu=i("br",null,null,-1),iu=n("\u4E0B\u5DE6"),au=n("\u4E0B\u4E2D"),lu=n("\u4E0B\u53F3"),cu=i("br",null,null,-1),du=n("\u5DE6\u4E0A"),Bu=n("\u5DE6\u4E2D"),Cu=n("\u5DE6\u4E0B"),fu=i("br",null,null,-1),vu=n("\u53F3\u4E0A"),_u=n("\u53F3\u4E2D"),Eu=n("\u53F3\u4E0B"),mu={class:"www-doc-right","sm-visible":"false"},Du=M({setup(s){const e={title:"\u95EE\u9898\u63D0\u793A",content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0"},F={parts:[{template:`\u8BE5\u7EC4\u4EF6\u4E3Aweb\u7AEF\u7EC4\u4EF6
`,type:"blockquote",nowrap:!0},{title:"\u9759\u6001\u5C55\u793A",nowrap:!1,type:"card",id:"nav_1",template:`    <div class="flex-box">
        <f-popover :sample="true" content="\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0" title="\u786E\u5B9A\u8981\u5173" position="tl"></f-popover>
        <f-popover :sample="true" content="\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0" title="\u786E\u5B9A\u8981\u5173" position="tc"></f-popover>
        <f-popover :sample="true" content="\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0" title="\u786E\u5B9A\u8981\u5173" position="tr"></f-popover>
    </div>
    <br/>
    <div class="flex-box">
        <f-popover :sample="true" content="\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0" title="\u786E\u5B9A\u8981\u5173" position="bl"></f-popover>
        <f-popover :sample="true" content="\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0" title="\u786E\u5B9A\u8981\u5173" position="bc"></f-popover>
        <f-popover :sample="true" content="\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0" title="\u786E\u5B9A\u8981\u5173" position="br"></f-popover>
    </div>
    <br/>
    <div class="flex-box">
        <f-popover theme="reverse" :sample="true" content="\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0" title="\u786E\u5B9A\u8981\u5173" position="lt"></f-popover>
        <f-popover theme="reverse" :sample="true" content="\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0" title="\u786E\u5B9A\u8981\u5173" position="lc"></f-popover>
        <f-popover theme="reverse" :sample="true" content="\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0" title="\u786E\u5B9A\u8981\u5173" position="lb"></f-popover>
    </div>
    <br/>
    <div class="flex-box">
        <f-popover theme="reverse" :sample="true" content="\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0" title="\u786E\u5B9A\u8981\u5173" position="rt"></f-popover>
        <f-popover theme="reverse" :sample="true" content="\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0" title="\u786E\u5B9A\u8981\u5173" position="rc"></f-popover>
        <f-popover theme="reverse" :sample="true" content="\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0" title="\u786E\u5B9A\u8981\u5173" position="rb"></f-popover>
    </div>`,script:"import FPopover from '@phoeon/free-ui/components/pop/over.vue'"},{template:`\u8BE5\u7EC4\u4EF6\u4EE5vue\u6307\u4EE4\u7684\u5F62\u5F0F\u5BF9\u5916\u63D0\u4F9B
`,type:"blockquote",nowrap:!0},{title:"\u52A8\u6001\u5C55",nowrap:!1,type:"card",id:"nav_3",template:`    <f-button-group :container="true">
        <f-button type="success" v-popover="{...data,position:'tl'}">\u4E0A\u5DE6</f-button>
        <f-button type="danger" v-popover="{...data,position:'tc'}">\u4E0A\u4E2D</f-button>
        <f-button type="warning" v-popover="{...data,position:'tr'}">\u4E0A\u53F3</f-button>
    </f-button-group>
    <br/>
    <f-button-group :container="true">
        <f-button type="success" v-popover="{...data,position:'bl'}">\u4E0B\u5DE6</f-button>
        <f-button type="danger" v-popover="{...data,position:'bc'}">\u4E0B\u4E2D</f-button>
        <f-button type="warning" v-popover="{...data,position:'br'}">\u4E0B\u53F3</f-button>
    </f-button-group>
    <br/>
    <f-button-group :container="true">
        <f-button type="success" v-popover="{...data,position:'lt'}">\u5DE6\u4E0A</f-button>
        <f-button type="danger" v-popover="{...data,position:'lc'}">\u5DE6\u4E2D</f-button>
        <f-button type="warning" v-popover="{...data,position:'lb'}">\u5DE6\u4E0B</f-button>
    </f-button-group>
    <br/>
    <f-button-group :container="true">
        <f-button type="success" v-popover="{...data,position:'rt'}">\u53F3\u4E0A</f-button>
        <f-button type="danger" v-popover="{...data,position:'rc'}">\u53F3\u4E2D</f-button>
        <f-button type="warning" v-popover="{...data,position:'rb'}">\u53F3\u4E0B</f-button>
    </f-button-group>`,script:`import { FButtonGroup, FButton, vPopover } from '@phoeon/free-ui'
const data = {
    title:"\u95EE\u9898\u63D0\u793A",
    content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0",
}`}],title:"\u6C14\u6CE1\u5361\u7247",root:!1,script:`import { FButtonGroup, FButton, vPopover } from '@phoeon/free-ui'
import FPopover from '@phoeon/free-ui/components/pop/over.vue'
const data = {
    title:"\u95EE\u9898\u63D0\u793A",
    content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0",
}`,style:`.flex-box{
    display:flex;
    flex-wrap: wrap;
    gap:var(--ph-pd);
}`,anchors:[{text:"\u9759\u6001\u5C55\u793A",value:"nav_1"},{text:"\u52A8\u6001\u5C55",value:"nav_3"}],anchor:"nav_1"},B=T(F.anchor);return(C,f)=>{const v=I("demo-card");return U(),R("div",O,[i("div",Q,[u(t(x),{type:"primary"},{default:o(()=>[W]),_:1}),u(v,{id:"nav_1",title:"\u9759\u6001\u5C55\u793A"},{code:o(()=>[n(y(t(g)(F.parts[1])),1)]),default:o(()=>[i("div",X,[u(l,{sample:!0,content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0",title:"\u786E\u5B9A\u8981\u5173",position:"tl"}),u(l,{sample:!0,content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0",title:"\u786E\u5B9A\u8981\u5173",position:"tc"}),u(l,{sample:!0,content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0",title:"\u786E\u5B9A\u8981\u5173",position:"tr"})]),Y,i("div",Z,[u(l,{sample:!0,content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0",title:"\u786E\u5B9A\u8981\u5173",position:"bl"}),u(l,{sample:!0,content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0",title:"\u786E\u5B9A\u8981\u5173",position:"bc"}),u(l,{sample:!0,content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0",title:"\u786E\u5B9A\u8981\u5173",position:"br"})]),uu,i("div",tu,[u(l,{theme:"reverse",sample:!0,content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0",title:"\u786E\u5B9A\u8981\u5173",position:"lt"}),u(l,{theme:"reverse",sample:!0,content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0",title:"\u786E\u5B9A\u8981\u5173",position:"lc"}),u(l,{theme:"reverse",sample:!0,content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0",title:"\u786E\u5B9A\u8981\u5173",position:"lb"})]),eu,i("div",ou,[u(l,{theme:"reverse",sample:!0,content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0",title:"\u786E\u5B9A\u8981\u5173",position:"rt"}),u(l,{theme:"reverse",sample:!0,content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0",title:"\u786E\u5B9A\u8981\u5173",position:"rc"}),u(l,{theme:"reverse",sample:!0,content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0",title:"\u786E\u5B9A\u8981\u5173",position:"rb"})])]),_:1}),u(t(x),{type:"primary"},{default:o(()=>[Fu]),_:1}),u(v,{id:"nav_3",title:"\u52A8\u6001\u5C55"},{code:o(()=>[n(y(t(g)(F.parts[3])),1)]),default:o(()=>[u(t(E),{container:!0},{default:o(()=>[a(u(t(c),{type:"success"},{default:o(()=>[nu]),_:1},512),[[t(d),p(r({},e),{position:"tl"})]]),a(u(t(c),{type:"danger"},{default:o(()=>[su]),_:1},512),[[t(d),p(r({},e),{position:"tc"})]]),a(u(t(c),{type:"warning"},{default:o(()=>[ru]),_:1},512),[[t(d),p(r({},e),{position:"tr"})]])]),_:1}),pu,u(t(E),{container:!0},{default:o(()=>[a(u(t(c),{type:"success"},{default:o(()=>[iu]),_:1},512),[[t(d),p(r({},e),{position:"bl"})]]),a(u(t(c),{type:"danger"},{default:o(()=>[au]),_:1},512),[[t(d),p(r({},e),{position:"bc"})]]),a(u(t(c),{type:"warning"},{default:o(()=>[lu]),_:1},512),[[t(d),p(r({},e),{position:"br"})]])]),_:1}),cu,u(t(E),{container:!0},{default:o(()=>[a(u(t(c),{type:"success"},{default:o(()=>[du]),_:1},512),[[t(d),p(r({},e),{position:"lt"})]]),a(u(t(c),{type:"danger"},{default:o(()=>[Bu]),_:1},512),[[t(d),p(r({},e),{position:"lc"})]]),a(u(t(c),{type:"warning"},{default:o(()=>[Cu]),_:1},512),[[t(d),p(r({},e),{position:"lb"})]])]),_:1}),fu,u(t(E),{container:!0},{default:o(()=>[a(u(t(c),{type:"success"},{default:o(()=>[vu]),_:1},512),[[t(d),p(r({},e),{position:"rt"})]]),a(u(t(c),{type:"danger"},{default:o(()=>[_u]),_:1},512),[[t(d),p(r({},e),{position:"rc"})]]),a(u(t(c),{type:"warning"},{default:o(()=>[Eu]),_:1},512),[[t(d),p(r({},e),{position:"rb"})]])]),_:1})]),_:1})]),i("div",mu,[u(t(K),{class:"www-anchors",modelValue:B.value,"onUpdate:modelValue":f[0]||(f[0]=_=>B.value=_),dataSource:F.anchors},null,8,["modelValue","dataSource"])])])}}});export{Du as default};
