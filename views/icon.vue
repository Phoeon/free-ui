<template>
    <f-view>
        <f-blockquote type="primary">内置icon</f-blockquote>
        <f-card title="基本">
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
        </f-card>
        <ph-pretty lang="html">{{raw.c3}}</ph-pretty>
        <f-card title="square">
            <div class="ph-block">
                <square-plus/>
                <square-tick/>

                <square/>
                <square-check/>
                <square-half-check/>
                <square-half-check :outline="true"/>

            </div>
        </f-card>
        <ph-pretty lang="html">{{raw.c4}}</ph-pretty>
        <f-card title="circle">
        <div class="ph-block">
            <circle-dot/>
            <circle-tick/>
            <circle-exclam :outline="true"/>
            <circle-exclam/>
            <circle-times/>

            <Circle/>
            <circle-radio/>

        </div>
        </f-card>
        <ph-pretty lang="html">{{raw.c5}}</ph-pretty>
        <f-card title="状态图标">
        <div class="ph-block">
            <circle-success />
            <circle-info />
            <circle-danger />
            <circle-warning />
        </div>
        </f-card>
        <ph-pretty lang="html">{{raw.c6}}</ph-pretty>
        <f-card title="loading图标">
        <div class="ph-block">
            <loading-spin/>
            <loading-bounce/>
        </div>
        </f-card>
        <ph-pretty lang="html">{{raw.c7}}</ph-pretty>
        <ph-pretty title="全部内置icon">{{raw.c1}}</ph-pretty>
        <f-blockquote type="primary">自定义icon【如下案例是以font-awesome】举例</f-blockquote>
        <f-card title="自定义图标库(font-awesome举例)">
        <div class="ph-block">
            <custom-icon name="chrome"/>
            <custom-icon name="firefox"/>
            <custom-icon name="safari"/>
            <custom-icon cname="fa" prefix="fa-" name="opera"/>
            <custom-icon cname="fa" prefix="fa-" name="internet-explorer"/>
        </div>
        </f-card>
        <ph-pretty lang="html" title="自定义方式">{{raw.c2}}</ph-pretty>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FCard, FIcon, FBlockquote } from '@/components'
import * as raw from '../data/icon'
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
</script>