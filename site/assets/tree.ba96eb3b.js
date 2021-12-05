import{d as _,r as w,k as F,I as C,a as D,f as p,l as t,w as r,u as e,o as T,A as n,p as l}from"./vendor.6c48bfff.js";import{g as c}from"./gen-code.94dbf386.js";import{r as f}from"./index.898e7603.js";import{_ as A}from"./main.9982799e.js";import{_ as v}from"./main.13091280.js";import{C as V}from"./console.2352fe43.js";import{T as d}from"./tree-data.573f3188.js";const h={class:"www-doc"},y={class:"www-doc-left"},E={class:"www-doc-right","sm-visible":"false"},$=_({setup(b){const a=w({s:"",d:[]});V.noble("TreeData:",d);const s={parts:[{template:`\u5355\u9009\u7ED3\u679C\u9884\u89C8\uFF1A{{state.s}}
`,type:"blockquote",nowrap:!0},{title:"\u5355\u9009",nowrap:!1,type:"card",id:"nav_1",template:'    <f-tree :tree="TreeData" v-model="state.s"></f-tree>',script:`import { FTree } from '@phoeon/free-ui'
import { reactive } from 'vue'

const TreeData = {/** \u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B **/}
const state = reactive({
    s:''
})`},{template:`\u591A\u9009\u7ED3\u679C\u9884\u89C8\uFF1A{{state.d}}
`,type:"blockquote",nowrap:!0},{title:"\u591A\u9009",nowrap:!1,type:"card",id:"nav_3",template:'    <f-tree :tree="TreeData" v-model="state.d"></f-tree>',script:`import { FTree } from '@phoeon/free-ui'
import { reactive } from 'vue'

const TreeData = {/** \u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B **/}
const state = reactive({
    d:[]
})`}],title:"\u6811\u7ED3\u6784",root:!1,script:`import { FTree } from '@phoeon/free-ui'
import { reactive } from 'vue'
import Console from '@phoeon/free-ui/shared/console'
import { TreeData } from '@demo/data/tree-data'

const state = reactive({
    s:'',
    d:[]
})
Console.noble('TreeData:',TreeData)`,anchors:[{text:"\u5355\u9009",value:"nav_1"},{text:"\u591A\u9009",value:"nav_3"}],anchor:"nav_1"},m=F(s.anchor);return(j,o)=>{const i=C("demo-card");return T(),D("div",h,[p("div",y,[t(e(v),{type:"primary"},{default:r(()=>[n("\u5355\u9009\u7ED3\u679C\u9884\u89C8\uFF1A"+l(e(a).s),1)]),_:1}),t(i,{id:"nav_1",title:"\u5355\u9009"},{code:r(()=>[n(l(e(c)(s.parts[1])),1)]),default:r(()=>[t(e(f),{tree:e(d),modelValue:e(a).s,"onUpdate:modelValue":o[0]||(o[0]=u=>e(a).s=u)},null,8,["tree","modelValue"])]),_:1}),t(e(v),{type:"primary"},{default:r(()=>[n("\u591A\u9009\u7ED3\u679C\u9884\u89C8\uFF1A"+l(e(a).d),1)]),_:1}),t(i,{id:"nav_3",title:"\u591A\u9009"},{code:r(()=>[n(l(e(c)(s.parts[3])),1)]),default:r(()=>[t(e(f),{tree:e(d),modelValue:e(a).d,"onUpdate:modelValue":o[1]||(o[1]=u=>e(a).d=u)},null,8,["tree","modelValue"])]),_:1})]),p("div",E,[t(e(A),{class:"www-anchors",modelValue:m.value,"onUpdate:modelValue":o[2]||(o[2]=u=>m.value=u),dataSource:s.anchors},null,8,["modelValue","dataSource"])])])}}});export{$ as default};
