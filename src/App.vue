<script setup>

// Imports
import { computed, ref } from 'vue';
import Modal from './components/Modal.vue';

// Simple Variables
let i = 0;
let items = ref([
    {id: i++, text: 'Sai', isDone: false},
    {id: i++, text: 'Piim', isDone: false},
    {id: i++, text: 'Viin', isDone: false}
]);
let newItem = ref('');

// Complex Variables
let doneItems = computed(() => items.value.filter(i => i.isDone));

// Functions
function add() {
    if (newItem.value.trim() !== '') {
        items.value.push({id: i++, text: newItem.value.trim(), isDone: false});
    }
    newItem.value = '';
}
</script>

<template>
    <div class="container">

        <button class="button is-primary" @click="modal1Active = true"></button>

        <Modal :active="modal1Active" @close="modal1Active = false"></Modal>

    </div>
</template>

<style>

</style>