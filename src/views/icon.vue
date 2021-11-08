<template>
    <f-view>
        <f-blockquote type="primary">内置icon</f-blockquote>
        <div class="ph-title">基本</div>
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
            <ellipsis/>
        </div>
        <div class="ph-title">square</div>
        <div class="ph-block">
            <square-plus/>
            <square-tick/>

            <square/>
            <square-check/>
            <square-half-check/>
            <square-half-check :outline="true"/>

        </div>
        <div class="ph-title">circle</div>
        <div class="ph-block">
            <circle-dot/>
            <circle-tick/>
            <circle-exclam :outline="true"/>
            <circle-exclam/>
            <circle-times/>

            <Circle/>
            <circle-radio/>

        </div>
        <div class="ph-title">状态图标</div>
        <div class="ph-block">
            <circle-success />
            <circle-info />
            <circle-danger />
            <circle-warning />
        </div>
        <div class="ph-title">loading图标</div>
        <div class="ph-block">
            <loading-spin/>
            <loading-bounce/>
        </div>
        <f-blockquote type="primary">自定义icon</f-blockquote>
        <div class="ph-title">自定义图标库(可以引入三方字体库)</div>
        <div class="ph-block">
            <custom-icon name="chrome"/>
            <custom-icon name="firefox"/>
            <custom-icon name="safari"/>
            <custom-icon name="opera"/>
            <custom-icon name="internet-explorer"/>
        </div>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FIcon, FBlockquote } from '@/components'
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

    CustomIcon
    } = FIcon
</script>