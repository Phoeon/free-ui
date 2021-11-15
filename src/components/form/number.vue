<template>
    <input-wrap class="ph-number-wrap">
        <template v-slot:left v-if="slots.left">
            <slot name="left"></slot>
        </template>
        <template v-slot:default="scope">
            <input 
            class="ph-number-ip"
            :placeholder="scope.placeholder" 
            :disabled="scope.disabled"
            :value="modelValue"
            ref="eip"
            @change.stop="onInput"
            @keydown.up.prevent="onUp"
            @keydown.down.prevent="onDown"
            />
        </template>
        <template v-slot:right="scope">
            <slot name="right">
                <div class="ph-number-addon">
                    <button :disabled="scope.disabled" class="ph-number-add" :hover="!scope.disabled&&scope.hover" @click="calc(1)"></button>
                    <button :disabled="scope.disabled" class="ph-number-minus" :hover="!scope.disabled&&scope.hover" @click="calc(-1)"></button>
                </div>
            </slot>
        </template>
    </input-wrap>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, useSlots, ref, Ref } from 'vue'
import { Reg } from '../../shared/utils'
import InputWrap from './input-wrap.vue'

const eip = ref() as Ref<HTMLInputElement>
const props = defineProps({
    modelValue:Number,
    step:{type:Number,default:1},
    min:{type:Number,default:-Number.MAX_SAFE_INTEGER},
    max:{type:Number,default:Number.MAX_SAFE_INTEGER},
})
const cst = {
    lock:false,
    timer:-1
}
const slots = useSlots()
const emits = defineEmits(['update:modelValue','input'])
const onNotify = (v:number)=>{
    emits('update:modelValue',v);
    emits('input',v);
}
const getValue = (t:HTMLInputElement,offset=0)=>{
    const mat = t.value.match(Reg.number)
    const value = Number(mat?mat[0]:0)||0
    return Math.min(props.max,Math.max(props.min,value+offset));
}
const onKey = (t:HTMLInputElement,offset:number)=>{
    const v = getValue(t,offset)
    t.value = v+""
    clearTimeout(cst.timer)
    cst.timer = setTimeout(()=>{
        onNotify(v)
    },300)
}
const onInput = (e:Event)=>{
    const t = e.target as HTMLInputElement
    if(cst.lock)return
    cst.lock = true
    setTimeout(()=>{
        const v = getValue(t,0)
        t.value = v+""
        onNotify(v)
        cst.lock = false
    },300)
}
const onUp = (e:Event)=>{
    onKey(e.target as HTMLInputElement,1)
}
const onDown = (e:Event)=>{
    onKey(e.target as HTMLInputElement,-1)
}
const calc = (dir:number)=>{
    onKey(eip.value,dir)
}
</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-number-wrap{
    .ph-number-ip{
        @include input();
    }
    .ph-number-addon{
        position: relative;
        width: 100%;
        height: 100%;
        .ph-number-add,
        .ph-number-minus{
            position: absolute;
            border: none;
            padding: 0;
            margin: 0;
            background-color: transparent;
            color: inherit;
            width: 100%;
            height: 50%;
            outline: none;
            appearance: none;
            user-select: none;
            &:active,
            &[hover=true]:hover{
                color: var(--ph-primary);
            }
            &:after{
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                width: 0;
                height: 0;
                margin: auto;
                border-width: 5px;
                border-style: solid;
                border-color: transparent;
            }
        }
        .ph-number-add{
            top: 0;
            &:after{
                bottom: 2px;
                border-top: none;
                border-bottom-color: currentColor;
            }
        }
        .ph-number-minus{
            bottom: 0;
            &:after{
                top: 2px;
                border-bottom: none;
                border-top-color: currentColor;
            }
        }
    }
}
</style>