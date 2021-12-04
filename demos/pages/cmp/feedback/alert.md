# 警告反馈

### 案例展示
```html
    <f-alert v-model="state.v1" type="error">系统错误，请稍后重试。</f-alert>
    <f-alert v-model="state.v2" type="info">你好！欢迎来到天空之城。</f-alert>
    <f-alert v-model="state.v3">系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！</f-alert>
    <f-alert v-model="state.v4" type="success">恭喜！你所提交的信息已经审核通过，如有问题请联系客服。</f-alert>

    <f-alert v-model="state.v5" type="error" link="http://www.baidu.com">系统错误，请稍后重试。</f-alert>
    <f-alert v-model="state.v6" type="info" link="http://www.baidu.com">你好！欢迎来到天空之城。</f-alert>
    <f-alert v-model="state.v7" link="http://www.baidu.com">系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！</f-alert>
    <f-alert v-model="state.v8" type="success" link="http://www.baidu.com">恭喜！你所提交的信息已经审核通过，如有问题请联系客服。</f-alert>

    <f-alert v-model="state.v9" type="error" :action="true" @action="onAction">系统错误，请稍后重试。</f-alert>
    <f-alert v-model="state.v10" type="info" :action="true" @action="onAction">你好！欢迎来到天空之城。</f-alert>
    <f-alert v-model="state.v11" :action="true" @action="onAction">系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！</f-alert>
    <f-alert v-model="state.v12" type="success" :action="true" @action="onAction">恭喜！你所提交的信息已经审核通过，如有问题请联系客服。</f-alert>

    <f-alert v-model="state.v13" type="error" title="出错了！">你的账户会员使用权限将在3天后到期，请及时跟进申请状况。如有问题，请联系审核人员。</f-alert>
    <f-alert v-model="state.v14" type="info" title="帮助信息">你好，由于你的良好信用，我们决定赠送你三个月产品会员，欲了解会员特权与活动请进首页会员专区查看。</f-alert>
    <f-alert v-model="state.v15" title="请注意">你所提交的信息已经审核失败，可以进入个人信箱查看原因，如有疑问，请联系客服人员。</f-alert>
    <f-alert v-model="state.v16" type="success" title="操作成功">你所提交的信息已经审核通过，请及时跟进申请状况。如有问题，请联系审核人员或在线客服。</f-alert>
```
```js
import { FAlert, FToast } from '@phoeon/free-ui'
import { reactive } from 'vue'
const state = reactive({
    v1:true,
    v2:true,
    v3:true,
    v4:true,
    v5:true,
    v6:true,
    v7:true,
    v8:true,
    v9:true,
    v10:true,
    v11:true,
    v12:true,
    v13:true,
    v14:true,
    v15:true,
    v16:true,
})
const onAction = ()=>{
    FToast.show("action 反馈事件")
}
```

```typescript
import { FAlert, FToast } from '@phoeon/free-ui'
import { reactive } from 'vue'
const state = reactive({
    v1:true,
    v2:true,
    v3:true,
    v4:true,
    v5:true,
    v6:true,
    v7:true,
    v8:true,
    v9:true,
    v10:true,
    v11:true,
    v12:true,
    v13:true,
    v14:true,
    v15:true,
    v16:true,
})
const onAction = ()=>{
    FToast.show("action 反馈事件")
}
```