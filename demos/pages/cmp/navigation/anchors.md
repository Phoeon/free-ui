# 锚链接导航

### 导航
```html
    <div class="anchor-content" style="background-color:#00b57833">导航</div>
```
### 数据采集
```html
<div class="anchor-content" style="background-color:#00b57866">数据采集</div>
```
### 数据录入
```html
<div class="anchor-content" style="background-color:#00b57899">数据录入</div>
```
### 数据展示
```html
<div class="anchor-content" style="background-color:#00b578cc">数据展示</div>
```
### 反馈
```html
<div class="anchor-content" style="background-color:#00b578">反馈</div>
```
### 基本用法
```html
<f-anchors v-model="canchor" :dataSource="state.anchors"></f-anchors>
```

```js
import { FAnchors } from '@phoeon/free-ui'
import { reactive } from 'vue'
const state = reactive({
    canchor:"nav2",
    anchors:[{
        text:"导航",
        value:"nav_0"
    },{
        text:"数据采集",
        value:"nav_1"
    },{
        text:"数据录入",
        value:"nav_2"
    },{
        text:"数据展示",
        value:"nav_3"
    },{
        text:"反馈",
        value:"nav_4"
    },{
        text:"基本用法",
        value:"nav_5"
    },{
        text:"script",
        value:"nav_6"
    }]
})
```
```typescript show script
import { FAnchors } from '@phoeon/free-ui'
import { reactive } from 'vue'
const state = reactive({
    canchor:"nav2",
    anchors:[{
        text:"导航",
        value:"nav_0"
    },{
        text:"数据采集",
        value:"nav_1"
    },{
        text:"数据录入",
        value:"nav_2"
    },{
        text:"数据展示",
        value:"nav_3"
    },{
        text:"反馈",
        value:"nav_4"
    },{
        text:"基本用法",
        value:"nav_5"
    },{
        text:"script",
        value:"nav_6"
    }]
})
```
```scss
.anchor-content{
    height: 500px;
    color: #FFF;
}
```