<template>
    <form-field>
        <template v-slot:default="scope">
            <field-color
                :modelValue="scope.value"
                :disabled="scope.disabled"
                :placeholder="scope.placeholder"
                :valid="scope.valid"
                :colors="colors"
                :type="type"
                @input="scope.onInput"
            />
        </template>
    </form-field>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import FormField from './field.vue'
import FieldColor from './color.vue'
import { ColorType } from '../color/types'
defineProps({
    type:String as PropType<ColorType>,
    colors:Array as PropType<Array<string>>
})
</script>