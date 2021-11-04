<template>
    <form-field>
        <template v-slot:default="scope">
            <field-slider
                :modelValue="scope.value"
                :disabled="scope.disabled"
                :placeholder="scope.placeholder"
                :valid="scope.valid"
                :size="scope.size"
                :type="scope.type"
                :max="max"
                :handlerWidth="handlerWidth"
                :height="height"
                @input="scope.onInput"
            />
        </template>
    </form-field>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import FormField from './field.vue'
import FieldSlider from './slider.vue'
defineProps({
    max:{type:Number,default:100},
    height:{type:Number,default:10},
    handlerWidth:Number,
})
</script>