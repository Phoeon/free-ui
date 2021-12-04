# 消息提示

### 案例展示
```html
    <f-button-group :container="true">
        <f-button size="small" type="primary" @click="openMsg('info')">打开msg</f-button>
        <f-button size="small" type="success" @click="openMsg('success')">打开msg</f-button>
        <f-button size="small" type="danger" @click="openMsg('error')">打开msg</f-button>
        <f-button size="small" type="warning" @click="openMsg('warning')">打开msg</f-button>
        <f-button size="small" @click="openMsg()">打开msg</f-button>
    </f-button-group>
```
```js
import { FButtonGroup, FButton, FMessage } from '@phoeon/free-ui'
const openMsg = (type:string)=>{
    FMessage.show("我爱你中国",{type: type as 'success'})
}
```

### 底部出现
```html
    <f-button type="primary" @click="openMsg2">打开msg</f-button>
```
```js
import { FButton, FMessage } from '@phoeon/free-ui'
const openMsg2 = ()=>{
    FMessage.success("我爱你中国",{position:"bottom"})
}
```

### 自定义图标
```html
    <f-button size="small" type="primary" @click="openMsg1()">打开msg</f-button>
```
```js
import { FButton, FMessage } from '@phoeon/free-ui'
const openMsg1 = ()=>{
    FMessage.success("观自在菩萨，行深般若波罗蜜多时，照见",{
        icon:"chrome",
        iconColor:"red"
    })
}
```

### 点击和关闭事件
```html
    <f-button size="small" type="primary" @click="openMsg3()">打开msg</f-button>
```
```js
import { FButton, FMessage, FToast } from '@phoeon/free-ui'
const openMsg3 = ()=>{
    FMessage.success("观自在菩萨，行深般若波罗蜜多时，照见").click(()=>{
        FToast.success("点击事件")
    }).close(a=>{
        FToast.error("关闭事件")
    })
}
```

```typescript
import { FButtonGroup, FButton, FMessage, FToast } from '@phoeon/free-ui'
const openMsg = (type:string)=>{
    FMessage.show("我爱你中国",{type: type as 'success'})
}
const openMsg2 = ()=>{
    FMessage.success("我爱你中国",{position:"bottom"})
}
const openMsg1 = ()=>{
    FMessage.success("观自在菩萨，行深般若波罗蜜多时，照见",{
        icon:"chrome",
        iconColor:"red"
    })
}
const openMsg3 = ()=>{
    FMessage.success("观自在菩萨，行深般若波罗蜜多时，照见").click(()=>{
        FToast.success("点击事件")
    }).close(a=>{
        FToast.error("关闭事件")
    })
}
```