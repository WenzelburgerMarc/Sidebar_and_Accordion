<template>
    <div class="accordion-item cursor-pointer" @click="toggleExpandableState">

        <div class="header-content flex justify-between items-center h-auto">
            <h1 class="font-bold text-base text-gray-900">{{ props.title }}</h1>
            <transition name="fade-rotate" mode="out-in">
                <i :class="iconClass" :key="iconClass" class="font-bold text-xl text-gray-900 ml-4"></i>
            </transition>

        </div>

        <div ref="content" class="expandableContent overflow-hidden max-h-0 mr-14">
            <p class="text-sm text-gray-900">{{ props.content }}</p>
        </div>



    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
let isExpanded = ref(false);
const content = ref(null) as any;

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

onMounted(() => {
    content.value.style.maxHeight = '0';
});


function toggleExpandableState() {
    isExpanded.value = !isExpanded.value;

    if (isExpanded.value) {
        content.value.style.maxHeight = content.value.scrollHeight + 'px';
    } else {
        content.value.style.maxHeight = '0';
    }
}

const iconClass = ref('bx bx-plus');

watch(isExpanded, () => {
    iconClass.value = isExpanded.value ? 'bx bx-minus' : 'bx bx-plus';
});

</script>
<style scoped>
.expandableContent {
    transition: all 0.2s linear;
}


.fade-rotate-leave-active {
    transition: opacity 0.25s ease, transform 0.3s ease;
}

.fade-rotate-enter-active {
    transition: opacity 0.25s ease, transform 0.3s ease;
}

.fade-rotate-enter,
.fade-rotate-leave-to {
    opacity: 0;
    transform: rotate(90deg);
}

.fade-rotate-enter-to,
.fade-rotate-leave {
    opacity: 1;
    transform: rotate(180deg);
}
</style>