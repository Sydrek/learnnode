<script setup>
// Imports
import { ref } from 'vue';
import Tabs from './components/Tabs.vue';
import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';

// Simple Variables
let titles = ref([
    'ToDo List',
    'Modals',
]);
let activeTab = ref(0)
let contents = ref([
    ToDo,
    Modals,
]);

// Functions
</script>

<template>
    <Tabs :titles="titles" :active="activeTab" @setActive="activeTab=$event"></Tabs>
    <div class="container">
        <component :is="contents[activeTab]"></component>
    </div>
</template>

<style>

</style>