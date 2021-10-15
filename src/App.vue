<template>
  <div class="block">
    <f-button type="primary" @click="onShiftMode">切换全局主题</f-button>
  </div>
  <router-view/>
</template>
<script lang="ts" setup>
import { FButton } from '@/components'
import { onBeforeMount, ref } from 'vue'
const theme = ref("light")
const onShiftMode = ()=>{
  theme.value = theme.value=='light'?'dark':'light'
  document.documentElement.setAttribute("f-mode",theme.value)
}
onBeforeMount(()=>{
  onShiftMode()
})
</script>
<style lang="scss">
@import '@/assets/style/rebot.scss';
</style>
