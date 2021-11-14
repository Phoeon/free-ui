<template>
    <form-field>
        <template v-slot:default="scope">
            <field-cascade-select
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
import { defineProps, PropType } from 'vue'
import FormField from './field.vue'
import FieldCascadeSelect from './cascade-select.vue'
import { ITree } from '../../shared/types'
defineProps({
    options:{type : Array as PropType<ITree>,required:true}
})
</script>