import{d as b,k,r as U,z,V as H,o as E,e as I,w as a,b as $,u,m as J,j as K,y as O,I as T,a as Q,f as p,l as t,A as c,p as h}from"./vendor.6c48bfff.js";import{g as A}from"./gen-code.94dbf386.js";import{g as W,_ as X,s as V,x as Y,y as Z,i as tt,a7 as l,F as ot,h as et}from"./index.898e7603.js";import{_ as C}from"./group.529e0764.js";import{_ as at}from"./main.9982799e.js";const i=b({props:{dataSource:{type:Array,default:()=>[]},position:{type:String,default:"bc"},trigger:{type:String,default:"hover"},theme:String,offset:{type:Number,default:12},icon:String},emits:["action"],setup(S,{emit:g}){const o=S;let e;const r=k(),n=U({open:!1,lock:!1,enter:!1}),d=()=>{!n.open||(e==null||e(),n.open=!1,n.enter=!1)},w=s=>{d(),g("action",s)},f=()=>{n.enter=!0},x=()=>{n.open=!1,n.enter=!1},_=(s,B)=>{if(n.lock)return;n.lock=!0,n.open=!0;const{left:m,top:v,width:D,height:F}=s.getBoundingClientRect(),{dataSource:N,position:L,theme:G}=B,y=L||"bc",P=V(Y[y],[m,v,D,F]),R=V(Z[y],[m,v,D,F]);e=tt.showDropdown({dataSource:N,x:P,y:R,height:F,theme:G,position:y,offset:o.offset}).done(w).enter(f).leave(x).hide,window.setTimeout(()=>{n.lock=!1},300)},j=()=>{o.trigger==="click"&&(n.open||_(r.value.$el,{dataSource:o.dataSource,position:o.position,theme:o.theme}))},q=()=>{o.trigger==="hover"&&(n.open||_(r.value.$el,{dataSource:o.dataSource,position:o.position,theme:o.theme}))},M=()=>{o.trigger==="hover"&&(!n.open||window.setTimeout(()=>{n.enter||d()},50))};return z(()=>{document.addEventListener("click",d)}),H(()=>{document.removeEventListener("click",d)}),(s,B)=>(E(),I(X,{dropdown:u(n).open?"up":"down",onMouseenter:q,onMouseleave:M,onClick:K(j,["stop"]),ref:(m,v)=>{v.edom=m,O(r)&&(r.value=m)}},{leftIcon:a(()=>[$(s.$slots,"leftIcon",{},()=>[S.icon?(E(),I(u(W),{key:0,name:S.icon},null,8,["name"])):J("v-if",!0)])]),default:a(()=>[$(s.$slots,"default")]),_:3},8,["dropdown","onClick"]))}}),ut={class:"www-doc"},nt={class:"www-doc-left"},rt=p("h2",{id:"nav_0",class:"www-title"},"\u52A8\u6001\u5C55\u793A",-1),ct=c("\u4E0B\u5DE6"),it=c("\u4E0B\u4E2D"),dt=c("\u4E0B\u53F3"),st=p("br",null,null,-1),pt=c("\u4E0A\u5DE6"),lt=c("\u4E0A\u4E2D"),ft=c("\u4E0A\u53F3"),mt={style:{margin:"16px",display:"flex",gap:"16px","flex-wrap":"wrap"}},St={style:{margin:"16px",display:"flex",gap:"16px","flex-wrap":"wrap"}},wt={class:"www-doc-right","sm-visible":"false"},Ft=b({setup(S){const{CustomIcon:g}=ot,o=d=>{et.show(d.text)},e={content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57",dataSource:[{text:"\u6DFB\u52A0\u670B\u53CB",value:1,icon:"chrome"},{text:"\u53D1\u8D77\u7FA4\u804A",value:1,icon:"firefox"},{text:"\u626B\u4E00\u626B",value:1,icon:"safari"},{text:"\u6211\u7684\u4E8C\u7EF4\u7801/\u6536\u6B3E",value:1,icon:"opera"},{text:"\u5E2E\u52A9\u4E2D\u5FC3",value:1,icon:"internet-explorer"}]},r={parts:[{title:"\u52A8\u6001\u5C55\u793A",template:"\u52A8\u6001\u5C55\u793A",type:"h2",nowrap:!0,id:"nav_0"},{title:"hover\u89E6\u53D1",nowrap:!1,type:"card",id:"nav_1",template:`    <f-button-group :container="true">
        <f-dropdown type="primary" position="bl" :dataSource="data.dataSource" @action="onAction">\u4E0B\u5DE6</f-dropdown>
        <f-dropdown type="success" position="bc" :dataSource="data.dataSource" @action="onAction">\u4E0B\u4E2D</f-dropdown>
        <f-dropdown type="danger" position="br" :dataSource="data.dataSource" :offset="12" @action="onAction">\u4E0B\u53F3</f-dropdown>
    </f-button-group>
    <br/>
    <f-button-group :container="true">
        <f-dropdown type="primary" position="tl" :dataSource="data.dataSource" @action="onAction">\u4E0A\u5DE6</f-dropdown>
        <f-dropdown type="success" position="tc" :dataSource="data.dataSource" @action="onAction">\u4E0A\u4E2D</f-dropdown>
        <f-dropdown type="danger" position="tr" :dataSource="data.dataSource" @action="onAction">\u4E0A\u53F3</f-dropdown>
    </f-button-group>`},{title:"click\u89E6\u53D1",nowrap:!1,type:"card",id:"nav_2",template:`    <f-button-group :container="true">
        <f-dropdown type="primary" trigger="click" position="tl" :dataSource="data.dataSource" @action="onAction"  shape="square"></f-dropdown>
        <f-dropdown type="success" trigger="click" position="tc" :dataSource="data.dataSource" @action="onAction" dropdown="" shape="square" icon="user-plus"></f-dropdown>
        <f-dropdown type="danger" trigger="click" position="tr" :dataSource="data.dataSource" @action="onAction" dropdown="" shape="square">
            <custom-icon name="filter"/>
        </f-dropdown>
    </f-button-group>`},{title:"\u9759\u6001\u5C55\u793A",nowrap:!1,type:"card",id:"nav_3",template:`    <div style="margin:16px;display:flex;gap:16px;flex-wrap: wrap;">
        <f-dropdownlist :sample="true" position="tl" :dataSource="data.dataSource"></f-dropdownlist>
        <f-dropdownlist :sample="true" position="tc" :dataSource="data.dataSource"></f-dropdownlist>
        <f-dropdownlist :sample="true" position="tr" :dataSource="data.dataSource"></f-dropdownlist>
    </div>
    <div style="margin:16px;display:flex;gap:16px;flex-wrap: wrap;">
        <f-dropdownlist :sample="true" position="bl" :dataSource="data.dataSource"></f-dropdownlist>
        <f-dropdownlist :sample="true" position="bc" :dataSource="data.dataSource"></f-dropdownlist>
        <f-dropdownlist :sample="true" position="br" :dataSource="data.dataSource"></f-dropdownlist>
    </div>`},{title:"\u57FA\u672C\u7528\u6CD5",type:"code",lang:"typescript",code:`import { FButtonGroup, FDropdown, FToast, FIcon } from '@phoeon/free-ui'
import FDropdownlist from '@phoeon/free-ui/components/pop/dropdown.vue'
const { CustomIcon } = FIcon

const onAction = (e:{text:string})=>{
    FToast.show(e.text)
}
const data = {
    content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57",
    dataSource:[{
        text:"\u6DFB\u52A0\u670B\u53CB",
        value:1,
        icon:"chrome"
    },{
        text:"\u53D1\u8D77\u7FA4\u804A",
        value:1,
        icon:"firefox"
    },{
        text:"\u626B\u4E00\u626B",
        value:1,
        icon:"safari"
    },{
        text:"\u6211\u7684\u4E8C\u7EF4\u7801/\u6536\u6B3E",
        value:1,
        icon:"opera"
    },{
        text:"\u5E2E\u52A9\u4E2D\u5FC3",
        value:1,
        icon:"internet-explorer"
    }]
}`,id:"nav_4"}],title:"\u4E0B\u62C9",root:!1,script:`import { FButtonGroup, FDropdown, FToast, FIcon } from '@phoeon/free-ui'
import FDropdownlist from '@phoeon/free-ui/components/pop/dropdown.vue'
const { CustomIcon } = FIcon

const onAction = (e:{text:string})=>{
    FToast.show(e.text)
}
const data = {
    content:"\u63CF\u8FF0\u6587\u5B57\u63CF\u8FF0\u6587\u5B57",
    dataSource:[{
        text:"\u6DFB\u52A0\u670B\u53CB",
        value:1,
        icon:"chrome"
    },{
        text:"\u53D1\u8D77\u7FA4\u804A",
        value:1,
        icon:"firefox"
    },{
        text:"\u626B\u4E00\u626B",
        value:1,
        icon:"safari"
    },{
        text:"\u6211\u7684\u4E8C\u7EF4\u7801/\u6536\u6B3E",
        value:1,
        icon:"opera"
    },{
        text:"\u5E2E\u52A9\u4E2D\u5FC3",
        value:1,
        icon:"internet-explorer"
    }]
}`,anchors:[{text:"\u52A8\u6001\u5C55\u793A",value:"nav_0"},{text:"hover\u89E6\u53D1",value:"nav_1"},{text:"click\u89E6\u53D1",value:"nav_2"},{text:"\u9759\u6001\u5C55\u793A",value:"nav_3"},{text:"\u57FA\u672C\u7528\u6CD5",value:"nav_4"}],anchor:"nav_0"},n=k(r.anchor);return(d,w)=>{const f=T("demo-card"),x=T("ph-pretty");return E(),Q("div",ut,[p("div",nt,[rt,t(f,{id:"nav_1",title:"hover\u89E6\u53D1"},{code:a(()=>[c(h(u(A)(r.parts[1])),1)]),default:a(()=>[t(u(C),{container:!0},{default:a(()=>[t(u(i),{type:"primary",position:"bl",dataSource:e.dataSource,onAction:o},{default:a(()=>[ct]),_:1},8,["dataSource"]),t(u(i),{type:"success",position:"bc",dataSource:e.dataSource,onAction:o},{default:a(()=>[it]),_:1},8,["dataSource"]),t(u(i),{type:"danger",position:"br",dataSource:e.dataSource,offset:12,onAction:o},{default:a(()=>[dt]),_:1},8,["dataSource"])]),_:1}),st,t(u(C),{container:!0},{default:a(()=>[t(u(i),{type:"primary",position:"tl",dataSource:e.dataSource,onAction:o},{default:a(()=>[pt]),_:1},8,["dataSource"]),t(u(i),{type:"success",position:"tc",dataSource:e.dataSource,onAction:o},{default:a(()=>[lt]),_:1},8,["dataSource"]),t(u(i),{type:"danger",position:"tr",dataSource:e.dataSource,onAction:o},{default:a(()=>[ft]),_:1},8,["dataSource"])]),_:1})]),_:1}),t(f,{id:"nav_2",title:"click\u89E6\u53D1"},{code:a(()=>[c(h(u(A)(r.parts[2])),1)]),default:a(()=>[t(u(C),{container:!0},{default:a(()=>[t(u(i),{type:"primary",trigger:"click",position:"tl",dataSource:e.dataSource,onAction:o,shape:"square"},null,8,["dataSource"]),t(u(i),{type:"success",trigger:"click",position:"tc",dataSource:e.dataSource,onAction:o,dropdown:"",shape:"square",icon:"user-plus"},null,8,["dataSource"]),t(u(i),{type:"danger",trigger:"click",position:"tr",dataSource:e.dataSource,onAction:o,dropdown:"",shape:"square"},{default:a(()=>[t(u(g),{name:"filter"})]),_:1},8,["dataSource"])]),_:1})]),_:1}),t(f,{id:"nav_3",title:"\u9759\u6001\u5C55\u793A"},{code:a(()=>[c(h(u(A)(r.parts[3])),1)]),default:a(()=>[p("div",mt,[t(l,{sample:!0,position:"tl",dataSource:e.dataSource},null,8,["dataSource"]),t(l,{sample:!0,position:"tc",dataSource:e.dataSource},null,8,["dataSource"]),t(l,{sample:!0,position:"tr",dataSource:e.dataSource},null,8,["dataSource"])]),p("div",St,[t(l,{sample:!0,position:"bl",dataSource:e.dataSource},null,8,["dataSource"]),t(l,{sample:!0,position:"bc",dataSource:e.dataSource},null,8,["dataSource"]),t(l,{sample:!0,position:"br",dataSource:e.dataSource},null,8,["dataSource"])])]),_:1}),t(x,{id:"nav_4",title:"\u57FA\u672C\u7528\u6CD5",lang:"typescript"},{default:a(()=>[c(h(r.parts[4].code),1)]),_:1})]),p("div",wt,[t(u(at),{class:"www-anchors",modelValue:n.value,"onUpdate:modelValue":w[0]||(w[0]=_=>n.value=_),dataSource:r.anchors},null,8,["modelValue","dataSource"])])])}}});export{Ft as default};
