<template>
    <form-field :labelInline="true">
        <template v-slot:default="scope">
            <field-switch
                :modelValue="scope.value"
                :disabled="scope.disabled"
                :placeholder="scope.placeholder"
                :valid="scope.valid"
                :size="scope.size"
                :type="scope.type"
                @input="scope.onInput"
            />
        </template>
    </form-field>
</template>
<script lang="ts" setup>
import FormField from './field.vue'
import FieldSwitch from './switch.vue'
</script>