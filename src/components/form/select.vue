<template>
    <input-wrap @click.stop="onClick" :disabled="disabled" :placeholder="placeholder" ref="ewrap">
        <template #default="scope">
            <input 
            class="ph-select"
            :readonly="true"
            :placeholder="scope.placeholder" 
            :disabled="scope.disabled"
            :value="textValue"
            />
        </template>
        <template #right>
            <caret direction="down"/>
        </template>
    </input-wrap>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, PropType, onMounted, onBeforeUnmount, reactive, computed, ref } from 'vue'
import { IDropdownItem } from '../pop/types'
import { Caret } from '../icon'

import FPop from '../pop'
import InputWrap from './input-wrap.vue'

let hide:()=>void;
const ewrap = ref<InstanceType<typeof InputWrap>>()
const emits = defineEmits(['update:modelValue','input'])
const state = reactive({
    lock:false,
})
const props = defineProps({
    modelValue:{type:[Array,String,Number],required:true},
    disabled:Boolean,
    multi:Boolean,
    placeholder:String,
    theme:String as PropType<'reverse'|'normal'>,
    options:{
        type:Array as PropType<Array<IDropdownItem>>,
        default:()=>[]
    }
})
const values = computed(()=>{
    return [].concat(props.modelValue as any) as Array<string|number>;
})
const textValue = computed(()=>{
    const res = props.options.filter(opt=>values.value.includes(opt.value))
    return res.map(r=>r.text).join(",")
})

const done = (items:Array<IDropdownItem>)=>{
    console.log(items,'checked')
    const vs = items.map(item=>item.value)
    const res = props.multi?vs:vs[0]
    emits('update:modelValue',res);
    emits('input',res);
}

const showDropdown = (el:HTMLElement,opt:{
    dataSource:Array<IDropdownItem>,
    theme?:'reverse'|'normal',
    multi?:boolean,
    title?:string
})=>{
    if(state.lock)return
    state.lock = true
    // state.open = true
    const {left,top,width,height} = el.getBoundingClientRect()
    const position = 'b'
    const 
        x = left,
        y = top+height;
    
    FPop.showPopSelect({
        ...opt,
        value:values.value,
        x,
        y,
        height,
        width,
        position})
    .done(done)
    setTimeout(()=>{
        state.lock = false
    },300)
}
const onClick = ()=>{
    if(props.disabled)return
    // if(state.open)return
    showDropdown(ewrap.value.$el as HTMLElement,{
        dataSource:props.options,
        theme:props.theme,
        multi:props.multi,
        title:props.placeholder
    })
}
// onMounted(()=>{
//     document.addEventListener("click",onHide)
// })
// onBeforeUnmount(()=>{
//     document.removeEventListener("click",onHide)
// })
</script>
<style lang="scss">
.ph-select{
    flex: 1;
    width: 0;
    border-radius: var(--ph-ip-br);
    border-color: var(--ph-bc);
    border-bottom-color: var(--ph-ip-bbc);
    font-size: var(--ph-ip-fs);
    height: var(--ph-ip-h);
    color: var(--ph-ip-c);
    padding: 0 12px;
    cursor: var(--ph-ip-cursor);
    background-color: var(--ph-ip-bg);
}
</style>