<template>
<div class="ph-toast-container" :position="position">
    <div :class="['ph-toast',type||icon?'ph-toast-withicon':'']">
        <circle-success class="ph-toast-icon" v-if="type=='success'" fill="var(--ph-c-top)" stroke="var(--ph-c-reverse)"/>
        <circle-info class="ph-toast-icon" v-else-if="type=='info'" fill="var(--ph-c-top)" stroke="var(--ph-c-reverse)"/>
        <circle-warning class="ph-toast-icon" v-else-if="type=='warning'" fill="var(--ph-c-top)" stroke="var(--ph-c-reverse)"/>
        <circle-danger class="ph-toast-icon" v-else-if="type=='error'" fill="var(--ph-c-top)" stroke="var(--ph-c-reverse)"/>
        <custom-icon class="ph-toast-icon" :name="icon" v-else-if="icon"/>
        <span class="ph-toast-text">{{title}}</span>
    </div>
</div>
</template>
<script lang="ts" setup>
import { PropType, defineProps } from 'vue'
import { CircleSuccess, CircleDanger, CircleInfo, CircleWarning,CustomIcon } from '../icon'
const props = defineProps({
    title: String,
    icon: String,
    type: String as PropType<'success'|'warning'|'error'|'info'>,
    position: {type:String as PropType<'bottom'|'top'|'center'>,default:"center"},
})
</script>
<style lang="scss">
.ph-toast-container{
    position: fixed;
    width: 0;
    height: 0;
    overflow: visible;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate3d(0,0,0);
    z-index: var(--ph-zdx-modal);
    &[position=top]{
        top: 80px;
        bottom: auto;
    }
    &[position=bottom]{
        bottom: 80px;
        top: auto;
    }
}
.ph-toast{
    --ph-toast-max-w:380px;
    --ph-toast-min-w:95px;
    --ph-toast-pd:8px 20px;

    backface-visibility: hidden;
    border-radius: 5px;
    font-weight: 500;
    font-size: var(--ph-gtoast-fs);
    background-color: var(--ph-toast-bg);
    color: var(--ph-c-top);
    box-shadow: var(--ph-shadow-3);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: var(--ph-toast-max-w);
    padding: var(--ph-toast-pd);
    flex-shrink: 0;
    &-withicon{
        padding: 0;
        min-width: var(--ph-toast-min-w);
        min-height: var(--ph-toast-min-w);
    }
    .ph-toast-icon{
        --ph-i-size: 32px;
        font-size: var(--ph-gtoast-ih);
        margin-bottom: var(--ph-gtoast-imb);
    }
}
@media screen and (max-width:768px){
    .ph-toast{
        --ph-toast-min-w:var(--ph-gtoast-h);
        --ph-toast-max-w:var(--ph-gmodal-w);
        --ph-toast-pd:var(--ph-8) var(--ph-pd-small);
    }
    .ph-toast-text{
        font-size: var(--ph-gtoast-fs);
        line-height: var(--ph-gtoast-lh);
        text-align: center;
    }
}
</style>