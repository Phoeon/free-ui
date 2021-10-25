<template>
    <div :class="cn" :ph-progress="progress" :style="style">
        <div class="ph-indicator-wrap">
            <div class="ph-indicator" :style="transform"></div>
        </div>
        <circle-success class="ph-indicator-icon" v-if="status===1" />
        <circle-danger class="ph-indicator-icon" v-else-if="status===-1" />
        <label v-else class="ph-progress-label">{{progress}}</label>
    </div>
</template>
<script lang="ts" setup>
import { defineProps,computed,PropType } from 'vue'
import { CircleSuccess,CircleDanger } from '../icon'
const props = defineProps({
    type:{type:String as PropType<'primary'|'success'|'info'|'warning'|'danger'>,default:"primary"},
    value:{type:Number,default:0},
    max:{type:Number,required:true},
    animate:{type:Boolean,default:false},
    striped:{type:Boolean,default:false},
    strokeWidth:{type:Number,default:8},
    format:{type:String,default:"v/m"/* % */},
    fill:String,//填充的背景色
    status:{type:Number,default:0}//1 success -1 error
})

const m = computed(()=>{
    return props.max;
})
const v = computed(()=>{
    return Math.max(0,props.value<m.value?props.value:m.value)
})
const per = computed(()=>{
    return v.value/m.value
})
const style = computed(()=>{
    const style = {} as Record<string,unknown>
    if(props.strokeWidth)
        style["--ph-pb-bh"]= props.strokeWidth+"px"
    if(props.fill)
        style['--ph-primary'] = props.fill
    return style
})
const cn = computed(()=>{
    let type = props.type||"primary"
    if(props.status===1)type = 'success'
    else if(props.status===-1)type= 'danger'
    const cns = ["ph-progress","ph-progress-bar","ph-progress-"+type]
    if(props.striped)
        cns.push("ph-progress-striped");
    if(props.striped&&props.animate)
        cns.push("ph-progress-animate")    
    return cns
})
const transform = computed(()=>{
    const v1 = (per.value-1)*100
    return {
        transform:`translateX(${v1}%)`
    }
})

const progress = computed(()=>{
    if(props.format==="%")
        return (per.value*100).toFixed(0)+"%"
    return props.format.replace(/(v|m)/g,(a:string,b:string)=>{
        return (b==="v"?v.value:m.value)+""
    })
})
</script>
<style lang="scss">
@import './progress.scss';
@keyframes phtransalways{
    0% {background-position-x: 50%;}
    100% {background-position-x: 0%;}
}
.ph-progress-bar{
    position: relative;
    flex-shrink: 0;
    height: 32px;
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    
    .ph-progress-label{
        font-size: 12px;
        line-height: 22px;
    }
    .ph-progress-label,
    .ph-indicator-icon{
        margin-left: 8px;
    }
    .ph-indicator-wrap{
        flex:1;
        position: relative;
        height:var(--ph-pb-bh) ;
        overflow: hidden;
        border-radius: 10px;
        z-index: 2;
        background-color: var(--ph-progress-bg);
    }
    .ph-indicator{
        transition: transform .3s linear;
        transform: translateX(-100%);
        border-radius: 10px;
        background-color: var(--ph-pb-indicator);
    }
    &.ph-progress-striped{
        .ph-indicator:after{
            content:"";
            position: absolute;
            border-radius: 10px;
            top:0;
            left:0px;
            bottom:0;
            right:1px;
            background-size: 20000% 100%;
            background-position-x: -10000%;
            background-image: repeating-linear-gradient(45deg,#FFFFFF33 0px,#FFFFFF33 10px,transparent 10px,transparent 20px);
        }
    }
    &.ph-progress-animate{
        .ph-indicator:after{
            animation: phtransalways 1000s linear infinite;
        }
    }
}
</style>