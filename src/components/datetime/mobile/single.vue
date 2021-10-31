<template>
    <dt-layout>
        <template #header>
            <dt-header class="ph-dt-date-header" justify="center">
                <span v-if="utype==DtType.datetime">{{lang.datetimeSetting}}</span>
                <span v-else-if="ctype==DtType.date">{{lang.dateSetting}}</span>
                <span v-else-if="ctype==DtType.month">{{lang.monSetting}}</span>
                <span v-else-if="ctype==DtType.year">{{lang.yearSetting}}</span>
                <span v-else>{{lang.timeSetting}}</span>
            </dt-header>
        </template>
        <dt-body>
            <DtSimplepicker 
                :modelValue="modelValue"
                :ctype="ctype"
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
                    <dt-btn @click="emits('clear')" v-if="clear">{{lang.clear}}</dt-btn>
                    <dt-now @click="emits('now')" :min="min" :max="max" v-if="now">{{lang.now}}</dt-now>
                    <dt-btn @click="emits('done')">{{lang.done}}</dt-btn>
                </div>
            </dt-footer>
        </template>
    </dt-layout>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
import { SharedSingleProps, DtType } from '../shared'
import DtLayout from '../layout/layout.vue'
import DtHeader from '../layout/layout-header.vue'
import DtFooter from '../layout/layout-footer.vue'
import DtBody from '../layout/layout-body.vue'
import DtBtn from '../cmp/btn.vue'
import DtNow from '../cmp/now.vue'
import DtSimplepicker from './simple-picker.vue'

const emits = defineEmits(['update:modelValue','done','clear','now'])
const props = defineProps({
    ...SharedSingleProps,
    utype:String,
    ctype:String
})

const update = (v:Array<number>)=>{
    emits('update:modelValue',v)
}
</script>