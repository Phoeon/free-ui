<template>
    <icon class="ph-icon-triangle" fill="var(--ph-c-ltop)" stroke="var(--ph-c)">
        <template v-slot:default="props">
            <exclam 
            :disabled="props.disabled" 
            :outline="props.outline"  
            :active="props.active"
            :fill="props.stroke" 
            :stroke="props.fill" 
            :size="props.size"/>
        </template>
    </icon>
</template>
<script lang="ts" setup>
import Icon from './base.vue'
import Exclam from './exclam.vue'
</script>
<style lang="scss">
.ph-icon-triangle{
    background-color: transparent;
    border: none;
    .ph-icon{
        z-index: 1;
        background-color: transparent;
        border-color: transparent;
        border-bottom: none;
        &:before{
            top: calc(var(--ph-icon-ratio) * 4);;
        }
    }
    &:before,
    &:after{
        width: 0;
        height: 0;
        border-top-width: 0px;
        border-color: transparent;
        border-bottom-color: var(--ph-icon-c);
        border-style: solid;
    }
    &:before{
        content: "";
        border-left-width: var(--ph-icon-8);
        border-right-width: var(--ph-icon-8);
        border-bottom-width: var(--ph-icon-size);
    }
    &[outline=true]{
        &:before{
            border-bottom-color: var(--ph-icon-bg);
        }
        &:after{
            content: "";
            border-left-width: var(--ph-icon-6);
            border-right-width: var(--ph-icon-6);
            border-bottom-width: calc(var(--ph-icon-ratio) * 13);
        }
    }
}
</style>