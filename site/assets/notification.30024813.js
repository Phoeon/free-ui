import{d as b,x as M,z as P,o as d,a as B,f as m,e as k,u,m as h,p as v,l as r,w as l,A as f,c as j,r as S,F as O,B as z,g as V,n as q,Y as H,E as L,q as J,s as R,k as U,I as Y}from"./vendor.adc10202.js";import{g as w}from"./gen-code.94dbf386.js";import{G as K,h as Q,w as W,n as X,z as Z,A as tt,q as ut,H as ot,c as nt,I,J as et,_ as C,i as N}from"./index.513ab18a.js";import{_ as G}from"./group.c7619c52.js";import{_ as st}from"./main.90288d63.js";const T={close:0,confirm:1,click:2},it={class:"ph-notify"},ct={class:"ph-notify-layout"},at={class:"ph-notify-wrap"},lt={class:"ph-notify-title"},rt={key:0,class:"ph-notify-action"},ft=b({props:{type:String,showClose:{type:Boolean,default:!0},autoClose:{type:Boolean,default:!1},clickClose:{type:Boolean,default:!0},idx:Number,title:String,content:String,icon:String,nid:String,evt:Object,confirm:Object},emits:["close"],setup(n,{emit:c}){const a=n,g=M(()=>K(()=>import("./index.513ab18a.js").then(function(s){return s.ac}),["assets/index.513ab18a.js","assets/index.0c1b144f.css","assets/vendor.adc10202.js"])),p=()=>{const{type:s,title:t,content:i,autoClose:o,showClose:E,confirm:y}=a;return{type:s,title:t,content:i,autoClose:o,showClose:E,confirm:y}},e=(s,t)=>{var o;const i=s==T.confirm?"confirm":"close";t&&((o=a.evt)==null||o.emit(i,{man:t,action:i,meta:p()})),c("close")},F=()=>{var s;(s=a.evt)==null||s.emit("click",{action:"click",man:!0,meta:p()}),!a.confirm&&a.clickClose&&e(T.close)};return P(()=>{a.autoClose&&!a.confirm&&window.setTimeout(()=>{e(T.close)},1e4)}),(s,t)=>(d(),B("div",it,[m("div",ct,[n.icon?(d(),k(u(Q),{key:0,class:"ph-status-icon",name:n.icon,type:n.type},null,8,["name","type"])):n.type=="success"?(d(),k(u(W),{key:1,class:"ph-status-icon",type:"success"})):n.type=="info"?(d(),k(u(X),{key:2,class:"ph-status-icon",type:"info"})):n.type=="warning"?(d(),k(u(Z),{key:3,class:"ph-status-icon",type:"warning"})):n.type=="error"?(d(),k(u(tt),{key:4,class:"ph-status-icon",type:"danger"})):h("v-if",!0),m("div",at,[m("h1",lt,[m("span",null,v(n.title||"\u901A\u77E5"),1),n.showClose?(d(),k(u(ut),{key:0,active:!1,onClick:t[0]||(t[0]=i=>e(0,!0)),class:"ph-notify-close",hover:!0})):h("v-if",!0)]),m("p",{class:"ph-notify-body",onClick:F},v(n.content),1)])]),n.confirm?(d(),B("div",rt,[r(u(g),{size:"mini",onClick:t[1]||(t[1]=i=>e(0,!0))},{default:l(()=>[f(v(n.confirm.cancelText||"\u5173\u2002\u95ED"),1)]),_:1}),r(u(g),{size:"mini",type:"primary",onClick:t[2]||(t[2]=i=>e(1,!0))},{default:l(()=>[f(v(n.confirm.doneText||"\u786E\u2002\u8BA4"),1)]),_:1})])):h("v-if",!0)]))}}),pt=["collapsed"],dt={key:0,class:"ph-notify-group-actionbar"},Ft={class:"ph-notify-group-title"},Et={class:"ph-notify-group-actions"},yt=b({props:{group:Object,hrp:String,vtp:String,collapsed:Boolean,list:{type:Array,default:()=>[]}},setup(n){const c=n,a=j(()=>c.list.length>3),g=(F,s)=>c.vtp=="top"?{"--ph-notify-idx":F-s-1,"--ph-notify-alpha":1-(F-s-1)*.33,zIndex:s}:{"--ph-notify-idx":s,"--ph-notify-alpha":1-s*.33,zIndex:F-1-s},p=S({collapsed:!0}),e=()=>{p.collapsed=!p.collapsed};return(F,s)=>{var t;return n.list.length?(d(),B("div",{key:0,class:"ph-notify-group",collapsed:u(a)&&u(p).collapsed},[u(a)?(d(),B("div",dt,[m("span",Ft,v(((t=n.group)==null?void 0:t.v)||"\u901A\u77E5\u4E2D\u5FC3"),1),m("div",Et,[r(u(ot),{onClick:s[0]||(s[0]=i=>{var o;return F.$emit("closeAll",(o=n.group)==null?void 0:o.k)}),title:"\u79FB\u9664\u5168\u90E8"}),r(u(nt),{double:!0,direction:u(p).collapsed?"down":"up",onClick:e,title:u(p).collapsed?"\u5C55\u5F00":"\u6536\u8D77"},null,8,["direction","title"])])])):h("v-if",!0),r(H,{name:"ph-notify-fade",mode:"out-in"},{default:l(()=>[(d(!0),B(O,null,z(n.list||[],(i,o)=>(d(),k(ft,{class:V("ph-notify-"+n.hrp),key:i.nid,type:i.type,icon:i.icon,showClose:i.showClose,autoClose:i.autoClose,title:i.title,content:i.content,clickClose:i.clickClose,nid:i.nid,evt:i.evt,confirm:i.confirm,simple:u(a)&&u(p).collapsed,style:q(g(n.list.length,o)),onClose:E=>{var y;return F.$emit("close",{nid:i.nid,groupId:(y=n.group)==null?void 0:y.k})}},null,8,["class","type","icon","showClose","autoClose","title","content","clickClose","nid","evt","confirm","simple","style","onClose"]))),128))]),_:1})],8,pt)):h("v-if",!0)}}}),Ct=b({props:{evt:Object},setup(n,{expose:c}){const a=I.get("notify"),g=(a==null?void 0:a.position)||"right-top",p=g.split("-"),e=S({groups:[],notifications:{default:[]}}),F=j(()=>{let o=0;for(const E in e.notifications)o+=e.notifications[E].length;return o}),s=o=>{const E=o.group||"default";e.groups.findIndex(x=>x.k===E)<0&&(e.groups.push({k:E,v:o.groupDesc}),e.notifications[E]=[]);const _=e.notifications[E];p[1]=="top"?_.push(o):_.unshift(o)},t=({nid:o,groupId:E})=>{const y=E||"default",_=e.notifications[y];e.notifications[y]=_.filter(x=>x.nid!=o)},i=o=>{e.notifications[o]=[]};return c({show:s}),(o,E)=>u(F)?(d(),k(et,{key:0,class:V(["ph-notify-container","ph-notify-"+u(g)]),disabledHr:!0},{default:l(()=>[(d(!0),B(O,null,z(u(e).groups,y=>(d(),k(yt,{key:y.k,group:y,list:u(e).notifications[y.k],hrp:u(p)[0],vtp:u(p)[1],onCloseAll:i,onClose:t},null,8,["group","list","hrp","vtp"]))),128))]),_:1},8,["class"])):h("v-if",!0)}});let $;const A=(n,c)=>{const a=new L,g=(Math.random()+"").replace(".",""),p=Object.assign({type:""},c,{content:n,nid:g,evt:a});return $||($=J(Ct,{}).mount(document.createElement("div")),document.body.appendChild($.$el)),R(()=>{$.show(p)}),{click(e){return a.on("click",e),this},close(e){return a.on("close",e),this},confirm(e){return a.on("confirm",e),this}}};var D={install(n,c){I.set("notify",c),n.config.globalProperties.$phNotify=A},notify(n,c={}){return A(n,c)},success(n,c={}){return A(n,Object.assign(c,{type:"success"}))},error(n,c={}){return A(n,Object.assign(c,{type:"error"}))},warning(n,c={}){return A(n,Object.assign(c,{type:"warning"}))},info(n,c={}){return A(n,Object.assign(c,{type:"info"}))}};const gt={class:"www-doc"},mt={class:"www-doc-left"},kt=f("\u6253\u5F00\u901A\u77E5"),vt=f("\u6253\u5F00\u901A\u77E5"),Bt=f("\u6253\u5F00\u901A\u77E5"),ht=f("\u6253\u5F00\u901A\u77E5"),At=f("\u6253\u5F00\u901A\u77E5"),_t=f("\u6253\u5F00\u901A\u77E5"),bt=f("\u6253\u5F00\u901A\u77E5"),wt=f("\u519C\u4E1A\u94F6\u884C"),$t=f("\u62DB\u5546\u94F6\u884C"),Dt=f("\u5EFA\u8BBE\u94F6\u884C"),xt=f("\u4E2D\u56FD\u94F6\u884C"),Nt=f("\u9ED8\u8BA4\u5206\u7EC4"),Tt={class:"www-doc-right","sm-visible":"false"},It=b({setup(n){const c=s=>{D[s||"notify"]("\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u63CF\u8FF0\u3002\u3002\u3002",{title:"\u901A\u77E5\u4FE1\u606F\u6807\u9898"}).click(t=>{console.log(t)}).close(t=>{console.log(t)})},a=(s,t,i)=>{D[s||"notify"]("\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u63CF\u8FF0\u3002\u3002\u3002\u3002",{title:"\u901A\u77E5\u4FE1\u606F\u6807\u9898",group:t,groupDesc:i}).click(o=>{console.log(o)}).close(o=>{console.log(o)})},g=()=>{D.notify("\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u63CF\u8FF0\u3002\u3002\u3002",{title:"\u901A\u77E5\u4FE1\u606F\u6807\u9898",confirm:{},group:"confirm",groupDesc:"\u786E\u8BA4\u901A\u77E5\u5206\u7EC4"}).click(s=>{console.log(s),N.show("\u70B9\u51FB\u4E8B\u4EF6")}).close(s=>{console.log(s),N.show("\u5173\u95ED\u4E8B\u4EF6")}).confirm(s=>{console.log(s),N.show("\u786E\u8BA4\u4E8B\u4EF6")})},p=()=>{D.success("\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u63CF\u8FF0\u3002\u3002\u3002",{icon:"chrome"})},e={parts:[{title:"\u4E0D\u540C\u72B6\u6001",nowrap:!1,type:"card",id:"nav_0",template:`<f-button-group>
    <f-button type="success" @click="open('success')">\u6253\u5F00\u901A\u77E5</f-button>
    <f-button type="primary" @click="open('info')">\u6253\u5F00\u901A\u77E5</f-button>
    <f-button type="warning" @click="open('warning')">\u6253\u5F00\u901A\u77E5</f-button>
    <f-button type="danger" @click="open('error')">\u6253\u5F00\u901A\u77E5</f-button>
    <f-button @click="open()">\u6253\u5F00\u901A\u77E5</f-button>
</f-button-group>`,script:`import { FButtonButton, FButton ,FNotification } from '@phoeon/free-ui'
const open = (type:string)=>{
    (FNotification as any)[type||"notify"]("\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u63CF\u8FF0\u3002\u3002\u3002",{title:"\u901A\u77E5\u4FE1\u606F\u6807\u9898"})
    .click((data:any)=>{
        console.log(data)
    })
    .close((data:any)=>{
        console.log(data)
    })
}`},{title:"\u786E\u8BA4\u901A\u77E5",nowrap:!1,type:"card",id:"nav_1",template:'    <f-button @click="openConfirm()">\u6253\u5F00\u901A\u77E5</f-button>',script:`import { FButton ,FNotification, FToast } from '@phoeon/free-ui'
const openConfirm = ()=>{
    FNotification.notify("\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u63CF\u8FF0\u3002\u3002\u3002",{title:"\u901A\u77E5\u4FE1\u606F\u6807\u9898",confirm:{},group:"confirm",groupDesc:"\u786E\u8BA4\u901A\u77E5\u5206\u7EC4"})
    .click(data=>{
        console.log(data)
        FToast.show("\u70B9\u51FB\u4E8B\u4EF6")
    })
    .close(data=>{
        console.log(data)
        FToast.show("\u5173\u95ED\u4E8B\u4EF6")
    })
    .confirm(data=>{
        console.log(data)
        FToast.show("\u786E\u8BA4\u4E8B\u4EF6")
    })
}`},{title:"\u81EA\u5B9A\u4E49\u56FE\u6807",nowrap:!1,type:"card",id:"nav_2",template:'    <f-button @click="openCustomicon()">\u6253\u5F00\u901A\u77E5</f-button>',script:`import { FButton ,FNotification } from '@phoeon/free-ui'
const openCustomicon = ()=>{
    FNotification.success("\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u63CF\u8FF0\u3002\u3002\u3002",{icon:"chrome"})
}`},{title:"\u4E0D\u540C\u5206\u7EC4",nowrap:!1,type:"card",id:"nav_3",template:`<f-button-group>
    <f-button type="success" @click="open1('success','bank1','\u519C\u4E1A\u94F6\u884C')">\u519C\u4E1A\u94F6\u884C</f-button>
    <f-button type="primary" @click="open1('info','bank2','\u62DB\u5546\u94F6\u884C')">\u62DB\u5546\u94F6\u884C</f-button>
    <f-button type="warning" @click="open1('warning','bank3','\u5EFA\u8BBE\u94F6\u884C')">\u5EFA\u8BBE\u94F6\u884C</f-button>
    <f-button type="danger" @click="open1('error','bank4','\u4E2D\u56FD\u94F6\u884C')">\u4E2D\u56FD\u94F6\u884C</f-button>
    <f-button @click="open1()">\u9ED8\u8BA4\u5206\u7EC4</f-button>
</f-button-group>`,script:`import { FButtonGroup, FButton ,FNotification } from '@phoeon/free-ui'
const open1 = (type:string,group:string,groupDesc?:string)=>{
    (FNotification as any)[type||"notify"]("\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u63CF\u8FF0\u3002\u3002\u3002\u3002",{title:"\u901A\u77E5\u4FE1\u606F\u6807\u9898",group,groupDesc})
    .click((data:any)=>{
        console.log(data)
    })
    .close((data:any)=>{
        console.log(data)
    })
}`}],title:"\u901A\u77E5",root:!1,script:`import { FButtonGroup, FButton ,FNotification, FToast } from '@phoeon/free-ui'
const open = (type:string)=>{
    (FNotification as any)[type||"notify"]("\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u63CF\u8FF0\u3002\u3002\u3002",{title:"\u901A\u77E5\u4FE1\u606F\u6807\u9898"})
    .click((data:any)=>{
        console.log(data)
    })
    .close((data:any)=>{
        console.log(data)
    })
}
const open1 = (type:string,group:string,groupDesc?:string)=>{
    (FNotification as any)[type||"notify"]("\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u63CF\u8FF0\u3002\u3002\u3002\u3002",{title:"\u901A\u77E5\u4FE1\u606F\u6807\u9898",group,groupDesc})
    .click((data:any)=>{
        console.log(data)
    })
    .close((data:any)=>{
        console.log(data)
    })
}
const openConfirm = ()=>{
    FNotification.notify("\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u63CF\u8FF0\u3002\u3002\u3002",{title:"\u901A\u77E5\u4FE1\u606F\u6807\u9898",confirm:{},group:"confirm",groupDesc:"\u786E\u8BA4\u901A\u77E5\u5206\u7EC4"})
    .click(data=>{
        console.log(data)
        FToast.show("\u70B9\u51FB\u4E8B\u4EF6")
    })
    .close(data=>{
        console.log(data)
        FToast.show("\u5173\u95ED\u4E8B\u4EF6")
    })
    .confirm(data=>{
        console.log(data)
        FToast.show("\u786E\u8BA4\u4E8B\u4EF6")
    })
}
const openCustomicon = ()=>{
    FNotification.success("\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u63CF\u8FF0\u3002\u3002\u3002",{icon:"chrome"})
}`,anchors:[{text:"\u4E0D\u540C\u72B6\u6001",value:"nav_0"},{text:"\u786E\u8BA4\u901A\u77E5",value:"nav_1"},{text:"\u81EA\u5B9A\u4E49\u56FE\u6807",value:"nav_2"},{text:"\u4E0D\u540C\u5206\u7EC4",value:"nav_3"}],anchor:"nav_0"},F=U(e.anchor);return(s,t)=>{const i=Y("demo-card");return d(),B("div",gt,[m("div",mt,[r(i,{id:"nav_0",title:"\u4E0D\u540C\u72B6\u6001"},{code:l(()=>[f(v(u(w)(e.parts[0])),1)]),default:l(()=>[r(u(G),null,{default:l(()=>[r(u(C),{type:"success",onClick:t[0]||(t[0]=o=>c("success"))},{default:l(()=>[kt]),_:1}),r(u(C),{type:"primary",onClick:t[1]||(t[1]=o=>c("info"))},{default:l(()=>[vt]),_:1}),r(u(C),{type:"warning",onClick:t[2]||(t[2]=o=>c("warning"))},{default:l(()=>[Bt]),_:1}),r(u(C),{type:"danger",onClick:t[3]||(t[3]=o=>c("error"))},{default:l(()=>[ht]),_:1}),r(u(C),{onClick:t[4]||(t[4]=o=>c())},{default:l(()=>[At]),_:1})]),_:1})]),_:1}),r(i,{id:"nav_1",title:"\u786E\u8BA4\u901A\u77E5"},{code:l(()=>[f(v(u(w)(e.parts[1])),1)]),default:l(()=>[r(u(C),{onClick:t[5]||(t[5]=o=>g())},{default:l(()=>[_t]),_:1})]),_:1}),r(i,{id:"nav_2",title:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{code:l(()=>[f(v(u(w)(e.parts[2])),1)]),default:l(()=>[r(u(C),{onClick:t[6]||(t[6]=o=>p())},{default:l(()=>[bt]),_:1})]),_:1}),r(i,{id:"nav_3",title:"\u4E0D\u540C\u5206\u7EC4"},{code:l(()=>[f(v(u(w)(e.parts[3])),1)]),default:l(()=>[r(u(G),null,{default:l(()=>[r(u(C),{type:"success",onClick:t[7]||(t[7]=o=>a("success","bank1","\u519C\u4E1A\u94F6\u884C"))},{default:l(()=>[wt]),_:1}),r(u(C),{type:"primary",onClick:t[8]||(t[8]=o=>a("info","bank2","\u62DB\u5546\u94F6\u884C"))},{default:l(()=>[$t]),_:1}),r(u(C),{type:"warning",onClick:t[9]||(t[9]=o=>a("warning","bank3","\u5EFA\u8BBE\u94F6\u884C"))},{default:l(()=>[Dt]),_:1}),r(u(C),{type:"danger",onClick:t[10]||(t[10]=o=>a("error","bank4","\u4E2D\u56FD\u94F6\u884C"))},{default:l(()=>[xt]),_:1}),r(u(C),{onClick:t[11]||(t[11]=o=>a())},{default:l(()=>[Nt]),_:1})]),_:1})]),_:1})]),m("div",Tt,[r(u(st),{class:"www-anchors",modelValue:F.value,"onUpdate:modelValue":t[12]||(t[12]=o=>F.value=o),dataSource:e.anchors},null,8,["modelValue","dataSource"])])])}}});export{It as default};
