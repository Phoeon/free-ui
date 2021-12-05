import{d as k,N as I,r as N,c as A,z as j,s as O,V as z,o as c,a as d,f as E,b as x,u as e,n as M,g as D,F as $,B as V,m as T,k as U,I as S,l as u,w as t,A as a,p as v}from"./vendor.6c48bfff.js";import{g as C}from"./gen-code.94dbf386.js";import{f as L}from"./index.898e7603.js";import{_ as P}from"./main.9982799e.js";const q=["onClick","active"],g=k({props:{index:{type:Number,default:0},interval:{type:Number,default:5e3},autoplay:{type:Boolean,default:!0},indicator:{type:Boolean,default:!0},indicatorOutside:Boolean,direction:{type:String,default:"hr"}},emits:["update:modelValue","shift"],setup(f,{emit:l}){var b;const n=f,h=I(),_=((b=h.default)==null?void 0:b.call(h))||[],i={timer:-1},r=N({value:n.index||0}),m=A(()=>{const s=-r.value*100;return{transform:n.direction==="hr"?`translate3d(${s}%,0,0)`:`translate3d(0,${s}%,0)`}}),p=A(()=>({"ph-carousel-indicators":!0,"ph-cid-abs":n.direction=="vt"||!n.indicatorOutside})),y=s=>{r.value=s,l("shift",s)},F=s=>{s!==r.value&&(n.autoplay&&clearInterval(i.timer),y(s),n.autoplay&&w())},w=()=>{i.timer=setInterval(()=>{y((r.value+1)%_.length)},n.interval)};return j(()=>{n.autoplay&&_.length&&O(w)}),z(()=>{clearInterval(i.timer)}),(s,_e)=>(c(),d("div",{class:D(["ph-carousel","ph-carousel-"+f.direction])},[E("div",{class:"ph-carousel-container",style:M(e(m))},[x(s.$slots,"default",{active:e(r).value})],4),f.indicator?(c(),d("div",{key:0,class:D(e(p))},[x(s.$slots,"indicator",{active:e(r).value,shift:F},()=>[(c(!0),d($,null,V(e(_),(me,B)=>(c(),d("div",{class:"ph-carousel-indicator",onClick:pe=>F(B),active:B===e(r).value,key:B},null,8,q))),128))])],2)):T("v-if",!0)],2))}}),G={},H={class:"ph-carousel-item"};function J(f,l){return c(),d("div",H,[x(f.$slots,"default")])}var o=L(G,[["render",J]]);const K={class:"www-doc"},Q={class:"www-doc-left"},R=a("\u5361\u7247\u4E00"),W=a("\u5361\u7247\u4E8C"),X=a("\u5361\u7247\u4E09"),Y=a("\u5361\u7247\u56DB"),Z=a("\u5361\u7247\u4E00"),ee=a("\u5361\u7247\u4E8C"),te=a("\u5361\u7247\u4E09"),ue=a("\u5361\u7247\u56DB"),ae=a("\u5361\u7247\u4E00"),oe=a("\u5361\u7247\u4E8C"),ne=a("\u5361\u7247\u4E09"),se=a("\u5361\u7247\u56DB"),le=a("\u5361\u7247\u4E00"),re=a("\u5361\u7247\u4E8C"),ie=a("\u5361\u7247\u4E09"),ce=a("\u5361\u7247\u56DB"),de=["active","onClick"],fe={class:"www-doc-right","sm-visible":"false"},ge=k({setup(f){const l={parts:[{title:"\u57FA\u672C\u6848\u4F8B",nowrap:!1,type:"card",id:"nav_0",template:`    <f-carousel>
        <f-carousel-item>\u5361\u7247\u4E00</f-carousel-item>
        <f-carousel-item>\u5361\u7247\u4E8C</f-carousel-item>
        <f-carousel-item>\u5361\u7247\u4E09</f-carousel-item>
        <f-carousel-item>\u5361\u7247\u56DB</f-carousel-item>
    </f-carousel>`},{title:"\u6307\u793A\u5668\u4F4D\u7F6E",nowrap:!1,type:"card",id:"nav_1",template:`    <f-carousel :indicatorOutside="true">
        <f-carousel-item>\u5361\u7247\u4E00</f-carousel-item>
        <f-carousel-item>\u5361\u7247\u4E8C</f-carousel-item>
        <f-carousel-item>\u5361\u7247\u4E09</f-carousel-item>
        <f-carousel-item>\u5361\u7247\u56DB</f-carousel-item>
    </f-carousel>`},{title:"\u65B9\u5411",nowrap:!1,type:"card",id:"nav_2",template:`    <f-carousel direction="vt">
        <f-carousel-item>\u5361\u7247\u4E00</f-carousel-item>
        <f-carousel-item>\u5361\u7247\u4E8C</f-carousel-item>
        <f-carousel-item>\u5361\u7247\u4E09</f-carousel-item>
        <f-carousel-item>\u5361\u7247\u56DB</f-carousel-item>
    </f-carousel>`},{title:"\u81EA\u5B9A\u4E49indicator",nowrap:!1,type:"card",id:"nav_3",template:`    <f-carousel :interval="2000">
        <f-carousel-item>\u5361\u7247\u4E00</f-carousel-item>
        <f-carousel-item>\u5361\u7247\u4E8C</f-carousel-item>
        <f-carousel-item>\u5361\u7247\u4E09</f-carousel-item>
        <f-carousel-item>\u5361\u7247\u56DB</f-carousel-item>
        <template #indicator="scope">
            <div class="custom-cs-indicator" 
                v-for="i in [0,1,2,3]" :key="i"
                :active="scope.active===i"
                @click="scope.shift(i)"
                ></div>
        </template>
    </f-carousel>`,style:`.custom-cs-indicator{
    width: 8px;
    height: 8px;
    border-radius: 4px;
    transition: all .3s ease;
    background-color: rgb(0,0,0,.2);
    margin: 4px;
    &:hover{
        background-color: rgb(0,0,0,.5);
        cursor: pointer;
    }
    &[active=true]{
        width: 16px;
        background-color: rgb(0,0,0,.5);
    }
}`},{title:"\u57FA\u672C\u7528\u6CD5",type:"code",lang:"typescript",code:"import { FCarousel, FCarouselItem } from '@phoeon/free-ui'",id:"nav_4"}],title:"\u8F6E\u64AD\u56FE",root:!1,script:"import { FCarousel, FCarouselItem } from '@phoeon/free-ui'",style:`.custom-cs-indicator{
    width: 8px;
    height: 8px;
    border-radius: 4px;
    transition: all .3s ease;
    background-color: rgb(0,0,0,.2);
    margin: 4px;
    &:hover{
        background-color: rgb(0,0,0,.5);
        cursor: pointer;
    }
    &[active=true]{
        width: 16px;
        background-color: rgb(0,0,0,.5);
    }
}`,anchors:[{text:"\u57FA\u672C\u6848\u4F8B",value:"nav_0"},{text:"\u6307\u793A\u5668\u4F4D\u7F6E",value:"nav_1"},{text:"\u65B9\u5411",value:"nav_2"},{text:"\u81EA\u5B9A\u4E49indicator",value:"nav_3"},{text:"\u57FA\u672C\u7528\u6CD5",value:"nav_4"}],anchor:"nav_0"},n=U(l.anchor);return(h,_)=>{const i=S("demo-card"),r=S("ph-pretty");return c(),d("div",K,[E("div",Q,[u(i,{id:"nav_0",title:"\u57FA\u672C\u6848\u4F8B"},{code:t(()=>[a(v(e(C)(l.parts[0])),1)]),default:t(()=>[u(e(g),null,{default:t(()=>[u(e(o),null,{default:t(()=>[R]),_:1}),u(e(o),null,{default:t(()=>[W]),_:1}),u(e(o),null,{default:t(()=>[X]),_:1}),u(e(o),null,{default:t(()=>[Y]),_:1})]),_:1})]),_:1}),u(i,{id:"nav_1",title:"\u6307\u793A\u5668\u4F4D\u7F6E"},{code:t(()=>[a(v(e(C)(l.parts[1])),1)]),default:t(()=>[u(e(g),{indicatorOutside:!0},{default:t(()=>[u(e(o),null,{default:t(()=>[Z]),_:1}),u(e(o),null,{default:t(()=>[ee]),_:1}),u(e(o),null,{default:t(()=>[te]),_:1}),u(e(o),null,{default:t(()=>[ue]),_:1})]),_:1})]),_:1}),u(i,{id:"nav_2",title:"\u65B9\u5411"},{code:t(()=>[a(v(e(C)(l.parts[2])),1)]),default:t(()=>[u(e(g),{direction:"vt"},{default:t(()=>[u(e(o),null,{default:t(()=>[ae]),_:1}),u(e(o),null,{default:t(()=>[oe]),_:1}),u(e(o),null,{default:t(()=>[ne]),_:1}),u(e(o),null,{default:t(()=>[se]),_:1})]),_:1})]),_:1}),u(i,{id:"nav_3",title:"\u81EA\u5B9A\u4E49indicator"},{code:t(()=>[a(v(e(C)(l.parts[3])),1)]),default:t(()=>[u(e(g),{interval:2e3},{indicator:t(m=>[(c(),d($,null,V([0,1,2,3],p=>E("div",{class:"custom-cs-indicator",key:p,active:m.active===p,onClick:y=>m.shift(p)},null,8,de)),64))]),default:t(()=>[u(e(o),null,{default:t(()=>[le]),_:1}),u(e(o),null,{default:t(()=>[re]),_:1}),u(e(o),null,{default:t(()=>[ie]),_:1}),u(e(o),null,{default:t(()=>[ce]),_:1})]),_:1})]),_:1}),u(r,{id:"nav_4",title:"\u57FA\u672C\u7528\u6CD5",lang:"typescript"},{default:t(()=>[a(v(l.parts[4].code),1)]),_:1})]),E("div",fe,[u(e(P),{class:"www-anchors",modelValue:n.value,"onUpdate:modelValue":_[0]||(_[0]=m=>n.value=m),dataSource:l.anchors},null,8,["modelValue","dataSource"])])])}}});export{ge as default};
