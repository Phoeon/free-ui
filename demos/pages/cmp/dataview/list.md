# 列表

### 标题+详情
```html
    <f-list :block="true">
        <f-list-item 
            v-for="(item,idx) in data.list" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            :detail="item.detail"
            ></f-list-item>
    </f-list>
```
### 标题
```html
    <f-list :block="true">
        <f-list-item 
            v-for="(item,idx) in data.list" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            ></f-list-item>
    </f-list>
```
### 标题+详情+左图标
```html
    <f-list :block="true">
        <f-list-item 
            v-for="(item,idx) in data.list1" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            :detail="item.detail"
            iconLeft="check-circle"
            iconLeftColor="var(--ph-primary)"
            ></f-list-item>
    </f-list>
```
### 标题+详情+右图标
```html
    <f-list :block="true">
        <f-list-item 
            v-for="(item,idx) in data.list1" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            :detail="item.detail"
            :iconRight="item.icon"
            ></f-list-item>
    </f-list>
```
### 标题+详情+描述
```html
    <f-list :block="true">
        <f-list-item 
            v-for="(item,idx) in data.list2" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            :desc="item.desc"
            :detail="item.detail"
            ></f-list-item>
    </f-list>
```
### 标题+详情+描述+左图标
```html
    <f-list :block="true">
        <f-list-item 
            v-for="(item,idx) in data.list2" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            :desc="item.desc"
            :detail="item.detail"
            iconLeft="check-circle"
            iconLeftColor="var(--ph-primary)"
            ></f-list-item>
    </f-list>
```
### card
```html
    <f-list>
        <f-list-item 
            v-for="(item,idx) in data.list2" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            :desc="item.desc"
            :detail="item.detail"
            ></f-list-item>
    </f-list>
```
### card
```html
    <f-list>
        <f-list-item 
            v-for="(item,idx) in data.list2" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            :detail="item.detail"
            ></f-list-item>
    </f-list>
```
### card
```html
    <f-list>
        <f-list-item 
            v-for="(item,idx) in data.list2" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            >{{item.title}}</f-list-item>
    </f-list>
```
### card+small
```html
    <f-list size="small">
        <f-list-item 
            v-for="(item,idx) in data.list2" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            :detail="item.detail"
            ></f-list-item>
    </f-list>
```
### card+normal
```html
    <f-list size="normal">
        <f-list-item 
            v-for="(item,idx) in data.list2" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            :detail="item.detail"
            ></f-list-item>
    </f-list>
```
### card+large
```html
    <f-list size="large">
        <f-list-item 
            v-for="(item,idx) in data.list2" 
            @detail="onDetail"
            @left-click="onLeftClick"
            @item-click="onClick"
            :key="idx"
            :title="item.title"
            :detail="item.detail"
            ></f-list-item>
    </f-list>
```
```typescript show script
import { FList, FListItem, FToast } from '@phoeon/free-ui'
import { reactive } from 'vue'
const data = reactive({
    list:[{
        title:"列表1",
        detail:true
    },{
        title:"列表2",
        detail:true,
    },{
        title:"列表3",
        detail:true
    }],
    list1:[{
        title:"列表1",
        detail:true,
        icon:"chrome"
    },{
        title:"列表2",
        detail:true,
        icon:"firefox"
    },{
        title:"列表3",
        detail:true,
        icon:"safari"
    }],
    list2:[{
        title:"列表1",
        detail:true,
        desc:"描述内容"
    },{
        title:"列表2",
        detail:true,
        desc:"描述内容"
    },{
        title:"列表3",
        detail:true,
        desc:"描述内容"
    }],
})
const onDetail = ()=>{
    FToast.success("详情事件")
}
const onClick = ()=>{
    FToast.success("点击事件")
}
const onLeftClick = ()=>{
    FToast.success("左点击事件")
}
```