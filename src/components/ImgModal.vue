<script setup>
// Imports
import Modal from './Modal.vue';

// Simple Variables
defineProps(['active', 'url'])

</script>

<template>
    <Modal :active="active">
        <p class="image is-4by3">
        <img :src="url" alt="">
        </p>
    </Modal>
</template>