<template>
    <div class="w-auto h-auto">
        <accordion-container v-for="item in arrAccordionItems" :title="item.title" :content="item.content" class="my-3" />

    </div>
</template>
<script setup lang="ts">
import AccordionContainer from './AccordionContainer.vue';
import { AccordionItem as AccordionItemType } from '../../types/AccordionItem.ts';

const arrAccordionItems = [
    {
        title: 'What do you mean by Accordion?',
        content: 'An accordion is a graphical control element comprising a vertically stacked list of items, such as labels or thumbnails. Each item can be expanded or collapsed to reveal the content associated with that item.'
    },
    {
        title: 'What do you mean by Accordion?',
        content: 'An accordion is a graphical control element comprising a vertically stacked list of items, such as labels or thumbnails. Each item can be expanded or collapsed to reveal the content associated with that item.'
    },
    {
        title: 'What do you mean by Accordion?',
        content: 'An accordion is a graphical control element comprising a vertically stacked list of items, such as labels or thumbnails. Each item can be expanded or collapsed to reveal the content associated with that item.'
    },
    {
        title: 'What do you mean by Accordion?',
        content: 'An accordion is a graphical control element comprising a vertically stacked list of items, such as labels or thumbnails. Each item can be expanded or collapsed to reveal the content associated with that item.'
    },

] as AccordionItemType[];
</script>
<style scoped></style>