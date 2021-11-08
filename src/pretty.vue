<template>
  <div class="ph-pretty-container">
    <div class="ph-pretty-header">
      <h1 class="ph-pretty-title">{{title}}</h1>
      <f-button fillMode="none" @click="onCopyCode">复制代码</f-button>
    </div>
    <div class="ph-pretty-body" ref="ecode">
      <pre :class="cns"><slot></slot></pre>
    </div>
    <pre class="ph-pretty-hidden">{{}}</pre>
  </div>
</template>
<script lang="ts" setup>
declare var PR: { prettyPrint: () => void };
import { computed, defineProps, nextTick, onMounted, Ref, ref } from "vue";
import { FButton, FToast } from '@/components'
import copy from 'ph-copy'

const ecode = ref() as Ref<HTMLElement>
const props = defineProps({
    title: { type:String, default:"案例代码"},
    lang: { type: String, default: "typescript" },
})
const cns = computed(() => {
    const cns = ["ph-pretty", "prettyprint", "linenums"];
    cns.push("lang-" + props.lang);
    return cns;
});
const onCopyCode = ()=>{
  copy(ecode.value)
  FToast.show("复制成功")
}
onMounted(() => {
    nextTick(()=>PR.prettyPrint())
});
</script>
<style lang="scss">
.ph-pretty-container{
  background-color: var(--ph-bg-a1);
  border-radius: 5px 0 0 5px;
  position: relative;
  width: 100%;
  margin-bottom: var(--ph-pd);
  border: 1px solid var(--ph-block-bg);
  .ph-pretty-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--ph-gcard-th);
    padding: 0 var(--ph-pd);
    position: relative;
    background-color: var(--ph-block-bg);
    .ph-pretty-title{
      font-weight: var(--ph-fw-m);
      font-size: var(--ph-gcard-tfs);
      color: var(--ph-c-d2);
    }
    &:after{
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: var(--ph-bd);
    }
  }
  .ph-pretty-body{
    max-width:100%;
    max-height: 100%;
    position: relative;
    overflow: auto;
  }
}
.ph-pretty {
  visibility: hidden;
  width: 100%;
  display: block;
  line-height: 1.5;
  word-break: break-all;
  word-wrap: break-word;
  white-space: pre-wrap;
  font-family: Monaco, Menlo, Consolas, "Courier New", monospace;
  font-size: 15px;
  position: relative;
  overflow: hidden;

  li {
    list-style: decimal;
    white-space: nowrap;
    position: relative;
  }
  
  &.prettyprinted {
    visibility: visible;
  }
  .linenums {
    position: relative;
    color: var(--ph-c-d1);
    margin: 0;
    padding: var(--ph-pd);
    padding-left: 70px;
    height: 100%;
    overflow: auto;
    &:before {
      content: "";
      position: absolute;
      background-color: var(--ph-block-bg);
      width: 70px;
      left: 0;
      top: 0;
      height: 100%;
      z-index: 0;
    }
  }
}
/* desert scheme ported from vim to google prettify */
:root{
  &[f-mode=dark]{
    pre .nocode {background-color: none;color: #000;}
    pre .str {color: #f0e68c;}
    pre .kwd {color: var(--ph-danger);font-weight: bold;}
    pre .com {color: #87ceeb;}
    pre .typ {color: #fff;}
    pre .lit {color: #2db6cd;}
    pre .pun {color: #fff;}
    pre .pln {color: #fff;white-space: pre;}
    pre .tag {color: var(--ph-danger);;font-weight: bold;}
    pre .atn {color: var(--ph-warning);;font-weight: bold;}
    pre .atv {color: #fff;}
    pre .dec {color: #98fb98;}
  }
  &[f-mode=light]{
    pre .nocode {background-color: none;color: #000;}
    pre .str {color: #040278;}
    pre .kwd {color: #a71b45;font-weight: bold;}
    pre .com {color: #87ceeb;}
    pre .typ {color: #232323;}
    pre .lit {color: #2db6cd;}
    pre .pun {color: #232323;}
    pre .pln {color: #232323;white-space: pre;}
    pre .tag {color: #a71b45;font-weight: bold;}
    pre .atn {color: #6d8801;font-weight: bold;}
    pre .atv {color: #232323;}
    pre .dec {color: #98fb98;}
  }
}

ol.linenums > li {
  padding-left: var(--ph-pd);
}
pre.prettyprint {
  display: block;
}
</style>
