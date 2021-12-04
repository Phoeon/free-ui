# 加载动画

### 案例展示-局部spin加载
```html
    <f-button-group>
        <f-button type="info" @click="state.ld1=true">打开默认</f-button>
        <f-button type="success" @click="state.ld2=true">box</f-button>
        <f-button type="danger" @click="state.ld3=true">背景透明</f-button>
        <f-button type="warning" @click="state.ld4=true">自定义背景</f-button>
        <f-button type="noble" @click="state.ld5=true">倒计时3s</f-button>
    </f-button-group>
    <f-loading-spin v-model="state.ld1" @click="state.ld1 = false"/>
    <f-loading-spin v-model="state.ld2" @click="state.ld2 = false" showBox="always" />
    <f-loading-spin v-model="state.ld3" @click="state.ld3 = false" :alpha="true" />
    <f-loading-spin v-model="state.ld4" @click="state.ld4 = false" bg="#ff000033" />
    <f-loading-spin v-model="state.ld5" :countdown="3" />
```
```js
import { 
    FButton,
    FButtonGroup,
    FLoadingSpin } from '@phoeon/free-ui'
import { reactive } from 'vue'
const state = reactive({
    ld1:false,
    ld2:false,
    ld3:false,
    ld4:false,
    ld5:false,
})
```
> 全局加载皆为单例模式，且只可通过js唤起

### 案例展示-全局spin加载
```html
    <f-button-group :container="true">
        <f-button type="info" @click="openSpin()">打开默认</f-button>
        <f-button type="success" @click="openSpin({showBox:'always'})">box</f-button>
        <f-button type="danger" @click="openSpin({alpha:true})">背景透明</f-button>
        <f-button type="warning" @click="openSpin({bg:'#ff000033'})">自定义背景</f-button>
        <f-button type="noble" @click="openSpin({countdown:3})">倒计时3s</f-button>
    </f-button-group>
```
```js
import { FButton,
 FButtonGroup,
 FGLoadingSpin,
 IFLoadingSpinOption,
} from '@phoeon/free-ui'
const openSpin = (opt?:IFLoadingSpinOption)=>{
    FGLoadingSpin.start(opt)
    if(opt?.countdown)return
    setTimeout(()=>FGLoadingSpin.end(),2000)
}
```

### 案例展示-全局bar加载
```html
    <f-button-group :container="true">
        <f-button type="info" @click="openBar()">打开默认</f-button>
        <f-button type="danger" @click="openBar({bg:'#FF00FF'})">自定义背景</f-button>
        <f-button type="warning" @click="openBar({size:8})">自定义高度</f-button>
        <f-button type="success" @click="openBar({size:8})">开始loading</f-button>
        <f-button type="noble" @click="endBar()">结束loading</f-button>
    </f-button-group>
```
```js
import { FButton,
 FButtonGroup,
 FGLoadingBar,
 IFLoadingBarOption } from '@phoeon/free-ui'
const openBar = (opt?:IFLoadingBarOption)=>{
    FGLoadingBar.start(opt)
}
const endBar = ()=>{
    FGLoadingBar.end()
}
```

```typescript
import { FButton,
 FButtonGroup,
 FLoadingSpin ,
 FGLoading,
 FGLoadingSpin,
 FGLoadingBar,
 IFLoadingSpinOption,
 IFLoadingBarOption } from '@phoeon/free-ui'
import { reactive } from 'vue'

const state = reactive({
    ld1:false,
    ld2:false,
    ld3:false,
    ld4:false,
    ld5:false,
})
const openSpin = (opt?:IFLoadingSpinOption)=>{
    FGLoadingSpin.start(opt)
    if(opt?.countdown)return
    setTimeout(()=>FGLoadingSpin.end(),2000)
}
const openBar = (opt?:IFLoadingBarOption)=>{
    FGLoadingBar.start(opt)
}
const endBar = ()=>{
    FGLoadingBar.end()
}
```