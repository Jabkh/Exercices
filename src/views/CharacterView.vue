<template>
    <div>
    <div class="container text-center">
      <button @click="loadCharacterData">Charger les personnages</button>
      
      <div v-if="characters && characters.length">
        
        <div class="card-group">
        <div class="row row-cols-4 gap-3">
          <div v-for="character in characters" :key="character.id" class="card">
            <div class="col my-2">
            <img :src="character.image" :alt="character.name" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{ character.name }}</h5>
              <h5 class="card-info">{{ character.species }}</h5>
            </div>
        </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
      <div v-if="error">
        Erreur : {{ error }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { useCharacterStore } from '../stores/characterStore';
  import { ref } from 'vue';
  
  const characterStore = useCharacterStore();
  
  const characters = ref([]);
  const error = ref(null);
  
  const loadCharacterData = async () => {
    try {
      await characterStore.fetchCharacterData();
      characters.value = characterStore.characters;
    } catch (err) {
      error.value = err.message;
    }
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques pour les cards */
  .card {
    width: 18rem;
    margin-bottom: 1rem;
  }
  
  .card-img-top {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }
  </style>
