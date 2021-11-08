<template>
    <icon class="ph-builtin-icon" ><slot :outline="outline"></slot></icon>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
import Icon from './icon.vue'

const props = defineProps({
    outline:Boolean
})

</script>
<style lang="scss">
.ph-builtin-icon{
    svg{
        vertical-align: top;
        fill: currentColor;
    }
}
</style>