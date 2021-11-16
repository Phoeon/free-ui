export const c1=`<f-carousel>
    <f-carousel-item>卡片一</f-carousel-item>
    <f-carousel-item>卡片二</f-carousel-item>
    <f-carousel-item>卡片三</f-carousel-item>
    <f-carousel-item>卡片四</f-carousel-item>
</f-carousel>`
export const c2=`<f-carousel :indicatorOutside="true">
    <f-carousel-item>卡片一</f-carousel-item>
    <f-carousel-item>卡片二</f-carousel-item>
    <f-carousel-item>卡片三</f-carousel-item>
    <f-carousel-item>卡片四</f-carousel-item>
</f-carousel>`
export const c3=`<f-carousel direction="vt">
    <f-carousel-item>卡片一</f-carousel-item>
    <f-carousel-item>卡片二</f-carousel-item>
    <f-carousel-item>卡片三</f-carousel-item>
    <f-carousel-item>卡片四</f-carousel-item>
</f-carousel>`
export const c4 = `<template>
    <f-carousel>
        <f-carousel-item>卡片一</f-carousel-item>
        <f-carousel-item>卡片二</f-carousel-item>
        <f-carousel-item>卡片三</f-carousel-item>
        <f-carousel-item>卡片四</f-carousel-item>
        <template #indicator="scope">
            <div class="custom-cs-indicator" 
                v-for="i in arr" :key="i"
                :active="scope.active===i"
                @click="scope.shift(i)"
                ></div>
        </template>
    </f-carousel>
</template>
<style lang="scss">
.custom-cs-indicator{
    width: 8px;
    height: 8px;
    border-radius: 4px;
    transition: all .3s ease;
    background-color: rgb(0,0,0,.2);
    margin: 4px;
    &:hover{
        background-color: rgb(0,0,0,.5);
        cursor: pointer;
    }
    &[active=true]{
        width: 16px;
        background-color: rgb(0,0,0,.5);
    }
}
</style>
`
export const c5=`
interface FCarousel{
    index:{type:Number,default:0}, //默认展示的下标页
    interval:{type:Number,default:5000}, //动画间隔
    autoplay:{type:Boolean,default:true}, //是否自动播放
    indicator:{type:Boolean,default:true}, //是否展示指示器
    indicatorOutside:Boolean,//direction:hr下工作 //指示器内外位置分布
    direction:{type:String as PropType<'hr'|'vt'>,default:"hr"} //方向
}
`