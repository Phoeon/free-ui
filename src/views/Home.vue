<template>
<f-view>
  <div class="top-links">
    <div>作者： <f-action type="noble" target="_blank" href="https://gitee.com/phoeon">Phoeon</f-action></div>
    <div>贡献者：<f-action type="primary" target="_blank" href="https://gitee.com/oshine">李焱曦</f-action></div>
    <div>友情链接：<f-action type="primary" target="_blank" href="https://woolang.net">woo语言</f-action></div>
  </div>
    <f-blockquote type="info">
      一款个人轻量ui组件库，基于 vue3+typescript,（业余时间的练手项目，目前还在完善中，欢迎提意见或建议哈）
      <div style="font-weight:900;">该组件库npm包以源码形式发出，未作lib 模式导出，</div>
      如需导出其他形式，需自行处理
      <br/>
      <div><a href="https://gitee.com/phoeon/free-ui" target="_blank" style="color:var(--ph-c-d2)">源码地址</a></div>
      <div v-if="showDoclink"><a target="_blank"  href="https://phoeon.gitee.io/free-ui/doc/#/" style="color:var(--ph-c-d2)">在线文档</a></div>
    </f-blockquote>
    <ph-pretty>{{raw.c1}}</ph-pretty>
    <ph-pretty>{{raw.c2}}</ph-pretty>
    <div class="img-wrap"><img alt="个人微信，加我技术交流" src="../assets/wx.jpeg"></div>
</f-view>
</template>

<script lang="ts" setup>
import { FView,FBlockquote,FAction } from '@/components'
const showDoclink = process.env.VUE_APP_PRO_TYPE==="demo"
import * as raw from '../data/home'
</script>
<style lang="scss">
.top-links{
  display: flex;
  margin-bottom: var(--ph-pd-lg);
  .ph-action{
    margin-right: var(--ph-pd-lg);
  }
}
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
