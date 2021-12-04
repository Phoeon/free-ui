# 提示tooltip

> 该组件为web端组件
### 静态展示
```html
    <div class="tooltip">
        <f-tooltip :sample="true" content="描述" position="tc"></f-tooltip>
        <br/>
        <f-tooltip :sample="true" content="描述文字" position="bc"></f-tooltip>
        <br/>
        <f-tooltip :sample="true" content="描述文字描述文" position="l"></f-tooltip>
        <br/>
        <f-tooltip :sample="true" content="描述文字描述文字描述文字描述" position="r"></f-tooltip>
    </div>
```
```js
import FTooltip from '@phoeon/free-ui/components/pop/tooltip.vue'
```

> 该组件以vue指令的形式对外提供
### 动态展示
```html
    <f-button-group :container="true">
        <f-button type="success" v-tooltip="{...data,position:'tc'}">上</f-button>
        <f-button type="danger" v-tooltip="{...data,position:'bc'}">下</f-button>
        <f-button type="warning" v-tooltip="{...data,position:'l'}">左</f-button>
        <f-button type="warning" v-tooltip="{...data,position:'r'}">右</f-button>
    </f-button-group>
```
```js
import { FButtonGroup, FButton, vTooltip } from '@phoeon/free-ui'
const data = {
    content:"描述文字描述文字"
}
```

```typescript
import { FButtonGroup, FButton, vTooltip } from '@phoeon/free-ui'
import FTooltip from '@phoeon/free-ui/components/pop/tooltip.vue'
const data = {
    content:"描述文字描述文字"
}
```

```scss
.tooltip{
    .ph-tooltip{
        margin-bottom: 20px;
    }
}
```