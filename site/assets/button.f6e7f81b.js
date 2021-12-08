import{d as m,k as h,I as c,a as g,f as i,l as e,w as t,u as n,o as w,A as o,p as d}from"./vendor.adc10202.js";import{g as f}from"./gen-code.94dbf386.js";import{_ as u,a as D}from"./index.513ab18a.js";import{_ as a}from"./group.c7619c52.js";import{_ as v}from"./main.90288d63.js";const M={class:"www-doc"},C={class:"www-doc-left"},B=o("Default"),F=o("info"),E=o("Success"),I=o("Danger"),q=o("Warning"),A=o("noble"),x=o("Default"),k=o("Primary"),S=o("Success"),j=o("Danger"),L=o("Warning"),W=i("br",null,null,-1),P=o("Default"),z=o("Primary"),V=o("Success"),N=o("Danger"),$=o("Warning"),G=i("br",null,null,-1),T=o("Default"),U=o("Primary"),H=o("Success"),J=o("Danger"),K=o("Warning"),O=o("Block"),Q=o("Block"),R=o("Default"),X=o("Default"),Y=o("Mini"),Z=o("Small"),tt=o("Normal"),et=o("Large"),nt=o("Icon"),ot=o("Dropdown"),ut=o("Default"),at=o("outline"),lt=o("transparent"),dt=o("Default"),st=i("br",null,null,-1),rt=o("Icon"),ft=o("Dropdown"),it=o("Default"),pt=o("outline"),_t=o("transparent"),ct=o("Default"),bt=o("Icon"),yt=o("Dropdown"),mt=o("Default"),ht=o("outline"),gt=o("transparent"),wt=i("br",null,null,-1),Dt=o("Icon"),vt=o("Dropdown"),Mt=o("Default"),Ct=o("outline"),Bt=o("transparent"),Ft=o("Loading"),Et=o("Loading"),It=o("Loading"),qt=o("Loading"),At=o("\u6D4F\u89C8\u5668"),xt=o("\u6D4F\u89C8\u5668"),kt=o("\u6D4F\u89C8\u5668"),St=o("\u6D4F\u89C8\u5668"),jt=i("br",null,null,-1),Lt=o("1"),Wt=o("2"),Pt=o("3"),zt=o("4"),Vt=o("5"),Nt=i("br",null,null,-1),$t=o("1"),Gt=o("2"),Tt=o("3"),Ut=o("4"),Ht=o("5"),Jt={class:"www-doc-right","sm-visible":"false"},te=m({setup(Kt){const{CustomIcon:s}=D,l={parts:[{title:"\u4E0D\u540C\u989C\u8272",nowrap:!1,type:"card",id:"nav_0",template:`    <f-button-group>
        <f-button>Default</f-button>
        <f-button type="info">info</f-button>
        <f-button type="success">Success</f-button>
        <f-button type="danger">Danger</f-button>
        <f-button type="warning">Warning</f-button>
        <f-button type="noble">noble</f-button>
    </f-button-group>`},{title:"\u4E0D\u540C\u586B\u5145",nowrap:!1,type:"card",id:"nav_1",template:`    <f-button-group>
        <f-button fillMode="outline">Default</f-button>
        <f-button fillMode="outline" type="primary">Primary</f-button>
        <f-button fillMode="outline" type="success">Success</f-button>
        <f-button fillMode="outline" type="danger">Danger</f-button>
        <f-button fillMode="outline" type="warning">Warning</f-button>
    </f-button-group>
    <br/>
    <f-button-group>
        <f-button fillMode="none">Default</f-button>
        <f-button fillMode="none" type="primary">Primary</f-button>
        <f-button fillMode="none" type="success">Success</f-button>
        <f-button fillMode="none" type="danger">Danger</f-button>
        <f-button fillMode="none" type="warning">Warning</f-button>
    </f-button-group>
    <br/>
    <f-button-group>
        <f-button fillMode="dashed">Default</f-button>
        <f-button fillMode="dashed" type="primary">Primary</f-button>
        <f-button fillMode="dashed" type="success">Success</f-button>
        <f-button fillMode="dashed" type="danger">Danger</f-button>
        <f-button fillMode="dashed" type="warning">Warning</f-button>
    </f-button-group>`},{title:"\u5757\u7EA7",nowrap:!1,type:"card",id:"nav_2",template:`    <f-button-group>
        <f-button type="info" :block="true">Block</f-button>
        <f-button type="success" :block="true">Block</f-button>
        <f-button type="danger" :block="true">Default</f-button>
        <f-button type="normal" :block="true">Default</f-button>
    </f-button-group>`},{title:"\u4E0D\u540C\u5C3A\u5BF8",nowrap:!1,type:"card",id:"nav_3",template:`    <f-button-group>
        <f-button type="primary" size="mini">Mini</f-button>
        <f-button type="primary" size="small">Small</f-button>
        <f-button type="primary" >Normal</f-button>
        <f-button type="primary" size="large">Large</f-button>
    </f-button-group>`},{title:"\u4E0D\u540C\u72B6\u6001",nowrap:!1,type:"card",id:"nav_4",template:`    <f-button-group>
        <f-button type="normal"><template v-slot:leftIcon><custom-icon name="filter"></custom-icon></template>Icon</f-button>
        <f-button type="normal" dropdown="down">Dropdown</f-button>
        <f-button type="normal">Default</f-button>
        <f-button type="normal" fillMode="outline">outline</f-button>
        <f-button type="normal" fillMode="none">transparent</f-button>
        <f-button type="normal" :disabled="true">Default</f-button>
    </f-button-group>
    <br />
    <f-button-group>
        <f-button type="primary"><template v-slot:leftIcon><custom-icon name="filter"></custom-icon></template>Icon</f-button>
        <f-button type="primary" dropdown="down">Dropdown</f-button>
        <f-button type="primary">Default</f-button>
        <f-button type="primary" fillMode="outline">outline</f-button>
        <f-button type="primary" fillMode="none">transparent</f-button>
        <f-button type="primary" :disabled="true">Default</f-button>
    </f-button-group>`},{title:"\u7981\u6B62\u72B6\u6001",nowrap:!1,type:"card",id:"nav_5",template:`    <f-button-group>
        <f-button disabled type="normal"><template v-slot:leftIcon><custom-icon name="filter"></custom-icon></template>Icon</f-button>
        <f-button disabled type="normal" dropdown="down">Dropdown</f-button>
        <f-button disabled type="normal">Default</f-button>
        <f-button disabled type="normal" fillMode="outline">outline</f-button>
        <f-button disabled type="normal" fillMode="none">transparent</f-button>
    </f-button-group>
    <br />
    <f-button-group>
        <f-button disabled type="primary"><template v-slot:leftIcon><custom-icon name="filter"></custom-icon></template>Icon</f-button>
        <f-button disabled type="primary" dropdown="down">Dropdown</f-button>
        <f-button disabled type="primary">Default</f-button>
        <f-button disabled type="primary" fillMode="outline">outline</f-button>
        <f-button disabled type="primary" fillMode="none">transparent</f-button>
    </f-button-group>`},{title:"loading\u72B6\u6001",nowrap:!1,type:"card",id:"nav_6",template:`    <f-button-group>
        <f-button :loading="true" disabled type="primary">Loading</f-button>
        <f-button :loading="true" type="primary">Loading</f-button>
        <f-button :loading="true">Loading</f-button>
        <f-button :loading="true" disabled>Loading</f-button>
    </f-button-group>`},{title:"\u4E0B\u62C9\u5BFC\u822A\u6309\u94AE",nowrap:!1,type:"card",id:"nav_7",template:`    <f-button-group>
        <f-button dropdown="up">\u6D4F\u89C8\u5668</f-button>
        <f-button dropdown="down">\u6D4F\u89C8\u5668</f-button>
        <f-button type="primary" dropdown="up">\u6D4F\u89C8\u5668</f-button>
        <f-button type="primary" dropdown="down">\u6D4F\u89C8\u5668</f-button>
    </f-button-group>`},{title:"\u65B9\u5F62\u6309\u94AE",nowrap:!1,type:"card",id:"nav_8",template:`    <f-button-group justify="center">
        <f-button shape="square" type="primary"><custom-icon name="firefox"/></f-button>
        <f-button shape="square" type="success"><custom-icon name="opera"/></f-button>
        <f-button shape="square"><custom-icon name="chrome"/></f-button>
        <f-button shape="square" type="danger"><custom-icon name="internet-explorer"/></f-button>
        <f-button shape="square" type="warning"><custom-icon name="safari"/></f-button>
    </f-button-group>
    <br/>
    <f-button-group justify="center">
        <f-button shape="square" type="primary">1</f-button>
        <f-button shape="square" type="success">2</f-button>
        <f-button shape="square">3</f-button>
        <f-button shape="square" type="danger">4</f-button>
        <f-button shape="square" type="warning">5</f-button>
    </f-button-group>
    <br/>
    <f-button-group justify="center">
        <f-button shape="circle" type="primary">1</f-button>
        <f-button shape="circle" type="success">2</f-button>
        <f-button shape="circle">3</f-button>
        <f-button shape="circle" type="danger">4</f-button>
        <f-button shape="circle" type="warning">5</f-button>
    </f-button-group>`},{title:"\u57FA\u672C\u7528\u6CD5",type:"code",lang:"typescript",code:`import { FButtonGroup, FButton, FIcon } from '@phoeon/free-ui'
const { CustomIcon } = FIcon`,id:"nav_9"}],title:"\u6309\u94AE",icon:"gg",root:!1,script:`import { FButtonGroup, FButton, FIcon } from '@phoeon/free-ui'
const { CustomIcon } = FIcon`,anchors:[{text:"\u4E0D\u540C\u989C\u8272",value:"nav_0"},{text:"\u4E0D\u540C\u586B\u5145",value:"nav_1"},{text:"\u5757\u7EA7",value:"nav_2"},{text:"\u4E0D\u540C\u5C3A\u5BF8",value:"nav_3"},{text:"\u4E0D\u540C\u72B6\u6001",value:"nav_4"},{text:"\u7981\u6B62\u72B6\u6001",value:"nav_5"},{text:"loading\u72B6\u6001",value:"nav_6"},{text:"\u4E0B\u62C9\u5BFC\u822A\u6309\u94AE",value:"nav_7"},{text:"\u65B9\u5F62\u6309\u94AE",value:"nav_8"},{text:"\u57FA\u672C\u7528\u6CD5",value:"nav_9"}],anchor:"nav_0"},p=h(l.anchor);return(Ot,_)=>{const r=c("demo-card"),b=c("ph-pretty");return w(),g("div",M,[i("div",C,[e(r,{id:"nav_0",title:"\u4E0D\u540C\u989C\u8272"},{code:t(()=>[o(d(n(f)(l.parts[0])),1)]),default:t(()=>[e(n(a),null,{default:t(()=>[e(n(u),null,{default:t(()=>[B]),_:1}),e(n(u),{type:"info"},{default:t(()=>[F]),_:1}),e(n(u),{type:"success"},{default:t(()=>[E]),_:1}),e(n(u),{type:"danger"},{default:t(()=>[I]),_:1}),e(n(u),{type:"warning"},{default:t(()=>[q]),_:1}),e(n(u),{type:"noble"},{default:t(()=>[A]),_:1})]),_:1})]),_:1}),e(r,{id:"nav_1",title:"\u4E0D\u540C\u586B\u5145"},{code:t(()=>[o(d(n(f)(l.parts[1])),1)]),default:t(()=>[e(n(a),null,{default:t(()=>[e(n(u),{fillMode:"outline"},{default:t(()=>[x]),_:1}),e(n(u),{fillMode:"outline",type:"primary"},{default:t(()=>[k]),_:1}),e(n(u),{fillMode:"outline",type:"success"},{default:t(()=>[S]),_:1}),e(n(u),{fillMode:"outline",type:"danger"},{default:t(()=>[j]),_:1}),e(n(u),{fillMode:"outline",type:"warning"},{default:t(()=>[L]),_:1})]),_:1}),W,e(n(a),null,{default:t(()=>[e(n(u),{fillMode:"none"},{default:t(()=>[P]),_:1}),e(n(u),{fillMode:"none",type:"primary"},{default:t(()=>[z]),_:1}),e(n(u),{fillMode:"none",type:"success"},{default:t(()=>[V]),_:1}),e(n(u),{fillMode:"none",type:"danger"},{default:t(()=>[N]),_:1}),e(n(u),{fillMode:"none",type:"warning"},{default:t(()=>[$]),_:1})]),_:1}),G,e(n(a),null,{default:t(()=>[e(n(u),{fillMode:"dashed"},{default:t(()=>[T]),_:1}),e(n(u),{fillMode:"dashed",type:"primary"},{default:t(()=>[U]),_:1}),e(n(u),{fillMode:"dashed",type:"success"},{default:t(()=>[H]),_:1}),e(n(u),{fillMode:"dashed",type:"danger"},{default:t(()=>[J]),_:1}),e(n(u),{fillMode:"dashed",type:"warning"},{default:t(()=>[K]),_:1})]),_:1})]),_:1}),e(r,{id:"nav_2",title:"\u5757\u7EA7"},{code:t(()=>[o(d(n(f)(l.parts[2])),1)]),default:t(()=>[e(n(a),null,{default:t(()=>[e(n(u),{type:"info",block:!0},{default:t(()=>[O]),_:1}),e(n(u),{type:"success",block:!0},{default:t(()=>[Q]),_:1}),e(n(u),{type:"danger",block:!0},{default:t(()=>[R]),_:1}),e(n(u),{type:"normal",block:!0},{default:t(()=>[X]),_:1})]),_:1})]),_:1}),e(r,{id:"nav_3",title:"\u4E0D\u540C\u5C3A\u5BF8"},{code:t(()=>[o(d(n(f)(l.parts[3])),1)]),default:t(()=>[e(n(a),null,{default:t(()=>[e(n(u),{type:"primary",size:"mini"},{default:t(()=>[Y]),_:1}),e(n(u),{type:"primary",size:"small"},{default:t(()=>[Z]),_:1}),e(n(u),{type:"primary"},{default:t(()=>[tt]),_:1}),e(n(u),{type:"primary",size:"large"},{default:t(()=>[et]),_:1})]),_:1})]),_:1}),e(r,{id:"nav_4",title:"\u4E0D\u540C\u72B6\u6001"},{code:t(()=>[o(d(n(f)(l.parts[4])),1)]),default:t(()=>[e(n(a),null,{default:t(()=>[e(n(u),{type:"normal"},{leftIcon:t(()=>[e(n(s),{name:"filter"})]),default:t(()=>[nt]),_:1}),e(n(u),{type:"normal",dropdown:"down"},{default:t(()=>[ot]),_:1}),e(n(u),{type:"normal"},{default:t(()=>[ut]),_:1}),e(n(u),{type:"normal",fillMode:"outline"},{default:t(()=>[at]),_:1}),e(n(u),{type:"normal",fillMode:"none"},{default:t(()=>[lt]),_:1}),e(n(u),{type:"normal",disabled:!0},{default:t(()=>[dt]),_:1})]),_:1}),st,e(n(a),null,{default:t(()=>[e(n(u),{type:"primary"},{leftIcon:t(()=>[e(n(s),{name:"filter"})]),default:t(()=>[rt]),_:1}),e(n(u),{type:"primary",dropdown:"down"},{default:t(()=>[ft]),_:1}),e(n(u),{type:"primary"},{default:t(()=>[it]),_:1}),e(n(u),{type:"primary",fillMode:"outline"},{default:t(()=>[pt]),_:1}),e(n(u),{type:"primary",fillMode:"none"},{default:t(()=>[_t]),_:1}),e(n(u),{type:"primary",disabled:!0},{default:t(()=>[ct]),_:1})]),_:1})]),_:1}),e(r,{id:"nav_5",title:"\u7981\u6B62\u72B6\u6001"},{code:t(()=>[o(d(n(f)(l.parts[5])),1)]),default:t(()=>[e(n(a),null,{default:t(()=>[e(n(u),{disabled:"",type:"normal"},{leftIcon:t(()=>[e(n(s),{name:"filter"})]),default:t(()=>[bt]),_:1}),e(n(u),{disabled:"",type:"normal",dropdown:"down"},{default:t(()=>[yt]),_:1}),e(n(u),{disabled:"",type:"normal"},{default:t(()=>[mt]),_:1}),e(n(u),{disabled:"",type:"normal",fillMode:"outline"},{default:t(()=>[ht]),_:1}),e(n(u),{disabled:"",type:"normal",fillMode:"none"},{default:t(()=>[gt]),_:1})]),_:1}),wt,e(n(a),null,{default:t(()=>[e(n(u),{disabled:"",type:"primary"},{leftIcon:t(()=>[e(n(s),{name:"filter"})]),default:t(()=>[Dt]),_:1}),e(n(u),{disabled:"",type:"primary",dropdown:"down"},{default:t(()=>[vt]),_:1}),e(n(u),{disabled:"",type:"primary"},{default:t(()=>[Mt]),_:1}),e(n(u),{disabled:"",type:"primary",fillMode:"outline"},{default:t(()=>[Ct]),_:1}),e(n(u),{disabled:"",type:"primary",fillMode:"none"},{default:t(()=>[Bt]),_:1})]),_:1})]),_:1}),e(r,{id:"nav_6",title:"loading\u72B6\u6001"},{code:t(()=>[o(d(n(f)(l.parts[6])),1)]),default:t(()=>[e(n(a),null,{default:t(()=>[e(n(u),{loading:!0,disabled:"",type:"primary"},{default:t(()=>[Ft]),_:1}),e(n(u),{loading:!0,type:"primary"},{default:t(()=>[Et]),_:1}),e(n(u),{loading:!0},{default:t(()=>[It]),_:1}),e(n(u),{loading:!0,disabled:""},{default:t(()=>[qt]),_:1})]),_:1})]),_:1}),e(r,{id:"nav_7",title:"\u4E0B\u62C9\u5BFC\u822A\u6309\u94AE"},{code:t(()=>[o(d(n(f)(l.parts[7])),1)]),default:t(()=>[e(n(a),null,{default:t(()=>[e(n(u),{dropdown:"up"},{default:t(()=>[At]),_:1}),e(n(u),{dropdown:"down"},{default:t(()=>[xt]),_:1}),e(n(u),{type:"primary",dropdown:"up"},{default:t(()=>[kt]),_:1}),e(n(u),{type:"primary",dropdown:"down"},{default:t(()=>[St]),_:1})]),_:1})]),_:1}),e(r,{id:"nav_8",title:"\u65B9\u5F62\u6309\u94AE"},{code:t(()=>[o(d(n(f)(l.parts[8])),1)]),default:t(()=>[e(n(a),{justify:"center"},{default:t(()=>[e(n(u),{shape:"square",type:"primary"},{default:t(()=>[e(n(s),{name:"firefox"})]),_:1}),e(n(u),{shape:"square",type:"success"},{default:t(()=>[e(n(s),{name:"opera"})]),_:1}),e(n(u),{shape:"square"},{default:t(()=>[e(n(s),{name:"chrome"})]),_:1}),e(n(u),{shape:"square",type:"danger"},{default:t(()=>[e(n(s),{name:"internet-explorer"})]),_:1}),e(n(u),{shape:"square",type:"warning"},{default:t(()=>[e(n(s),{name:"safari"})]),_:1})]),_:1}),jt,e(n(a),{justify:"center"},{default:t(()=>[e(n(u),{shape:"square",type:"primary"},{default:t(()=>[Lt]),_:1}),e(n(u),{shape:"square",type:"success"},{default:t(()=>[Wt]),_:1}),e(n(u),{shape:"square"},{default:t(()=>[Pt]),_:1}),e(n(u),{shape:"square",type:"danger"},{default:t(()=>[zt]),_:1}),e(n(u),{shape:"square",type:"warning"},{default:t(()=>[Vt]),_:1})]),_:1}),Nt,e(n(a),{justify:"center"},{default:t(()=>[e(n(u),{shape:"circle",type:"primary"},{default:t(()=>[$t]),_:1}),e(n(u),{shape:"circle",type:"success"},{default:t(()=>[Gt]),_:1}),e(n(u),{shape:"circle"},{default:t(()=>[Tt]),_:1}),e(n(u),{shape:"circle",type:"danger"},{default:t(()=>[Ut]),_:1}),e(n(u),{shape:"circle",type:"warning"},{default:t(()=>[Ht]),_:1})]),_:1})]),_:1}),e(b,{id:"nav_9",title:"\u57FA\u672C\u7528\u6CD5",lang:"typescript"},{default:t(()=>[o(d(l.parts[9].code),1)]),_:1})]),i("div",Jt,[e(n(v),{class:"www-anchors",modelValue:p.value,"onUpdate:modelValue":_[0]||(_[0]=y=>p.value=y),dataSource:l.anchors},null,8,["modelValue","dataSource"])])])}}});export{te as default};
