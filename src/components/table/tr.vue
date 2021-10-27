<template>
    <div class="ph-tb-row" :hover="state.hover"><slot></slot></div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";

const state = reactive({
    hover:!('ontouchstart' in window)
})
</script>
<style lang="scss">
.ph-tb-row{
    display: flex;
    align-items: center;
    &[hover=true]:nth-of-type(n+2):hover{
        background-color: rgb(0 0 0 /5%);
    }
}
</style>