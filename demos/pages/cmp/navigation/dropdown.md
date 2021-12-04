# 下拉
## 动态展示
### hover触发
```html
    <f-button-group :container="true">
        <f-dropdown type="primary" position="bl" :dataSource="data.dataSource" @action="onAction">下左</f-dropdown>
        <f-dropdown type="success" position="bc" :dataSource="data.dataSource" @action="onAction">下中</f-dropdown>
        <f-dropdown type="danger" position="br" :dataSource="data.dataSource" :offset="12" @action="onAction">下右</f-dropdown>
    </f-button-group>
    <br/>
    <f-button-group :container="true">
        <f-dropdown type="primary" position="tl" :dataSource="data.dataSource" @action="onAction">上左</f-dropdown>
        <f-dropdown type="success" position="tc" :dataSource="data.dataSource" @action="onAction">上中</f-dropdown>
        <f-dropdown type="danger" position="tr" :dataSource="data.dataSource" @action="onAction">上右</f-dropdown>
    </f-button-group>
```
### click触发
```html
    <f-button-group :container="true">
        <f-dropdown type="primary" trigger="click" position="tl" :dataSource="data.dataSource" @action="onAction"  shape="square"></f-dropdown>
        <f-dropdown type="success" trigger="click" position="tc" :dataSource="data.dataSource" @action="onAction" dropdown="" shape="square" icon="user-plus"></f-dropdown>
        <f-dropdown type="danger" trigger="click" position="tr" :dataSource="data.dataSource" @action="onAction" dropdown="" shape="square">
            <custom-icon name="filter"/>
        </f-dropdown>
    </f-button-group>
```
### 静态展示
```html
    <div style="margin:16px;display:flex;gap:16px;">
        <f-dropdownlist :sample="true" position="tl" :dataSource="data.dataSource"></f-dropdownlist>
        <f-dropdownlist :sample="true" position="tc" :dataSource="data.dataSource"></f-dropdownlist>
        <f-dropdownlist :sample="true" position="tr" :dataSource="data.dataSource"></f-dropdownlist>
    </div>
    <div style="margin:16px;display:flex;gap:16px;">
        <f-dropdownlist :sample="true" position="bl" :dataSource="data.dataSource"></f-dropdownlist>
        <f-dropdownlist :sample="true" position="bc" :dataSource="data.dataSource"></f-dropdownlist>
        <f-dropdownlist :sample="true" position="br" :dataSource="data.dataSource"></f-dropdownlist>
    </div>
```

```typescript show 基本用法
import { FButtonGroup, FDropdown, FToast, FIcon } from '@phoeon/free-ui'
import FDropdownlist from '@phoeon/free-ui/components/pop/dropdown.vue'
const { CustomIcon } = FIcon

const onAction = (e:{text:string})=>{
    FToast.show(e.text)
}
const data = {
    content:"描述文字描述文字",
    dataSource:[{
        text:"添加朋友",
        value:1,
        icon:"chrome"
    },{
        text:"发起群聊",
        value:1,
        icon:"firefox"
    },{
        text:"扫一扫",
        value:1,
        icon:"safari"
    },{
        text:"我的二维码/收款",
        value:1,
        icon:"opera"
    },{
        text:"帮助中心",
        value:1,
        icon:"internet-explorer"
    }]
}
```