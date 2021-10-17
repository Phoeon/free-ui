<template>
    <tick v-if="checked==2" class="ph-icon-check" stroke="var(--ph-c-top)" fill="var(--ph-bg-theme)" borderColor="var(--ph-bg-theme)"/>
    <minus v-else-if="checked==1" class="ph-icon-check" stroke="var(--ph-c-top)" fill="var(--ph-bg-theme)" borderColor="var(--ph-bg-theme)"/>
    <square v-else class="ph-icon-check" :hover="true"/>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import Square from './square.vue'
import Minus from './minus.vue'
import Tick from './tick.vue'
defineProps({
    checked:{type:Number as PropType<1|2>}
})
</script>
<style lang="scss">
.ph-icon-check{
    &:not([disabled=true]):active:after{
        content: "";
        border-radius: inherit;
        background-color: #000000;
        opacity: .1;
    }
}
</style>