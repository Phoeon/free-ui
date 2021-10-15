<template>
    <dot v-if="checked" class="ph-icon-radio" stroke="var(--ph-bg-theme)" borderColor="var(--ph-bg-theme)"/>
    <Circle v-else class="ph-icon-radio" :hover="true"/>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import Circle from './circle.vue'
import Dot from './dot.vue'
defineProps({
    checked:Boolean
})
</script>
<style lang="scss">
.ph-icon-radio{
    &:not([disabled=true]):active:after{
        content: "";
        border-radius: inherit;
        background-color: #000000;
        opacity: .1;
    }
}
</style>