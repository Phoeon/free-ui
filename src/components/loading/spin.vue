<template>
    <f-mask v-model="visible" class="ph-loading-mask" :position="isGlobal?'fixed':'absolute'" :fill="bg" ref="loading">
        <div class="ph-loading ph-loading-box" :showbox="showBox">
            <custom-icon class="ph-ld-icon" :name="icon" v-if="icon"/>
            <loading-bounce class="ph-ld-icon1" v-else/>
            <span class="ph-loading-text">{{computedTitle}}</span>
        </div>
    </f-mask>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, defineExpose, ref, PropType, onMounted, computed, watch, Ref } from 'vue'
import { LoadingBounce, CustomIcon } from '../icon'

import FMask from '../mask/main.vue'

const loading = ref<InstanceType<typeof FMask>>()
const emits = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue:[Boolean,Object] as PropType<boolean|Ref<boolean>>,
    title:{type:String,default:"加载中"},
    showBox:{type:String as PropType<"fit"|"always"|"none">,default:"none"},
    bg:String,
    icon:String,
    isGlobal:Boolean,
    countdown:{type:Number,default:-1},
    destroy:Function as PropType<()=>void>
})
const computedTitle = ref(props.countdown>0?"":props.title)
const countDown = (timer:number)=>{
    const title = props.title==="加载中"?"倒计时：{#}s":props.title
    computedTitle.value = title.replace(/{#}/g,timer+"")
}
const visible = computed<boolean>({
    set(v){
        emits('update:modelValue',v)
    },
    get(){
        return props.modelValue as boolean
    }
})
const end = ()=>{
    visible.value = false
    props.destroy?.()
}
const countTask = ()=>{
    let cd = props.countdown
    if(cd>0){
        countDown(cd--)
        let internval = setInterval(()=>{
            if(cd>=0){
               return countDown(cd--)
            }
            clearInterval(internval)
            end()
        },1000)
    }
}
watch(()=>props.modelValue,(v)=>{
    if(props.isGlobal||!v)return
    countTask()
})
defineExpose({
    end
})
onMounted(()=>{
    if(props.isGlobal)countTask()
})
</script>
<style lang="scss">
.ph-loading-mask{
    z-index: var(--ph-zdx-modal);
}
.ph-loading-box{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%,-50%,0);
    margin: auto;
    padding: var(ph-8);
    backface-visibility: hidden;
    border-radius: 5px;
    font-weight: 500;
    background-color: transparent;
    color: var(--ph-c-reverse);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: var(--ph-gloading-h);
    min-height: var(--ph-gloading-h);
    .ph-ld-icon{
        --ph-i-size: 32px;
        font-size: var(--ph-gloading-ih);
        border: none;
        margin-bottom: var(--ph-gloading-imb);
    }
    .ph-ld-icon1{
        margin-bottom: var(--ph-pd-sm);
    }
    .ph-loading-text{
        font-size: var(--ph-gloading-fs);
        line-height: var(--ph-gloading-lh);
    }
}
.ph-loading-mask{
    .ph-loading[showbox=always]{
        background-color: var(--ph-modal-bg);
    }
}
@media screen and (max-width:768px){
    .ph-loading-mask{
        .ph-loading[showbox=fit]{
            background-color: var(--ph-modal-bg);
        }
    }
}
</style>