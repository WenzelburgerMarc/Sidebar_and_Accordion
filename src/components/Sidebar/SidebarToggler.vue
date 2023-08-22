<template>
    <div class=" flex items-center justify-center p-4 bg-blue-600 w-4 h-4 rounded-full hover:cursor-pointer drop-shadow-md"
        @click="$emit('toggleSidebar')">
        <i :class="isOpenWatcher ? 'rotate-180' : ''" class='icon bx bx-chevron-left text-white text-center text-3xl'></i>
    </div>
</template>
<script setup lang="ts">
import { watch, ref } from 'vue';

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    }
});

let isOpenWatcher = ref(props.isOpen);
watch(() => props.isOpen, () => {
    isOpenWatcher.value = props.isOpen;
});
</script>
<style scoped>
.icon {
    transition: all 0.25s ease-in-out;
}
</style>