<template>
    <f-view>
        <f-card title="案例展示">
            <f-blockquote type="primary">观自在菩萨，行深般若波罗蜜多时，照见五蕴皆空，度一切苦厄</f-blockquote>
            <f-blockquote type="info">舍利子，色不异空，空不异色，色即是空，空即是色，受想行识亦复如是</f-blockquote>
            <f-blockquote type="success">舍利子，是诸法空相，不生不灭，不垢不净，不增不减，</f-blockquote>
            <f-blockquote type="danger">是故空中无色，无受想行识，无眼耳鼻舌身意，无色声香味触法，无眼界乃至无意识界，无无明，亦无无明尽乃至无，乃至无老死，亦无老死尽，无苦集灭道，无智亦无得</f-blockquote>
            <f-blockquote type="warning">以无所得故，菩提萨埵，依般若波罗蜜多故，心无挂碍，无挂碍故，无有恐怖，远离颠倒梦想，究竟涅槃</f-blockquote>
            <f-blockquote type="noble">三世诸佛，依般若波罗蜜多故，得阿耨多罗三藐三菩提</f-blockquote>
            <f-blockquote>故知般若波罗蜜多，是大神咒，是大明咒，是无上咒，是无等等咒，能除一切苦，真实不虚。故说般若波罗蜜多咒，即说咒曰：</f-blockquote>
            <f-blockquote type="primary">揭谛揭谛，波罗揭谛，波罗僧揭谛，菩提萨婆诃</f-blockquote>
        </f-card>
        <ph-pretty lang="html">{{raw.c1}}</ph-pretty>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FCard, FBlockquote } from '@/components'
import * as raw from '../data/blockquote'
</script>