<template>
  <aside :class="{ 'is-expanded': is_expanded }" class="flex flex-col w-[calc(2rem+32px)] min-h-[100vh] overflow-hidden p-4 bg-purple ease-out duration-200">
    <div class="arrow_back mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-[2rem]" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6z"/></svg>
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.41 6L5 7.41L9.58 12L5 16.59L6.41 18l6-6z"/><path fill="currentColor" d="m13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"/></svg>
        </span>
      </button>
    </div>
  </aside>
</template>

<script setup>

import { ref } from 'vue'

const is_expanded = ref(false)
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
}
</script>

<style scoped>
.is-expanded {
  width: 250px;
}
</style>
