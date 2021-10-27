<template>
    <f-view>
        <f-card title="输入框">
            <f-input/>
            <br/>
            <f-input placeholder="请输入账户名"/>
            <br/>
            <f-input placeholder="请输入账户名" :disabled="true"/>
            <br/>
            <f-input size="small"/>
            <br/>
            <f-input size="large"/>
        </f-card>
        <f-form>
            <f-validator ref="evalidator">
                <f-form-input v-model="formData.account" label="账户名" :validators="['required']"></f-form-input>
                <f-form-input v-model="formData.pwd" label="密码" placeholder="请输入密码"></f-form-input>
                <f-form-input v-model="formData.email" label="邮箱" placeholder="请输入邮箱"></f-form-input>
            </f-validator>
            <template v-slot:action>
                <f-button type="primary" @click="onSubmit">提交表单</f-button>
            </template>
        </f-form>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FCard, FForm, FValidator, FButton, FInput, FFormInput, FMessage } from '@/components'
import { reactive, ref } from 'vue'

const evalidator = ref<InstanceType<typeof FValidator>>()
const formData = reactive({
    account:"",
    pwd:"",
    email:""
})
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