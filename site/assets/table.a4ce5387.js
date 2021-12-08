import{d as F,r as m,o as l,a as _,b as i,u as t,c as A,f as B,e as C,m as y,i as b,k as v,I as $,l as e,w as u,F as w,A as n,p as T}from"./vendor.adc10202.js";import{g}from"./gen-code.94dbf386.js";import{g as D,l as k,m as S,n as x,o as f,i as V}from"./index.513ab18a.js";import{_ as j}from"./main.d9d1ef14.js";const N=["hover"],h=F({setup(a){const d=m({hover:!("ontouchstart"in window)});return(s,r)=>(l(),_("tr",{class:"ph-tb-row",hover:t(d).hover},[i(s.$slots,"default")],8,N))}}),q={},I={class:"ph-tb-cell ph-tb-td"};function M(a,d){return l(),_("td",I,[i(a.$slots,"default")])}var o=D(q,[["render",M]]);const P={class:"ph-tb-cell ph-tb-th"},z={class:"ph-th-wrap"},c=F({props:{sort:Boolean,tip:String},emits:["sort"],setup(a,{emit:d}){const s=m({sort:0}),r=A(()=>s.sort===1?"up":s.sort===-1?"down":""),E=()=>{s.sort?s.sort*=-1:s.sort=1,d("sort",s.sort)};return(p,mt)=>(l(),_("th",P,[B("div",z,[B("span",null,[i(p.$slots,"default")]),a.sort?(l(),C(t(k),{key:0,onClick:E,direction:t(r),class:"ph-pointer"},null,8,["direction"])):y("v-if",!0),a.tip?b((l(),C(t(x),{key:1,type:"info",color:"var(--ph-c-l1)"},null,512)),[[t(S),{content:a.tip,position:"tc"}]]):y("v-if",!0)])]))}}),G={},H={class:"ph-table"};function J(a,d){return l(),_("table",H,[i(a.$slots,"default")])}var K=D(G,[["render",J]]);const L=n("\u8BE5\u7EC4\u4EF6\u4E3Aweb\u7AEF\u7EC4\u4EF6,\u76EE\u524D\u53EA\u63D0\u4F9B\u4E86\u9759\u6001\u7B80\u5355\u5B9E\u73B0 "),O=n("\u59D3\u540D"),Q=n("\u6027\u522B"),R=n("\u804C\u4E1A"),U=n("\u751F\u65E5"),W=n("\u64CD\u4F5C"),X=n("\u62C9\u4F38\u7A7A\u95F4\u53D1\u7684"),Y=n("\u7537"),Z=n("\u8001\u5E08"),tt=n("1992-03-30"),ut=n("\u5220\u9664"),et=n("\u65B0\u589E"),nt=n("\u8BE6\u60C5"),ot=n("\u62C9\u4F38\u7A7A\u95F4\u53D1\u7684"),st=n("\u7537"),at=n("\u8001\u5E08"),ft=n("1992-03-30"),dt=n("\u5220\u9664"),lt=n("\u65B0\u589E"),rt=n("\u8BE6\u60C5"),_t=n("\u62C9\u4F38\u7A7A\u95F4\u53D1\u7684"),ct=n("\u7537"),it=n("\u8001\u5E08"),ht=n("1992-03-30"),pt=n("\u5220\u9664"),Ft=n("\u65B0\u589E"),Et=n("\u8BE6\u60C5"),At=F({setup(a){const d=r=>{V.show(r===1?"\u5347\u5E8F":"\u964D\u5E8F")},s={parts:[{template:`\u8BE5\u7EC4\u4EF6\u4E3Aweb\u7AEF\u7EC4\u4EF6,\u76EE\u524D\u53EA\u63D0\u4F9B\u4E86\u9759\u6001\u7B80\u5355\u5B9E\u73B0
`,type:"blockquote",nowrap:!0},{title:"\u7B80\u5355\u6848\u4F8B",nowrap:!1,type:"card",id:"nav_1",template:`    <f-table>
        <f-tr>
            <f-th>\u59D3\u540D</f-th>
            <f-th>\u6027\u522B</f-th>
            <f-th tip="\u6211\u7231\u4F60\u4E2D\u56FD">\u804C\u4E1A</f-th>
            <f-th :sort="true" @sort="onSort">\u751F\u65E5</f-th>
            <f-th>\u64CD\u4F5C</f-th>
        </f-tr>
        <f-tr>
            <f-td>\u62C9\u4F38\u7A7A\u95F4\u53D1\u7684</f-td>
            <f-td>\u7537</f-td>
            <f-td>\u8001\u5E08</f-td>
            <f-td>1992-03-30</f-td>
            <f-td>
                <f-action type="danger">\u5220\u9664</f-action>
                <f-action type="info">\u65B0\u589E</f-action>
                <f-action type="info">\u8BE6\u60C5</f-action>
            </f-td>
        </f-tr>
        <f-tr>
            <f-td>\u62C9\u4F38\u7A7A\u95F4\u53D1\u7684</f-td>
            <f-td>\u7537</f-td>
            <f-td>\u8001\u5E08</f-td>
            <f-td>1992-03-30</f-td>
            <f-td>
                <f-action type="danger">\u5220\u9664</f-action>
                <f-action type="info">\u65B0\u589E</f-action>
                <f-action type="info">\u8BE6\u60C5</f-action>
            </f-td>
        </f-tr>
        <f-tr>
            <f-td>\u62C9\u4F38\u7A7A\u95F4\u53D1\u7684</f-td>
            <f-td>\u7537</f-td>
            <f-td>\u8001\u5E08</f-td>
            <f-td>1992-03-30</f-td>
            <f-td>
                <f-action type="danger">\u5220\u9664</f-action>
                <f-action type="info">\u65B0\u589E</f-action>
                <f-action type="info">\u8BE6\u60C5</f-action>
            </f-td>
        </f-tr>
    </f-table>`,script:`import { FView, FTable, FTr, FTh, FTd, FAction,FBlockquote,FToast } from '@phoeon/free-ui'
const onSort = (sort:number)=>{
    FToast.show(sort===1?'\u5347\u5E8F':'\u964D\u5E8F')
}`}],title:"\u8868\u683C",root:!1,script:`import { FView, FTable, FTr, FTh, FTd, FAction,FBlockquote,FToast } from '@phoeon/free-ui'
const onSort = (sort:number)=>{
    FToast.show(sort===1?'\u5347\u5E8F':'\u964D\u5E8F')
}`,anchors:[{text:"\u7B80\u5355\u6848\u4F8B",value:"nav_1"}],anchor:"nav_1"};return v(s.anchor),(r,E)=>{const p=$("demo-card");return l(),_(w,null,[e(t(j),{type:"primary"},{default:u(()=>[L]),_:1}),e(p,{id:"nav_1",title:"\u7B80\u5355\u6848\u4F8B"},{code:u(()=>[n(T(t(g)(s.parts[1])),1)]),default:u(()=>[e(t(K),null,{default:u(()=>[e(t(h),null,{default:u(()=>[e(t(c),null,{default:u(()=>[O]),_:1}),e(t(c),null,{default:u(()=>[Q]),_:1}),e(t(c),{tip:"\u6211\u7231\u4F60\u4E2D\u56FD"},{default:u(()=>[R]),_:1}),e(t(c),{sort:!0,onSort:d},{default:u(()=>[U]),_:1}),e(t(c),null,{default:u(()=>[W]),_:1})]),_:1}),e(t(h),null,{default:u(()=>[e(t(o),null,{default:u(()=>[X]),_:1}),e(t(o),null,{default:u(()=>[Y]),_:1}),e(t(o),null,{default:u(()=>[Z]),_:1}),e(t(o),null,{default:u(()=>[tt]),_:1}),e(t(o),null,{default:u(()=>[e(t(f),{type:"danger"},{default:u(()=>[ut]),_:1}),e(t(f),{type:"info"},{default:u(()=>[et]),_:1}),e(t(f),{type:"info"},{default:u(()=>[nt]),_:1})]),_:1})]),_:1}),e(t(h),null,{default:u(()=>[e(t(o),null,{default:u(()=>[ot]),_:1}),e(t(o),null,{default:u(()=>[st]),_:1}),e(t(o),null,{default:u(()=>[at]),_:1}),e(t(o),null,{default:u(()=>[ft]),_:1}),e(t(o),null,{default:u(()=>[e(t(f),{type:"danger"},{default:u(()=>[dt]),_:1}),e(t(f),{type:"info"},{default:u(()=>[lt]),_:1}),e(t(f),{type:"info"},{default:u(()=>[rt]),_:1})]),_:1})]),_:1}),e(t(h),null,{default:u(()=>[e(t(o),null,{default:u(()=>[_t]),_:1}),e(t(o),null,{default:u(()=>[ct]),_:1}),e(t(o),null,{default:u(()=>[it]),_:1}),e(t(o),null,{default:u(()=>[ht]),_:1}),e(t(o),null,{default:u(()=>[e(t(f),{type:"danger"},{default:u(()=>[pt]),_:1}),e(t(f),{type:"info"},{default:u(()=>[Ft]),_:1}),e(t(f),{type:"info"},{default:u(()=>[Et]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{At as default};
