import{d as ee,k as ne,I as v,a as ie,f as t,l as e,w as i,u as n,o as te,A as c,p as u}from"./vendor.6c48bfff.js";import{g as l}from"./gen-code.94dbf386.js";import{F as ae}from"./index.898e7603.js";import{_ as oe}from"./main.9982799e.js";const ce={class:"www-doc"},ue={class:"www-doc-left"},re=t("h2",{id:"nav_0",class:"www-title"},"\u5185\u7F6Eicon",-1),le={class:"ph-block"},se={class:"ph-block"},de={class:"ph-block"},pe={class:"ph-block"},me={class:"ph-block"},fe=t("h2",{id:"nav_6",class:"www-title"},"\u81EA\u5B9A\u4E49icon\u3010\u5982\u4E0B\u6848\u4F8B\u662F\u4EE5font-awesome\u3011\u4E3E\u4F8B",-1),Ee={class:"ph-block"},_e={class:"www-doc-right","sm-visible":"false"},xe=ee({setup(he){const{Backtop:C,Circle:w,CircleRadio:F,CircleDot:B,CircleTick:k,CircleExclam:m,CircleTimes:x,CircleWarning:g,CircleInfo:S,CircleSuccess:b,CircleDanger:A,Square:q,SquareHalfCheck:f,SquareCheck:T,SquareMinus:ve,SquarePlus:D,SquareTick:y,LoadingSpin:M,LoadingBounce:I,Minus:P,Plus:L,Tick:N,Times:V,Time:j,Date:H,Datetime:R,Exclam:U,Caret:d,Arrow:o,Navicon:W,Search:$,Theme:z,Ellipsis:G,Sun:J,Moon:K,Mobile:O,Sort:p,Tselect:Q,Cselect:X,Eye:E,CustomIcon:s}=ae,a={parts:[{title:"\u5185\u7F6Eicon",template:"\u5185\u7F6Eicon",type:"h2",nowrap:!0,id:"nav_0"},{title:"\u57FA\u672C",nowrap:!1,type:"card",id:"nav_1",template:`    <div class="ph-block">
        <backtop/>
        <minus/>
        <plus/>
        <tick/>
        <times/>
        <exclam/>
        <Time/>
        <date/>
        <datetime/>
        <sun/>
        <moon/>
        <mobile/>
        <tselect/>
        <cselect/>
        <sort/>
        <eye :open="true"/>
        <eye :open="false"/>
        <sort direction="up"/>
        <sort direction="down"/>

        <caret direction="up"/>
        <caret direction="down"/>
        <caret direction="left"/>
        <caret direction="right"/>

        <arrow direction="up"/>
        <arrow direction="down"/>
        <arrow direction="left"/>
        <arrow direction="right"/>

        <arrow :double="true" direction="up"/>
        <arrow :double="true" direction="down"/>
        <arrow :double="true" direction="left"/>
        <arrow :double="true" direction="right"/>

        <navicon/>
        <search/>
        <theme/>
        <ellipsis/>
    </div>`},{title:"square",nowrap:!1,type:"card",id:"nav_2",template:`    <div class="ph-block">
        <square-plus/>
        <square-tick/>

        <square/>
        <square-check/>
        <square-half-check/>
        <square-half-check :outline="true"/>

    </div>`},{title:"circle",nowrap:!1,type:"card",id:"nav_3",template:`<div class="ph-block">
    <circle-dot/>
    <circle-tick/>
    <circle-exclam :outline="true"/>
    <circle-exclam/>
    <circle-times/>

    <Circle/>
    <circle-radio/>

</div>`},{title:"\u72B6\u6001\u56FE\u6807",nowrap:!1,type:"card",id:"nav_4",template:`<div class="ph-block">
    <circle-success />
    <circle-info />
    <circle-danger />
    <circle-warning />
</div>`},{title:"loading\u56FE\u6807",nowrap:!1,type:"card",id:"nav_5",template:`<div class="ph-block">
    <loading-spin/>
    <loading-bounce/>
</div>`},{title:"\u81EA\u5B9A\u4E49icon\u3010\u5982\u4E0B\u6848\u4F8B\u662F\u4EE5font-awesome\u3011\u4E3E\u4F8B",template:"\u81EA\u5B9A\u4E49icon\u3010\u5982\u4E0B\u6848\u4F8B\u662F\u4EE5font-awesome\u3011\u4E3E\u4F8B",type:"h2",nowrap:!0,id:"nav_6"},{title:"\u81EA\u5B9A\u4E49\u56FE\u6807\u5E93(font-awesome\u4E3E\u4F8B)",nowrap:!1,type:"card",id:"nav_7",template:`<div class="ph-block">
    <custom-icon name="chrome"/>
    <custom-icon name="firefox"/>
    <custom-icon name="safari"/>
    <custom-icon cname="fa" prefix="fa-" name="opera"/>
    <custom-icon cname="fa" prefix="fa-" name="internet-explorer"/>
</div>`,script:`//step1 \u9879\u76EE\u4E2D\u4EE5\u4EFB\u4F55\u65B9\u5F0F\u5F15\u5165font-awesome.css

//step2 \u5728main.js\u914D\u7F6E\u5982\u4E0B\u4EE3\u7801
import FreeUi from '@phoeon/free-ui'
FreeUi.config({
    icon:{
        cname:"fa", //\u81EA\u5B9A\u4E49\u5B57\u4F53\u7684font-family 
        prefix:"fa-" //\u81EA\u5B9A\u4E49\u5B57\u4F53\u7684\u524D\u7F00
    }
})

//step3 
<template>
<!-- \u5168\u5C40\u914D\u7F6Ecname ,prefix -->
<custom-icon name="chrome"/>
<custom-icon name="firefox"/>
<custom-icon name="safari"/>
<!-- \u884C\u5185\u914D\u7F6Ecname ,prefix -->
<custom-icon cname="fa" prefix="fa-" name="opera"/>
<custom-icon cname="fa" prefix="fa-" name="internet-explorer"/>
</template>`},{title:"\u57FA\u672C\u7528\u6CD5",type:"code",lang:"typescript",code:`import { FIcon } from '@phoeon/free-ui'
const { 
    Backtop,
    Circle,
    CircleRadio, 
    CircleDot,
    CircleTick,
    CircleExclam,
    CircleTimes,

    CircleWarning,
    CircleInfo,
    CircleSuccess,
    CircleDanger,

    Square,
    SquareHalfCheck,
    SquareCheck, 
    SquareMinus,
    SquarePlus,
    SquareTick,

    LoadingSpin,
    LoadingBounce,

    Minus,
    Plus,
    Tick,
    Times,
    Time,
    Date,
    Datetime,
    Exclam,
    Caret,
    Arrow,
    Navicon,
    Search,
    Theme,
    Ellipsis,
    Sun,
    Moon,
    Mobile,
    Sort,
    Tselect,
    Cselect,
    Eye,

    CustomIcon
    } = FIcon`,id:"nav_8"}],title:"\u56FE\u6807",icon:"gg",root:!1,script:`import { FIcon } from '@phoeon/free-ui'
const { 
    Backtop,
    Circle,
    CircleRadio, 
    CircleDot,
    CircleTick,
    CircleExclam,
    CircleTimes,

    CircleWarning,
    CircleInfo,
    CircleSuccess,
    CircleDanger,

    Square,
    SquareHalfCheck,
    SquareCheck, 
    SquareMinus,
    SquarePlus,
    SquareTick,

    LoadingSpin,
    LoadingBounce,

    Minus,
    Plus,
    Tick,
    Times,
    Time,
    Date,
    Datetime,
    Exclam,
    Caret,
    Arrow,
    Navicon,
    Search,
    Theme,
    Ellipsis,
    Sun,
    Moon,
    Mobile,
    Sort,
    Tselect,
    Cselect,
    Eye,

    CustomIcon
    } = FIcon`,anchors:[{text:"\u5185\u7F6Eicon",value:"nav_0"},{text:"\u57FA\u672C",value:"nav_1"},{text:"square",value:"nav_2"},{text:"circle",value:"nav_3"},{text:"\u72B6\u6001\u56FE\u6807",value:"nav_4"},{text:"loading\u56FE\u6807",value:"nav_5"},{text:"\u81EA\u5B9A\u4E49icon\u3010\u5982\u4E0B\u6848\u4F8B\u662F\u4EE5font-awesome\u3011\u4E3E\u4F8B",value:"nav_6"},{text:"\u81EA\u5B9A\u4E49\u56FE\u6807\u5E93(font-awesome\u4E3E\u4F8B)",value:"nav_7"},{text:"\u57FA\u672C\u7528\u6CD5",value:"nav_8"}],anchor:"nav_0"},_=ne(a.anchor);return(Ce,h)=>{const r=v("demo-card"),Y=v("ph-pretty");return te(),ie("div",ce,[t("div",ue,[re,e(r,{id:"nav_1",title:"\u57FA\u672C"},{code:i(()=>[c(u(n(l)(a.parts[1])),1)]),default:i(()=>[t("div",le,[e(n(C)),e(n(P)),e(n(L)),e(n(N)),e(n(V)),e(n(U)),e(n(j)),e(n(H)),e(n(R)),e(n(J)),e(n(K)),e(n(O)),e(n(Q)),e(n(X)),e(n(p)),e(n(E),{open:!0}),e(n(E),{open:!1}),e(n(p),{direction:"up"}),e(n(p),{direction:"down"}),e(n(d),{direction:"up"}),e(n(d),{direction:"down"}),e(n(d),{direction:"left"}),e(n(d),{direction:"right"}),e(n(o),{direction:"up"}),e(n(o),{direction:"down"}),e(n(o),{direction:"left"}),e(n(o),{direction:"right"}),e(n(o),{double:!0,direction:"up"}),e(n(o),{double:!0,direction:"down"}),e(n(o),{double:!0,direction:"left"}),e(n(o),{double:!0,direction:"right"}),e(n(W)),e(n($)),e(n(z)),e(n(G))])]),_:1}),e(r,{id:"nav_2",title:"square"},{code:i(()=>[c(u(n(l)(a.parts[2])),1)]),default:i(()=>[t("div",se,[e(n(D)),e(n(y)),e(n(q)),e(n(T)),e(n(f)),e(n(f),{outline:!0})])]),_:1}),e(r,{id:"nav_3",title:"circle"},{code:i(()=>[c(u(n(l)(a.parts[3])),1)]),default:i(()=>[t("div",de,[e(n(B)),e(n(k)),e(n(m),{outline:!0}),e(n(m)),e(n(x)),e(n(w)),e(n(F))])]),_:1}),e(r,{id:"nav_4",title:"\u72B6\u6001\u56FE\u6807"},{code:i(()=>[c(u(n(l)(a.parts[4])),1)]),default:i(()=>[t("div",pe,[e(n(b)),e(n(S)),e(n(A)),e(n(g))])]),_:1}),e(r,{id:"nav_5",title:"loading\u56FE\u6807"},{code:i(()=>[c(u(n(l)(a.parts[5])),1)]),default:i(()=>[t("div",me,[e(n(M)),e(n(I))])]),_:1}),fe,e(r,{id:"nav_7",title:"\u81EA\u5B9A\u4E49\u56FE\u6807\u5E93(font-awesome\u4E3E\u4F8B)"},{code:i(()=>[c(u(n(l)(a.parts[7])),1)]),default:i(()=>[t("div",Ee,[e(n(s),{name:"chrome"}),e(n(s),{name:"firefox"}),e(n(s),{name:"safari"}),e(n(s),{cname:"fa",prefix:"fa-",name:"opera"}),e(n(s),{cname:"fa",prefix:"fa-",name:"internet-explorer"})])]),_:1}),e(Y,{id:"nav_8",title:"\u57FA\u672C\u7528\u6CD5",lang:"typescript"},{default:i(()=>[c(u(a.parts[8].code),1)]),_:1})]),t("div",_e,[e(n(oe),{class:"www-anchors",modelValue:_.value,"onUpdate:modelValue":h[0]||(h[0]=Z=>_.value=Z),dataSource:a.anchors},null,8,["modelValue","dataSource"])])])}}});export{xe as default};
