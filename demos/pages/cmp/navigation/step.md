# 步骤
### 水平案例
```html
    <f-steps :steps="steps"></f-steps>
    <br/>
    <f-steps :steps="steps" size="small"></f-steps>
```
### 垂直案例
```html
    <div style="display:flex;justify-content:space-around;">
        <f-steps :steps="steps" direction="vt"></f-steps>
        <f-steps :steps="steps" direction="vt" size="small"></f-steps>
    </div>
```
```typescript show 基本用法
import { FSteps } from '@phoeon/free-ui'
const steps = [{
    title:"处理完成",
    desc:"描述内容文字",
    status:1
},{
    title:"处理中",
    desc:"描述内容文字",
    status:0
},{
    title:"待处理",
    desc:"描述内容文字",
    status:-1
}]
```