<template>
    <div class="absolute text-white text-base left-full ml-3 text-center w-auto p-3 rounded-xl bg-blue-600">
        {{ props.text }}
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true
    }
});
</script>
<style scoped></style>