<template>
    <form-field>
        <template v-slot:default="scope">
            <field-datetime
                :modelValue="scope.value"
                :disabled="scope.disabled"
                :placeholder="scope.placeholder"
                :valid="scope.valid"
                :startPlaceholder="startPlaceholder"
                :endPlaceholder="endPlaceholder"
                :format="format"
                :min="min"
                :max="max"
                :now="now"
                :clear="clear"
                :type="type"
                @input="scope.onInput"
            />
        </template>
    </form-field>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import FormField from './field.vue'
import FieldDatetime from './datetime.vue'
import { IDtType } from '../datetime/types'
defineProps({
    startPlaceholder:String,
    endPlaceholder:String,
    format:String,
    min:String,
    max:String,
    now:Boolean,
    clear:Boolean,
    type:String as PropType<IDtType>
})
</script>