<template>
    <div class="ph-color-ha" :style="style">
        <div class="ph-color-preview">
            <div class="ph-cpreview-oc" @click="$emit('reset')" title="恢复初色"></div>
            <div class="ph-cpreview-c"></div>
        </div>
        <div class="ph-color-ha-zone">
            <slider class="ph-color-hue-slider" v-model="hue" :max="360" :showProgress="false"/>
            <slider class="ph-color-alpha-slider" v-model="alpha" :max="100" :showProgress="false"/>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue'
import type { StyleValue } from 'vue'
import Slider from '../form/slider.vue'

const emits = defineEmits(['update:h','update:a','reset'])
const props = defineProps({
    h:{type:Number,required:true},
    a:{type:Number,required:true},
    color:String,
    acolor:String,
    oc:String
})
const hue = computed({
    set(v:number){
        emits('update:h',v)
    },
    get(){
        return props.h
    }
})
const alpha = computed({
    set(v:number){
        emits('update:a',+v.toFixed(2))
    },
    get(){
        return props.a
    }
})
const style = computed(()=>{
    return {
        '--ph-c-oc':props.oc,
        '--ph-c-c':props.color,
        '--ph-c-ac':props.acolor
    } as StyleValue
})
</script>
<style lang="scss">
.ph-color-ha{
    display: flex;
    align-items: center;
    height: var(--ph-c-ha);
    padding: 0 10px;
    .ph-color-preview{
        width: var(--ph-c-pv-w);
        height: var(--ph-c-pv-w);
        background-image: var(--ph-c-alpha-bg);
        border-radius: 5px;
        overflow: hidden;
        margin-right:10px;
        position: relative;
        background-size: 50%;
        .ph-cpreview-c,
        .ph-cpreview-oc{
            position: absolute;
            width: 100%;
            height: 50%;
        }
        .ph-cpreview-oc{
            top: 0;
            background-color: var(--ph-c-oc);
            cursor: pointer;
        }
        .ph-cpreview-c{
            bottom: 0;
            background-color: var(--ph-c-ac);
        }
    }
    .ph-color-ha-zone{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: var(--ph-c-pv-w);
        .ph-color-hue-slider,
        .ph-color-alpha-slider{
            --ph-slider-bg:transparent;
            --ph-slider-hbg:var(--ph-c-ac);
            height: 10px;
            border-radius: 2px;
            flex: 0 0 auto;
            padding: 0;
        }
        .ph-color-hue-slider{
            background-image: linear-gradient(90deg,red,#fffc00 16.667%,#01b407 33.333%,#00eaff 50%,#000390 66.667%,#ff00c6 83.333%,red);
        }
        .ph-color-alpha-slider{
            background-image: var(--ph-c-alpha-bg);
            background-position: center;
            &:before{
                content: "";
                position: absolute;
                border-radius: inherit;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(90deg,transparent,var(--ph-c-c));
            }
        }
    }
}
</style>