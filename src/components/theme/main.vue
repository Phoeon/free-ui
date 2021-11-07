<template>
    <div class="ph-theme-shifter" @mouseenter.capture="onEnter" @mouseleave="onLeave">
        <f-button shape="square" fillMode="none" :type="theme"><sun v-if="mode===Fr.dark"/><moon v-else/></f-button>
        <teleport to="body">
            <f-pop-container 
                class="ph-theme-card" 
                v-model="state.visible" 
                :rect="state.rect"
                :position="popposition"
                @enter="onPickerEnter" 
                @leave="onPickerLeave">
                <div class="ph-mode-zone">
                    <sun :active="mode===Fr.light" @click="emits('update:mode',Fr.light)"/>
                    <moon :active="mode===Fr.dark" @click="emits('update:mode',Fr.dark)"/>
                </div>
                <div class="ph-theme-zone">
                    <template v-for="th in state.themes" :key="th">
                        <circle-tick class="ph-theme-option" v-if="theme===th" :active="theme===th" :type="th"/>
                        <div v-else :class="['ph-theme-option','ph-theme-option-'+th]" @click="emits('update:theme',th)"></div>
                    </template>
                </div>
            </f-pop-container>
        </teleport>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, PropType, reactive, defineEmits } from 'vue'
import { Sun,Moon,CircleTick } from '../icon'
import { Fr } from '../../shared/config'
import { IPopPosition } from '../pop/types'
import FButton from '../button/main.vue'
import FPopContainer from '../pop/base.vue'
const emits = defineEmits(["update:mode","update:theme"])
const props = defineProps({
    popposition:{type:String as PropType<IPopPosition>,default:"bc"},
    mode:{type:String as PropType<'dark'|'light'>,default:"dark"},
    theme:{type:String as PropType<'success'|'danger'|'warning'|'info'|'noble'>,default:"danger"}
})
const state = reactive({
    visible:false,
    enter:false,
    rect:{left:0,top:0,width:0,height:0},
    themes:['success','danger','warning','info','noble']
})
const onEnter = (e:Event)=>{
    state.visible = true
    state.rect = (e.target as HTMLElement).getBoundingClientRect()
}
const onLeave = ()=>{
    setTimeout(()=>{
        if(state.enter)return
        state.visible = false
    },300)
}
const onPickerEnter = ()=>{
    state.enter = true
}
const onPickerLeave = ()=>{
    state.enter = false
    state.visible = false
}
</script>
<style lang="scss">
.ph-theme-shifter{
    display: inline-flex;
}
.ph-theme-card{
    .ph-mode-zone,
    .ph-theme-zone{
        display: flex;
        align-items: center;
    }
    .ph-mode-zone {
        margin-bottom: var(--ph-pd);
        .ph-icon{
            cursor: pointer;
            margin-right: var(--ph-pd-sm);
            transform: scale(1);
            transition: var(--ph-ts-ei);
            &[active=true]{
                --ph-i-color:var(--ph-c-reverse);
                transform: scale(1.5);
            }
        }
    }
    .ph-icon{
        --ph-i-size:var(--ph-gicon-sm);
    }
    .ph-theme-option{
        width: var(--ph-gicon-sm);
        height: var(--ph-gicon-sm);
        border-radius: 50%;
        margin-right: var(--ph-pd-sm);
        transition: var(--ph-ts-ei);
        transform: scale(1);
        cursor: pointer;
        &-noble{
            background-color: var(--ph-noble);
        }
        &-success{
            background-color: var(--ph-success);
        }
        &-danger{
            background-color: var(--ph-danger);
        }
        &-warning{
            background-color: var(--ph-warning);
        }
        &-info{
            background-color: var(--ph-info);
        }
        &[active=true]{
            transform: scale(1.5);
        }
    }
}
</style>