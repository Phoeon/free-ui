<template>
    <input-wrap :class="isCascade?'ph-dt-cascade-ipwrap':''" @click.stop="onClick" :disabled="disabled" :placeholder="placeholder" ref="ewrap">
        <template #default="scope">
            <template v-if="isCascade">
                <input 
                class="ph-datetime-input"
                :readonly="true"
                :placeholder="scope.placeholder" 
                :disabled="scope.disabled"
                :value="modelValue[0]"
                />
                <div class="ph-ip-divider"></div>
                <input 
                class="ph-datetime-input"
                :readonly="true"
                :placeholder="scope.placeholder" 
                :disabled="scope.disabled"
                :value="modelValue[1]"
                />
            </template>
            <input 
            v-else
            class="ph-datetime-input"
            :readonly="true"
            :placeholder="scope.placeholder" 
            :disabled="scope.disabled"
            :value="modelValue"
            />
        </template>
        <template #right>
            <Time v-if="type===DtType.time"/>
            <Datetime v-else-if="type===DtType.datetime"/>
            <Date v-else/>
        </template>
    </input-wrap>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, PropType, ref, computed } from 'vue'
import { IDtType } from '../../shared/types';
import { DtType } from '../datetime/shared'
import { Time, Date, Datetime } from '../icon'
import DtPicker from '../datetime'
import InputWrap from './input-wrap.vue'

const ewrap = ref<InstanceType<typeof InputWrap>>()
const emits = defineEmits(['update:modelValue','input'])

const props = defineProps({
    modelValue:{type:[Array,String] as PropType<string|Array<string>>,required:true},
    disabled:Boolean,
    placeholder:String,
    startPlaceholder:String,
    endPlaceholder:String,
    format:String,
    min:String,
    max:String,
    now:Boolean,
    clear:Boolean,
    type:String as PropType<IDtType>
})
const done = (v?:string|Array<string>)=>{
    emits('update:modelValue',v);
    emits('input',v);
}
const isCascade = computed(()=>props.modelValue instanceof Array)
const onClick = ()=>{
    if(props.disabled)return
    const rect = ewrap.value?.$el.getBoundingClientRect()
    DtPicker.show({
        value:props.modelValue,
        type:props.type,
        format:props.format,
        min:props.min,
        max:props.max,
        now:props.now,
        clear:props.clear,
        rect
    }).done(done)
}
</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-dt-cascade-ipwrap{
    max-width: 100%;
    .ph-datetime-input:nth-of-type(1){
        border-radius: var(--ph-ip-br) 0 0 var(--ph-ip-br);
        border-right: none;
    }
    .ph-datetime-input:nth-of-type(2){
        border-radius: 0 var(--ph-ip-br) var(--ph-ip-br) 0;
        border-left: none;
    }
}
.ph-datetime-input{
    @include input();
}
</style>