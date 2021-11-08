<template>
    <f-mask class="ph-loading-mask" :position="position" :fill="fill" ref="loading">
        <div class="ph-loading" :showbox="showBox">
            <custom-icon class="ph-ld-icon" :name="icon" v-if="icon"/>
            <loading-bounce class="ph-ld-icon1" v-else/>
            <span class="ph-loading-text">{{computedTitle}}</span>
        </div>
    </f-mask>
</template>
<script lang="ts" setup>
import { defineProps, defineExpose, ref, PropType, onMounted } from 'vue'
import { LoadingBounce, CustomIcon } from '../icon'

import FMask from '../mask/main.vue'

const loading = ref<InstanceType<typeof FMask>>()
const props = defineProps({
    position:{tpye:String,default:"absolute"},
    title:{type:String,default:"加载中"},
    showBox:{type:String as PropType<"fit"|"always"|"none">,default:"none"},
    fill:String,
    icon:String,
    countdown:{type:Number,default:-1},
    destroy:Function as PropType<()=>void>
})
const computedTitle = ref(props.countdown>0?"":props.title)
const countDown = (timer:number)=>{
    const title = props.title==="加载中"?"倒计时：{#}s":props.title
    computedTitle.value = title.replace(/{#}/g,timer+"")
}

const close = ()=>{
    loading.value.hide()
    props.destroy?.()
}
defineExpose({
    close
})
onMounted(()=>{
    let cd = props.countdown
    if(props.countdown>0){
        countDown(cd--)
        let internval = setInterval(()=>{
            if(cd>=0){
               return countDown(cd--)
            }
            clearInterval(internval)
            close()
        },1000)
    }
})
</script>
<style lang="scss">
.ph-loading-mask{
    z-index: var(--ph-zdx-modal);
}
.ph-loading{
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
    &[position=fixed]{
        .ph-loading[showbox=always]{
            background-color: var(--ph-modal-bg);
        }
    }
}
@media screen and (max-width:768px){
    .ph-loading-mask{
        &[position=fixed]{
            .ph-loading[showbox=fit]{
                background-color: var(--ph-modal-bg);
            }
        }
    }
}
</style>