# 图标 gg
## 内置icon
### 基本
```html
    <div class="ph-block">
        <backtop/>
        <minus/>
        <plus/>
        <tick/>
        <times/>
        <exclam/>
        <Time/>
        <date/>
        <datetime/>
        <sun/>
        <moon/>
        <mobile/>
        <tselect/>
        <cselect/>
        <sort/>
        <eye :open="true"/>
        <eye :open="false"/>
        <sort direction="up"/>
        <sort direction="down"/>

        <caret direction="up"/>
        <caret direction="down"/>
        <caret direction="left"/>
        <caret direction="right"/>

        <arrow direction="up"/>
        <arrow direction="down"/>
        <arrow direction="left"/>
        <arrow direction="right"/>

        <arrow :double="true" direction="up"/>
        <arrow :double="true" direction="down"/>
        <arrow :double="true" direction="left"/>
        <arrow :double="true" direction="right"/>

        <navicon/>
        <search/>
        <theme/>
        <ellipsis/>
    </div>
```
### square
```html
    <div class="ph-block">
        <square-plus/>
        <square-tick/>

        <square/>
        <square-check/>
        <square-half-check/>
        <square-half-check :outline="true"/>

    </div>
```
### circle
```html
<div class="ph-block">
    <circle-dot/>
    <circle-tick/>
    <circle-exclam :outline="true"/>
    <circle-exclam/>
    <circle-times/>

    <Circle/>
    <circle-radio/>

</div>
```
### 状态图标
```html
<div class="ph-block">
    <circle-success />
    <circle-info />
    <circle-danger />
    <circle-warning />
</div>
```
### loading图标
```html
<div class="ph-block">
    <loading-spin/>
    <loading-bounce/>
</div>
```

## 自定义icon【如下案例是以font-awesome】举例
### 自定义图标库(font-awesome举例)
```html
<div class="ph-block">
    <custom-icon name="chrome"/>
    <custom-icon name="firefox"/>
    <custom-icon name="safari"/>
    <custom-icon cname="fa" prefix="fa-" name="opera"/>
    <custom-icon cname="fa" prefix="fa-" name="internet-explorer"/>
</div>
```
```js
//step1 项目中以任何方式引入font-awesome.css

//step2 在main.js配置如下代码
import FreeUi from '@phoeon/free-ui'
FreeUi.config({
    icon:{
        cname:"fa", //自定义字体的font-family 
        prefix:"fa-" //自定义字体的前缀
    }
})

//step3 
<template>
<!-- 全局配置cname ,prefix -->
<custom-icon name="chrome"/>
<custom-icon name="firefox"/>
<custom-icon name="safari"/>
<!-- 行内配置cname ,prefix -->
<custom-icon cname="fa" prefix="fa-" name="opera"/>
<custom-icon cname="fa" prefix="fa-" name="internet-explorer"/>
</template>
```
```typescript show 基本用法
import { FIcon } from '@phoeon/free-ui'
const { 
    Backtop,
    Circle,
    CircleRadio, 
    CircleDot,
    CircleTick,
    CircleExclam,
    CircleTimes,

    CircleWarning,
    CircleInfo,
    CircleSuccess,
    CircleDanger,

    Square,
    SquareHalfCheck,
    SquareCheck, 
    SquareMinus,
    SquarePlus,
    SquareTick,

    LoadingSpin,
    LoadingBounce,

    Minus,
    Plus,
    Tick,
    Times,
    Time,
    Date,
    Datetime,
    Exclam,
    Caret,
    Arrow,
    Navicon,
    Search,
    Theme,
    Ellipsis,
    Sun,
    Moon,
    Mobile,
    Sort,
    Tselect,
    Cselect,
    Eye,

    CustomIcon
    } = FIcon
```