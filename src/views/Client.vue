<template>
  <div>
    <h2>Informations du Client</h2>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const client = ref({
  name: '',
  email: '',
  phone: '',
});
</script>

<style>
/* Ajoutez des styles si nécessaire */
</style>
