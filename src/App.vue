<script setup lang="ts">
import { ref, watch } from 'vue';
import SidebarContainer from './components/Sidebar/SidebarContainer.vue';
import AccordionContainer from './components/Accordion/AccordionContainer.vue';
import SiteProtectionScreen from './components/SiteProtectionScreen.vue';
let showSiteProtectionScreen = ref(false);



watch(() => showSiteProtectionScreen.value, () => {
  const mainContentContainer = document.querySelector('.main-content-container') as HTMLDivElement;
  if (!mainContentContainer) return;

  mainContentContainer.classList.toggle('translate-blur');
});


</script>

<template>
  <div>
    <SidebarContainer class="z-50" v-on:toggleSiteProtection="showSiteProtectionScreen = !showSiteProtectionScreen" />


    <SiteProtectionScreen
      :class="showSiteProtectionScreen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'" />

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