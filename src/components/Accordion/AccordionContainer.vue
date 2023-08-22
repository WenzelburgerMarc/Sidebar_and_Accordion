<template>
    <div class="accordion-container p-3 rounded-xl w-auto max-w-[450px] h-auto bg-gray-100">
        <accordion-item :title="props.title" :content="props.content" />
    </div>
</template>
<script setup lang="ts">
import AccordionItem from './AccordionItem.vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

</script>
<style scoped></style>