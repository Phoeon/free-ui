import{d as _,r as k,k as E,I as y,a as w,f as g,l as o,w as e,u as t,o as D,A as a,p as m}from"./vendor.adc10202.js";import{g as B}from"./gen-code.94dbf386.js";import{_ as i,B as p,C as A,D as b}from"./index.513ab18a.js";import{_ as C}from"./group.c7619c52.js";import{_ as L}from"./main.90288d63.js";import{_ as S}from"./main.d9d1ef14.js";const $={class:"www-doc"},V={class:"www-doc-left"},G=a("\u6253\u5F00\u9ED8\u8BA4"),x=a("box"),I=a("\u80CC\u666F\u900F\u660E"),j=a("\u81EA\u5B9A\u4E49\u80CC\u666F"),O=a("\u5012\u8BA1\u65F63s"),U=a("\u5168\u5C40\u52A0\u8F7D\u7686\u4E3A\u5355\u4F8B\u6A21\u5F0F\uFF0C\u4E14\u53EA\u53EF\u901A\u8FC7js\u5524\u8D77 "),z=a("\u6253\u5F00\u9ED8\u8BA4"),T=a("box"),N=a("\u80CC\u666F\u900F\u660E"),q=a("\u81EA\u5B9A\u4E49\u80CC\u666F"),M=a("\u5012\u8BA1\u65F63s"),P=a("\u6253\u5F00\u9ED8\u8BA4"),H=a("\u81EA\u5B9A\u4E49\u80CC\u666F"),J=a("\u81EA\u5B9A\u4E49\u9AD8\u5EA6"),K=a("\u5F00\u59CBloading"),Q=a("\u7ED3\u675Floading"),R={class:"www-doc-right","sm-visible":"false"},un=_({setup(W){const l=k({ld1:!1,ld2:!1,ld3:!1,ld4:!1,ld5:!1}),s=d=>{A.start(d),!(d==null?void 0:d.countdown)&&setTimeout(()=>A.end(),2e3)},f=d=>{b.start(d)},v=()=>{b.end()},r={parts:[{title:"\u6848\u4F8B\u5C55\u793A-\u5C40\u90E8spin\u52A0\u8F7D",nowrap:!1,type:"card",id:"nav_0",template:`    <f-button-group>
        <f-button type="info" @click="state.ld1=true">\u6253\u5F00\u9ED8\u8BA4</f-button>
        <f-button type="success" @click="state.ld2=true">box</f-button>
        <f-button type="danger" @click="state.ld3=true">\u80CC\u666F\u900F\u660E</f-button>
        <f-button type="warning" @click="state.ld4=true">\u81EA\u5B9A\u4E49\u80CC\u666F</f-button>
        <f-button type="noble" @click="state.ld5=true">\u5012\u8BA1\u65F63s</f-button>
    </f-button-group>
    <f-loading-spin v-model="state.ld1" @click="state.ld1 = false"/>
    <f-loading-spin v-model="state.ld2" @click="state.ld2 = false" showBox="always" />
    <f-loading-spin v-model="state.ld3" @click="state.ld3 = false" :alpha="true" />
    <f-loading-spin v-model="state.ld4" @click="state.ld4 = false" bg="#ff000033" />
    <f-loading-spin v-model="state.ld5" :countdown="3" />`,script:`import { 
    FButton,
    FButtonGroup,
    FLoadingSpin } from '@phoeon/free-ui'
import { reactive } from 'vue'
const state = reactive({
    ld1:false,
    ld2:false,
    ld3:false,
    ld4:false,
    ld5:false,
})`},{template:`\u5168\u5C40\u52A0\u8F7D\u7686\u4E3A\u5355\u4F8B\u6A21\u5F0F\uFF0C\u4E14\u53EA\u53EF\u901A\u8FC7js\u5524\u8D77
`,type:"blockquote",nowrap:!0},{title:"\u6848\u4F8B\u5C55\u793A-\u5168\u5C40spin\u52A0\u8F7D",nowrap:!1,type:"card",id:"nav_2",template:`    <f-button-group :container="true">
        <f-button type="info" @click="openSpin()">\u6253\u5F00\u9ED8\u8BA4</f-button>
        <f-button type="success" @click="openSpin({showBox:'always'})">box</f-button>
        <f-button type="danger" @click="openSpin({alpha:true})">\u80CC\u666F\u900F\u660E</f-button>
        <f-button type="warning" @click="openSpin({bg:'#ff000033'})">\u81EA\u5B9A\u4E49\u80CC\u666F</f-button>
        <f-button type="noble" @click="openSpin({countdown:3})">\u5012\u8BA1\u65F63s</f-button>
    </f-button-group>`,script:`import { FButton,
 FButtonGroup,
 FGLoadingSpin,
 IFLoadingSpinOption,
} from '@phoeon/free-ui'
const openSpin = (opt?:IFLoadingSpinOption)=>{
    FGLoadingSpin.start(opt)
    if(opt?.countdown)return
    setTimeout(()=>FGLoadingSpin.end(),2000)
}`},{title:"\u6848\u4F8B\u5C55\u793A-\u5168\u5C40bar\u52A0\u8F7D",nowrap:!1,type:"card",id:"nav_3",template:`    <f-button-group :container="true">
        <f-button type="info" @click="openBar()">\u6253\u5F00\u9ED8\u8BA4</f-button>
        <f-button type="danger" @click="openBar({bg:'#FF00FF'})">\u81EA\u5B9A\u4E49\u80CC\u666F</f-button>
        <f-button type="warning" @click="openBar({size:8})">\u81EA\u5B9A\u4E49\u9AD8\u5EA6</f-button>
        <f-button type="success" @click="openBar({size:8})">\u5F00\u59CBloading</f-button>
        <f-button type="noble" @click="endBar()">\u7ED3\u675Floading</f-button>
    </f-button-group>`,script:`import { FButton,
 FButtonGroup,
 FGLoadingBar,
 IFLoadingBarOption } from '@phoeon/free-ui'
const openBar = (opt?:IFLoadingBarOption)=>{
    FGLoadingBar.start(opt)
}
const endBar = ()=>{
    FGLoadingBar.end()
}`}],title:"\u52A0\u8F7D\u52A8\u753B",root:!1,script:`import { FButton,
 FButtonGroup,
 FLoadingSpin ,
 FGLoading,
 FGLoadingSpin,
 FGLoadingBar,
 IFLoadingSpinOption,
 IFLoadingBarOption } from '@phoeon/free-ui'
import { reactive } from 'vue'

const state = reactive({
    ld1:false,
    ld2:false,
    ld3:false,
    ld4:false,
    ld5:false,
})
const openSpin = (opt?:IFLoadingSpinOption)=>{
    FGLoadingSpin.start(opt)
    if(opt?.countdown)return
    setTimeout(()=>FGLoadingSpin.end(),2000)
}
const openBar = (opt?:IFLoadingBarOption)=>{
    FGLoadingBar.start(opt)
}
const endBar = ()=>{
    FGLoadingBar.end()
}`,anchors:[{text:"\u6848\u4F8B\u5C55\u793A-\u5C40\u90E8spin\u52A0\u8F7D",value:"nav_0"},{text:"\u6848\u4F8B\u5C55\u793A-\u5168\u5C40spin\u52A0\u8F7D",value:"nav_2"},{text:"\u6848\u4F8B\u5C55\u793A-\u5168\u5C40bar\u52A0\u8F7D",value:"nav_3"}],anchor:"nav_0"},c=E(r.anchor);return(d,n)=>{const F=y("demo-card");return D(),w("div",$,[g("div",V,[o(F,{id:"nav_0",title:"\u6848\u4F8B\u5C55\u793A-\u5C40\u90E8spin\u52A0\u8F7D"},{code:e(()=>[a(m(t(B)(r.parts[0])),1)]),default:e(()=>[o(t(C),null,{default:e(()=>[o(t(i),{type:"info",onClick:n[0]||(n[0]=u=>t(l).ld1=!0)},{default:e(()=>[G]),_:1}),o(t(i),{type:"success",onClick:n[1]||(n[1]=u=>t(l).ld2=!0)},{default:e(()=>[x]),_:1}),o(t(i),{type:"danger",onClick:n[2]||(n[2]=u=>t(l).ld3=!0)},{default:e(()=>[I]),_:1}),o(t(i),{type:"warning",onClick:n[3]||(n[3]=u=>t(l).ld4=!0)},{default:e(()=>[j]),_:1}),o(t(i),{type:"noble",onClick:n[4]||(n[4]=u=>t(l).ld5=!0)},{default:e(()=>[O]),_:1})]),_:1}),o(t(p),{modelValue:t(l).ld1,"onUpdate:modelValue":n[5]||(n[5]=u=>t(l).ld1=u),onClick:n[6]||(n[6]=u=>t(l).ld1=!1)},null,8,["modelValue"]),o(t(p),{modelValue:t(l).ld2,"onUpdate:modelValue":n[7]||(n[7]=u=>t(l).ld2=u),onClick:n[8]||(n[8]=u=>t(l).ld2=!1),showBox:"always"},null,8,["modelValue"]),o(t(p),{modelValue:t(l).ld3,"onUpdate:modelValue":n[9]||(n[9]=u=>t(l).ld3=u),onClick:n[10]||(n[10]=u=>t(l).ld3=!1),alpha:!0},null,8,["modelValue"]),o(t(p),{modelValue:t(l).ld4,"onUpdate:modelValue":n[11]||(n[11]=u=>t(l).ld4=u),onClick:n[12]||(n[12]=u=>t(l).ld4=!1),bg:"#ff000033"},null,8,["modelValue"]),o(t(p),{modelValue:t(l).ld5,"onUpdate:modelValue":n[13]||(n[13]=u=>t(l).ld5=u),countdown:3},null,8,["modelValue"])]),_:1}),o(t(S),{type:"primary"},{default:e(()=>[U]),_:1}),o(F,{id:"nav_2",title:"\u6848\u4F8B\u5C55\u793A-\u5168\u5C40spin\u52A0\u8F7D"},{code:e(()=>[a(m(t(B)(r.parts[2])),1)]),default:e(()=>[o(t(C),{container:!0},{default:e(()=>[o(t(i),{type:"info",onClick:n[14]||(n[14]=u=>s())},{default:e(()=>[z]),_:1}),o(t(i),{type:"success",onClick:n[15]||(n[15]=u=>s({showBox:"always"}))},{default:e(()=>[T]),_:1}),o(t(i),{type:"danger",onClick:n[16]||(n[16]=u=>s({alpha:!0}))},{default:e(()=>[N]),_:1}),o(t(i),{type:"warning",onClick:n[17]||(n[17]=u=>s({bg:"#ff000033"}))},{default:e(()=>[q]),_:1}),o(t(i),{type:"noble",onClick:n[18]||(n[18]=u=>s({countdown:3}))},{default:e(()=>[M]),_:1})]),_:1})]),_:1}),o(F,{id:"nav_3",title:"\u6848\u4F8B\u5C55\u793A-\u5168\u5C40bar\u52A0\u8F7D"},{code:e(()=>[a(m(t(B)(r.parts[3])),1)]),default:e(()=>[o(t(C),{container:!0},{default:e(()=>[o(t(i),{type:"info",onClick:n[19]||(n[19]=u=>f())},{default:e(()=>[P]),_:1}),o(t(i),{type:"danger",onClick:n[20]||(n[20]=u=>f({bg:"#FF00FF"}))},{default:e(()=>[H]),_:1}),o(t(i),{type:"warning",onClick:n[21]||(n[21]=u=>f({size:8}))},{default:e(()=>[J]),_:1}),o(t(i),{type:"success",onClick:n[22]||(n[22]=u=>f({size:8}))},{default:e(()=>[K]),_:1}),o(t(i),{type:"noble",onClick:n[23]||(n[23]=u=>v())},{default:e(()=>[Q]),_:1})]),_:1})]),_:1})]),g("div",R,[o(t(L),{class:"www-anchors",modelValue:c.value,"onUpdate:modelValue":n[24]||(n[24]=u=>c.value=u),dataSource:r.anchors},null,8,["modelValue","dataSource"])])])}}});export{un as default};
