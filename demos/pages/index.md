# 主页 gg

```html nowrap root
<div class="www-intro">
    <div><FreeUiLogo class="www-logo-title"/></div>
    <p>一款个人轻量ui组件库，基于 vue3+typescript,（业余时间的练手项目，目前还在完善中，欢迎提意见或建议哈）</p>
    <f-button-group class="www-action-group">
        <f-button fillMode="outline" size="large" @click="onThemeShift">换个主题</f-button>
        <f-button fillMode="outline" type="primary" size="large" @click="onTutorial">开始使用</f-button>
    </f-button-group>
</div>
```

```typescript
import { FButton,FButtonGroup } from '@phoeon/free-ui'
import FreeUiLogo from '@demo/components/logo.vue'
import { onMounted } from 'vue'
import $evt from '../shared/evt'
const onThemeShift = ()=>$evt.emit('theme-shift')
const onTutorial = ()=>$evt.emit('start-tutorial')
```

```scss
.www-intro{
    padding: 60px 0;
    max-width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        margin-bottom: var(--ph-pd-lg);
        text-align:center;
    }
    .www-logo-title{
        height:80px;
    }
    p{
        margin-bottom: var(--ph-pd-lg);
        text-align:center;
    }
    .www-action-group{
        gap: var(--ph-pd);
    }
}
```