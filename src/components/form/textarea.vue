<template>
    <input-wrap>
        <template v-slot:default="scope">
            <textarea 
            class="ph-textarea"
            :placeholder="scope.placeholder" 
            :disabled="scope.disabled"
            :type="scope.type"
            :value="modelValue"
            @input.stop="onInput"
            @change.stop="onInput"
            />
            <span class="ph-textarea-limit" :overlimit="state.overlimit" v-if="limit&&limit>0">{{modelValue.length}}/{{limit}}</span>
        </template>
    </input-wrap>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
import InputWrap from './input-wrap.vue'
const props = defineProps({
    modelValue:String,
    limit:{type:Number,default:0}
})
const state = {
    overlimit:props.limit>0&&props.modelValue&&props.modelValue.length>props.limit
}
const emits = defineEmits(['update:modelValue','input'])
const onInput = (e:Event)=>{
    let v = (e.target as HTMLInputElement).value
    if(props.limit&&props.limit>0){
        state.overlimit = v.length>props.limit
    }
    if(e.type==="change"&&state.overlimit){
        state.overlimit = false
        v = v.substr(0,props.limit)
    }
    emits('update:modelValue',v);
    emits('input',v);
}
</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-textarea{
    @include input();
    min-height: 110px;
    line-height: 1.4;
    padding-top: var(--ph-pd-sm);
    padding-bottom: var(--ph-pd-sm);
    &-limit{
        position: absolute;
        right: var(--ph-pd-sm);
        bottom: var(--ph-pd-sm);
        font-size:12px;
        line-height: 1;
        color: var(--ph-c-l1);
        &[overlimit=true]{
            color: var(--ph-danger);
        }
    }
}
</style>