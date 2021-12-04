# 抽拉drawer

### 案例展示
```html
    <f-button-group>
        <f-button type="primary" @click="openDrawer('top')">上</f-button>
        <f-button type="primary" @click="openDrawer('bottom')">下</f-button>
        <f-button type="primary" @click="openDrawer('left')">左</f-button>
        <f-button type="primary" @click="openDrawer('right')">右</f-button>
    </f-button-group>
    <teleport to="body">
    <f-drawer class="www-drawer" v-model="state.visible" :position="state.position">
        <h1 class="www-drawer-title">《心经》</h1>
        <p class="www-drawer-content">{{sutra}}</p>
    </f-drawer>
    </teleport>
```
```js
import { FButtonGroup, FButton, FDrawer } from '@phoeon/free-ui'
import { reactive } from 'vue'
const state = reactive({
    visible:false,
    position:""
})
const openDrawer = (position:string)=>{
    state.visible = true
    state.position = position
}
```
    
```typescript
import { FButtonGroup, FButton, FDrawer } from '@phoeon/free-ui'
import { reactive } from 'vue'
import { sutra } from '@demo/data/sutra'
const state = reactive({
    visible:false,
    position:""
})
const openDrawer = (position:string)=>{
    state.visible = true
    state.position = position
}
```

```scss
.www-drawer{
    .right,
    .left{
        .www-drawer-content{
            width:250px;
        }    
    }
    .www-drawer-title{
        display:flex;
        align-items:center;
        padding:var(--ph-pd-lg) var(--ph-pd) var(--ph-pd) var(--ph-pd);
        font-size:22px;
        border-bottom:1px solid var(--ph-bg-a1-reverse);
    }
    .www-drawer-content{
        padding:var(--ph-pd);
    }
}
```