<template>
<f-mask v-model="state.visible" :alpha="!state.sm" @click="onClose">
<transition name="ph-upbit">
    <div :class="['ph-dt-container',isCascade?'ph-dt-container-cascade':'']" v-if="state.visible" :sample="sample" ref="edtpicker" :style="style" @click.stop>
        <dt-cascade 
            v-if="isCascade"
            :lang="langs"
            :importants="importants"
            :min="min"
            :max="max"
            :format="format"
            :type="type"
            :value="value" 
            :simple="state.sm"
            @done="onDone"></dt-cascade>
        <dt-single 
            v-else
            :lang="langs"
            :importants="importants"
            :min="min"
            :max="max"
            :format="format"
            :type="type"
            :value="value" 
            :simple="state.sm"
            @done="onDone"></dt-single>
        
    </div>
</transition>
</f-mask>
</template>
<script lang="ts" setup>
import { computed, defineProps, nextTick, onMounted, PropType, reactive, ref } from 'vue'
import { IDtImportant, IDtType } from './types'

import Lang from './lang'
import FMask from '../mask/main.vue'
import DtSingle from './single.vue'
import DtCascade from './cascade.vue'
import getPosition from 'ph-position'
import Mediaquery from '../../shared/media-query'
const props = defineProps({
    value:[Array,String] as PropType<string|Array<string>>,
    lang:{type:String,default:'cn'},
    min:String,
    max:String,
    format:String,
    importants:Array as PropType<Array<IDtImportant>>,
    type: {type:String as PropType<IDtType>,default:'date'},
    rect: {type:Object as PropType<{x:number,y:number,height:number,width:number}>,required:true},
    close: Function as PropType<()=>void>,
    done: Function as PropType<(v:string|Array<string>)=>void>,
    sample:Boolean //只做静态展示，不用关注
})
const edtpicker = ref<HTMLElement>()
const isCascade = computed(()=>props.value instanceof Array)
const state = reactive({
    loading:true,
    visible:false,
    sm:false
})
const langs = computed(()=>(Lang as Record<string,any>)[props.lang]||Lang.cn);
const style = reactive({
    left:"auto",
    top:"top"
})
const onDone = (v:string|Array<string>)=>{
    state.visible = false
    props.done?.(v)   
}
const onClose = ()=>{
    state.visible = false
    props.close?.()
}
const mediaQuery = (a:boolean,dw:number)=>{
    state.sm = dw<=768
    nextTick(()=>{
        reposition()
    })
}
Mediaquery.all(mediaQuery)
const reposition = ()=>{
    if(!edtpicker.value)return
    const { x,y } = getPosition(edtpicker.value,props.rect,{top:true})
    style.left = state.sm?'auto':x+"px"
    style.top = state.sm?'auto':y+"px"
}
onMounted(()=>{
    state.visible = true
    mediaQuery(false,document.documentElement.clientWidth)
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
    background-color: var(--ph-dt-bg);
    color: var(--ph-c);
    &[sample=true]{
        position: relative;
    }
    &-cascade{
        width: calc(var(--ph-dt-w) * 2);
        display: flex;
    }
}
@media screen and (max-width:768px){
    .ph-dt-container{
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
    }
}
</style>