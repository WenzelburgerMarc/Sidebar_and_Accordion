<script setup lang="ts">
import SidebarContainer from './components/Sidebar/SidebarContainer.vue';
</script>

<template>
  <div>
    <SidebarContainer />
  </div>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {

  * {
    transition: none !important;
  }
}
</style>