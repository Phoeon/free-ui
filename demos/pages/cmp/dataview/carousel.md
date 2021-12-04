# 轮播图

### 基本案例
```html
    <f-carousel>
        <f-carousel-item>卡片一</f-carousel-item>
        <f-carousel-item>卡片二</f-carousel-item>
        <f-carousel-item>卡片三</f-carousel-item>
        <f-carousel-item>卡片四</f-carousel-item>
    </f-carousel>
```
### 指示器位置
```html
    <f-carousel :indicatorOutside="true">
        <f-carousel-item>卡片一</f-carousel-item>
        <f-carousel-item>卡片二</f-carousel-item>
        <f-carousel-item>卡片三</f-carousel-item>
        <f-carousel-item>卡片四</f-carousel-item>
    </f-carousel>
```
### 方向
```html
    <f-carousel direction="vt">
        <f-carousel-item>卡片一</f-carousel-item>
        <f-carousel-item>卡片二</f-carousel-item>
        <f-carousel-item>卡片三</f-carousel-item>
        <f-carousel-item>卡片四</f-carousel-item>
    </f-carousel>
```
### 自定义indicator
```html
    <f-carousel :interval="2000">
        <f-carousel-item>卡片一</f-carousel-item>
        <f-carousel-item>卡片二</f-carousel-item>
        <f-carousel-item>卡片三</f-carousel-item>
        <f-carousel-item>卡片四</f-carousel-item>
        <template #indicator="scope">
            <div class="custom-cs-indicator" 
                v-for="i in [0,1,2,3]" :key="i"
                :active="scope.active===i"
                @click="scope.shift(i)"
                ></div>
        </template>
    </f-carousel>
```
```css
.custom-cs-indicator{
    width: 8px;
    height: 8px;
    border-radius: 4px;
    transition: all .3s ease;
    background-color: rgb(0,0,0,.2);
    margin: 4px;
    &:hover{
        background-color: rgb(0,0,0,.5);
        cursor: pointer;
    }
    &[active=true]{
        width: 16px;
        background-color: rgb(0,0,0,.5);
    }
}
```
```typescript show 基本用法
import { FCarousel, FCarouselItem } from '@phoeon/free-ui'
```

```scss
.custom-cs-indicator{
    width: 8px;
    height: 8px;
    border-radius: 4px;
    transition: all .3s ease;
    background-color: rgb(0,0,0,.2);
    margin: 4px;
    &:hover{
        background-color: rgb(0,0,0,.5);
        cursor: pointer;
    }
    &[active=true]{
        width: 16px;
        background-color: rgb(0,0,0,.5);
    }
}
```