<template>
    <div class="ph-view" @scroll="onViewScroll" ref="eview">
        <slot></slot>
        <transition name="ph-fade">
            <backtop v-if="backtop&&state.showBacktop" @backtop="onBacktop"/>
        </transition>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, nextTick, onMounted, reactive, Ref, ref } from 'vue'
import Backtop from '../back-top/main.vue'
import Animation,{EndPoint} from '../../shared/animation'

const eview = ref() as Ref<HTMLElement>
const props = defineProps({
    backtop:{type:Boolean,default:true}
})
const state = reactive({
    timer:-1,
    showBacktop:false
})
const onViewScroll = ()=>{
    if(!props.backtop)return
    const t = eview.value
    clearTimeout(state.timer)
    state.timer = setTimeout(()=>{
        const oh = t.offsetHeight
        state.showBacktop = t.scrollTop>oh/2
    },100)
}
const task = ({y}:EndPoint)=>{
    eview.value.scrollTo(0,y)
}
const onBacktop = ()=>{
    const st = eview.value.scrollTop
    Animation.easeIn(task,{y:st},{y:0},300)
}

onMounted(()=>{
    nextTick(()=>{
        onViewScroll()
    })
})
</script>
<style lang="scss">
.ph-view{
    flex: 1;
    padding: var(--ph-pd-lg);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
</style>