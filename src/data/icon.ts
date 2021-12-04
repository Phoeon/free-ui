export const c1=`import { FIcon } from '@phoeon/free-ui'
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

    CustomIcon //自定义icon 
} = FIcon`
export const c2 = `
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
</template>`
export const c3=`<backtop/>
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
<ellipsis/>`
export const c4 = `<square-plus/>
<square-tick/>
<square/>
<square-check/>
<square-half-check/>
<square-half-check :outline="true"/>`
export const c5=`<circle-dot/>
<circle-tick/>
<circle-exclam :outline="true"/>
<circle-exclam/>
<circle-times/>
<Circle/>
<circle-radio/>`
export const c6=`<circle-success />
<circle-info />
<circle-danger />
<circle-warning />`
export const c7=`<loading-spin/>
<loading-bounce/>`