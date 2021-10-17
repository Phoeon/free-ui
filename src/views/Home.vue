<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <f-button size="mini">mini</f-button>
    <f-button size="small">small</f-button>
    <f-button>normal</f-button>
    <f-button size="large">large</f-button>
    <f-button radius="false">radius</f-button>
    <f-button hover="true">hover</f-button>
  </div>
</template>

<script lang="ts" setup>
import { FButton } from '@/components'
</script>
<style lang="scss">
.home{
  display: flex;
  
}
</style>
