<template>
    <f-view>
        <f-table>
            <f-tr>
                <f-th>姓名</f-th>
                <f-th>性别</f-th>
                <f-th>职业</f-th>
                <f-th>生日</f-th>
                <f-th>操作</f-th>
            </f-tr>
            <f-tr>
                <f-td>拉伸空间发的</f-td>
                <f-td>男</f-td>
                <f-td>老师</f-td>
                <f-td>1992-03-30</f-td>
                <f-td>
                    <f-action type="danger">删除</f-action>
                    <f-action type="info">新增</f-action>
                    <f-action type="info">详情</f-action>
                </f-td>
            </f-tr>
            <f-tr>
                <f-td>拉伸空间发的</f-td>
                <f-td>男</f-td>
                <f-td>老师</f-td>
                <f-td>1992-03-30</f-td>
                <f-td>
                    <f-action type="danger">删除</f-action>
                    <f-action type="info">新增</f-action>
                    <f-action type="info">详情</f-action>
                </f-td>
            </f-tr>
            <f-tr>
                <f-td>拉伸空间发的</f-td>
                <f-td>男</f-td>
                <f-td>老师</f-td>
                <f-td>1992-03-30</f-td>
                <f-td>
                    <f-action type="danger">删除</f-action>
                    <f-action type="info">新增</f-action>
                    <f-action type="info">详情</f-action>
                </f-td>
            </f-tr>
        </f-table>
    </f-view>
</template>
<script lang="ts" setup>
import { FView, FTable, FTr, FTh, FTd, FAction } from '@/components'

</script>