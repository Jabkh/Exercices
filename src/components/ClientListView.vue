<template>
  <div>
    <h2>Liste des Clients</h2>
    <ul>
      <li v-for="(client, index) in clients" :key="index">
        {{ client.name }} - {{ client.email }} - {{ client.phone }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ref from "../data/customerlist.json"

const clients = ref([]);

// Récupérer les données des clients depuis le fichier JSON
onMounted(async () => {
  try {
    const response = await fetch('../data/customerlist.json'); // Chemin vers votre fichier JSON
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    clients.value = data; // Mettre les données récupérées dans le tableau de clients
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<style>
/* Ajoutez des styles si nécessaire */
</style>

