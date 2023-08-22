<script setup lang="ts">
import TheSidebar from './components/Sidebar/TheSidebar.vue';
import AccordionContainer from './components/Accordion/AccordionContainer.vue';



</script>

<template>
  <div>
    <TheSidebar />

    <div class="main-content-container ml-[70px] mt-14">
      <accordion-container />
    </div>

  </div>
</template>

<style scoped>
.main-content-container {

  transition: all 0.45s ease-in-out;
}

.translate-blur {
  margin-left: inherit;
  transform: translateX(224px);
  filter: blur(5px);
}

@media (prefers-reduced-motion: reduce) {

  * {
    transition: none !important;
  }
}
</style>