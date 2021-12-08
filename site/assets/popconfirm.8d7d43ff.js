var G=Object.defineProperty,M=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var w=(p,e,i)=>e in p?G(p,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):p[e]=i,s=(p,e)=>{for(var i in e||(e={}))K.call(e,i)&&w(p,i,e[i]);if(D)for(var i of D(e))L.call(e,i)&&w(p,i,e[i]);return p},r=(p,e)=>M(p,I(e));import{d as R,k as U,I as g,a as z,f as a,l as t,w as o,u,o as H,A as n,p as y,i as c}from"./vendor.adc10202.js";import{g as x}from"./gen-code.94dbf386.js";import{s as k,x as J,y as O,j as Q,K as l,_ as f,i as C}from"./index.513ab18a.js";import{_ as h}from"./group.c7619c52.js";import{_ as W}from"./main.90288d63.js";import{_ as P}from"./main.d9d1ef14.js";var E={beforeMount(p,e){const{arg:i,value:m}=e;let _=!1;p.addEventListener(i,()=>{if(_)return;_=!0;const{left:d,top:F,width:v,height:b}=p.getBoundingClientRect(),{title:T,position:j,theme:V,done:$,cancel:N}=m,B=j||"tc",S=k(J[B],[d,F,v,b]),q=k(O[B],[d,F,v,b]),A=()=>{};Q.showConfirm({title:T,x:S,y:q,theme:V,position:B}).done($||A).cancel(N||A),window.setTimeout(()=>{_=!1},300)})}};const X={class:"www-doc"},Y={class:"www-doc-left"},Z=n("\u8BE5\u7EC4\u4EF6\u4E3Aweb\u7AEF\u7EC4\u4EF6 "),tt={style:{display:"flex",gap:"16px","flex-wrap":"wrap"}},ut=a("br",null,null,-1),et={style:{display:"flex",gap:"16px","flex-wrap":"wrap"}},ot=a("br",null,null,-1),it={style:{display:"flex",gap:"16px","flex-wrap":"wrap"}},nt=a("br",null,null,-1),pt={style:{display:"flex",gap:"16px","flex-wrap":"wrap"}},st=n("\u8BE5\u7EC4\u4EF6\u4EE5vue\u6307\u4EE4\u7684\u5F62\u5F0F\u5BF9\u5916\u63D0\u4F9B "),rt=n("\u4E0A\u5DE6"),at=n("\u4E0A\u4E2D"),ct=n("\u4E0A\u53F3"),lt=a("br",null,null,-1),ft=n("\u4E0B\u5DE6"),Et=n("\u4E0B\u4E2D"),dt=n("\u4E0B\u53F3"),Ft=a("br",null,null,-1),mt=n("\u5DE6\u4E0A"),_t=n("\u5DE6\u4E2D"),vt=n("\u5DE6\u4E0B"),bt=a("br",null,null,-1),ht=n("\u53F3\u4E0A"),Bt=n("\u53F3\u4E2D"),yt=n("\u53F3\u4E0B"),At={class:"www-doc-right","sm-visible":"false"},Tt=R({setup(p){const e={title:"\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F\uFF1F",done(){C.success("\u786E\u5B9A\u4E8B\u4EF6")},cancel(){C.error("\u53D6\u6D88\u4E8B\u4EF6")}},i={parts:[{template:`\u8BE5\u7EC4\u4EF6\u4E3Aweb\u7AEF\u7EC4\u4EF6
`,type:"blockquote",nowrap:!0},{title:"\u9759\u6001\u5C55\u793A",nowrap:!1,type:"card",id:"nav_1",template:`    <div style="display:flex;gap:16px;flex-wrap: wrap;">
        <f-pop-confirm :sample="true" title="\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F" position="tl"></f-pop-confirm>
        <f-pop-confirm :sample="true" title="\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F" position="tc"></f-pop-confirm>
        <f-pop-confirm :sample="true" title="\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F" position="tr"></f-pop-confirm>
    </div>
    <br/>
    <div style="display:flex;gap:16px;flex-wrap: wrap;">
        <f-pop-confirm :sample="true" title="\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F" position="bl"></f-pop-confirm>
        <f-pop-confirm :sample="true" title="\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F" position="bc"></f-pop-confirm>
        <f-pop-confirm :sample="true" title="\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F" position="br"></f-pop-confirm>
    </div>
    <br/>
    <div style="display:flex;gap:16px;flex-wrap: wrap;">
        <f-pop-confirm theme="reverse" :sample="true" title="\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F" position="lt"></f-pop-confirm>
        <f-pop-confirm theme="reverse" :sample="true" title="\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F" position="lc"></f-pop-confirm>
        <f-pop-confirm theme="reverse" :sample="true" title="\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F" position="lb"></f-pop-confirm>
    </div>
    <br/>
    <div style="display:flex;gap:16px;flex-wrap: wrap;">
        <f-pop-confirm theme="reverse" :sample="true" title="\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F" position="rt"></f-pop-confirm>
        <f-pop-confirm theme="reverse" :sample="true" title="\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F" position="rc"></f-pop-confirm>
        <f-pop-confirm theme="reverse" :sample="true" title="\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F" position="rb"></f-pop-confirm>
    </div>`},{template:`\u8BE5\u7EC4\u4EF6\u4EE5vue\u6307\u4EE4\u7684\u5F62\u5F0F\u5BF9\u5916\u63D0\u4F9B
`,type:"blockquote",nowrap:!0},{title:"\u52A8\u6001\u5C55\u793A",nowrap:!1,type:"card",id:"nav_3",template:`<f-button-group :container="true">
    <f-button type="success" v-popconfirm:click="{...data,position:'tl'}">\u4E0A\u5DE6</f-button>
    <f-button type="danger" v-popconfirm:click="{...data,position:'tc'}">\u4E0A\u4E2D</f-button>
    <f-button type="warning" v-popconfirm:click="{...data,position:'tr'}">\u4E0A\u53F3</f-button>
</f-button-group>
<br/>
<f-button-group :container="true">
    <f-button type="success" v-popconfirm:click="{...data,theme:'reverse',position:'bl'}">\u4E0B\u5DE6</f-button>
    <f-button type="danger" v-popconfirm:click="{...data,theme:'reverse',position:'bc'}">\u4E0B\u4E2D</f-button>
    <f-button type="warning" v-popconfirm:click="{...data,theme:'reverse',position:'br'}">\u4E0B\u53F3</f-button>
</f-button-group>
<br/>
<f-button-group :container="true">
    <f-button type="success" v-popconfirm:click="{...data,position:'lt'}">\u5DE6\u4E0A</f-button>
    <f-button type="danger" v-popconfirm:click="{...data,position:'lc'}">\u5DE6\u4E2D</f-button>
    <f-button type="warning" v-popconfirm:click="{...data,position:'lb'}">\u5DE6\u4E0B</f-button>
</f-button-group>
<br/>
<f-button-group :container="true">
    <f-button type="success" v-popconfirm:click="{...data,position:'rt'}">\u53F3\u4E0A</f-button>
    <f-button type="danger" v-popconfirm:click="{...data,position:'rc'}">\u53F3\u4E2D</f-button>
    <f-button type="warning" v-popconfirm:click="{...data,position:'rb'}">\u53F3\u4E0B</f-button>
</f-button-group>`},{title:"script",type:"code",lang:"typescript",code:`import { FButtonGroup, FButton, FPop ,FToast, vPopconfirm } from '@phoeon/free-ui'
import FPopConfirm from '@phoeon/free-ui/components/pop/confirm.vue'

const data = {
    title:"\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F\uFF1F",
    done(){
        FToast.success("\u786E\u5B9A\u4E8B\u4EF6")
    },
    cancel(){
        FToast.error("\u53D6\u6D88\u4E8B\u4EF6")
    }
}`,id:"nav_4"}],title:"\u6C14\u6CE1\u786E\u8BA4\u6846",root:!1,script:`import { FButtonGroup, FButton, FPop ,FToast, vPopconfirm } from '@phoeon/free-ui'
import FPopConfirm from '@phoeon/free-ui/components/pop/confirm.vue'

const data = {
    title:"\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F\uFF1F",
    done(){
        FToast.success("\u786E\u5B9A\u4E8B\u4EF6")
    },
    cancel(){
        FToast.error("\u53D6\u6D88\u4E8B\u4EF6")
    }
}`,style:"",anchors:[{text:"\u9759\u6001\u5C55\u793A",value:"nav_1"},{text:"\u52A8\u6001\u5C55\u793A",value:"nav_3"},{text:"script",value:"nav_4"}],anchor:"nav_1"},m=U(i.anchor);return(_,d)=>{const F=g("demo-card"),v=g("ph-pretty");return H(),z("div",X,[a("div",Y,[t(u(P),{type:"primary"},{default:o(()=>[Z]),_:1}),t(F,{id:"nav_1",title:"\u9759\u6001\u5C55\u793A"},{code:o(()=>[n(y(u(x)(i.parts[1])),1)]),default:o(()=>[a("div",tt,[t(l,{sample:!0,title:"\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F",position:"tl"}),t(l,{sample:!0,title:"\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F",position:"tc"}),t(l,{sample:!0,title:"\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F",position:"tr"})]),ut,a("div",et,[t(l,{sample:!0,title:"\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F",position:"bl"}),t(l,{sample:!0,title:"\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F",position:"bc"}),t(l,{sample:!0,title:"\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F",position:"br"})]),ot,a("div",it,[t(l,{theme:"reverse",sample:!0,title:"\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F",position:"lt"}),t(l,{theme:"reverse",sample:!0,title:"\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F",position:"lc"}),t(l,{theme:"reverse",sample:!0,title:"\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F",position:"lb"})]),nt,a("div",pt,[t(l,{theme:"reverse",sample:!0,title:"\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F",position:"rt"}),t(l,{theme:"reverse",sample:!0,title:"\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F",position:"rc"}),t(l,{theme:"reverse",sample:!0,title:"\u786E\u5B9A\u8981\u5173\u95ED\u4E48\uFF1F",position:"rb"})])]),_:1}),t(u(P),{type:"primary"},{default:o(()=>[st]),_:1}),t(F,{id:"nav_3",title:"\u52A8\u6001\u5C55\u793A"},{code:o(()=>[n(y(u(x)(i.parts[3])),1)]),default:o(()=>[t(u(h),{container:!0},{default:o(()=>[c(t(u(f),{type:"success"},{default:o(()=>[rt]),_:1},512),[[u(E),r(s({},e),{position:"tl"}),"click"]]),c(t(u(f),{type:"danger"},{default:o(()=>[at]),_:1},512),[[u(E),r(s({},e),{position:"tc"}),"click"]]),c(t(u(f),{type:"warning"},{default:o(()=>[ct]),_:1},512),[[u(E),r(s({},e),{position:"tr"}),"click"]])]),_:1}),lt,t(u(h),{container:!0},{default:o(()=>[c(t(u(f),{type:"success"},{default:o(()=>[ft]),_:1},512),[[u(E),r(s({},e),{theme:"reverse",position:"bl"}),"click"]]),c(t(u(f),{type:"danger"},{default:o(()=>[Et]),_:1},512),[[u(E),r(s({},e),{theme:"reverse",position:"bc"}),"click"]]),c(t(u(f),{type:"warning"},{default:o(()=>[dt]),_:1},512),[[u(E),r(s({},e),{theme:"reverse",position:"br"}),"click"]])]),_:1}),Ft,t(u(h),{container:!0},{default:o(()=>[c(t(u(f),{type:"success"},{default:o(()=>[mt]),_:1},512),[[u(E),r(s({},e),{position:"lt"}),"click"]]),c(t(u(f),{type:"danger"},{default:o(()=>[_t]),_:1},512),[[u(E),r(s({},e),{position:"lc"}),"click"]]),c(t(u(f),{type:"warning"},{default:o(()=>[vt]),_:1},512),[[u(E),r(s({},e),{position:"lb"}),"click"]])]),_:1}),bt,t(u(h),{container:!0},{default:o(()=>[c(t(u(f),{type:"success"},{default:o(()=>[ht]),_:1},512),[[u(E),r(s({},e),{position:"rt"}),"click"]]),c(t(u(f),{type:"danger"},{default:o(()=>[Bt]),_:1},512),[[u(E),r(s({},e),{position:"rc"}),"click"]]),c(t(u(f),{type:"warning"},{default:o(()=>[yt]),_:1},512),[[u(E),r(s({},e),{position:"rb"}),"click"]])]),_:1})]),_:1}),t(v,{id:"nav_4",title:"script",lang:"typescript"},{default:o(()=>[n(y(i.parts[4].code),1)]),_:1})]),a("div",At,[t(u(W),{class:"www-anchors",modelValue:m.value,"onUpdate:modelValue":d[0]||(d[0]=b=>m.value=b),dataSource:i.anchors},null,8,["modelValue","dataSource"])])])}}});export{Tt as default};
