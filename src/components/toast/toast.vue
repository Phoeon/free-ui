<template>
    <div :class="['ph-toast',type?'ph-toast-withicon':'']" :position="position">
        <circle-tick class="ph-toast-icon" v-if="type=='success'" fill="var(--ph-c-top)" stroke="var(--ph-c-reverse)"/>
        <circle-exclam class="ph-toast-icon" v-else-if="type=='info'" fill="var(--ph-c-top)" stroke="var(--ph-c-reverse)"/>
        <triangle class="ph-toast-icon" v-else-if="type=='warning'" fill="var(--ph-c-reverse)" stroke="var(--ph-c-top)"/>
        <circle-times class="ph-toast-icon" v-else-if="type=='error'" fill="var(--ph-c-top)" stroke="var(--ph-c-reverse)"/>
        <span class="ph-toast-text">{{title}}</span>
    </div>
</template>
<script lang="ts" setup>
import { PropType, defineProps } from 'vue'
import { CircleTick, CircleTimes, CircleExclam, Triangle } from '../icon'
const props = defineProps({
    title: String,
    type: String as PropType<'success'|'warning'|'error'|'info'>,
    position: {type:String as PropType<'bottom'|'top'|'center'>,default:"center"},
})
</script>
<style lang="scss">
.ph-toast{
    position: fixed;
    left: 0;
    right: 0;
    top:0;
    bottom: 0;
    width: fit-content;
    height: fit-content;
    margin: auto;
    font-size: 12px;
    padding: 8px 16px;
    backface-visibility: hidden;
    border-radius: 5px;
    font-weight: 500;
    background-color: var(--ph-toast-bg);
    color: var(--ph-c-top);
    z-index: var(--ph-zdx-popover);
    box-shadow: var(--ph-shadow-3);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &-withicon{
        min-width: 100px;
        min-height: 100px;
    }
    &[position=top]{
        top: 80px;
        bottom: auto;
    }
    &[position=bottom]{
        bottom: 80px;
        top: auto;
    }
    .ph-toast-icon{
        --ph-i-size: 32px;
        border: none;
        margin-bottom: 8px;
    }
}
</style>