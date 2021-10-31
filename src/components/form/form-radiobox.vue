<template>
    <form-field>
        <template v-slot:default="scope">
            <field-radiobox
                :modelValue="scope.value"
                :disabled="scope.disabled"
                :placeholder="scope.placeholder"
                :valid="scope.valid"
                :options="options"
                @input="scope.onInput"
            />
        </template>
    </form-field>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import FormField from './field.vue'
import FieldRadiobox from './radiobox.vue'
defineProps({
    options:Array,
})
</script>