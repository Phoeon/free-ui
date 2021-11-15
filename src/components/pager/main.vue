<template>
    <div class="ph-pager" :style="style">
        <f-button v-if="prev" :size="state.size" :fillMode="fillMode" :disabled="prevDisabled" @click="goPrev" class="ph-pager-action">
            <template v-slot:leftIcon><caret direction="left"/></template>{{prev}}
        </f-button>
        <f-button v-else :size="state.size" :fillMode="fillMode"  :disabled="prevDisabled" @click="goPrev" shape="square" class="ph-pager-action">
            <template v-slot:leftIcon><caret direction="left"/></template>
        </f-button> 
        <div v-if="simple">
            <span class="ph-text ph-text-primary">{{page}}</span>/<span class="ph-text">{{pages}}</span>
        </div>
        <template v-else>
            <template v-for="p in cps">
                <f-button shape="square" v-if="p>0"
                    class="ph-pager-action"
                    :type="cpage===p?'primary':''"
                    :fillMode="fillMode" 
                    :size="state.size"
                    :key="p"
                    @click="go(p)"
                    >{{p}}</f-button>
                <ellipsis v-else :key="'empty'+p"/>
            </template>
        </template>
        <f-button v-if="next" :size="state.size" :fillMode="fillMode"  :disabled="nextDisabled" @click="goNext" class="ph-pager-action" :title="next">
            <template v-slot:rightIcon><caret direction="right"/></template>{{next}}
        </f-button>
        <f-button v-else :size="state.size" :fillMode="fillMode"  :disabled="nextDisabled" @click="goNext" shape="square" class="ph-pager-action" :title="next">
            <template v-slot:rightIcon><caret direction="right"/></template>
        </f-button> 
        <template v-if="!state.small&&!simple">
            <div class="ph-pager-group" v-if="showPagesize||showJump||showTotal">
                <f-select 
                    v-if="showPagesize" 
                    class="ph-pager-select"
                    v-model="state.pagesize" 
                    :options="psOptions" 
                    @input="onPagesize"/> 
                <f-number v-if="showJump" class="ph-pager-jump" :min="1" :max="pages" v-model="cpage">
                    <template #left>去</template>
                    <template #right>页</template>
                </f-number>
                <div v-if="showTotal" class="ph-pager-total"> 共{{total}}条 </div> 
            </div>
        </template>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, computed, ref, PropType, reactive, watch, onBeforeMount } from 'vue'
import { Ellipsis, Caret } from '../icon'
import { FSelect,FNumber } from '../form'
import MediaQuery, { MediaBreak } from '../../shared/media-query'
import FButton from '../button/main.vue'

const emits = defineEmits(["page","update:page","update:pagesize"])
const props = defineProps({
    showTotal:Boolean,
    showPagesize:Boolean,
    showJump:Boolean,
    pagesizeOptions:{
        type:Array as PropType<Array<number>>,
        default:()=>[10,20,30,50,100]
    },
    justify:{type:String,default:"flex-start"},
    pagesize:{type:Number,default:10},
    page:{type:Number,default:1},
    total:{type:Number,default:0},
    simple:Boolean,
    autoSize:{type:Boolean,default:true},
    prev:String,
    next:String,
    fillMode:String,
    theme:String,
    size:String,
    pagerCount:Number // 奇数 >= 3
})

const state = reactive({
    pagesize:props.pagesize,
    pagerCount:props.pagerCount||5,
    small:false,
    size:"normal"
})
const mediaQuery = (placeholder:boolean,dw:number)=>{
    let pagerCount = props.pagerCount
    let size = "normal"
    if(dw<MediaBreak.xs){
        pagerCount = 5
        // size = "mini"
        size = "small"
    }
    else if(dw<MediaBreak.sm){
        pagerCount = 5
        size = "small"
    }
    else if(dw<MediaBreak.md)
        pagerCount = 7
    else if(dw<MediaBreak.lg)
        pagerCount = 9
    else 
        pagerCount = 11
    state.small = dw<MediaBreak.sm&&props.autoSize
    state.pagerCount = props.pagerCount||pagerCount
    state.size = props.size||size
}
MediaQuery.all(mediaQuery)

const style = computed(()=>{
    const style = {} as Record<string,unknown>
    if(props.justify){
        style['--ph-pager-justify'] = state.small&&!props.simple?'center': props.justify
    }
    if(props.theme)style['--ph-primary'] = `var(--ph-${props.theme})`
    return style
})
const psOptions = computed(()=>{
    return ((props as Record<string,unknown>).pagesizeOptions as number[]).map((o:number)=>{
        return {
            value:o,
            text:o+'条/页'
        }
    })
})
const pages = computed(()=>Math.ceil(props.total / state.pagesize))
const cpage = ref(Math.min(props.page,pages.value));
const prevDisabled = computed(()=>cpage.value<=1);
const nextDisabled = computed(()=>cpage.value>=pages.value);

const cps = computed(()=>{
    const 
        pc = state.pagerCount,
        ps= pages.value,
        p = cpage.value,
        cps:number[] = [],
        offset = Math.floor(pc/2)
        ; 
    let s = 1,e=pc;

    if(ps<pc){
        e = ps
    }else if(p>=pc-1){
        e = Math.min(p+offset,ps)
        s = e-pc+1
    }
    for(let i=s;i<=e;i++)
        cps.push(i)
        
    if(cps.length==pc){
        cps.shift()
        cps.pop()
    }
    const pf = cps[0],pl=cps[cps.length-1];
    
    if(pf!=1){
        if(pf>2&&!state.small)
            cps.unshift(-1)
        cps.unshift(1)
    }
    if(pl!==ps){
        if(pl<ps-1&&!state.small)
            cps.push(-1)
        cps.push(ps)
    }
    return cps
})

const goPage = (page:number,ps?:number)=>{
    const pagesize = ps||state.pagesize
    emits("update:page",page)
    emits("update:pagesize",pagesize)
    emits("page",{page,pagesize:pagesize})
}
const onPagesize = (value:number)=>{
    if(!value)return
    //避免抖动
    setTimeout(()=>{
        //判断当前page是否溢出
        const pages = Math.min(props.page,Math.ceil(props.total / value))
        goPage(pages,value)
        state.pagesize = value
    },200)
}
const goNext = ()=>{
    goPage(props.page+1)
}
const goPrev = ()=>{
    goPage(props.page-1)
}
const go = (p:number)=>{
    if(props.page===p)return
    goPage(p)
}
watch(()=>props.page,(v)=>{
    cpage.value = v
})
onBeforeMount(()=>{
    mediaQuery(true,document.documentElement.clientWidth)
})
</script>
<style lang="scss">
.ph-pager{
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    justify-content: var(--ph-pager-justify,flex-start);
    font-size: var(--ph-fs);
    &-total,
    &-jump,
    &-select{
        margin-right: 8px;
    }
    &-total{
        font-size:12px;
    }
    &-jump,
    &-select{
        width: 100px;
        flex: 0 0 auto;
        --ph-ip-fs: 12px;
        input{
            padding: 0 5px;
            text-align: center;
        }
    }
    .ph-pager-group{
        display: flex;
        align-items: center;
    }
}
</style>
