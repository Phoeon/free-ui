# 折叠面板
### 块级默认
```html
    <f-accordion v-model="state.v1" :block='true'>
        <f-accordion-item title="面板一">{{sutra}}</f-accordion-item>
        <f-accordion-item title="面板二">{{sutra}}</f-accordion-item>
        <f-accordion-item title="面板三">{{sutra}}</f-accordion-item>
        <f-accordion-item title="面板四">{{sutra}}</f-accordion-item>
    </f-accordion>
```
### 块级手风琴
```html
    <f-accordion v-model="state.v2" :block='true' :accordion="true">
        <f-accordion-item title="面板一">{{sutra}}</f-accordion-item>
        <f-accordion-item title="面板二">{{sutra}}</f-accordion-item>
        <f-accordion-item title="面板三">{{sutra}}</f-accordion-item>
    </f-accordion>
```
### 块级 禁止
```html
    <f-accordion v-model="state.v3">
        <f-accordion-item title="面板一">{{sutra}}</f-accordion-item>
        <f-accordion-item title="面板二">{{sutra}}</f-accordion-item>
        <f-accordion-item title="面板三" :disabled="true" >{{sutra}}</f-accordion-item>
        <f-accordion-item title="面板四">{{sutra}}</f-accordion-item>
    </f-accordion>
```
### 块级手风琴禁止
```html
    <f-accordion v-model="state.v4" :accordion="true">
        <f-accordion-item title="面板一">{{sutra}}</f-accordion-item>
        <f-accordion-item title="面板二">{{sutra}}</f-accordion-item>
        <f-accordion-item title="面板三" :disabled="true" >{{sutra}}</f-accordion-item>
    </f-accordion>
```
```typescript show script
import { FAccordion, FAccordionItem } from '@phoeon/free-ui'
import { reactive } from 'vue'
import { sutra } from '@demo/data/sutra'
const state = reactive({
    v1:0,
    v2:2,
    v3:0,
    v4:0
})

```