<template>
    <a class="ph-backtop" @click="$emit('backtop')">
        <custom-icon class="ph-backtop-icon" :name="icon" v-if="icon"/>
        <backtop class="ph-backtop-icon" v-else/>
    </a>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import { Backtop, CustomIcon } from '../icon'
const props = defineProps({
    icon:String
})
</script>
<style lang="scss">
.ph-backtop{
    background-color: var(--ph-popover-bg);
    color: var(--ph-c);
    z-index: var(--ph-zdx-popover);
    position: fixed;
    bottom: 150px;
    right: 30px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: var(--ph-shadow-popover);
    width: 40px;
    height: 40px;
}
</style>