<template>
    <div class="ph-dt-preview">{{startString}}&ensp;~&ensp;{{endString}}</div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps({
    startString:String,
    endString:String
})
</script>