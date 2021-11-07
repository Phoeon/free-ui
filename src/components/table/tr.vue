<template>
    <tr class="ph-tb-row" :hover="state.hover"><slot></slot></tr>
</template>
<script lang="ts" setup>
import { reactive } from "vue";

const state = reactive({
    hover:!('ontouchstart' in window)
})
</script>
<style lang="scss">
.ph-tb-row{
    &[hover=true]:nth-of-type(n+2):hover{
        background-color: var(--ph-bg-a1);
    }
}
</style>