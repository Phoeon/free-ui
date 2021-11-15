<template>
<f-mask class="ph-modal-mask" v-model="visible">
<transition name="ph-scalein" mode="out-in">
<div class="ph-modal" v-if="visible">
    <div class="ph-modal-layout">
        <div class="ph-icon-wrap" v-if="slots.icon">
            <slot name="icon"></slot>
        </div>
        <div class="ph-content-wrap">
            <h1 class="ph-modal-title">
                <span>{{title}}</span>
            </h1>
            <p class="ph-modal-body">{{content}}</p>
        </div>
    </div>
    <div class="ph-modal-action">
        <slot name="action" :close="close"></slot>
    </div>
</div>
</transition>
</f-mask>
</template>
<script lang="ts" setup>
import { defineProps, nextTick, PropType, ref , useSlots} from 'vue'
import FMask from '../mask/main.vue'
import type IEvt from 'ph-evt'

const slots = useSlots()
const props = defineProps({
    cancelText:String,
    doneText:String,
    title:String,
    content:String,
    icon:String,
    evt: Object as PropType<IEvt>
})

const visible = ref(false)
const close = (action:string|number)=>{
    visible.value = false
    props.evt?.emit("close",action)
}
nextTick(()=>{
    visible.value = true
})
</script>
<style lang="scss">
.ph-modal-mask{
    z-index: var(--ph-zdx-modal);
}

.ph-modal{
    position: relative;
    border-radius: 8px;
    background-color: var(--ph-modal-bg);
    color: var(--ph-c);
    box-shadow: var(--ph-shadow-2);
    padding-top: var(--ph-gmodal-pd);
    width: var(--ph-gmodal-w);
    &-layout{
        display: flex;
        padding: 0 var(--ph-gmodal-pd);
        .ph-content-wrap{
            flex: 1;
            overflow: hidden;
        }
        .ph-modal-title{
            font-weight: 500;
            color: var(--ph-modal-tc);
            font-size: var(--ph-gmodal-tfs);
            line-height: var(--ph-gmodal-tlh);
            margin-bottom: var(--ph-gmodal-tmb);
            display: flex;
            justify-content: var(--ph-modal-tjustify);
        }
        .ph-modal-body{
            font-size: var(--ph-gmodal-bdfs);
            line-height: var(--ph-gmodal-bdlh);
            color: var(--ph-modal-bdc);
            text-align: var(--ph-modal-bdjustify);
        }
    }
    &-action{
        display: flex;
        justify-content: flex-end;
        margin-top: var(--ph-gmodal-amt);
        padding: var(--ph-gmodal-apd);
        padding-top: 0;
        .ph-btn{
            --ph-btn-fs:var(--ph-gmodal-afs);
        }
    }
}
@media screen and ( max-width:768px){
    .ph-modal{
        --ph-modal-tc: var(--ph-c-reverse);
        --ph-modal-bdc: var(--ph-c-l1);
        --ph-modal-tjustify: center;
        --ph-modal-bdjustify: center;
    }
}
@media screen and (min-width:769px){
    .ph-modal{
        --ph-modal-tc: var(--ph-c-d1);
        --ph-modal-tjustify: flex-start;
        --ph-modal-bdjustify: left;
    }
}
</style>