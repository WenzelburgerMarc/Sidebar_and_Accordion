<template>
    <div class="sidebar w-auto fixed top-0 left-0 bg-blue-600 h-screen z-50" :class="isOpen ? 'w-[224px]' : 'w-[70px]'">

        <div class="sidebar-content relative flex flex-col items-start justify-start h-full">

            <sidebar-toggler :isOpen="isOpen" v-on:toggleSidebar="toggleSidebar()" class="absolute left-full m-3" />

            <sidebar-item :item="logoItem" :isOpen="isOpen" class="z-50 mx-auto my-3 w-11/12" />
            <sidebar-divider />
            <SidebarItem v-for="item in arrSidebarItemsTop" :item="item" :isOpen="isOpen" class="mx-auto mt-3 w-11/12" />
            <sidebar-divider class="mt-auto" />
            <SidebarItem v-for="item in arrSidebarItemsBottom" :item="item" :isOpen="isOpen" class="mx-auto mt-3 w-11/12" />
            <sidebar-divider class="my-3" />
            <sidebar-user :item="userItem" :isOpen="isOpen" class="mb-3 w-11/12 mx-auto" />
        </div>



    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits();

let isOpen = ref(false);


import SidebarItem from './SidebarItem.vue';
import SidebarToggler from './SidebarToggler.vue';
import SidebarDivider from './SidebarDivider.vue';
import SidebarUser from './SidebarUser.vue';
import { SidebarItem as SidebarItemType, SidebarUserItem } from '../../types/SidebarItem';
const arrSidebarItemsTop: SidebarItemType[] = [
    {
        iconClass: 'bx-compass',
        label: 'Dashboard',
        actionEvent: () => goToDashboard(),
    },
    {
        iconClass: 'bx-analyse',
        label: 'Analytics',
        actionEvent: () => console.log('go to analytics'),
    },
    {
        iconClass: 'bx-signal-5',
        label: 'Performance',
        actionEvent: () => console.log('go to performance'),
    },
    {
        iconClass: 'bx-credit-card-front',
        label: 'Funds',
        actionEvent: () => console.log('go to funds'),
    },


];

const arrSidebarItemsBottom: SidebarItemType[] = [
    {
        iconClass: 'bx-cog',
        label: 'Settings',
        actionEvent: () => console.log('go to settings'),
    },
    {
        iconClass: 'bx-help-circle',
        label: 'Help',
        actionEvent: () => console.log('go to help'),
    },
];

const logoItem: SidebarItemType = {
    iconClass: 'bx-home',
    label: 'Home',
    actionEvent: () => goToDashboard(),
    isLogoItem: true,
};

const userItem: SidebarUserItem = {
    username: 'John Doe',
    email: 'test@mail.de',
    actionEvent: () => goToProfile(),
};

function toggleSidebar(): void {

    animateLabels(isOpen.value);

    isOpen.value = !isOpen.value;


    emit('toggleSiteProtection');

}
async function animateLabels(reverse: boolean): Promise<void> {
    const labels = document.querySelectorAll('.sidebar-item h1');
    const headingElements = Array.from(labels) as HTMLHeadingElement[];
    if (reverse) {
        headingElements.reverse();
    }
    let delay = 0;

    for (const label of headingElements) {
        await new Promise(resolve => setTimeout(resolve, delay * 25));
        label.classList.toggle('hide');
        delay += 0.5;
    }
}


function goToDashboard(): void {
    console.log('go to dashboard');
}

function goToProfile(): void {
    console.log('go to profile');
}




</script>
<style scoped>
.icon {

    transition: all 0.15s ease-in-out;
}

.sidebar {

    transition: all 0.45s ease-in-out;
}
</style>