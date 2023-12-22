<script setup lang="ts">
import { defineAsyncComponent, defineProps, defineOptions } from 'vue'

defineOptions({
  name: 'icon-svg'
})

const props = defineProps({
    name: String
})

const AsyncIconSvg = defineAsyncComponent(() => import(`../../assets/svg/${props.name}.svg`))

</script>

<template>
  <AsyncIconSvg />
</template>