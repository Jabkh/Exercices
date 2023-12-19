// store/auth.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);

  const isLoggedIn = computed(() => !!user.value);

  function login({ username, password }) {
    // Simulons une vérification côté client pour l'exemple
    if (username === 'utilisateur' && password === 'motdepasse') {
      user.value = { username };
    }
  }

  function logout() {
    user.value = null;
  }

  async function signIn(userData) {
    try {
      // Ici, vous pouvez effectuer une requête HTTP à votre backend pour authentifier l'utilisateur
      // Par exemple, avec fetch ou axios :
      const response = await fetch('https://votreapi.com/signin', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        user.value = data.user; // Supposons que le backend renvoie les données de l'utilisateur après la connexion
      } else {
        // Gérer les erreurs ou les messages d'erreur retournés par le backend
        console.error('Erreur de connexion:', data.error);
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
    }
  }

  return { user, isLoggedIn, login, logout, signIn };
});
