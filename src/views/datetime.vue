<template>
    <f-view>
        <!-- <f-card title="静态展示">
            <div class="dt-flex-box">
            <dt-picker :sample="true" value="2021-09-20 13:23:45" type="datetime"/>
            <dt-picker :sample="true" value="2021-09-20"/>
            <dt-picker :sample="true" value="2021-09" type="month"/>
            <dt-picker :sample="true" value="2021" type="year"/>
            <dt-picker :sample="true" value="13:23:45" type="time"/>
            </div>
        </f-card> -->
        <f-card title="动态展示">
            <f-button-group :container="true">
                <f-button @click="onClick" data-type="datetime" type="primary">打开日期时间</f-button>
                <f-button @click="onClick" data-type="date" type="success">打开日期</f-button>
                <f-button @click="onClick" data-type="month" type="danger">打开年月</f-button>
                <f-button @click="onClick" data-type="year" type="warning">打开年份</f-button>
                <f-button @click="onClick1" data-type="time">打开时间</f-button>
            </f-button-group>
        </f-card>
        <f-card title="动态展示">
            <f-button-group :container="true">
                <f-button @click="onClick2" data-type="datetime" type="primary">打开日期时间</f-button>
                <f-button @click="onClick2" data-type="date" type="success">打开日期</f-button>
                <f-button @click="onClick2" data-type="month" type="danger">打开年月</f-button>
                <f-button @click="onClick2" data-type="year" type="warning">打开年份</f-button>
                <f-button @click="onClick3" data-type="time">打开时间</f-button>
            </f-button-group>
        </f-card>
    </f-view>
</template>
<script lang="ts" setup>
import { FView , FCard, FButton, FButtonGroup, FDtPicker, FMessage} from '@/components'
import { reactive } from 'vue'
import DtPicker from '@/components/datetime/main.vue'

const state = reactive({
    year:[2021],
    yearmonth:[2021,3],
    date:[2021,3,15],
    time:[2021,3,15,13,4,27],
})
const onClick = (e:Event)=>{
    const t = e.target as HTMLElement
    const target = (t.classList.contains('ph-btn')?t:t.parentElement) as HTMLElement
    FDtPicker.show({
        value:'2020-09-20 12:13:14',
        min:'2018-05-13 12:13:14',
        max:'2021-1-25 12:13:14',
        type:target.dataset.type as 'date',
        rect:target.getBoundingClientRect()
    }).done(v=>{
        FMessage.success((v as any).toString())
    })
}
const onClick1 = (e:Event)=>{
    const t = e.target as HTMLElement
    const target = (t.classList.contains('ph-btn')?t:t.parentElement) as HTMLElement
    FDtPicker.show({
        value:'13:23:45',
        min:'9:10:20',
        max:'20:30:45',
        type:target.dataset.type as 'date',
        rect:target.getBoundingClientRect()
    }).done(v=>{
        FMessage.success((v as any).toString())
    })
}
const onClick2 = (e:Event)=>{
    const t = e.target as HTMLElement
    const target = (t.classList.contains('ph-btn')?t:t.parentElement) as HTMLElement
    FDtPicker.show({
        value:['2021-09-20 12:13:14'],
        min:'2018-05-13 12:13:14',
        max:'2025-11-25 12:13:14',
        type:target.dataset.type as 'date',
        rect:target.getBoundingClientRect()
    }).done(v=>{
        FMessage.success((v as any).toString())
    })
}
const onClick3 = (e:Event)=>{
    const t = e.target as HTMLElement
    const target = (t.classList.contains('ph-btn')?t:t.parentElement) as HTMLElement
    FDtPicker.show({
        value:['13:23:45'],
        min:'9:10:20',
        max:'18:30:45',
        type:target.dataset.type as 'date',
        rect:target.getBoundingClientRect()
    }).done(v=>{
        FMessage.success((v as any).toString())
    })
}
</script>
<style lang="scss">
.dt-flex-box{
    display: flex;
    gap:var(--ph-pd);
    flex-wrap: wrap;
}
</style>