# 选项卡

### fillMode none

```html 
    <f-tabs class="demo-tabs" v-model="currentTab" fillMode="none">
        <f-tab-panel title="案例展示" >panel1</f-tab-panel>
        <f-tab-panel title="脚本案例" >panel2</f-tab-panel>
        <f-tab-panel title="样式案例" >panel3</f-tab-panel>
    </f-tabs>
```

### fillMode outline

```html
    <f-tabs class="demo-tabs" v-model="currentTab" fillMode="outline">
        <f-tab-panel title="选项零" >panel1</f-tab-panel>
        <f-tab-panel title="选项一" >panel2</f-tab-panel>
        <f-tab-panel title="选项二" >panel3</f-tab-panel>
    </f-tabs>
```

### fillMode normal

```html
    <f-tabs class="demo-tabs" v-model="currentTab" fillMode="normal">
        <f-tab-panel icon="chrome" title="案例展示" >panel1</f-tab-panel>
        <f-tab-panel title="脚本案例" >panel2</f-tab-panel>
        <f-tab-panel title="样式案例" >panel3</f-tab-panel>
    </f-tabs>
```

### fillMode reverse

```html
    <f-tabs class="demo-tabs" v-model="currentTab" fillMode="reverse">
        <f-tab-panel icon="chrome" title="案例展示" >panel1</f-tab-panel>
        <f-tab-panel title="脚本案例" >panel2</f-tab-panel>
        <f-tab-panel title="样式案例" >panel3</f-tab-panel>
    </f-tabs>
```
```typescript show 基本用法
import { FTabs, FTabPanel } from '@phoeon/free-ui'
import { ref } from 'vue'
const currentTab = ref(1)
```

```scss
.demo-tabs{
    height: 200px;
}
@media screen and (max-width:768px){
    .tabs-view{
        padding: 0;
    }
}
```