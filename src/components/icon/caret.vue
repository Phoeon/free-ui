<template>
    <icon class="ph-icon-caret" :position="position"/>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import Icon from './base.vue'
defineProps({
    position:String
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
    &[position=up]:before{
        border-top: none;
        border-bottom-color: var(--ph-icon-c);
    }
    &[position=down]:before{
        border-bottom: none;
        border-top-color: var(--ph-icon-c);
    }
    &[position=left]:before{
        border-left: none;
        border-right-color: var(--ph-icon-c);
    }
    &[position=right]:before{
        border-right: none;
        border-left-color: var(--ph-icon-c);
    }
}
</style>