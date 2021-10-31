<template>
    <form-field>
        <template v-slot:default="scope">
            <field-input
                :modelValue="scope.value"
                :disabled="scope.disabled"
                :placeholder="scope.placeholder"
                :valid="scope.valid"
                @input="scope.onInput"
            />
        </template>
    </form-field>
</template>
<script lang="ts" setup>
import FormField from './field.vue'
import FieldInput from './input.vue'

</script>