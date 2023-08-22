<script setup lang="ts">
import { ref, watch } from 'vue';
import SidebarContainer from './SidebarContainer.vue';
import SiteProtectionScreen from '../SiteProtectionScreen.vue';
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

        <SiteProtectionScreen class="z-40 "
            :class="showSiteProtectionScreen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'" />

    </div>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {

    * {
        transition: none !important;
    }
}
</style>