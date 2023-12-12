<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  pseudo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const { emit } = defineEmits(['remove-form', 'update-form']);

const handleRemoveForm = () => {
  emit('remove-form', props.index);
};

const handleUpdateForm = () => {
  emit('update-form', props.index);
};
</script>

<template>
  <li class="d-flex flex-row justify-content-between my-2">
    <div>
      <input type="text" :value="pseudo" class="form-control mx-2" disabled />
      <input type="email" :value="email" class="form-control mx-2" disabled />
    </div>
    <div>
      <button class="btn btn-danger mx-2" @click="handleRemoveForm">Remove</button>
      <button class="btn btn-secondary mx-2" @click="handleUpdateForm">Update</button>
    </div>
  </li>
</template>

<style scoped>
/* Styles spécifiques au composant */
</style>
