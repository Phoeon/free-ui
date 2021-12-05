<template>
    <form-field flow="hr">
        <template v-slot:default="scope">
            <field-switch
                :modelValue="scope.value as boolean"
                :disabled="scope.disabled"
                :placeholder="scope.placeholder"
                :valid="scope.valid"
                :size="scope.size"
                :type="scope.type as undefined"
                @input="scope.onInput"
            />
        </template>
    </form-field>
</template>
<script lang="ts" setup>
import FormField from './field.vue'
import FieldSwitch from './switch.vue'
</script>