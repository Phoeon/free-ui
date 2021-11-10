<template>
<f-view>
    <f-blockquote type="primary">
      一款个人轻量ui组件库，基于 vue3+typescript,（业余时间的练手项目，目前还在完善中，欢迎提意见或建议哈）
      <div style="font-weight:900;">该组件库npm包以源码形式发出，未作lib 模式导出，</div>
      如需导出其他形式，需自行处理
    </f-blockquote>
    <ph-pretty>{{raw.c1}}</ph-pretty>
    <ph-pretty>{{raw.c2}}</ph-pretty>
    <div class="img-wrap"><img alt="个人微信，加我技术交流" src="../assets/wx.jpeg"></div>
</f-view>
</template>

<script lang="ts" setup>
import { FView,FBlockquote } from '@/components'
import * as raw from '../data/home'
</script>
<style lang="scss">
.img-wrap{
  padding-top: var(--ph-pd-lg);
  display: flex;
  justify-content: center;
  img{
    width: var(--ph-home-img-w,240px);
  }
}
@media screen and (max-width:768px){
  .img-wrap{
    --ph-home-img-w:240px;
  }
}
</style>
