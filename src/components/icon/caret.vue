<template>
    <icon class="ph-icon-caret" :direction="direction"/>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import Icon from './base.vue'
defineProps({
    direction:String
})
</script>
<style lang="scss">
.ph-icon-caret{
    background-color: transparent;
    border: none;
    &:before{
        content: "";
        width: 0;
        height: 0;
        border-width: 5px;
        border-color: transparent;
        border-style: solid;
    }
    &[direction=up]:before{
        border-top: none;
        border-bottom-color: var(--ph-icon-c);
    }
    &[direction=down]:before{
        border-bottom: none;
        border-top-color: var(--ph-icon-c);
    }
    &[direction=left]:before{
        border-left: none;
        border-right-color: var(--ph-icon-c);
    }
    &[direction=right]:before{
        border-right: none;
        border-left-color: var(--ph-icon-c);
    }
}
</style>