<template>
<transition name="ph-upbit">
    <div :class="['ph-dt-container',isCascade?'ph-dt-container-cascade':'']" v-if="state.visible" :sample="sample" ref="edtpicker" :style="style" @click.stop>
        <dt-cascade 
            v-if="isCascade"
            :min="min"
            :max="max"
            :format="format"
            :type="type"
            :value="value" 
            @done="onDone"></dt-cascade>
        <dt-single 
            v-else
            :min="min"
            :max="max"
            :format="format"
            :type="type"
            :value="value" 
            @done="onDone"></dt-single>
    </div>
</transition>
</template>
<script lang="ts" setup>
import { computed, defineProps, nextTick, onMounted, PropType, reactive, ref } from 'vue'
import { DtFormat } from './shared'
import { IDtType } from './types'
import DtSingle from './single.vue'
import DtCascade from './cascade.vue'
import getPosition from 'ph-position'

const props = defineProps({
    value:[Array,String] as PropType<string|Array<string>>,
    min:String,
    max:String,
    format:String,
    type: {type:String as PropType<IDtType>,default:'date'},
    rect: {type:Object as PropType<{x:number,y:number,height:number,width:number}>,required:true},
    close: Function as PropType<()=>void>,
    done: Function as PropType<(v:string|Array<string>)=>void>,
    sample:Boolean //只做静态展示，不用关注
})
const edtpicker = ref<HTMLElement>()
const isCascade = computed(()=>props.value instanceof Array)
const state = reactive({
    visible:false,
    ct:-1
})
const style = reactive({
    left:"auto",
    top:"top"
})
const onDone = (v:string|Array<string>)=>{
    state.visible = false
    props.done?.(v)   
}

const onClose = ()=>{
    if(Date.now()-state.ct<300)return
    state.visible = false
    props.close?.()
    document.removeEventListener('click',onClose)
}
onMounted(()=>{
    state.visible = true
    if(props.sample)return
    state.ct = Date.now()
    document.addEventListener('click',onClose)
    nextTick(()=>{
        if(!edtpicker.value)return
        const { x,y } = getPosition(edtpicker.value,props.rect,{top:true})
        style.left = x+"px"
        style.top = y+"px"
    })
})
</script>
<style lang="scss">
.ph-dt-container{
    --ph-dt-w:274px;
    position: fixed;
    z-index: var(--ph-zdx-modal);
    height: 326px;
    width: var(--ph-dt-w);
    box-shadow: var(--ph-shadow-2);
    &[sample=true]{
        position: relative;
    }
    &-cascade{
        width: calc(var(--ph-dt-w) * 2);
        display: flex;
    }
}
</style>