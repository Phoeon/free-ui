# actionsheet

### 案例展示list
```html
    <f-button size="small" type="primary" @click="openList">打开list</f-button>
    <f-actionsheet 
        v-model="state.value" 
        v-model:visible="state.visible" 
        :title="state.title" 
        :desc="state.desc" 
        :options="state.options" @action="onAction"></f-actionsheet>
```
```js
import { FButton, FActionsheet, FToast } from '@phoeon/free-ui'
import { reactive } from 'vue'
const state  = reactive({
    visible:false,
    title:"支付方式",
    desc:"请选择您的支付方式",
    value:1,
    options:[{
        text:"支付宝",
        value:0,
        type:"primary"
    },{
        text:"微信",
        value:1,
    },{
        text:"信用卡",
        value:2,
    }]
})
const openList = ()=>{
    state.visible = true
}
const onAction = (b:Record<string,any>,c:()=>void)=>{
    if(b){
        FToast.success(b.text)
    }else 
        FToast.error("取消事件")
}
```
### 案例展示grid
```html
    <f-button size="small" type="primary" @click="openGrid">打开grid</f-button>
    <f-actionsheet 
        type="grid" 
        v-model="state1.value" 
        v-model:visible="state1.visible" 
        :title="state1.title" 
        :desc="state1.desc" 
        :options="state1.options" @action="onAction"></f-actionsheet>
```
```js
import { FButton, FActionsheet, FToast } from '@phoeon/free-ui'
import { reactive } from 'vue'
const state1  = reactive({
    visible:false,
    value:1,
    options:[{/** 请打开控制台查看数据 **/}]
})
const openGrid = ()=>{
    state1.visible = true
}
const onAction1 = (b:Record<string,any>,c:()=>void)=>{
    if(b){
        FToast.success(b.text)
    }else 
        FToast.error("取消事件")
    // c()
}
```

### 禁止关闭
```html
    <f-button size="small" type="primary" @click="state1.visible1=true">禁止关闭</f-button>
    <f-actionsheet 
        type="grid" 
        v-model="state1.value" 
        v-model:visible="state1.visible1" 
        :autoClose="false" 
        :title="state1.title" 
        :desc="state1.desc" 
        :options="state1.options" @action="onAction1"></f-actionsheet>
```
```js
import { FButton, FActionsheet, FToast } from '@phoeon/free-ui'
import { reactive } from 'vue'
const state1  = reactive({
    visible1:false,
    value:1,
    options:[{/** 请打开控制台查看数据 **/}]
})
const openGrid = ()=>{
    state1.visible = true
}
const onAction1 = (b:Record<string,any>,c:()=>void)=>{
    if(b){
        FToast.success(b.text)
    }else 
        FToast.error("取消事件")
    // c()
}
```

```typescript
import { FButton, FActionsheet, FToast } from '@phoeon/free-ui'
import { reactive } from 'vue'
import { gridOption } from '@demo/data/actionsheet'
import Console from '@phoeon/free-ui/shared/console'

Console.noble("options",gridOption)
const state  = reactive({
    visible:false,
    title:"支付方式",
    desc:"请选择您的支付方式",
    value:1,
    options:[{
        text:"支付宝",
        value:0,
        type:"primary"
    },{
        text:"微信",
        value:1,
    },{
        text:"信用卡",
        value:2,
    }]
})
const state1  = reactive({
    visible:false,
    visible1:false,
    value:1,
    options:gridOption
})
const openList = ()=>{
    state.visible = true
}
const openGrid = ()=>{
    state1.visible = true
}

const onAction = (b:Record<string,any>,c:()=>void)=>{
    if(b){
        FToast.success(b.text)
    }else 
        FToast.error("取消事件")
}
const onAction1 = (b:Record<string,any>,c:()=>void)=>{
    if(b){
        FToast.success(b.text)
    }else 
        FToast.error("取消事件")
    // c()
}
```