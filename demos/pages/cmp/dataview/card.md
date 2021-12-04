# 卡片
### 基本案例
```html
请点击该卡片右上角查看代码
<!-- 
<f-card title="测试面板">
    content
</f-card>
<f-card title="测试面板">
    <template #header/>
    content
    <template #footer/>
</f-card>
<f-card title="测试面板" subTitle="备注内容" icon="bar-chart">
    content
</f-card>
 -->
```
```js
import { FCard } from '@phoeon/free-ui'
```
```html nowrap
    <f-grid padding="0" :lg="2" :xl="3" :md="2">
        <f-grid-item>
            <f-card title="测试面板" subTitle="备注内容" icon="bar-chart">
                {{sutra1}}
                <template v-slot:footer>
                    描述说明内容文本
                </template>
            </f-card>
        </f-grid-item>
        <f-grid-item>
            <f-card title="测试面板">
                {{sutra1}}
            </f-card>
        </f-grid-item>
        <f-grid-item>
            <f-card title="测试面板">
                {{sutra1}}
            </f-card>
        </f-grid-item>
        <f-grid-item>
            <f-card title="测试面板">
                {{sutra1}}
            </f-card>
        </f-grid-item>
        <f-grid-item>
            <f-card title="测试面板">
                {{sutra1}}
            </f-card>
        </f-grid-item>
        <f-grid-item>
            <f-card title="测试面板">
                {{sutra1}}
            </f-card>
        </f-grid-item>
        <f-grid-item>
            <f-card title="测试面板">
                {{sutra1}}
            </f-card>
        </f-grid-item>
    </f-grid>
```
```typescript
import { FCard, FGrid, FGridItem } from '@phoeon/free-ui'
import { sutra } from '@demo/data/sutra'
const sutra1 = sutra.substr(0,100)
```
```scss
.ph-card-view{
    .ph-card{
        margin-bottom: 0;
    }
}
```