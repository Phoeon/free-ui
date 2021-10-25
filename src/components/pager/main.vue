<template>
    <div :class="cns" :style="style">
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
                    :fillMode="cpage!=p?fillMode:'normal'" 
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
            <!-- <ph-select v-if="showPagesize" :value="state.pagesize" @change="onPagesize" dropdownClass="ph-dd-pagesize">
                <ph-option v-for="(ps,k) in psOptions" :key="k" :value="ps.value">{{ps.title}}</ph-option>
            </ph-select>
            <div v-if="showJump" class="ph-pager-jump">
                <span>去 </span>
                <input class="ph-input" type="number" min="1" max="pages" :value="pages" @change="onJump"/>
                <span> 页</span>
            </div>  -->
            <div v-if="showTotal" class="ph-pager-total"> 共{{total}}条 </div> 
        </template>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, computed, ref, PropType, reactive, watch, onBeforeMount } from 'vue'
import { Ellipsis, Caret } from '../icon'
import FButton from '../button/main.vue'
import MediaQuery, { MediaBreak } from '../../shared/media-query'

const emits = defineEmits(["page","update:page","update:pagesize"])
const props = defineProps({
    "show-total":Boolean,
    "show-pagesize":Boolean,
    "show-jump":Boolean,
    "pagesize-options":{
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
    pagercount:Number // 奇数 >= 3
})

const state = reactive({
    pagesize:props.pagesize,
    pagercount:props.pagercount||5,
    small:false,
    size:"normal"
})
const mediaQuery = (placeholder:boolean,dw:number)=>{
    let pagercount = props.pagercount
    let size = "normal"
    if(dw<MediaBreak.xs){
        pagercount = 3
        size = "mini"
    }
    else if(dw<MediaBreak.sm){
        pagercount = 5
        size = "small"
    }
    else if(dw<MediaBreak.md)
        pagercount = 7
    else if(dw<MediaBreak.lg)
        pagercount = 9
    else 
        pagercount = 11
    state.small = dw<MediaBreak.sm&&props.autoSize
    state.pagercount = props.pagercount||pagercount
    state.size = props.size||size
}
MediaQuery.all(mediaQuery)
const cns = computed(()=>{
    return {
        'ph-pager':true
    }
})
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
            title:o+'条/页'
        }
    })
})
const pages = computed(()=>{
    return Math.ceil(props.total / state.pagesize);
})
const cpage = ref(Math.min(props.page,pages.value));
const prevDisabled = computed(()=>cpage.value<=1);
const nextDisabled = computed(()=>cpage.value>=pages.value);

const cps = computed(()=>{
    const ps = state.pagercount
    let cps:number[]=[],
        lp:number;
    if(pages.value<=ps){
        for(let i=1;i<=pages.value;i++)
            cps.push(i)
    }else{
        if(cpage.value>=ps){
            lp = pages.value-cpage.value
            cps.push(1)
            state.small||cps.push(-1)
            if(lp<=3){
                for(let i=ps-lp;i>0;i--){
                    if(cpage.value-i>1)
                        cps.push(cpage.value-i)
                }
                cps.push(cpage.value)
                for(let i=1;i<=lp;i++){
                    cps.push(cpage.value+i)
                }
            }else{
                const span = Math.floor(ps/2)
                for(let i=span;i>0;i--)
                    cps.push(cpage.value-i)
                // cps.push(cpage.value-2)
                // cps.push(cpage.value-1)
                cps.push(cpage.value)
                // cps.push(cpage.value+1)
                // cps.push(cpage.value+2)
                for(let i=1;i<=span;i++)
                    cps.push(cpage.value+i)

                state.small||cps.push(-1)
                cps.push(pages.value)
            }
        }else{
            for(let i=1;i<=ps;i++){
                cps.push(i)
            }
            cps.push(-1)
            cps.push(pages.value)
        }
    }
    
    return cps
})

const goPage = (page:number,ps?:number)=>{
    const pagesize = ps||state.pagesize
    emits("update:page",page)
    emits("update:pagesize",pagesize)
    emits("page",{page,pagesize:pagesize})
}
const onJump = (e:Event)=>{
    const value = +(e.target as HTMLInputElement).value
    console.log(value)
    if(!value)return
    if(value<1||value>pages.value)return
    goPage(value)
}
const onPagesize = (value:number)=>{
    if(!value)return
    //避免抖动
    setTimeout(()=>{
        //判断当前page是否溢出
        const pages = Math.ceil(props.total / value)
        if(props.page>pages)
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
    gap: 8px;
    align-items: center;
    justify-content: var(--ph-pager-justify,flex-start);
    font-size: var(--ph-fs);
}
</style>
