<template>
    <f-view>
        <f-form title="表单标题" :xl="2">
            <f-validator ref="evalidator">
                <f-form-input v-model="formData.account" label="输入框" :validators="['required']"></f-form-input>
                <f-form-input v-model="formData.email" label="禁用输入" placeholder="测试禁用" :disabled="true"></f-form-input>
                <f-form-select v-model="formData.uni" :options="dataSource.options" label="单选下拉" placeholder="单选下拉" :validators="['required']"></f-form-select>
                <f-form-select v-model="formData.funi" :options="dataSource.options" label="多选下拉" placeholder="测试多选" :multi="true" :validators="['required']"></f-form-select>
                <f-form-datetime-picker v-model="formData.datetime" label="日期时间" placeholder="日期时间" type="datetime"/>
                <f-form-datetime-picker v-model="formData.birth" label="出生日期" placeholder="请选择日期"/>
                <f-form-datetime-picker v-model="formData.alarm" label="闹钟时间" placeholder="请选择时间" type="time"/>
                <f-form-datetime-picker v-model="formData.unitime" label="大学时间" placeholder="请选择日期"/>
                <f-form-color-picker v-model="formData.color" label="喜欢的颜色" placeholder="颜色选择"/>
                <f-form-slider v-model="formData.slider" :max="100" label="测试滑块"/>
                <f-form-switch v-model="formData.married" label="开关"></f-form-switch>
                <f-form-switch v-model="formData.married" label="禁用开关" :disabled="true" type="icon"></f-form-switch>
                <f-form-checkbox :block="true" v-model="formData.cuni" :options="dataSource.options" label="复选框" :validators="['required']"></f-form-checkbox>
                <f-form-radiobox :block="true" v-model="formData.runi" :options="dataSource.options" label="单选框" :validators="['required']"></f-form-radiobox>
                <f-form-textarea v-model="formData.intro" :limit="9" label="个人介绍" :block="true"/>
            </f-validator>
            <template v-slot:action>
                <f-button type="primary" @click="onSubmit">提交表单</f-button>
            </template>
        </f-form>
        <ph-pretty lang="html" title="template">{{raw.c1}}</ph-pretty>
        <ph-pretty title="script">{{raw.c2}}</ph-pretty>
    </f-view>
</template>
<script lang="ts" setup>
import { 
        FView, 
        FCard,
        FButton, 
        FValidator, 
        FForm, 
        FFormInput, 
        FFormSelect, 
        FFormCheckbox,
        FFormRadiobox,
        FFormSwitch,
        FFormDatetimePicker,
        FFormColorPicker,
        FFormSlider,
        FFormTextarea,

        FMessage } from '@/components'
import { reactive, ref } from 'vue'
import * as raw from '../../data/form'
const evalidator = ref<InstanceType<typeof FValidator>>()
const formData = reactive({
    account:"",
    email:"",
    uni:"",
    runi:"",
    druni:"",
    funi:[],
    cuni:[],
    dcuni:[],
    married:false,
    datetime:'2021-09-20 12:30:35',
    birth:'2021-09-20',
    unitime:[],
    alarm:"12:30:35",
    color:"#FF00FF",
    slider:30,
    intro:""
})
const dataSource = {
    options:[{
        text:"厦门大学",
        value:1,
    },{
        text:"南京大学",
        value:2,
        disabled:true
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
}
const onSubmit = ()=>{
    console.log(formData)
    evalidator.value?.validForm().then((a:any)=>{
        FMessage.success('表单验证成功')
    }).catch((e:any)=>{
        console.log(e)
        FMessage.error("请完善表单信息")
    })
}
</script>