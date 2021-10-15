<template>
  <div class="home">
    <f-button size="mini">mini</f-button>
    <f-button size="small">small</f-button>
    <f-button>normal</f-button>
    <f-button size="large">large</f-button>
    <f-button radius="false">radius</f-button>
    <f-button hover="true">hover</f-button>
    <f-button type="primary">primary</f-button>
    <f-button type="success">success</f-button>
    <f-button type="danger">danger</f-button>
    <f-button type="warning">warning</f-button>
    <f-button disabled hover="true" type="primary">primary</f-button>
    <f-button disabled type="success">success</f-button>
    <f-button disabled type="danger">danger</f-button>
    <f-button disabled type="warning">warning</f-button>
    <f-button disabled>disabled</f-button>
  </div>
</template>

<script lang="ts" setup>
import { FButton } from '@/components'
</script>
<style lang="scss">
.home{
  .ph-button{
    margin-right: 5px;
  }
}
</style>
