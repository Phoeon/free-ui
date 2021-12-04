# 验证器

### 内置验证器
```html
    <f-form title="">
        <f-validator ref="evalidator">
            <f-form-input v-model="formData.required" label="required" :validators="['required']"/>
            <f-form-input v-model="formData.number" label="number" :validators="['number']"/>
            <f-form-input v-model="formData.email" label="email" :validators="['email']"/>
            <f-form-input v-model="formData.url" label="url" :validators="['url']"/>
            <f-form-input v-model="formData.mobile" label="mobile" :validators="['mobile']"/>
            <f-form-input v-model="formData.regexp" label="regexp" :validators="[{name:'regexp',args:/^[\d]+$/}]" placeholder="/^[\d]+$/"/>
            <f-form-input v-model="formData.chinese" label="chinese" :validators="['chinese']"/>
        </f-validator>
        <template v-slot:action>
            <f-button type="primary" @click="onSubmit">提交表单</f-button>
        </template>
    </f-form>
```
```js
import { FForm, FValidator, FFormInput, FMessage, FButton } from '@phoeon/free-ui'
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
        FMessage.success("验证通过")
    }).catch((e:any)=>{
        FMessage.error("验证失败")
    })
}
```

### 自定义验证器
```html
    <f-form title="">
        <f-validator :validators="{helloworld,len}">
            <f-form-input v-model="formData.helloworld" label="helloworld" :validators="['helloworld']" placeholder="请输入helloworld"/>
            <f-form-input v-model="formData.len" label="len" :validators="[{name:'len',args:[5,10]}]" placeholder="请输入5-10位字符"/>
        </f-validator>
    </f-form>
```
```js
import { FForm, FValidator, FFormInput, IValidatorTask } from '@phoeon/free-ui'
import { reactive } from 'vue'
const formData = reactive({
    helloworld:'',
    len:''
})
const helloworld:IValidatorTask = (v,args,next,reject)=>{
    if(v==='helloworld')next()
    else reject({
        tip:'请输入helloworld'
    })
}
const len:IValidatorTask = (v,args,next,reject)=>{
    const l = (v as string).length
    const [min,max] = args as number[]
    if(l>=min&&l<=max)next()
    else reject({
        tip:"你不识数么？？？5-10位哈"
    })
}
```

```typescript
import { FForm, FValidator, FFormInput, FMessage, FButton, IValidatorTask } from '@phoeon/free-ui'
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
        FMessage.success("验证通过")
    }).catch((e:any)=>{
        FMessage.error("验证失败")
    })
}
const helloworld:IValidatorTask = (v,args,next,reject)=>{
    if(v==='helloworld')next()
    else reject({
        tip:'请输入helloworld'
    })
}
const len:IValidatorTask = (v,args,next,reject)=>{
    const l = (v as string).length
    const [min,max] = args as number[]
    if(l>=min&&l<=max)next()
    else reject({
        tip:"你不识数么？？？5-10位哈"
    })
}
```