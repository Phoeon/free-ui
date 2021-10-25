<template>
    <f-view>
        <div class="ph-title">基本</div>
        <div class="ph-block">
            <minus/>
            <plus/>
            <tick/>
            <times/>
            <exclam/>
            <triangle/>
            <triangle :outline="true"/>

            <minus :disabled="true"/>
            <plus :disabled="true"/>
            <tick :disabled="true"/>
            <times :disabled="true"/>

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
            <square-minus/>
            <square-plus/>
            <square-tick/>

            <square-check/>
            <square-check :checked="1"/>
            <square-check :checked="2"/>

            <square-check :outline="true"/>
            <square-check :checked="1" :outline="true"/>
            <square-check :checked="2" :outline="true"/>

            <square-minus :disabled="true"/>
            <square-plus :disabled="true"/>
            <square-tick :disabled="true"/>

            <square-check :disabled="true"/>
            <square-check :checked="1" :disabled="true"/>
            <square-check :checked="2" :disabled="true"/>

            <square-check :outline="true" :disabled="true"/>
            <square-check :checked="1" :outline="true" :disabled="true"/>
            <square-check :checked="2" :outline="true" :disabled="true"/>

        </div>
        <div class="ph-title">circle</div>
        <div class="ph-block">
            <circle-dot/>
            <circle-tick/>
            <circle-exclam/>
            <circle-times/>
            <circle-time/>

            <circle-radio/>
            <circle-radio :checked="true"/>

            <circle-dot :disabled="true"/>
            <circle-tick :disabled="true"/>

            <circle-radio :disabled="true"/>
            <circle-radio :checked="true" :disabled="true"/>
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
        </div>
        <div class="ph-title">自定义图标库</div>
        <div class="ph-block">
            <custom-icon name="chrome"/>
            <custom-icon name="firefox"/>
            <custom-icon name="safari"/>
            <custom-icon name="opera"/>
            <custom-icon name="internet-explorer"/>
        </div>
        <div class="ph-title">size=32px</div>
        <div class="ph-block">
            <square-minus size="32px"/>
            <square-plus size="32px"/>
            <square-tick size="32px"/>

            <square-check size="32px"/>
            <square-check :checked="1" size="32px"/>
            <square-check :checked="2" size="32px"/>

            <square-check :outline="true" size="32px"/>
            <square-check :checked="1" :outline="true" size="32px"/>
            <square-check :checked="2" :outline="true" size="32px"/>
        </div>
        <div class="ph-title">size=24px</div>
        <div class="ph-block">
            <square-minus size="24px"/>
            <square-plus size="24px"/>
            <square-tick size="24px"/>

            <square-check size="24px"/>
            <square-check :checked="1" size="24px"/>
            <square-check :checked="2" size="24px"/>

            <square-check :outline="true" size="24px"/>
            <square-check :checked="1" :outline="true" size="24px"/>
            <square-check :checked="2" :outline="true" size="24px"/>
        </div>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FIcon } from '@/components'
const { 
    CircleRadio, 
    CircleDot,
    CircleTick,
    CircleExclam,
    CircleTimes,
    CircleTime,

    CircleWarning,
    CircleInfo,
    CircleSuccess,
    CircleDanger,

    SquareCheck, 
    SquareMinus,
    SquarePlus,
    SquareTick,

    LoadingSpin,

    Minus,
    Plus,
    Tick,
    Times,
    Exclam,
    Triangle,
    Caret,
    Arrow,
    Navicon,
    Search,
    Theme,
    Ellipsis,

    CustomIcon
    } = FIcon
</script>