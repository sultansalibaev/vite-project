<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'


</script>

<template>
  <div class="flex justify-center">
    <a href="https://vitejs.dev" target="_blank">
      <icon-svg name="vite" class="logo vite min-w-[200px]  min-h-[200px]" />
      <!-- <img src="./assets/svg/vite.svg" class="logo vue" alt="Vue logo" /> -->
    </a>
    <a href="https://vitejs.dev" target="_blank">
      <icon-svg name="vue" class="logo vue min-w-[200px]  min-h-[200px]" />
      <!-- <img src="./assets/svg/vue.svg" class="logo vue" alt="Vue logo" /> -->
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
