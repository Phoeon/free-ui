# 通知

### 不同状态
```html
<f-button-group>
    <f-button type="success" @click="open('success')">打开通知</f-button>
    <f-button type="primary" @click="open('info')">打开通知</f-button>
    <f-button type="warning" @click="open('warning')">打开通知</f-button>
    <f-button type="danger" @click="open('error')">打开通知</f-button>
    <f-button @click="open()">打开通知</f-button>
</f-button-group>
```
```js
import { FButtonButton, FButton ,FNotification } from '@phoeon/free-ui'
const open = (type:string)=>{
    (FNotification as any)[type||"notify"]("一系列的信息描述。。。",{title:"通知信息标题"})
    .click((data:any)=>{
        console.log(data)
    })
    .close((data:any)=>{
        console.log(data)
    })
}
```

### 确认通知
```html
    <f-button @click="openConfirm()">打开通知</f-button>
```
```js
import { FButton ,FNotification, FToast } from '@phoeon/free-ui'
const openConfirm = ()=>{
    FNotification.notify("一系列的信息描述。。。",{title:"通知信息标题",confirm:{},group:"confirm",groupDesc:"确认通知分组"})
    .click(data=>{
        console.log(data)
        FToast.show("点击事件")
    })
    .close(data=>{
        console.log(data)
        FToast.show("关闭事件")
    })
    .confirm(data=>{
        console.log(data)
        FToast.show("确认事件")
    })
}
```

### 自定义图标
```html
    <f-button @click="openCustomicon()">打开通知</f-button>
```
```js
import { FButton ,FNotification } from '@phoeon/free-ui'
const openCustomicon = ()=>{
    FNotification.success("一系列的信息描述。。。",{icon:"chrome"})
}
```

### 不同分组
```html
<f-button-group>
    <f-button type="success" @click="open1('success','bank1','农业银行')">农业银行</f-button>
    <f-button type="primary" @click="open1('info','bank2','招商银行')">招商银行</f-button>
    <f-button type="warning" @click="open1('warning','bank3','建设银行')">建设银行</f-button>
    <f-button type="danger" @click="open1('error','bank4','中国银行')">中国银行</f-button>
    <f-button @click="open1()">默认分组</f-button>
</f-button-group>
```
```js
import { FButtonGroup, FButton ,FNotification } from '@phoeon/free-ui'
const open1 = (type:string,group:string,groupDesc?:string)=>{
    (FNotification as any)[type||"notify"]("一系列的信息描述。。。。",{title:"通知信息标题",group,groupDesc})
    .click((data:any)=>{
        console.log(data)
    })
    .close((data:any)=>{
        console.log(data)
    })
}
```

```typescript
import { FButtonGroup, FButton ,FNotification, FToast } from '@phoeon/free-ui'
const open = (type:string)=>{
    (FNotification as any)[type||"notify"]("一系列的信息描述。。。",{title:"通知信息标题"})
    .click((data:any)=>{
        console.log(data)
    })
    .close((data:any)=>{
        console.log(data)
    })
}
const open1 = (type:string,group:string,groupDesc?:string)=>{
    (FNotification as any)[type||"notify"]("一系列的信息描述。。。。",{title:"通知信息标题",group,groupDesc})
    .click((data:any)=>{
        console.log(data)
    })
    .close((data:any)=>{
        console.log(data)
    })
}
const openConfirm = ()=>{
    FNotification.notify("一系列的信息描述。。。",{title:"通知信息标题",confirm:{},group:"confirm",groupDesc:"确认通知分组"})
    .click(data=>{
        console.log(data)
        FToast.show("点击事件")
    })
    .close(data=>{
        console.log(data)
        FToast.show("关闭事件")
    })
    .confirm(data=>{
        console.log(data)
        FToast.show("确认事件")
    })
}
const openCustomicon = ()=>{
    FNotification.success("一系列的信息描述。。。",{icon:"chrome"})
}
```