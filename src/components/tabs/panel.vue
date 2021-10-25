<template>
    <div :class="cns">
        <slot></slot>
    </div>
</template>
<script lang="ts">
export default {
    name:"FTabPanel"
}
</script>

<script lang="ts" setup>
import { computed, defineProps, inject, Ref, ref, watch } from 'vue' 
const PanelStatus = {
    show:0,
    left:-1,
    right:1
}
const props = defineProps({
    title:String,
    icon:String,
    disabled:Boolean,
    index:{type:Number,required:true}
})
const current = inject("currentIndex") as Ref<number>
const currentStatus = ref(props.index>current.value?1:(props.index<current.value?-1:0))
const cns = computed(()=>{
    return {
        'ph-tabpanel':true,
        'ph-tabpanel-show':currentStatus.value===PanelStatus.show,
        'ph-tabpanel-left':currentStatus.value===PanelStatus.left,
        'ph-tabpanel-right':currentStatus.value===PanelStatus.right,
    }
})
watch(()=>current.value,(v,o)=>{
    if(currentStatus.value === PanelStatus.show){
        if(v<o)currentStatus.value = PanelStatus.right
        if(v>o)currentStatus.value = PanelStatus.left
    }else if(v===props.index){
        currentStatus.value = PanelStatus.show
    }
})
</script>
<style lang="scss">
.ph-tabpanel{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: var(--ph-pd-small);
    transition: transform .3s ease;
    transform: translate3d(0,0,0);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    &-show{
        z-index: 1;
    }
    &-left{
        transform: translate3d(-100%,0,0);
    }
    &-right{
        transform: translate3d(100%,0,0);
    }
}
</style>