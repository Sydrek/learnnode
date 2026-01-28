<script setup>

import { ref } from 'vue';

let message = ref('Hello Vue!');

// function input(event){
//     console.log(event.target.value);
//     message.value = event.target.value;
// }

</script>

<template>
    <div class="container">
        <h1>{{ message.split('').reverse().join('') }}</h1>
        <button class="button is-primary" @click="message = 'Hello TA-24A!'">click me!</button>
        <input class="input" v-model="message">
    </div>
</template>

<style>

</style>