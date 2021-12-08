<template>
    <div class="ph-color-minput">
        <div :class="['ph-color-mipwrap',item.cn?item.cn:'']" v-for="(item ,idx) in ds" :key="idx">
            <span class="ph-color-mipaddon" v-if="item.prefix">{{item.prefix}}</span>
            <input v-if="item.hex" :value="item.v" @change="onHexInput" :data-idx="idx">
            <input v-else :value="item.v" :data-min="item.min" :data-max="item.max" @change="onInput" @keyup.up.prevent="onPlus" @keyup.down.prevent="onMinus" :data-idx="idx">
            <span class="ph-color-mipaddon" v-if="item.suffix">{{item.suffix}}</span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, PropType, defineEmits } from 'vue'
import type { IColorType } from '../../shared/types'
import { ColorMode, ColorReg, between, isColorHex } from '../../shared/color'


const emits = defineEmits(['color-input'])
const props = defineProps({
    mode: String as PropType<IColorType>,
    hsb:{type:Array as PropType<Array<number>>,default:()=>[]},
    rgb:{type:Array as PropType<Array<number>>,default:()=>[]},
    hex:String
})
const ds = computed(()=>{
    if(props.mode === ColorMode.hsb)
    return [{
        v:props.hsb[0],
        min:0,
        max:360
    },{
        v:props.hsb[1],
        min:0,
        max:100
    },{
        v:props.hsb[2],
        min:0,
        max:100
    },{
        v:props.rgb[3],
        min:0,
        max:100,
        suffix:'%'
    }] as any
    if(props.mode === ColorMode.rgb)
    return [{
        v:props.rgb[0],
        min:0,
        max:255
    },{
        v:props.rgb[1],
        min:0,
        max:255
    },{
        v:props.rgb[2],
        min:0,
        max:255
    },{
        v:props.rgb[3],
        min:0,
        max:100,
        suffix:'%'
    }] as any
    return [{
        v:props.hex?.replace("#",""),
        hex:true,
        prefix:"#",
        cn:"ph-color-mipwrap-hex"
    },{
        v:props.rgb[3],
        min:0,
        max:100,
        suffix:'%'
    }] as any
})
const onHexInput = (e:Event)=>{
    const 
        t = e.target as HTMLInputElement,
        v = t.value;
    if(isColorHex("#"+v))
    emits('color-input',["#"+v,props.rgb[3]])
}
const onInput = (e:Event)=>{
    const 
        t = e.target as HTMLInputElement,
        v = t.value,
        {min,max,idx} = t.dataset;
    if(!ColorReg.number.test(v))return
    const value = between(Number(v),Number(min),Number(max))
    const ds1 = ds.value as any
    const res = ds1.map((item:any)=>item.hex?'#'+item.v:item.v)
    if(!idx)return
    res[idx] = value
    emits('color-input',res)
}
const onPlus = (e:Event)=>{
    const 
        t = e.target as HTMLInputElement,
        v = t.value,
        {max} = t.dataset,
        nv = Math.min(Number(max),Number(v)+1)+"";
        if(v==nv)return
    t.value=nv
    onInput(e)
}
const onMinus = (e:Event)=>{
    const 
        t = e.target as HTMLInputElement,
        v = t.value,
        {min} = t.dataset,
        nv = Math.max(Number(min),Number(v)-1)+"";
    if(v==nv)return
    t.value=nv
    onInput(e)
}
</script>
<style lang="scss">
.ph-color-minput{
    height: var(--ph-c-input);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    padding-bottom: 0;
    .ph-color-mipwrap{
        height: 26px;
        padding: 3px 5px;
        min-width: 42px;
        background-color: var(--ph-input-bg);
        border-radius: 4px;
        display: flex;
        align-items: center;
        color: var(--ph-c-reverse);
        &-hex{
            min-width: 70px;
        }
        input{
            border: none;
            color: inherit;
            flex: 1;
            width: 0;
            background-color: transparent;
            min-width: 24px;
            text-align: center;
        }
        .ph-color-mipaddon{
            opacity: .5;
        }
        input + .ph-color-mipaddon{
            padding-left: 5px;
        }
    }
}
</style>