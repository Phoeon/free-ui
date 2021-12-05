<template>
    <form-field class="ph-form-textarea">
        <template v-slot:default="scope">
            <field-textarea
                :modelValue="scope.value as string"
                :disabled="scope.disabled"
                :placeholder="scope.placeholder"
                :valid="scope.valid"
                :limit="limit"
                @input="scope.onInput"
            />
        </template>
    </form-field>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import FormField from './field.vue'
import FieldTextarea from './textarea.vue'
defineProps({
    limit:Number
})
</script>
<style lang="scss">
.ph-form-textarea{
    .ph-field-label{
        align-self: flex-start;
    }
}
</style>