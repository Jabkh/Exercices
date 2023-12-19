// store/characterStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCharacterStore = defineStore('character', () => {
  const characters = ref([]);

  async function fetchCharacterData() {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character/');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
      const data = await response.json();
      characters.value = data.results; // données récupérées = data.results
    } catch (err) {
      console.error(err);
    }
  }

  return { characters, fetchCharacterData };
});
