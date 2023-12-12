<script setup>
import { ref, defineEmits } from 'vue';

const newPseudo = ref('');
const newEmail = ref('');
const emit = defineEmits(['add-form']);

function emitAddForm() {
  emit('add-form', { pseudo: newPseudo.value, email: newEmail.value });
  newPseudo.value = '';
  newEmail.value = '';
}
</script>

<template>
  <div class="d-flex flex-row">
    <input type="text" placeholder="Saisir un pseudo" class="form-control mx-2" v-model="newPseudo" />
    <input type="email" placeholder="Saisir un email" class="form-control mx-2" v-model="newEmail" @keyup.enter="emitAddForm" />
    <button class="btn btn-primary" @click="emitAddForm">Add</button>
  </div>
</template>

<style scoped>
/* Styles spécifiques au formulaire */
</style>
