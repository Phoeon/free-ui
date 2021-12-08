<template>
    <dt-layout>
        <template #header>
            <dt-header class="ph-dt-date-header" justify="center">
                <span v-if="utype==DtType.datetime">{{lang?.datetimeSetting}}</span>
                <span v-else-if="ctype==DtType.date">{{lang?.dateSetting}}</span>
                <span v-else-if="ctype==DtType.month">{{lang?.monSetting}}</span>
                <span v-else-if="ctype==DtType.year">{{lang?.yearSetting}}</span>
                <span v-else>{{lang?.timeSetting}}</span>
            </dt-header>
        </template>
        <dt-body style="padding: var(--ph-pd-sm);">
            <DtSimplepicker 
                :modelValue="modelValue"
                :ctype="ctype"
                :utype="utype"
                :lang="lang"
                :min="min"
                :max="max"
                @update="update"
            />
        </dt-body>
        <template #footer>
            <dt-footer>
                <div class="ph-dt-footer-left">{{dtstring}}</div>
                <div class="ph-dt-footer-right">
                    <dt-btn @click="emits('clear')" v-if="clear">{{lang?.clear}}</dt-btn>
                    <dt-now @click="emits('now')" :min="min" :max="max" v-if="now">{{lang?.now}}</dt-now>
                    <dt-btn @click="emits('done')">{{lang?.done}}</dt-btn>
                </div>
            </dt-footer>
        </template>
    </dt-layout>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, withDefaults } from 'vue'
import { DtSharedSingleProps, DtType } from '../shared'
import type { IDateObject, ISharedSingleProps, IDtImportant } from '../../../shared/types'
import DtLayout from '../layout/layout.vue'
import DtHeader from '../layout/layout-header.vue'
import DtFooter from '../layout/layout-footer.vue'
import DtBody from '../layout/layout-body.vue'
import DtBtn from '../cmp/btn.vue'
import DtNow from '../cmp/now.vue'
import DtSimplepicker from './simple-picker.vue'

const emits = defineEmits(['update:modelValue','done','clear','now'])
const props = withDefaults(defineProps<{
    min?:number[],
    max?:number[],
    clear?:boolean,
    now?:boolean,
    importants?:IDtImportant[],
    lang?:Record<string,string>,
    format?:string,
    utype:string,
    ctype:string,
    modelValue:[number,number,number,number,number,number],
    innerState:IDateObject,
    dtstring:string}>(),{
        min:()=>[-1,0,0,0,0,0],
        max:()=>[Number.MAX_SAFE_INTEGER,0,0,0,0,0],
        clear:true,
        now:true,
        lang:()=>Object.create({})
    })

const update = (v:Array<number>)=>{
    emits('update:modelValue',v)
}
</script>