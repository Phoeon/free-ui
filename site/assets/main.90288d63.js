import{d as C,r as x,z as T,W as _,o as v,a as p,F as q,B as N,u as b,g as j,A as z,p as A,f as E}from"./vendor.adc10202.js";import{b as V}from"./index.513ab18a.js";const F={class:"ph-anchors"},I=["hover","onClick"],R=E("i",{class:"ph-anchor-indicator"},null,-1),H=C({props:{dataSource:{type:Array,default:()=>[]},modelValue:String},emits:["update:modelValue","navigate"],setup(c,{emit:s}){const a=c,w=x({hover:!("ontouchstart"in window)}),l={st:0,lock:!1},y=o=>{var t;if(o.value===a.modelValue)return;s("update:modelValue",o.value),s("navigate",o),l.lock=!0;const n=document.querySelector("#"+o.value);(t=n==null?void 0:n.scrollIntoViewIfNeeded)==null||t.call(n),window.setTimeout(()=>{l.lock=!1},50)},f=o=>{var m,g,S,k;const n=o.scrollTop-l.st>=0,t=document.documentElement.clientHeight;if(l.st=o.scrollTop,l.lock)return;const r=a.dataSource.filter(({value:h})=>{const e=document.querySelector("#"+h).getBoundingClientRect();return e.top<t&&e.top>=0||e.top+e.height<t&&e.top+e.height>=0||e.top<=0&&e.top+e.height>=t}),u=r.filter(({value:h})=>{const e=document.querySelector("#"+h).getBoundingClientRect();return e.top>0&&e.top+e.height<t||e.top<=0&&e.top+e.height>=t}),i=u.length?u:r;let d="";n?d=((m=i[i.length-1])==null?void 0:m.value)||((g=a.dataSource[a.dataSource.length-1])==null?void 0:g.value):d=((S=i[0])==null?void 0:S.value)||((k=a.dataSource[0])==null?void 0:k.value),s("update:modelValue",d)};return T(()=>{window.setTimeout(()=>{V.on("view-scroll",f)},50)}),_(()=>{V.off("view-scroll",f)}),(o,n)=>(v(),p("div",F,[(v(!0),p(q,null,N(c.dataSource,(t,r)=>(v(),p("div",{hover:b(w).hover&&t.value!=c.modelValue,class:j({"ph-anchor":!0,"ph-anchor-active":c.modelValue===t.value}),key:r,onClick:u=>y(t)},[R,z(" "+A(t.text),1)],10,I))),128))]))}});export{H as _};