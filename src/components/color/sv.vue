<template>
    <div class="ph-color-sv" :style="svStyle" ref="esv" @click="onClick">
        <div class="ph-color-sv-handler" @click.stop v-touchmove="onTouchmove" :active="state.moving" :style="style"></div>
    </div>
</template>
<script lang="ts" setup>
import { hsb2rgb, rgb2hexstr } from '../../shared/color'
import { computed, defineProps, defineEmits, nextTick, onMounted, reactive, ref, PropType, StyleValue } from 'vue'
import { touchmove as vTouchmove } from '../../directives/gesture'

const emits = defineEmits(['update-sb'])
const esv = ref<HTMLElement>()
const props = defineProps({
    hsb:{type:Array as PropType<Array<number>>,required:true}
})
const state = reactive({
    svw:1,
    svh:1,
    moving:false
})
const svStyle = computed(()=>{
    return {
        '--ph-c-sv-bg':rgb2hexstr(hsb2rgb([props.hsb[0],100,100]))
    } as StyleValue
})
const style = computed(()=>{
    const tx = props.hsb[1]*state.svw/100,
    ty = (100-props.hsb[2])*state.svh/100;
    return {
        transform: `translate3d(${tx}px,${ty}px,0)`
    }
})
const update = (x:number,y:number)=>{
    const s = x*100/state.svw,
    b = (state.svh-y)*100/state.svh
    emits('update-sb',[s,b])
}
const onTouchmove = (e:Event,meta:{tx:number,ty:number,end:boolean})=>{
    state.moving = !meta.end
    const 
        x = Math.min(state.svw,Math.max(0,meta.tx)),
        y = Math.min(state.svh,Math.max(0,meta.ty));
        update(x,y)
}
const onClick = (e:MouseEvent)=>{
    if(!esv.value)return
    const {clientX,clientY} = e
    const {left,top} = esv.value.getBoundingClientRect()
    update(clientX-left,clientY-top)
}
onMounted(()=>{
    nextTick(()=>{
        if(!esv.value)return
        state.svw = esv.value.offsetWidth
        state.svh = esv.value.offsetHeight
    })
})
</script>
<style lang="scss">
.ph-color-sv{
    --ph-c-sv-bg:transparent;
    height: var(--ph-c-sv);
    position: relative;
    background-image: var(--ph-c-alpha-bg);
    cursor: pointer;
    overflow: hidden;
    &:before,
    &:after{
        width:100%;
        height: 100%;
        content: "";
        position: absolute;
    }
    &:before{
        background-image: linear-gradient(90deg, rgb(255, 255, 255) 0%, var(--ph-c-sv-bg) 100%) ;
    }
    &:after{
        background-image: linear-gradient(180deg,transparent,#000);
    }
    .ph-color-sv-handler{
        border: 1px solid var(--ph-c-white);
        border-radius: 50%;
        width: 10px;
        height: 10px;
        position: absolute;
        background-color: transparent;
        transition: transform .15s ease;
        left: -5px;
        top: -5px;
        z-index: 1;
        &[active=true]{
            transition: none;
        }
    }
}
</style>