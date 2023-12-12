<template>
  <div>
    <AddForm @add-form="addForm" />
    <h3 v-if="forms.length" class="mt-4"> Liste des formulaires : </h3>
    <ul>
      <li v-for="(form, index) in forms" :key="index">
        <div>
          <input type="text" v-model="form.pseudo" class="form-control mx-2" :disabled="form.updating" />
          <input type="email" v-model="form.email" class="form-control mx-2" :disabled="form.updating" />
          <button class="btn btn-primary mx-2" @click="toggleUpdateMode(index)">
            {{ form.updating ? 'Save' : 'Update' }}
          </button>
          <button class="btn btn-danger mx-2" @click="removeForm(index)">Remove</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AddForm from './AddForm.vue';

const forms = ref([
  { pseudo: 'John', email: 'john@example.com', updating: true },
  { pseudo: 'Toto', email: 'toto@example.com', updating: true },
]);

const addForm = ({ pseudo, email }) => {
  forms.value.push({ pseudo, email, updating: true });
};

const removeForm = index => {
  forms.value.splice(index, 1);
};

const toggleUpdateMode = index => {
  forms.value[index].updating = !forms.value[index].updating;
};

</script>

<style scoped>
*{
  list-style:none;
}
</style>