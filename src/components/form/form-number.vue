<template>
    <form-field>
        <template v-slot:default="scope">
            <field-input
                :disabled="scope.disabled"
                :placeholder="scope.placeholder"
                :valid="scope.valid"
                :modelValue="scope.value"
                :step="step"
                :min="min"
                :max="max"
                @input="scope.onInput"
            />
        </template>
    </form-field>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import FormField from './field.vue'
import FieldInput from './number.vue'
const props = defineProps({
    step:{type:Number,default:1},
    min:{type:Number,default:-Number.MAX_SAFE_INTEGER},
    max:{type:Number,default:Number.MAX_SAFE_INTEGER},
})
</script>