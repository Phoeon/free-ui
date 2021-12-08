import{d as _,r as E,k as c,I as j,a as y,f as F,l as r,w as t,u as e,y as v,o as I,A as p,p as b}from"./vendor.adc10202.js";import{g as h}from"./gen-code.94dbf386.js";import{_ as k,E as V}from"./index.513ab18a.js";import{a as w,b as C,c as u}from"./form-input.5a4751f0.js";import{_ as q}from"./main.90288d63.js";import"./input-wrap.117d45a2.js";const U={class:"www-doc"},T={class:"www-doc-left"},$=p("\u63D0\u4EA4\u8868\u5355"),M={class:"www-doc-right","sm-visible":"false"},J=_({setup(S){const o=E({required:"",number:"",email:"",url:"",mobile:"",regexp:"",chinese:"",helloworld:"",len:""}),m=c(),g=()=>{var i;(i=m.value)==null||i.validForm().then(()=>{V.success("\u9A8C\u8BC1\u901A\u8FC7")}).catch(a=>{V.error("\u9A8C\u8BC1\u5931\u8D25")})},B=(i,a,n,l)=>{i==="helloworld"?n():l({tip:"\u8BF7\u8F93\u5165helloworld"})},x=(i,a,n,l)=>{const d=i.length,[D,A]=a;d>=D&&d<=A?n():l({tip:"\u4F60\u4E0D\u8BC6\u6570\u4E48\uFF1F\uFF1F\uFF1F5-10\u4F4D\u54C8"})},s={parts:[{title:"\u5185\u7F6E\u9A8C\u8BC1\u5668",nowrap:!1,type:"card",id:"nav_0",template:`    <f-form title="">
        <f-validator ref="evalidator">
            <f-form-input v-model="formData.required" label="required" :validators="['required']"/>
            <f-form-input v-model="formData.number" label="number" :validators="['number']"/>
            <f-form-input v-model="formData.email" label="email" :validators="['email']"/>
            <f-form-input v-model="formData.url" label="url" :validators="['url']"/>
            <f-form-input v-model="formData.mobile" label="mobile" :validators="['mobile']"/>
            <f-form-input v-model="formData.regexp" label="regexp" :validators="[{name:'regexp',args:/^[\\d]+$/}]" placeholder="/^[\\d]+$/"/>
            <f-form-input v-model="formData.chinese" label="chinese" :validators="['chinese']"/>
        </f-validator>
        <template v-slot:action>
            <f-button type="primary" @click="onSubmit">\u63D0\u4EA4\u8868\u5355</f-button>
        </template>
    </f-form>`,script:`import { FForm, FValidator, FFormInput, FMessage, FButton } from '@phoeon/free-ui'
import { reactive, ref, Ref } from 'vue'
const formData = reactive({
    required:'',
    number:'',
    email:'',
    url:'',
    mobile:'',
    regexp:'',
    chinese:'',
    helloworld:'',
    len:''
})
const evalidator = ref() as Ref<InstanceType<typeof FValidator>>
const onSubmit = ()=>{
    evalidator.value?.validForm().then(()=>{
        FMessage.success("\u9A8C\u8BC1\u901A\u8FC7")
    }).catch((e:any)=>{
        FMessage.error("\u9A8C\u8BC1\u5931\u8D25")
    })
}`},{title:"\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u5668",nowrap:!1,type:"card",id:"nav_1",template:`    <f-form title="">
        <f-validator :validators="{helloworld,len}">
            <f-form-input v-model="formData.helloworld" label="helloworld" :validators="['helloworld']" placeholder="\u8BF7\u8F93\u5165helloworld"/>
            <f-form-input v-model="formData.len" label="len" :validators="[{name:'len',args:[5,10]}]" placeholder="\u8BF7\u8F93\u51655-10\u4F4D\u5B57\u7B26"/>
        </f-validator>
    </f-form>`,script:`import { FForm, FValidator, FFormInput, IValidatorTask } from '@phoeon/free-ui'
import { reactive } from 'vue'
const formData = reactive({
    helloworld:'',
    len:''
})
const helloworld:IValidatorTask = (v,args,next,reject)=>{
    if(v==='helloworld')next()
    else reject({
        tip:'\u8BF7\u8F93\u5165helloworld'
    })
}
const len:IValidatorTask = (v,args,next,reject)=>{
    const l = (v as string).length
    const [min,max] = args as number[]
    if(l>=min&&l<=max)next()
    else reject({
        tip:"\u4F60\u4E0D\u8BC6\u6570\u4E48\uFF1F\uFF1F\uFF1F5-10\u4F4D\u54C8"
    })
}`}],title:"\u9A8C\u8BC1\u5668",root:!1,script:`import { FForm, FValidator, FFormInput, FMessage, FButton, IValidatorTask } from '@phoeon/free-ui'
import { reactive, ref, Ref } from 'vue'
const formData = reactive({
    required:'',
    number:'',
    email:'',
    url:'',
    mobile:'',
    regexp:'',
    chinese:'',
    helloworld:'',
    len:''
})
const evalidator = ref() as Ref<InstanceType<typeof FValidator>>
const onSubmit = ()=>{
    evalidator.value?.validForm().then(()=>{
        FMessage.success("\u9A8C\u8BC1\u901A\u8FC7")
    }).catch((e:any)=>{
        FMessage.error("\u9A8C\u8BC1\u5931\u8D25")
    })
}
const helloworld:IValidatorTask = (v,args,next,reject)=>{
    if(v==='helloworld')next()
    else reject({
        tip:'\u8BF7\u8F93\u5165helloworld'
    })
}
const len:IValidatorTask = (v,args,next,reject)=>{
    const l = (v as string).length
    const [min,max] = args as number[]
    if(l>=min&&l<=max)next()
    else reject({
        tip:"\u4F60\u4E0D\u8BC6\u6570\u4E48\uFF1F\uFF1F\uFF1F5-10\u4F4D\u54C8"
    })
}`,anchors:[{text:"\u5185\u7F6E\u9A8C\u8BC1\u5668",value:"nav_0"},{text:"\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u5668",value:"nav_1"}],anchor:"nav_0"},f=c(s.anchor);return(i,a)=>{const n=j("demo-card");return I(),y("div",U,[F("div",T,[r(n,{id:"nav_0",title:"\u5185\u7F6E\u9A8C\u8BC1\u5668"},{code:t(()=>[p(b(e(h)(s.parts[0])),1)]),default:t(()=>[r(e(w),{title:""},{action:t(()=>[r(e(k),{type:"primary",onClick:g},{default:t(()=>[$]),_:1})]),default:t(()=>[r(e(C),{ref:(l,d)=>{d.evalidator=l,v(m)&&(m.value=l)}},{default:t(()=>[r(e(u),{modelValue:e(o).required,"onUpdate:modelValue":a[0]||(a[0]=l=>e(o).required=l),label:"required",validators:["required"]},null,8,["modelValue"]),r(e(u),{modelValue:e(o).number,"onUpdate:modelValue":a[1]||(a[1]=l=>e(o).number=l),label:"number",validators:["number"]},null,8,["modelValue"]),r(e(u),{modelValue:e(o).email,"onUpdate:modelValue":a[2]||(a[2]=l=>e(o).email=l),label:"email",validators:["email"]},null,8,["modelValue"]),r(e(u),{modelValue:e(o).url,"onUpdate:modelValue":a[3]||(a[3]=l=>e(o).url=l),label:"url",validators:["url"]},null,8,["modelValue"]),r(e(u),{modelValue:e(o).mobile,"onUpdate:modelValue":a[4]||(a[4]=l=>e(o).mobile=l),label:"mobile",validators:["mobile"]},null,8,["modelValue"]),r(e(u),{modelValue:e(o).regexp,"onUpdate:modelValue":a[5]||(a[5]=l=>e(o).regexp=l),label:"regexp",validators:[{name:"regexp",args:/^[\d]+$/}],placeholder:"/^[\\d]+$/"},null,8,["modelValue"]),r(e(u),{modelValue:e(o).chinese,"onUpdate:modelValue":a[6]||(a[6]=l=>e(o).chinese=l),label:"chinese",validators:["chinese"]},null,8,["modelValue"])]),_:1},512)]),_:1})]),_:1}),r(n,{id:"nav_1",title:"\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u5668"},{code:t(()=>[p(b(e(h)(s.parts[1])),1)]),default:t(()=>[r(e(w),{title:""},{default:t(()=>[r(e(C),{validators:{helloworld:B,len:x}},{default:t(()=>[r(e(u),{modelValue:e(o).helloworld,"onUpdate:modelValue":a[7]||(a[7]=l=>e(o).helloworld=l),label:"helloworld",validators:["helloworld"],placeholder:"\u8BF7\u8F93\u5165helloworld"},null,8,["modelValue"]),r(e(u),{modelValue:e(o).len,"onUpdate:modelValue":a[8]||(a[8]=l=>e(o).len=l),label:"len",validators:[{name:"len",args:[5,10]}],placeholder:"\u8BF7\u8F93\u51655-10\u4F4D\u5B57\u7B26"},null,8,["modelValue"])]),_:1},8,["validators"])]),_:1})]),_:1})]),F("div",M,[r(e(q),{class:"www-anchors",modelValue:e(f),"onUpdate:modelValue":a[9]||(a[9]=l=>v(f)?f.value=l:null),dataSource:s.anchors},null,8,["modelValue","dataSource"])])])}}});export{J as default};
