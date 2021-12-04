# 对话框

### 确认框
```html
    <f-button type="primary" @click="openConfirm">确认框</f-button>
```
```js
import { FButton, FModal, FToast } from '@phoeon/free-ui'
const openConfirm = ()=>{
    FModal.confirm({
        title:"操作失败",
        content:"账号密码不一致，是否重试？",
        cancelText:"关闭",
        doneText:"重试"
    }).done((status:number)=>{
        if(status)
        FToast.success("确认事件")
        else FToast.error("取消事件")
    })
}
```

### 警告框
```html
    <f-button type="danger" @click="openAlert">警告框</f-button>
```     
```js
import { FButton, FModal } from '@phoeon/free-ui'
const openAlert = ()=>{
    FModal.alert({
        title:"欢迎！",
        content:"北京欢迎您！"
    })
}
```

### 多选项框   
```html 
<f-button type="primary" @click="openOption">多选项框</f-button>
```
```js
import { FButton, FModal, FToast } from '@phoeon/free-ui'
const options = [{
    text:"选项一",
    value:0,
    type:"success"
},{
    text:"选项二",
    value:1,
    type:"danger"
},{
    text:"选项三",
    value:2,
    type:"warning"
}]
const openOption = ()=>{
    FModal.option({
        title:"欢迎！",
        content:"北京欢迎您！",
        options
    }).done((a?:unknown)=>{
        if(a===undefined)FToast.error("取消事件")
        else 
            FToast.success(options[a as number].text)
    })
}
```

```typescript
import { FButton, FModal, FToast } from '@phoeon/free-ui'
const openConfirm = ()=>{
    FModal.confirm({
        title:"操作失败",
        content:"账号密码不一致，是否重试？",
        cancelText:"关闭",
        doneText:"重试"
    }).done((status:number)=>{
        if(status)
        FToast.success("确认事件")
        else FToast.error("取消事件")
    })
}
const openAlert = ()=>{
    FModal.alert({
        title:"欢迎！",
        content:"北京欢迎您！"
    })
}
const options = [{
    text:"选项一",
    value:0,
    type:"success"
},{
    text:"选项二",
    value:1,
    type:"danger"
},{
    text:"选项三",
    value:2,
    type:"warning"
}]
const openOption = ()=>{
    FModal.option({
        title:"欢迎！",
        content:"北京欢迎您！",
        options
    }).done((a?:unknown)=>{
        if(a===undefined)FToast.error("取消事件")
        else 
            FToast.success(options[a as number].text)
    })
}
```