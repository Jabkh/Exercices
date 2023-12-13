<template>
  <div>
    <h2>Liste de Clients du json</h2>
    <ul>
      <li v-for="(customers, key) in jsonCustomers" :key="key">
        {{ key }}:
        <ul>
          <li v-for="(customer, index) in customers" :key="index">
            {{ customer.name }} - {{ customer.email }} - {{ customer.phone }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const jsonCustomers = ref({});

const loadCustomers = async () => {
  try {
    const customerFiles = ['customer1.json', 'customer2.json', 'customer3.json'];
    for (const file of customerFiles) {
      const response = await fetch(`../datas/${file}`); 
      if (!response.ok) {
        throw new Error(`Erreur de chargement du fichier ${file}`);
      }
      const data = await response.json();
      jsonCustomers.value[file] = data;
    }
    console.log(customerFiles);
  } catch (error) {
    console.error('Erreur de chargement des fichiers JSON :', error);
  }
};

onMounted(loadCustomers);
</script>

<style>

</style>

