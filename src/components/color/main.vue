<template>
<f-mask v-model="state.visible" :alpha="!state.sm" @click="onClose">
<transition name="ph-upbit">
    <div class="ph-color-container" v-if="state.visible" :sample="sample" ref="ecolorpicker" :style="style" @click.stop>
        <div class="ph-color-header">{{title}}</div>
        <Csv :hsb="hsb" @update-sb="onSv"/>
        <Cha v-model:h="hue" v-model:a="alpha" :color="hex" :acolor="state.value" :oc="state.oc" @reset="onReset"/>
        <Cmb v-model="state.cmode"/>
        <Cip :rgb="rgba" :hex="hex" :hsb="hsb" :mode="state.cmode" @color-input="onColorInput"/>
        <Cpdf :colors="colors" @pre-click="onPreClick"/>
        <Cft :color="state.value" @pre-click="onPreClick"/>
    </div>
</transition>
</f-mask>
</template>
<script lang="ts" setup>
import FMask from '../mask/main.vue'
import Csv from './sv.vue'
import Cha from './ha.vue'
import Cmb from './modebar.vue'
import Cip from './input.vue'
import Cpdf from './predef.vue'
import Cft from './footer.vue'

import getPosition from 'ph-position'
import Mediaquery from '../../shared/media-query'

import { computed, defineProps, PropType, reactive, defineEmits, onMounted, ref, nextTick } from 'vue'
import { parseColor, ColorMode, rgb2hsb, rgb2hexstr, hsb2rgb, rgb2rgbstr, n2hex } from '../../shared/color'
import { ColorType } from './types'


const emits = defineEmits(['update'])
const props = defineProps({
    value:String,
    title:String,
    type:String as PropType<ColorType>,
    showPredef:{type:Boolean,default:true},
    colors:Array as PropType<Array<string>>,
    rect: {type:Object as PropType<{x:number,y:number,height:number,width:number}>,required:true},
    close: Function as PropType<()=>void>,
    done: Function as PropType<(v:string,close:()=>void)=>void>,
    sample:Boolean //只做文档静态展示用，不用关注
})
const initColorMeta = parseColor(props.value||'')
const ecolorpicker = ref<HTMLElement>()
const state = reactive({
    h:rgb2hsb(initColorMeta.rgba.slice(0,3)),
    a:initColorMeta.rgba[3],
    oc:props.value,
    value:props.value,
    visible:false,
    cmode : initColorMeta.mode,
    sm:false
})
const onClose = ()=>{
    state.visible = false
    props.close?.()
}
const modelValue = computed({
    set(v:string){
        if(state.value === v)return
        state.value = v
        //notify
        props.done?.(v,onClose)
    },
    get(){
        return state.value as string
    }
})
const cstate = computed(()=>{
    return parseColor(state.value||'')
})
const rgba = computed(()=>{
    return cstate.value.rgba
})
const hsb = computed(()=>{
    return rgb2hsb(rgba.value.slice(0,3))
})
const hex = computed(()=>{
    return rgb2hexstr(rgba.value.slice(0,3))
})
const style = reactive({
    left:"auto",
    top:"top"
})
const onReset = ()=>{
    modelValue.value=state.oc as string
}
const onColorInput = (v:Array<unknown>)=>{
    if(state.cmode===ColorMode.hex){
        const [hex,a] = v
        modelValue.value=hex+n2hex((a as number)*255/100)
    }else{
        const [a,b,c,d] = v as number[]
        if(state.cmode===ColorMode.hsb)
            update([...hsb2rgb([a,b,c]),d])
        else if(state.cmode===ColorMode.rgb)
            update([a,b,c,d])
    }
}
const update = (rgba:number[])=>{
    const mode = props.type||cstate.value.mode
    if(mode===ColorMode.hex)
        modelValue.value=rgb2hexstr(rgba)
    else modelValue.value=rgb2rgbstr(rgba)
}
const hue = computed({
    set(v:number){
        const rgb = hsb2rgb([v,hsb.value[1],hsb.value[2]])
        update([...rgb,rgba.value[3]])
    },
    get(){
        return hsb.value[0]
    }
})
const alpha = computed({
    set(v:number){
        update([...rgba.value.slice(0,3),v])
    },
    get(){
        return rgba.value[3]
    }
})
const onSv = (sv:Array<number>)=>{
    const rgb = hsb2rgb([hsb.value[0],...sv])
    update([...rgb,rgba.value[3]])
}
const onPreClick = (c:string)=>{
    modelValue.value=c
}
const mediaQuery = (a:boolean,dw:number)=>{
    state.sm = dw<=768
    nextTick(()=>{
        reposition()
    })
}
const reposition = ()=>{
    if(!ecolorpicker.value)return
    const { x,y } = getPosition(ecolorpicker.value,props.rect,{top:true})
    style.left = state.sm?'auto':x+"px"
    style.top = state.sm?'auto':y+"px"
}
Mediaquery.all(mediaQuery)
onMounted(()=>{
    state.visible = true
    mediaQuery(false,document.documentElement.clientWidth)
})
</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-color-container{
    --ph-c-w:230px;
    --ph-c-bg:var(--ph-bg-4);
    --ph-c-primary:var(--ph-primary);
    --ph-c-bd:var(--ph-bd);
    --ph-c-bg-d1:var(--ph-bg-a15);
    --ph-c-alpha-bg:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSJub25lIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMCAwaDE1djE1SDB6Ii8+PHBhdGggZmlsbD0iI0U2RTZFNiIgZD0iTTAgMGg3LjV2Ny41SDB6TTcuNSA3LjVIMTVWMTVINy41eiIvPjwvZz48L3N2Zz4=");
    --ph-c-bar:38px;
    --ph-c-sv:150px;
    --ph-c-ha:52px;
    --ph-c-modebar:25px;
    --ph-c-input:38px;
    --ph-c-predef:60px;
    --ph-c-predef-item:14px;
    --ph-c-predef-item-gap:10px;
    --ph-c-pv-w:28px;//预览大小

    width:var(--ph-c-w);
    box-shadow: var(--ph-shadow-2);
    background-color: var(--ph-c-bg);
    border-radius: 12px;
    font-size: 12px;
    position: fixed;
    z-index: var(--ph-zdx-modal);
    &[sample=true]{
        position: relative;
    }
    .ph-color-header,
    .ph-color-footer{
        position: relative;
    }
    .ph-color-header{
        height: var(--ph-c-bar);
        justify-content: center;
        align-items: center;
        color: var(--ph-c-reverse);
        display: flex;
        font-weight: var(--ph-fw-m);
        &:after{
            @include blMx(var(--ph-c-bd));
        }
    }
    .ph-color-footer{
        &:after{
            @include tlMx(var(--ph-c-bd));
        }
    }
}
@media screen and (max-width:768px){
    .ph-color-container{
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        border-radius: 12px 12px 0 0;
    }
}
</style>
