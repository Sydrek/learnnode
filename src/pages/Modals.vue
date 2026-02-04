<script setup>
// Imports
import { computed, ref } from 'vue';
import Modal from '../components/Modal.vue';
import ImgModal from '../components/ImgModal.vue';

// Simple Variables
let modal1Active = ref(false);
let modal2Active = ref(false);

</script>

<template>
    <div class="container">

        <!-- Modal Buttons -->
        <button class="button is-primary" @click="modal1Active = true">Open Modal 1</button>
        <button class="button is-link" @click="modal2Active = true">Open Modal 2</button>

        <!-- Modals -->
        <Modal :active="modal1Active" @close="modal1Active = false" url="https://picsum.photos/1280/960?r=1">
            <div class="box">I'm in a box</div>
        </Modal>
        <ImgModal :active="modal2Active" @close="modal2Active = false" url="https://picsum.photos/1280/960?r=2"></ImgModal>

    </div>
</template>

<style>

</style>