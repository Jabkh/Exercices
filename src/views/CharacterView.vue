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

      
         <!-- <input @keyup.enter="id = $event.target.value" placeholder="saisir id"> -->
        <!-- <div class="row row-cols-4">
            <div v-for="character in characters.results" :key="character.id">
                <div class="col my-2">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <img class="card-img-top" :src=character.image alt="image personnage">
                            <h5 class="card-title">{{ character.name }}</h5>
                            <p class="card-text" > <span class=" text-success">Species :</span> {{ character.species }}</p>
                        </div>
                    </div>
                </div> 
            </div>
            
        </div> -->
    </div>
    
      <div v-if="error">
        Erreur : {{ error }}
      </div>
    </div>
<!-- </div> -->
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
  

<!-- <template>
    <div>
      <button @click="loadCharacterData">Charger les personnages</button>
      <div v-if="characters && characters.length">
        <ul>
          <li v-for="character in characters" :key="character.id">
            {{ character.name }}
            <img :src="character.image" alt="Character Image" class="character-image" />
            
          </li>
        </ul>
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
  </script> -->
  
  <!-- <script setup>
  import { useCharacterStore } from '../stores/character';
  import { computed, onMounted } from 'vue';
   
   
   
  const characterStore = useCharacterStore();
   
  const characters = computed(() => characterStore.characters);
  const fetchCharacter = async () => {
    if (!characters.value.length) {
      await characterStore.fetchCharacters();
    }
  };
  onMounted(fetchCharacter);
   
  </script> -->
   
  <!-- <template>
    <div class="card">
      <div class="character-card" v-for="character in characters" :key="character.id">
        
        <div class="character-details">
          <p class="character-name">{{ character.name }}</p>
          <p class="character-species">{{ character.species }}</p>
        </div>
      </div>
    </div>
  </template>
   
  <style scoped>
  .card {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 500px;
  }
  .character-card {
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;
  }
  .character-image {
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }
  .character-details {
    display: flex;
    flex-direction: column;
  }
  </style> -->
<!-- 
  <script setup>
import { ref, watchEffect } from 'vue'

let characters = ref([]);
let id = ref("");

watchEffect(async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${id.value}`)

    characters.value = await response.json();
    console.log(characters.value)
})

</script> -->
