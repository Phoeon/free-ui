<template>
    <div :class="cns" v-show="visible" @click="onClick">
        <div class="ph-scrollbar-indicator" :style="style" @click.stop v-drag="onDrag"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import Drag from '../../directives/drag'
export default defineComponent({
    emits:['drag'],
    directives:{
        Drag,
    },
    props:{
        dir:{
            type:String,
            default:"hr"
        },
        visible:Boolean,
        w:{type:Number,default:0},
        h:{type:Number,default:0},
        x:{type:Number,default:0},
        y:{type:Number,default:0},
    },
    setup(props,{emit}) {
        const cns = computed(()=>{
            return {
                'ph-scrollbar':true,
                'ph-scrollbar-hr':props.dir==="hr",
                'ph-scrollbar-vt':props.dir==="vt",
            }
        })
        const style = computed(()=>{
            return props.dir==="hr"?{
                width:props.w+"px",
                transform:`translateX(${props.x}px)`
            }:{
                height:props.h+"px",
                transform:`translateY(${props.y}px)`
            }
        })
        const onDrag = (xratio:number,yratio:number)=>{
            emit("drag",props.dir==="hr"?xratio:yratio)
        }
        const onClick = (e:MouseEvent)=>{
            const t = e.target as HTMLElement
            const {left,width,top,height} = t.getBoundingClientRect()
            const 
                ex = Math.max(Math.min(left+width,e.pageX),left),
                ey = Math.max(Math.min(top+height,e.pageY),top),
                sx = (ex-left)/width,
                sy = (ey-top)/height;
            onDrag(sx,sy)
        }
        return {cns,style,onDrag,onClick}
    },
})
</script>
<style lang="scss">
.ph-scrollbar{
    position: absolute;
    z-index: 2;
    user-select: none;
    &-indicator{
        position: relative;
        border-radius: 4px;
        background-color: var(--ph-bg-a1-reverse);
        backdrop-filter: blur(10px);
        transition: background-color .3s;
        &:hover{
            opacity: .5;
        }
    }
    &-hr{
        left:2px;
        right: 2px;
        bottom: 0;
        height: 6px;
        .ph-scrollbar-indicator{
            height: 100%;
        }
    }
    &-vt{
        top:2px;
        bottom:2px;
        right: 0;
        width: 6px;
        .ph-scrollbar-indicator{
            width: 100%;
        }
    }
}
</style>
