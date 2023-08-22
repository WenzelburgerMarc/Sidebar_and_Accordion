<script setup lang="ts">
import TheSidebar from './components/Sidebar/TheSidebar.vue';
import TheAccordion from './components/Accordion/TheAccordion.vue';

</script>

<template>
  <div class="overflow-hidden">
    <TheSidebar />

    <div class="main-content-container w-[calc(100vw-70px)] min-h-screen flex flex-col justify-center items-center p-5">
      <div class="demoTitle mb-5 mt-14">
        <h1 class="text-5xl font-gray-800 font-light">Sidebar + Accordion Demo</h1>
      </div>
      <the-accordion class="mb-auto" />
    </div>

  </div>
</template>

<style scoped>
.main-content-container {
  overflow-x: hidden !important;
  transform: translateX(70px);
  transition: all 0.45s ease-in-out;
}

.translate-blur {
  overflow: hidden;
  transform: translateX(224px) scale(0.8);
  filter: blur(5px);
}

@media (prefers-reduced-motion: reduce) {

  * {
    transition: none !important;
  }
}
</style>