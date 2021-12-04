# 表格
> 该组件为web端组件,目前只提供了静态简单实现

### 简单案例
```html
    <f-table>
        <f-tr>
            <f-th>姓名</f-th>
            <f-th>性别</f-th>
            <f-th tip="我爱你中国">职业</f-th>
            <f-th :sort="true" @sort="onSort">生日</f-th>
            <f-th>操作</f-th>
        </f-tr>
        <f-tr>
            <f-td>拉伸空间发的</f-td>
            <f-td>男</f-td>
            <f-td>老师</f-td>
            <f-td>1992-03-30</f-td>
            <f-td>
                <f-action type="danger">删除</f-action>
                <f-action type="info">新增</f-action>
                <f-action type="info">详情</f-action>
            </f-td>
        </f-tr>
        <f-tr>
            <f-td>拉伸空间发的</f-td>
            <f-td>男</f-td>
            <f-td>老师</f-td>
            <f-td>1992-03-30</f-td>
            <f-td>
                <f-action type="danger">删除</f-action>
                <f-action type="info">新增</f-action>
                <f-action type="info">详情</f-action>
            </f-td>
        </f-tr>
        <f-tr>
            <f-td>拉伸空间发的</f-td>
            <f-td>男</f-td>
            <f-td>老师</f-td>
            <f-td>1992-03-30</f-td>
            <f-td>
                <f-action type="danger">删除</f-action>
                <f-action type="info">新增</f-action>
                <f-action type="info">详情</f-action>
            </f-td>
        </f-tr>
    </f-table>
```
```js
import { FView, FTable, FTr, FTh, FTd, FAction,FBlockquote,FToast } from '@phoeon/free-ui'
const onSort = (sort:number)=>{
    FToast.show(sort===1?'升序':'降序')
}
```
```typescript
import { FView, FTable, FTr, FTh, FTd, FAction,FBlockquote,FToast } from '@phoeon/free-ui'
const onSort = (sort:number)=>{
    FToast.show(sort===1?'升序':'降序')
}
```