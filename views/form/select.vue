<template>
    <f-view>
        <f-card title="案例展示">
            <f-select placeholder="就读大学" v-model="state.radio" :options="state.options"></f-select>
            <br/>
            <f-select placeholder="喜欢的大学" :multi="true" v-model="state.check" :options="state.options"></f-select>
        </f-card>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FSelect, FCard } from '@/components'
import { reactive } from 'vue'
const state = reactive({
    radio:3,
    check:[3,5],
    options:[{
        text:"厦门大学",
        value:1,
    },{
        text:"南京大学",
        value:2,
    },{
        text:"延安大学",
        value:3,
    },{
        text:"宁波大学",
        value:4,
    },{
        text:"上海大学",
        value:5,
    }]
})
</script>