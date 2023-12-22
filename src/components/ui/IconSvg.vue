<script setup lang="ts">
import { defineAsyncComponent, defineProps } from 'vue'

const props = defineProps({
    name: String
})

const AsyncIconSvg = defineAsyncComponent(() => import(`../../assets/svg/${props.name}.svg`))

</script>

<template>
  <AsyncIconSvg />
</template>