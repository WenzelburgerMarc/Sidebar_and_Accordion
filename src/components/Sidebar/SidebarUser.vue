<template>
    <div class="sidebar-item p-2 flex items-center justify-start rounded-xl hover:cursor-pointer hover:bg-blue-400 overflow-hidden"
        @click="props.item.actionEvent">
        <div class='rounded-[100%] flex-shrink-0 w-12 h-12 text-center bg-blue-800 flex items-center justify-center'>
            <i v-if="showDefaultAvatar" class='bx bx-user text-3xl text-white'></i>
            <img v-else class='rounded-[100%] w-10 h-10' :src="props.item.avatarUrl ? props.item.avatarUrl : ''"
                @error="showDefaultAvatar = true" alt="avatar">
        </div>
        <div class="flex flex-col w-full overflow-hidden">
            <h1 class="text-sm font-bold text-white truncate ml-3">{{
                props.item.username
            }}
            </h1>
            <h1 class="text-sm font-light truncate text-white ml-3">{{
                props.item.email
            }}
            </h1>
        </div>


    </div>
</template>

<script setup lang="ts">
import { SidebarUserItem } from '../../types/SidebarItem';
import { watch, ref } from 'vue';

const props = defineProps({
    item: {
        type: Object as () => SidebarUserItem,
        required: true
    },
    isOpen: {
        type: Boolean,
        required: true
    },

});

let isOpenWatcher = ref(props.isOpen);
watch(() => props.isOpen, () => {
    isOpenWatcher.value = props.isOpen;
});

let showDefaultAvatar = ref(false);
watch(() => props.item.avatarUrl, () => {
    if (props.item.avatarUrl === '' || props.item.avatarUrl === null || props.item.avatarUrl === undefined) {
        showDefaultAvatar.value = true;
    }
});
</script>

<style scoped>
h1,
.sidebar-item {
    transition: all 0.25s ease-in-out;
}
</style>
