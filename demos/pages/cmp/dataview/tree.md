# 树结构

> 单选结果预览：{{state.s}}

### 单选

```html
    <f-tree :tree="TreeData" v-model="state.s"></f-tree>
```
```js
import { FTree } from '@phoeon/free-ui'
import { reactive } from 'vue'

const TreeData = {/** 请打开控制台查看 **/}
const state = reactive({
    s:''
})
```

> 多选结果预览：{{state.d}}
### 多选
```html
    <f-tree :tree="TreeData" v-model="state.d"></f-tree>
```
```js
import { FTree } from '@phoeon/free-ui'
import { reactive } from 'vue'

const TreeData = {/** 请打开控制台查看 **/}
const state = reactive({
    d:[]
})
```

```typescript
import { FTree } from '@phoeon/free-ui'
import { reactive } from 'vue'
import Console from '@phoeon/free-ui/shared/console'
import { TreeData } from '@demo/data/tree-data'

const state = reactive({
    s:'',
    d:[]
})
Console.noble('TreeData:',TreeData)
```