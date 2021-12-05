# 气泡卡片

> 该组件为web端组件
### 静态展示
```html
    <div class="flex-box">
        <f-popover :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="tl"></f-popover>
        <f-popover :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="tc"></f-popover>
        <f-popover :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="tr"></f-popover>
    </div>
    <br/>
    <div class="flex-box">
        <f-popover :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="bl"></f-popover>
        <f-popover :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="bc"></f-popover>
        <f-popover :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="br"></f-popover>
    </div>
    <br/>
    <div class="flex-box">
        <f-popover theme="reverse" :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="lt"></f-popover>
        <f-popover theme="reverse" :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="lc"></f-popover>
        <f-popover theme="reverse" :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="lb"></f-popover>
    </div>
    <br/>
    <div class="flex-box">
        <f-popover theme="reverse" :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="rt"></f-popover>
        <f-popover theme="reverse" :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="rc"></f-popover>
        <f-popover theme="reverse" :sample="true" content="描述文字描述文字描述文字描述" title="确定要关" position="rb"></f-popover>
    </div>
```
```js
import FPopover from '@phoeon/free-ui/components/pop/over.vue'
```
> 该组件以vue指令的形式对外提供
### 动态展
```html
    <f-button-group :container="true">
        <f-button type="success" v-popover="{...data,position:'tl'}">上左</f-button>
        <f-button type="danger" v-popover="{...data,position:'tc'}">上中</f-button>
        <f-button type="warning" v-popover="{...data,position:'tr'}">上右</f-button>
    </f-button-group>
    <br/>
    <f-button-group :container="true">
        <f-button type="success" v-popover="{...data,position:'bl'}">下左</f-button>
        <f-button type="danger" v-popover="{...data,position:'bc'}">下中</f-button>
        <f-button type="warning" v-popover="{...data,position:'br'}">下右</f-button>
    </f-button-group>
    <br/>
    <f-button-group :container="true">
        <f-button type="success" v-popover="{...data,position:'lt'}">左上</f-button>
        <f-button type="danger" v-popover="{...data,position:'lc'}">左中</f-button>
        <f-button type="warning" v-popover="{...data,position:'lb'}">左下</f-button>
    </f-button-group>
    <br/>
    <f-button-group :container="true">
        <f-button type="success" v-popover="{...data,position:'rt'}">右上</f-button>
        <f-button type="danger" v-popover="{...data,position:'rc'}">右中</f-button>
        <f-button type="warning" v-popover="{...data,position:'rb'}">右下</f-button>
    </f-button-group>
```
```js
import { FButtonGroup, FButton, vPopover } from '@phoeon/free-ui'
const data = {
    title:"问题提示",
    content:"描述文字描述文字描述文字描述",
}
```

```typescript 
import { FButtonGroup, FButton, vPopover } from '@phoeon/free-ui'
import FPopover from '@phoeon/free-ui/components/pop/over.vue'
const data = {
    title:"问题提示",
    content:"描述文字描述文字描述文字描述",
}
```

```scss
.flex-box{
    display:flex;
    flex-wrap: wrap;
    gap:var(--ph-pd);
}
```