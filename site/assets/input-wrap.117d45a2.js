import{d as c,N as h,r as v,c as u,o as d,a as o,u as a,b as r,m as n,g as m}from"./vendor.adc10202.js";import"./index.513ab18a.js";const f=["hover"],y=["hover","type"],w=c({props:{valid:{type:Boolean,default:!0},size:String,type:String,disabled:Boolean,placeholder:String},setup(e){const s=e,i=h(),t=v({pc:!("ontouchstart"in window)}),p=u(()=>({"ph-input-wrap":!0,"ph-ip-invalid":!s.valid,"ph-ip-disabled":s.disabled,"ph-ip-small":t.pc&&s.size==="small","ph-ip-large":t.pc&&s.size==="large","ph-ip-hasradd":i.right,"ph-ip-hasladd":i.left}));return(l,b)=>(d(),o("div",{class:m(a(p))},[a(i).left?(d(),o("div",{key:0,class:"ph-ipw-addonl",hover:a(t).pc},[r(l.$slots,"left",{type:e.type})],8,f)):n("v-if",!0),r(l.$slots,"default",{valid:e.valid,size:e.size,type:e.type,disabled:e.disabled,placeholder:e.placeholder}),a(i).right?(d(),o("div",{key:1,class:"ph-ipw-addonr",hover:a(t).pc,type:e.type},[r(l.$slots,"right",{hover:a(t).pc,disabled:e.disabled})],8,y)):n("v-if",!0)],2))}});export{w as _};