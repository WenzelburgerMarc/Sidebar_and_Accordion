<script setup lang="ts">
import TheSidebar from './components/Sidebar/TheSidebar.vue';
import TheAccordion from './components/Accordion/TheAccordion.vue';

</script>

<template>
  <div>
    <TheSidebar />

    <div
      class="main-content-container ml-[70px] max-w-[calc(100vw-70px)] min-h-screen flex justify-center items-center p-5">
      <the-accordion />
    </div>

  </div>
</template>

<style scoped>
.main-content-container {
  overflow-x: hidden;
  max-width: calc(100vw - 224px);
  transition: all 0.45s ease-in-out;
}

.translate-blur {
  margin-left: inherit;
  transform: translateX(224px) scale(0.8);
  filter: blur(5px);
}

@media (prefers-reduced-motion: reduce) {

  * {
    transition: none !important;
  }
}
</style>