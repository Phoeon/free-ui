<template>
    <f-view>
        <f-card title="默认案例">
            <f-pager 
                @page="onPage"
                :total="data.total"
                v-model:page="data.page"
                v-model:pagesize="data.pagesize"
            />
        </f-card>
        <ph-pretty lang="html">{{raw.c1}}</ph-pretty>
        <f-card title="showTotal">
            <f-pager 
                @page="onPage"
                :showTotal="true"
                :total="data.total"
                v-model:page="data.page"
                v-model:pagesize="data.pagesize"
            />
        </f-card>
        <ph-pretty lang="html">{{raw.c2}}</ph-pretty>
        <f-card title="showPagesize">
            <f-pager 
                @page="onPage"
                :showTotal="true"
                :showPagesize="true"
                :total="data.total"
                v-model:page="data.page"
                v-model:pagesize="data.pagesize"
            />
        </f-card>
        <ph-pretty lang="html">{{raw.c3}}</ph-pretty>
        <f-card title="showJump">
            <f-pager 
                @page="onPage"
                :showTotal="true"
                :showPagesize="true"
                :showJump="true"
                :total="data.total"
                v-model:page="data.page"
                v-model:pagesize="data.pagesize"
            />
        </f-card>
        <ph-pretty lang="html">{{raw.c4}}</ph-pretty>
        <f-card title="pagerCount">
            <f-pager 
                @page="onPage"
                :showTotal="true"
                :showPagesize="true"
                :showJump="true"
                :pagerCount="5"
                :total="data.total"
                v-model:page="data.page"
                v-model:pagesize="data.pagesize"
            />
        </f-card>
        <ph-pretty lang="html">{{raw.c5}}</ph-pretty>
        <f-card title="水平分布">
            <f-pager 
                @page="onPage"
                :total="data.total"
                v-model:page="data.page"
                v-model:pagesize="data.pagesize"
            />
            <br/>
            <f-pager 
                @page="onPage"
                :total="data.total"
                justify="center"
                v-model:page="data.page"
                v-model:pagesize="data.pagesize"
            />
            <br/>
            <f-pager 
                @page="onPage"
                :total="data.total"
                justify="flex-end"
                v-model:page="data.page"
                v-model:pagesize="data.pagesize"
            />
        </f-card>
        <ph-pretty lang="html">{{raw.c6}}</ph-pretty>
        <f-card title="背景填充">
            <f-pager 
                @page="onPage"
                :total="data.total"
                fillMode="normal"
                v-model:page="data.page"
                v-model:pagesize="data.pagesize"
            />
            <br/>
            <f-pager 
                @page="onPage"
                :total="data.total"
                fillMode="none"
                v-model:page="data.page"
                v-model:pagesize="data.pagesize"
            />
            <br/>
            <f-pager 
                @page="onPage"
                :total="data.total"
                fillMode="outline"
                v-model:page="data.page"
                v-model:pagesize="data.pagesize"
            />
            <br/>
            <f-pager 
                @page="onPage"
                :total="data.total"
                fillMode="reverse"
                v-model:page="data.page"
                v-model:pagesize="data.pagesize"
            />
        </f-card>
        <ph-pretty lang="html">{{raw.c7}}</ph-pretty>
        <f-card title="简单模式">
            <f-pager 
                @page="onPage"
                :total="data.total"
                :simple="true"
                v-model:page="data.page"
                v-model:pagesize="data.pagesize"
            />
            <br/>
            <f-pager 
                @page="onPage"
                :total="data.total"
                :simple="true"
                prev="上一页"
                next="下一页"
                v-model:page="data.page"
                v-model:pagesize="data.pagesize"
            />
            <br/>
            <f-pager 
                @page="onPage"
                :total="data.total"
                :simple="true"
                justify="space-between"
                prev="上一页"
                next="下一页"
                v-model:page="data.page"
                v-model:pagesize="data.pagesize"
            />
        </f-card>
        <ph-pretty lang="html">{{raw.c8}}</ph-pretty>
        <f-card title="不同主题色">
            <f-pager 
                @page="onPage"
                :total="data.total"
                theme="success"
                v-model:page="data.page"
                v-model:pagesize="data.pagesize"
            />
            <br/>
            <f-pager 
                @page="onPage"
                :total="data.total"
                theme="danger"
                v-model:page="data.page"
                v-model:pagesize="data.pagesize"
            />
            <br/>
            <f-pager 
                @page="onPage"
                :total="data.total"
                theme="warning"
                v-model:page="data.page"
                v-model:pagesize="data.pagesize"
            />
            <br/>
            <f-pager 
                @page="onPage"
                :total="data.total"
                theme="noble"
                v-model:page="data.page"
                v-model:pagesize="data.pagesize"
            />
            <br/>
            <f-pager 
                @page="onPage"
                :total="data.total"
                theme="info"
                v-model:page="data.page"
                v-model:pagesize="data.pagesize"
            />
            <br/>
        </f-card>
        <ph-pretty lang="html">{{raw.c9}}</ph-pretty>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FCard, FPager } from '@/components'
import { reactive } from 'vue'
import * as raw from '../data/pager'
// const data = {
    // "show-total":{type:Boolean,default:false},
    // "show-pagesize":{type:Boolean,default:false},
    // "show-jump":{type:Boolean,default:false},
    // "pagesize-options":{
    //     type:Array,
    //     default:()=>PageSizeOptions
    // },
    // justify:{type:String,default:"flex-start"},
    // prev:{type:String,default:"上一页"},
    // next:{type:String,default:"下一页"},
    // pagesize:{type:Number,default:10},
    // total:{type:Number,default:100},
    // page:{type:Number,default:1},
    // simple:{type:Boolean,default:false},
// }

const data = reactive({
    page:1,
    pagesize:10,
    total:250
})
const onPage = (meta:{page:number,pagesize:number})=>{
    console.log(meta)
}
</script>