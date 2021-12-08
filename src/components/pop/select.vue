<template>
<f-mask v-model="state.visible" :alpha="!state.sm" @click="close">
<transition :name="state.animation">
    <div v-if="state.visible" 
    @click.stop class="ph-pop-select ph-pop" 
    ref="edom" :style="style">
        <div class="ph-ppdd-header" v-if="title&&state.sm">{{title}}</div>
        <ul class="ph-ppdd-list">
            <li class="ph-ppdd-li" 
                v-for="(item,idx) in dataSource" 
                :disabled="item.disabled" 
                :active="isActive(item.value)" 
                :key="idx" 
                @click="(!item.disabled)&&onClick(item)" :hover="state.hover&&!item.disabled">
                <custom-icon class="ph-ppdd-icon" :name="item.icon" v-if="item.icon"/>
                <span class="ph-ppdd-text">{{item.text}}</span>
                <tick v-if="isActive(item.value)" type="primary"/>
            </li>
        </ul>
        <div class="ph-ppdd-action" v-if="isMulti">
            <f-button :radius="false" :block="true" fillMode="reverse" type="primary" @click="onDone">确定</f-button>
        </div>
    </div>
</transition>
</f-mask>
</template>
<script lang="ts" setup>
import './popover.scss';
import { defineProps, nextTick, onMounted, PropType, reactive, ref, computed } from 'vue'
import { CustomIcon, Tick } from '../icon'
import type { IDropdownItem, IValue, IKey, IRect } from '../../shared/types'
import FButton from '../button/main.vue'
import getPosition from 'ph-position'
import MediqQuery from '../../shared/media-query'
import FMask from '../mask/main.vue'

const edom = ref<HTMLElement>()
const props = defineProps({
    dataSource:{type:Array as PropType<Array<IDropdownItem>>,default:()=>[]},
    value:{type:[Array,String,Number] as PropType<IValue>,required:true},
    rect:{type:Object as PropType<IRect>,default:()=>{
        return {left:0,top:0,width:0,height:0}
    }},
    title:String,
    notify:Function as PropType<(v:IValue)=>void>,
    destroy:Function as PropType<()=>void>,
    animation:{type:String,default:'ph-upbit'}
})

const state = reactive({
    visible:false,
    hover:!("ontouchstart" in window),
    sm:false,
    animation:props.animation,
    value:props.value
})
const isMulti = computed(()=>props.value instanceof Array)
const style = reactive({
    left:'auto',
    top:'auto',
    minWidth:props.rect.width+"px"
})
const isActive = (k:IKey)=>{
    return isMulti.value?(state.value as Array<IKey>).includes(k):(state.value as IKey)===k
}
const close = ()=>{
    state.visible = false
    props.destroy?.()
}
const onClick = (item:IDropdownItem)=>{
    if(isMulti.value){
        const vs = state.value as Array<IKey>
        const checked = vs.findIndex(v=>v===item.value)>-1
        if(checked)state.value = vs.filter(v=>v!=item.value)
        else vs.push(item.value)
    }
    else{
        if(item.value===state.value)
        props.notify?.('')
        else
        props.notify?.(item.value)
        close()
    }
}
const onDone = ()=>{
    props.notify?.(props.dataSource.filter(item=>(state.value as Array<IKey>).includes(item.value)).map(item=>item.value))
    close()
}
const mediaQuery = (a:any,dw:number)=>{
    state.sm = dw<768
}
MediqQuery.all(mediaQuery)
onMounted(()=>{
    mediaQuery(true,document.documentElement.clientWidth)
    state.visible = true
    if(state.sm){
        style.left = "0px"
        style.top="auto"
        style.minWidth="auto"
        state.animation = "ph-slideup"
        return
    }
    nextTick(()=>{
        if(!edom.value)return
        const { x,y } = getPosition(edom.value,props.rect,{top:true})
        style.left = state.sm?'auto':x+"px"
        style.top = state.sm?'auto':y+"px"
    })
})
</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-pop-select{
    --ph-select-btn-br: 0 0 var(--ph-pop-br) var(--ph-pop-br);
    &:after{
        display: none!important;
    }
    .ph-ppdd-header{
        display: flex;
        height: var(--ph-gdd-h);
        justify-content: center;
        align-items: center;
        color: var(--ph-c-d1);
        font-weight: var(--ph-fw-m);
        border-bottom: 1px solid var(--ph-bd-1);
    }
    .ph-ppdd-action{
        border-radius: var(--ph-select-btn-br);
        overflow: hidden;
        .ph-btn{
            --ph-btn-h:var(--ph-gdd-h);
            --ph-btn-bg:var(--ph-pop-bdc);
            --ph-btn-bc:var(--ph-pop-bdc);
            border-top-color: var(--ph-pop-bc);
        }
    }
    .ph-ppdd-list{
        max-height: var(--ph-pop-listh);
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        .ph-ppdd-li{
            height: var(--ph-gdd-h);
            font-size: var(--ph-gdd-fs);
            display: flex;
            align-items: center;
            color: var(--ph-pop-c);
            padding: 0 var(--ph-pd);
            position: relative;
            cursor: pointer;
            &:nth-last-of-type(n+2):after{
                @include blMx(var(--ph-pop-bc));
                left: 10px;
                right: 10px;
            }
            .ph-ppdd-icon{
                margin-right: var(--ph-pd-sm);
            }
            .ph-ppdd-text{
                flex: 1;
                white-space: nowrap;
            }
            &:not([active=true]):active,
            &:not([active=true])[hover=true]:hover{
                background-color: var(--ph-pop-bg-hover);
            }
            &[active=true]{
                background-color: var(--ph-primary-a1);
                color: var(--ph-primary);
            }
        }
    }
}

@media screen and (max-width:768px){
    .ph-pop-select{
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        --ph-select-btn-br:0;
        --ph-gdd-h:var(--ph-45);
        --ph-pop-br:0;
    }
}
</style>