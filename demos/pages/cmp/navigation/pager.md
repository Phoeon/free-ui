# 分页
## 分页
### 默认案例
```html
    <f-pager 
        @page="onPage"
        :total="data.total"
        v-model:page="data.page"
        v-model:pagesize="data.pagesize"
    />
```

### showTotal
```html
    <f-pager 
        @page="onPage"
        :showTotal="true"
        :total="data.total"
        v-model:page="data.page"
        v-model:pagesize="data.pagesize"
    />
```

### showPagesize
```html
<f-pager 
    @page="onPage"
    :showTotal="true"
    :showPagesize="true"
    :total="data.total"
    v-model:page="data.page"
    v-model:pagesize="data.pagesize"
/>
```

### showJump
```html
<f-pager 
    @page="onPage"
    :showTotal="true"
    :showPagesize="true"
    :showJump="true"
    :total="data.total"
    v-model:page="data.page"
    v-model:pagesize="data.pagesize"
/>
```

### pagerCount
```html
<f-pager 
    @page="onPage"
    :showTotal="true"
    :showPagesize="true"
    :showJump="true"
    :pagerCount="5"
    :total="data.total"
    v-model:page="data.page"
    v-model:pagesize="data.pagesize"
/>
```

### 水平分布
```html
<f-pager 
    @page="onPage"
    :total="data.total"
    v-model:page="data.page"
    v-model:pagesize="data.pagesize"
/>
<br/>
<f-pager 
    @page="onPage"
    :total="data.total"
    justify="center"
    v-model:page="data.page"
    v-model:pagesize="data.pagesize"
/>
<br/>
<f-pager 
    @page="onPage"
    :total="data.total"
    justify="flex-end"
    v-model:page="data.page"
    v-model:pagesize="data.pagesize"
/>
```

### 背景填充
```html
<f-pager 
    @page="onPage"
    :total="data.total"
    fillMode="normal"
    v-model:page="data.page"
    v-model:pagesize="data.pagesize"
/>
<br/>
<f-pager 
    @page="onPage"
    :total="data.total"
    fillMode="none"
    v-model:page="data.page"
    v-model:pagesize="data.pagesize"
/>
<br/>
<f-pager 
    @page="onPage"
    :total="data.total"
    fillMode="outline"
    v-model:page="data.page"
    v-model:pagesize="data.pagesize"
/>
<br/>
<f-pager 
    @page="onPage"
    :total="data.total"
    fillMode="reverse"
    v-model:page="data.page"
    v-model:pagesize="data.pagesize"
/>
```

### 简单模式
```html
<f-pager 
    @page="onPage"
    :total="data.total"
    :simple="true"
    v-model:page="data.page"
    v-model:pagesize="data.pagesize"
/>
<br/>
<f-pager 
    @page="onPage"
    :total="data.total"
    :simple="true"
    prev="上一页"
    next="下一页"
    v-model:page="data.page"
    v-model:pagesize="data.pagesize"
/>
<br/>
<f-pager 
    @page="onPage"
    :total="data.total"
    :simple="true"
    justify="space-between"
    prev="上一页"
    next="下一页"
    v-model:page="data.page"
    v-model:pagesize="data.pagesize"
/>
```

### 不同主题色
```html
<f-pager 
    @page="onPage"
    :total="data.total"
    theme="success"
    v-model:page="data.page"
    v-model:pagesize="data.pagesize"
/>
<br/>
<f-pager 
    @page="onPage"
    :total="data.total"
    theme="danger"
    v-model:page="data.page"
    v-model:pagesize="data.pagesize"
/>
<br/>
<f-pager 
    @page="onPage"
    :total="data.total"
    theme="warning"
    v-model:page="data.page"
    v-model:pagesize="data.pagesize"
/>
<br/>
<f-pager 
    @page="onPage"
    :total="data.total"
    theme="noble"
    v-model:page="data.page"
    v-model:pagesize="data.pagesize"
/>
<br/>
<f-pager 
    @page="onPage"
    :total="data.total"
    theme="info"
    v-model:page="data.page"
    v-model:pagesize="data.pagesize"
/>
<br/>
```

```typescript show 基本用法
import { FPager } from '@phoeon/free-ui'
import { reactive } from 'vue'
const data = reactive({
    page:1,
    pagesize:10,
    total:250
})
const onPage = (meta:{page:number,pagesize:number})=>{
    console.log(meta)
}
```