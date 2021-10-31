<template>
    <input-wrap class="ph-switch-wrap">
        <template v-slot:default="scope">
            <div :class="['ph-switch','ph-switch-'+scope.size]" :active="modelValue" :disabled="scope.disabled" @click="!scope.disabled&&onClick(!modelValue)">
                <template v-if="type==='icon'">
                    <tick class="ph-switch-icon ph-switch-icon-l" v-if="modelValue"/>
                    <times class="ph-switch-icon ph-switch-icon-r" v-else/>
                </template>
                <template v-else-if="type==='text'">
                    <span class="ph-switch-icon ph-switch-icon-l" v-if="modelValue">开</span>
                    <span class="ph-switch-icon ph-switch-icon-r" v-else>关</span>
                </template>
            </div>
        </template>
    </input-wrap>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, PropType } from 'vue'
import { Tick, Times } from '../icon'
import InputWrap from './input-wrap.vue'
const props = defineProps({
    modelValue:Boolean,
    type:String as PropType<'text'|'icon'|'normal'>
})
const emits = defineEmits(['update:modelValue','input'])
const onClick = (v:boolean)=>{
    emits('update:modelValue',v);
    emits('input',v);
}
</script>
<style lang="scss">
.ph-switch-wrap{
    justify-content: flex-end;
    align-items: center;
}
.ph-switch{
    --ph-switch-h:22px;
    --ph-switch-br:calc(var(--ph-switch-h) / 2);
    --ph-switch-ir:calc(var(--ph-switch-h) - 4px);
    --ph-switch-irl:calc(var(--ph-switch-h) + 1px);
    --ph-switch-fs:14px;
    --ph-switch-offset:6px;
    width: calc(var(--ph-switch-h) * 2);
    height: var(--ph-switch-h);
    border-radius: var(--ph-switch-br);
    border-width: 1px ;
    border-style: solid;
    background-clip: content-box;
    background-color: var(--ph-fm-switch-bg);
    border-color: var(--ph-fm-switch-bc);
    color: var(--ph-c-d1);
    position: relative;
    transition: all .15s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:after{
        content: "";
        position: absolute;
        border-radius:50%;
        top: 0;
        bottom: 0;
        margin: auto;
        width: var(--ph-switch-ir);
        height: var(--ph-switch-ir);
        background-color: var(--ph-fm-switch-irbg);
        left: 1px;
        transition: all .15s ease;
    }
    .ph-switch-icon{
        --ph-i-size: var(--ph-switch-fs);
        font-size: var(--ph-switch-fs);
        color: var(--ph-c-top);
        text-align: center;
        display: inline-block;
        position: absolute;
        top: 50%;
        font-weight: var(--ph-fw-m);
        transform: translateY(-50%) scale(1);
    }
    .ph-switch-icon-l{
        left: var(--ph-switch-offset);
    }
    .ph-switch-icon-r{
        right: var(--ph-switch-offset);
    }
    &[active=true]{
        background-color: var(--ph-primary);
        border-color: var(--ph-primary);
        &:after{
            left: var(--ph-switch-irl);
        }
    }
    &[disabled=true]{
        cursor: var(--ph-ip-cursor);
        opacity: .3;
    }
    &-small{
        --ph-switch-h:16px;
        --ph-switch-fs:10px;
        --ph-switch-offset:4px;
    }
}
</style>