var g=Object.defineProperty,k=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var B=(c,t,u)=>t in c?g(c,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):c[t]=u,A=(c,t)=>{for(var u in t||(t={}))$.call(t,u)&&B(c,u,t[u]);if(F)for(var u of F(t))I.call(t,u)&&B(c,u,t[u]);return c},b=(c,t)=>k(c,D(t));import{d as h,r as w,c as S,o as x,a as V,f as p,p as d,l as a,u as e,i as j,b as N,L as U,k as T,I as C,w as o,A as n}from"./vendor.adc10202.js";import{g as _}from"./gen-code.94dbf386.js";import{c as q,v as H}from"./index.513ab18a.js";import{_ as L}from"./main.90288d63.js";import{s as l}from"./sutra.5cb6dd6e.js";const M={class:"ph-accordion-item"},P=["disabled"],z={class:"ph-acd-title"},G={class:"ph-acd-body"},J={class:"ph-acd-content"},K={name:"FAccordionItem"};function O(c){const t=c,u=w({expand:t.expand&&!t.disabled}),f=S(()=>t.accordion?t.expand&&!t.disabled:u.expand),s=()=>{var i;t.disabled||(t.accordion?(i=t.update)==null||i.call(t,t.expand?-1:t.index):u.expand=!u.expand)};return(i,v)=>(x(),V("div",M,[p("div",{class:"ph-acd-header",onClick:s,disabled:c.disabled},[p("p",z,d(c.title),1),a(e(q),{class:"ph-acd-arrow",direction:e(f)?"up":"down"},null,8,["direction"])],8,P),j(p("div",G,[p("div",J,[N(i.$slots,"default")])],512),[[e(H),e(f)]])]))}const r=h(b(A({},K),{props:{title:{type:String,required:!0},index:Number,disabled:Boolean,expand:Boolean,accordion:Boolean,update:Function},setup:O}));var E={components:{FAccordionItem:r},props:{modelValue:{type:Number,default:0},accordion:Boolean},setup(c,t){const u=s=>{t.emit("update:modelValue",s)},f=()=>t.slots.default().filter((s,i)=>(s.props.index=i,s.props.expand=i===c.modelValue,s.props.accordion=c.accordion,s.props.update=u,s.key="key_"+i,s.type.name==="FAccordionItem"));return()=>U("div",{class:["ph-accordion"]},f())}};const Q={class:"www-doc"},R={class:"www-doc-left"},W={class:"www-doc-right","sm-visible":"false"},ae=h({setup(c){const t=w({v1:0,v2:2,v3:0,v4:0}),u={parts:[{title:"\u5757\u7EA7\u9ED8\u8BA4",nowrap:!1,type:"card",id:"nav_0",template:`    <f-accordion v-model="state.v1" :block='true'>
        <f-accordion-item title="\u9762\u677F\u4E00">{{sutra}}</f-accordion-item>
        <f-accordion-item title="\u9762\u677F\u4E8C">{{sutra}}</f-accordion-item>
        <f-accordion-item title="\u9762\u677F\u4E09">{{sutra}}</f-accordion-item>
        <f-accordion-item title="\u9762\u677F\u56DB">{{sutra}}</f-accordion-item>
    </f-accordion>`},{title:"\u5757\u7EA7\u624B\u98CE\u7434",nowrap:!1,type:"card",id:"nav_1",template:`    <f-accordion v-model="state.v2" :block='true' :accordion="true">
        <f-accordion-item title="\u9762\u677F\u4E00">{{sutra}}</f-accordion-item>
        <f-accordion-item title="\u9762\u677F\u4E8C">{{sutra}}</f-accordion-item>
        <f-accordion-item title="\u9762\u677F\u4E09">{{sutra}}</f-accordion-item>
    </f-accordion>`},{title:"\u5757\u7EA7 \u7981\u6B62",nowrap:!1,type:"card",id:"nav_2",template:`    <f-accordion v-model="state.v3">
        <f-accordion-item title="\u9762\u677F\u4E00">{{sutra}}</f-accordion-item>
        <f-accordion-item title="\u9762\u677F\u4E8C">{{sutra}}</f-accordion-item>
        <f-accordion-item title="\u9762\u677F\u4E09" :disabled="true" >{{sutra}}</f-accordion-item>
        <f-accordion-item title="\u9762\u677F\u56DB">{{sutra}}</f-accordion-item>
    </f-accordion>`},{title:"\u5757\u7EA7\u624B\u98CE\u7434\u7981\u6B62",nowrap:!1,type:"card",id:"nav_3",template:`    <f-accordion v-model="state.v4" :accordion="true">
        <f-accordion-item title="\u9762\u677F\u4E00">{{sutra}}</f-accordion-item>
        <f-accordion-item title="\u9762\u677F\u4E8C">{{sutra}}</f-accordion-item>
        <f-accordion-item title="\u9762\u677F\u4E09" :disabled="true" >{{sutra}}</f-accordion-item>
    </f-accordion>`},{title:"script",type:"code",lang:"typescript",code:`import { FAccordion, FAccordionItem } from '@phoeon/free-ui'
import { reactive } from 'vue'
import { sutra } from '@demo/data/sutra'
const state = reactive({
    v1:0,
    v2:2,
    v3:0,
    v4:0
})
`,id:"nav_4"}],title:"\u6298\u53E0\u9762\u677F",root:!1,script:`import { FAccordion, FAccordionItem } from '@phoeon/free-ui'
import { reactive } from 'vue'
import { sutra } from '@demo/data/sutra'
const state = reactive({
    v1:0,
    v2:2,
    v3:0,
    v4:0
})
`,anchors:[{text:"\u5757\u7EA7\u9ED8\u8BA4",value:"nav_0"},{text:"\u5757\u7EA7\u624B\u98CE\u7434",value:"nav_1"},{text:"\u5757\u7EA7 \u7981\u6B62",value:"nav_2"},{text:"\u5757\u7EA7\u624B\u98CE\u7434\u7981\u6B62",value:"nav_3"},{text:"script",value:"nav_4"}],anchor:"nav_0"},f=T(u.anchor);return(s,i)=>{const v=C("demo-card"),y=C("ph-pretty");return x(),V("div",Q,[p("div",R,[a(v,{id:"nav_0",title:"\u5757\u7EA7\u9ED8\u8BA4"},{code:o(()=>[n(d(e(_)(u.parts[0])),1)]),default:o(()=>[a(e(E),{modelValue:e(t).v1,"onUpdate:modelValue":i[0]||(i[0]=m=>e(t).v1=m),block:!0},{default:o(()=>[a(e(r),{title:"\u9762\u677F\u4E00"},{default:o(()=>[n(d(e(l)),1)]),_:1}),a(e(r),{title:"\u9762\u677F\u4E8C"},{default:o(()=>[n(d(e(l)),1)]),_:1}),a(e(r),{title:"\u9762\u677F\u4E09"},{default:o(()=>[n(d(e(l)),1)]),_:1}),a(e(r),{title:"\u9762\u677F\u56DB"},{default:o(()=>[n(d(e(l)),1)]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(v,{id:"nav_1",title:"\u5757\u7EA7\u624B\u98CE\u7434"},{code:o(()=>[n(d(e(_)(u.parts[1])),1)]),default:o(()=>[a(e(E),{modelValue:e(t).v2,"onUpdate:modelValue":i[1]||(i[1]=m=>e(t).v2=m),block:!0,accordion:!0},{default:o(()=>[a(e(r),{title:"\u9762\u677F\u4E00"},{default:o(()=>[n(d(e(l)),1)]),_:1}),a(e(r),{title:"\u9762\u677F\u4E8C"},{default:o(()=>[n(d(e(l)),1)]),_:1}),a(e(r),{title:"\u9762\u677F\u4E09"},{default:o(()=>[n(d(e(l)),1)]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(v,{id:"nav_2",title:"\u5757\u7EA7 \u7981\u6B62"},{code:o(()=>[n(d(e(_)(u.parts[2])),1)]),default:o(()=>[a(e(E),{modelValue:e(t).v3,"onUpdate:modelValue":i[2]||(i[2]=m=>e(t).v3=m)},{default:o(()=>[a(e(r),{title:"\u9762\u677F\u4E00"},{default:o(()=>[n(d(e(l)),1)]),_:1}),a(e(r),{title:"\u9762\u677F\u4E8C"},{default:o(()=>[n(d(e(l)),1)]),_:1}),a(e(r),{title:"\u9762\u677F\u4E09",disabled:!0},{default:o(()=>[n(d(e(l)),1)]),_:1}),a(e(r),{title:"\u9762\u677F\u56DB"},{default:o(()=>[n(d(e(l)),1)]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(v,{id:"nav_3",title:"\u5757\u7EA7\u624B\u98CE\u7434\u7981\u6B62"},{code:o(()=>[n(d(e(_)(u.parts[3])),1)]),default:o(()=>[a(e(E),{modelValue:e(t).v4,"onUpdate:modelValue":i[3]||(i[3]=m=>e(t).v4=m),accordion:!0},{default:o(()=>[a(e(r),{title:"\u9762\u677F\u4E00"},{default:o(()=>[n(d(e(l)),1)]),_:1}),a(e(r),{title:"\u9762\u677F\u4E8C"},{default:o(()=>[n(d(e(l)),1)]),_:1}),a(e(r),{title:"\u9762\u677F\u4E09",disabled:!0},{default:o(()=>[n(d(e(l)),1)]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(y,{id:"nav_4",title:"script",lang:"typescript"},{default:o(()=>[n(d(u.parts[4].code),1)]),_:1})]),p("div",W,[a(e(L),{class:"www-anchors",modelValue:f.value,"onUpdate:modelValue":i[4]||(i[4]=m=>f.value=m),dataSource:u.anchors},null,8,["modelValue","dataSource"])])])}}});export{ae as default};
