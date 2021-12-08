import{d as x,o as l,a as o,b as y,g as D,r as b,l as a,w as i,e as k,u as t,m as $,T as z,f as h,p as f,F as p,k as R,I,A as v,B as F}from"./vendor.adc10202.js";import{g as _}from"./gen-code.94dbf386.js";import{h as T,c as V,i as g}from"./index.513ab18a.js";import{_ as j}from"./main.90288d63.js";const B=x({props:{block:Boolean,size:String},setup(m){const c=m;return(r,d)=>(l(),o("div",{class:D(["ph-list",m.block?"ph-list-block":"","ph-list-"+c.size])},[y(r.$slots,"default")],2))}}),N=["hover"],A={class:"ph-li-title"},M={class:"ph-li-desc"},P={class:"ph-li-action"},E=x({props:{title:String,desc:String,detail:Boolean,iconRight:String,iconLeft:String,iconLeftColor:String,iconRightColor:String},emits:["detail","item-click","left-click"],setup(m,{emit:c}){const r=b({hover:!("ontouchstart"in window)});return(d,n)=>(l(),o("div",{class:D(["ph-list-item",m.desc?"ph-list-item-lg":""]),hover:t(r).hover},[y(d.$slots,"left",{},()=>[a(z,{name:"ph-scalein"},{default:i(()=>[m.iconLeft?(l(),k(t(T),{key:0,onClick:n[0]||(n[0]=s=>c("left-click")),fill:m.iconLeftColor,class:"ph-li-ileft",name:m.iconLeft},null,8,["fill","name"])):$("v-if",!0)]),_:1})]),h("div",{class:"ph-li-content",onClick:n[1]||(n[1]=s=>c("item-click"))},[y(d.$slots,"default",{},()=>[h("h1",A,f(m.title),1),h("p",M,f(m.desc),1)])]),h("div",P,[y(d.$slots,"right",{},()=>[m.detail?(l(),o(p,{key:0},[m.iconRight?(l(),k(t(T),{key:0,onClick:n[2]||(n[2]=s=>c("detail")),fill:m.iconRightColor,class:"ph-li-iright",name:m.iconRight},null,8,["fill","name"])):(l(),o("span",{key:1,onClick:n[3]||(n[3]=s=>c("detail")),class:"ph-li-detail"},"\u8BE6\u7EC6\u4FE1\u606F")),a(t(V),{onClick:n[4]||(n[4]=s=>c("detail")),direction:"right"})],64)):$("v-if",!0)])])],10,N))}}),U={class:"www-doc"},q={class:"www-doc-left"},G={class:"www-doc-right","sm-visible":"false"},W=x({setup(m){const c=b({list:[{title:"\u5217\u88681",detail:!0},{title:"\u5217\u88682",detail:!0},{title:"\u5217\u88683",detail:!0}],list1:[{title:"\u5217\u88681",detail:!0,icon:"chrome"},{title:"\u5217\u88682",detail:!0,icon:"firefox"},{title:"\u5217\u88683",detail:!0,icon:"safari"}],list2:[{title:"\u5217\u88681",detail:!0,desc:"\u63CF\u8FF0\u5185\u5BB9"},{title:"\u5217\u88682",detail:!0,desc:"\u63CF\u8FF0\u5185\u5BB9"},{title:"\u5217\u88683",detail:!0,desc:"\u63CF\u8FF0\u5185\u5BB9"}]}),r=()=>{g.success("\u8BE6\u60C5\u4E8B\u4EF6")},d=()=>{g.success("\u70B9\u51FB\u4E8B\u4EF6")},n=()=>{g.success("\u5DE6\u70B9\u51FB\u4E8B\u4EF6")},s={parts:[{title:"\u6807\u9898+\u8BE6\u60C5",nowrap:!1,type:"card",id:"nav_0",template:`    <f-list :block="true">
        <f-list-item 
            v-for="(item,idx) in data.list" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            :detail="item.detail"
            ></f-list-item>
    </f-list>`},{title:"\u6807\u9898",nowrap:!1,type:"card",id:"nav_1",template:`    <f-list :block="true">
        <f-list-item 
            v-for="(item,idx) in data.list" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            ></f-list-item>
    </f-list>`},{title:"\u6807\u9898+\u8BE6\u60C5+\u5DE6\u56FE\u6807",nowrap:!1,type:"card",id:"nav_2",template:`    <f-list :block="true">
        <f-list-item 
            v-for="(item,idx) in data.list1" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            :detail="item.detail"
            iconLeft="check-circle"
            iconLeftColor="var(--ph-primary)"
            ></f-list-item>
    </f-list>`},{title:"\u6807\u9898+\u8BE6\u60C5+\u53F3\u56FE\u6807",nowrap:!1,type:"card",id:"nav_3",template:`    <f-list :block="true">
        <f-list-item 
            v-for="(item,idx) in data.list1" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            :detail="item.detail"
            :iconRight="item.icon"
            ></f-list-item>
    </f-list>`},{title:"\u6807\u9898+\u8BE6\u60C5+\u63CF\u8FF0",nowrap:!1,type:"card",id:"nav_4",template:`    <f-list :block="true">
        <f-list-item 
            v-for="(item,idx) in data.list2" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            :desc="item.desc"
            :detail="item.detail"
            ></f-list-item>
    </f-list>`},{title:"\u6807\u9898+\u8BE6\u60C5+\u63CF\u8FF0+\u5DE6\u56FE\u6807",nowrap:!1,type:"card",id:"nav_5",template:`    <f-list :block="true">
        <f-list-item 
            v-for="(item,idx) in data.list2" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            :desc="item.desc"
            :detail="item.detail"
            iconLeft="check-circle"
            iconLeftColor="var(--ph-primary)"
            ></f-list-item>
    </f-list>`},{title:"card",nowrap:!1,type:"card",id:"nav_6",template:`    <f-list>
        <f-list-item 
            v-for="(item,idx) in data.list2" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            :desc="item.desc"
            :detail="item.detail"
            ></f-list-item>
    </f-list>`},{title:"card",nowrap:!1,type:"card",id:"nav_7",template:`    <f-list>
        <f-list-item 
            v-for="(item,idx) in data.list2" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            :detail="item.detail"
            ></f-list-item>
    </f-list>`},{title:"card",nowrap:!1,type:"card",id:"nav_8",template:`    <f-list>
        <f-list-item 
            v-for="(item,idx) in data.list2" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            >{{item.title}}</f-list-item>
    </f-list>`},{title:"card+small",nowrap:!1,type:"card",id:"nav_9",template:`    <f-list size="small">
        <f-list-item 
            v-for="(item,idx) in data.list2" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            :detail="item.detail"
            ></f-list-item>
    </f-list>`},{title:"card+normal",nowrap:!1,type:"card",id:"nav_10",template:`    <f-list size="normal">
        <f-list-item 
            v-for="(item,idx) in data.list2" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            :detail="item.detail"
            ></f-list-item>
    </f-list>`},{title:"card+large",nowrap:!1,type:"card",id:"nav_11",template:`    <f-list size="large">
        <f-list-item 
            v-for="(item,idx) in data.list2" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            :detail="item.detail"
            ></f-list-item>
    </f-list>`},{title:"script",type:"code",lang:"typescript",code:`import { FList, FListItem, FToast } from '@phoeon/free-ui'
import { reactive } from 'vue'
const data = reactive({
    list:[{
        title:"\u5217\u88681",
        detail:true
    },{
        title:"\u5217\u88682",
        detail:true,
    },{
        title:"\u5217\u88683",
        detail:true
    }],
    list1:[{
        title:"\u5217\u88681",
        detail:true,
        icon:"chrome"
    },{
        title:"\u5217\u88682",
        detail:true,
        icon:"firefox"
    },{
        title:"\u5217\u88683",
        detail:true,
        icon:"safari"
    }],
    list2:[{
        title:"\u5217\u88681",
        detail:true,
        desc:"\u63CF\u8FF0\u5185\u5BB9"
    },{
        title:"\u5217\u88682",
        detail:true,
        desc:"\u63CF\u8FF0\u5185\u5BB9"
    },{
        title:"\u5217\u88683",
        detail:true,
        desc:"\u63CF\u8FF0\u5185\u5BB9"
    }],
})
const onDetail = ()=>{
    FToast.success("\u8BE6\u60C5\u4E8B\u4EF6")
}
const onClick = ()=>{
    FToast.success("\u70B9\u51FB\u4E8B\u4EF6")
}
const onLeftClick = ()=>{
    FToast.success("\u5DE6\u70B9\u51FB\u4E8B\u4EF6")
}`,id:"nav_12"}],title:"\u5217\u8868",root:!1,script:`import { FList, FListItem, FToast } from '@phoeon/free-ui'
import { reactive } from 'vue'
const data = reactive({
    list:[{
        title:"\u5217\u88681",
        detail:true
    },{
        title:"\u5217\u88682",
        detail:true,
    },{
        title:"\u5217\u88683",
        detail:true
    }],
    list1:[{
        title:"\u5217\u88681",
        detail:true,
        icon:"chrome"
    },{
        title:"\u5217\u88682",
        detail:true,
        icon:"firefox"
    },{
        title:"\u5217\u88683",
        detail:true,
        icon:"safari"
    }],
    list2:[{
        title:"\u5217\u88681",
        detail:true,
        desc:"\u63CF\u8FF0\u5185\u5BB9"
    },{
        title:"\u5217\u88682",
        detail:true,
        desc:"\u63CF\u8FF0\u5185\u5BB9"
    },{
        title:"\u5217\u88683",
        detail:true,
        desc:"\u63CF\u8FF0\u5185\u5BB9"
    }],
})
const onDetail = ()=>{
    FToast.success("\u8BE6\u60C5\u4E8B\u4EF6")
}
const onClick = ()=>{
    FToast.success("\u70B9\u51FB\u4E8B\u4EF6")
}
const onLeftClick = ()=>{
    FToast.success("\u5DE6\u70B9\u51FB\u4E8B\u4EF6")
}`,anchors:[{text:"\u6807\u9898+\u8BE6\u60C5",value:"nav_0"},{text:"\u6807\u9898",value:"nav_1"},{text:"\u6807\u9898+\u8BE6\u60C5+\u5DE6\u56FE\u6807",value:"nav_2"},{text:"\u6807\u9898+\u8BE6\u60C5+\u53F3\u56FE\u6807",value:"nav_3"},{text:"\u6807\u9898+\u8BE6\u60C5+\u63CF\u8FF0",value:"nav_4"},{text:"\u6807\u9898+\u8BE6\u60C5+\u63CF\u8FF0+\u5DE6\u56FE\u6807",value:"nav_5"},{text:"card",value:"nav_6"},{text:"card",value:"nav_7"},{text:"card",value:"nav_8"},{text:"card+small",value:"nav_9"},{text:"card+normal",value:"nav_10"},{text:"card+large",value:"nav_11"},{text:"script",value:"nav_12"}],anchor:"nav_0"},L=R(s.anchor);return(H,w)=>{const C=I("demo-card"),S=I("ph-pretty");return l(),o("div",U,[h("div",q,[a(C,{id:"nav_0",title:"\u6807\u9898+\u8BE6\u60C5"},{code:i(()=>[v(f(t(_)(s.parts[0])),1)]),default:i(()=>[a(t(B),{block:!0},{default:i(()=>[(l(!0),o(p,null,F(t(c).list,(e,u)=>(l(),k(t(E),{onDetail:r,onLeftClick:n,onItemClick:d,key:u,title:e.title,detail:e.detail},null,8,["title","detail"]))),128))]),_:1})]),_:1}),a(C,{id:"nav_1",title:"\u6807\u9898"},{code:i(()=>[v(f(t(_)(s.parts[1])),1)]),default:i(()=>[a(t(B),{block:!0},{default:i(()=>[(l(!0),o(p,null,F(t(c).list,(e,u)=>(l(),k(t(E),{onDetail:r,onLeftClick:n,onItemClick:d,key:u,title:e.title},null,8,["title"]))),128))]),_:1})]),_:1}),a(C,{id:"nav_2",title:"\u6807\u9898+\u8BE6\u60C5+\u5DE6\u56FE\u6807"},{code:i(()=>[v(f(t(_)(s.parts[2])),1)]),default:i(()=>[a(t(B),{block:!0},{default:i(()=>[(l(!0),o(p,null,F(t(c).list1,(e,u)=>(l(),k(t(E),{onDetail:r,onLeftClick:n,onItemClick:d,key:u,title:e.title,detail:e.detail,iconLeft:"check-circle",iconLeftColor:"var(--ph-primary)"},null,8,["title","detail"]))),128))]),_:1})]),_:1}),a(C,{id:"nav_3",title:"\u6807\u9898+\u8BE6\u60C5+\u53F3\u56FE\u6807"},{code:i(()=>[v(f(t(_)(s.parts[3])),1)]),default:i(()=>[a(t(B),{block:!0},{default:i(()=>[(l(!0),o(p,null,F(t(c).list1,(e,u)=>(l(),k(t(E),{onDetail:r,onLeftClick:n,onItemClick:d,key:u,title:e.title,detail:e.detail,iconRight:e.icon},null,8,["title","detail","iconRight"]))),128))]),_:1})]),_:1}),a(C,{id:"nav_4",title:"\u6807\u9898+\u8BE6\u60C5+\u63CF\u8FF0"},{code:i(()=>[v(f(t(_)(s.parts[4])),1)]),default:i(()=>[a(t(B),{block:!0},{default:i(()=>[(l(!0),o(p,null,F(t(c).list2,(e,u)=>(l(),k(t(E),{onDetail:r,onLeftClick:n,onItemClick:d,key:u,title:e.title,desc:e.desc,detail:e.detail},null,8,["title","desc","detail"]))),128))]),_:1})]),_:1}),a(C,{id:"nav_5",title:"\u6807\u9898+\u8BE6\u60C5+\u63CF\u8FF0+\u5DE6\u56FE\u6807"},{code:i(()=>[v(f(t(_)(s.parts[5])),1)]),default:i(()=>[a(t(B),{block:!0},{default:i(()=>[(l(!0),o(p,null,F(t(c).list2,(e,u)=>(l(),k(t(E),{onDetail:r,onLeftClick:n,onItemClick:d,key:u,title:e.title,desc:e.desc,detail:e.detail,iconLeft:"check-circle",iconLeftColor:"var(--ph-primary)"},null,8,["title","desc","detail"]))),128))]),_:1})]),_:1}),a(C,{id:"nav_6",title:"card"},{code:i(()=>[v(f(t(_)(s.parts[6])),1)]),default:i(()=>[a(t(B),null,{default:i(()=>[(l(!0),o(p,null,F(t(c).list2,(e,u)=>(l(),k(t(E),{onDetail:r,onLeftClick:n,onItemClick:d,key:u,title:e.title,desc:e.desc,detail:e.detail},null,8,["title","desc","detail"]))),128))]),_:1})]),_:1}),a(C,{id:"nav_7",title:"card"},{code:i(()=>[v(f(t(_)(s.parts[7])),1)]),default:i(()=>[a(t(B),null,{default:i(()=>[(l(!0),o(p,null,F(t(c).list2,(e,u)=>(l(),k(t(E),{onDetail:r,onLeftClick:n,onItemClick:d,key:u,title:e.title,detail:e.detail},null,8,["title","detail"]))),128))]),_:1})]),_:1}),a(C,{id:"nav_8",title:"card"},{code:i(()=>[v(f(t(_)(s.parts[8])),1)]),default:i(()=>[a(t(B),null,{default:i(()=>[(l(!0),o(p,null,F(t(c).list2,(e,u)=>(l(),k(t(E),{onDetail:r,onLeftClick:n,onItemClick:d,key:u},{default:i(()=>[v(f(e.title),1)]),_:2},1024))),128))]),_:1})]),_:1}),a(C,{id:"nav_9",title:"card+small"},{code:i(()=>[v(f(t(_)(s.parts[9])),1)]),default:i(()=>[a(t(B),{size:"small"},{default:i(()=>[(l(!0),o(p,null,F(t(c).list2,(e,u)=>(l(),k(t(E),{onDetail:r,onLeftClick:n,onItemClick:d,key:u,title:e.title,detail:e.detail},null,8,["title","detail"]))),128))]),_:1})]),_:1}),a(C,{id:"nav_10",title:"card+normal"},{code:i(()=>[v(f(t(_)(s.parts[10])),1)]),default:i(()=>[a(t(B),{size:"normal"},{default:i(()=>[(l(!0),o(p,null,F(t(c).list2,(e,u)=>(l(),k(t(E),{onDetail:r,onLeftClick:n,onItemClick:d,key:u,title:e.title,detail:e.detail},null,8,["title","detail"]))),128))]),_:1})]),_:1}),a(C,{id:"nav_11",title:"card+large"},{code:i(()=>[v(f(t(_)(s.parts[11])),1)]),default:i(()=>[a(t(B),{size:"large"},{default:i(()=>[(l(!0),o(p,null,F(t(c).list2,(e,u)=>(l(),k(t(E),{onDetail:r,onLeftClick:n,onItemClick:d,key:u,title:e.title,detail:e.detail},null,8,["title","detail"]))),128))]),_:1})]),_:1}),a(S,{id:"nav_12",title:"script",lang:"typescript"},{default:i(()=>[v(f(s.parts[12].code),1)]),_:1})]),h("div",G,[a(t(j),{class:"www-anchors",modelValue:L.value,"onUpdate:modelValue":w[0]||(w[0]=e=>L.value=e),dataSource:s.anchors},null,8,["modelValue","dataSource"])])])}}});export{W as default};
