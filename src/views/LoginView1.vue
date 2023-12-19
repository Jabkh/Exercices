<template>
    <div>
      <h1>Connexion</h1>
      <form @submit.prevent="signInUser">
        <label>
          Nom d'utilisateur:
          <input type="text" v-model="username" />
        </label>
        <label>
          Mot de passe:
          <input type="password" v-model="password" />
        </label>
        <button type="submit">Se connecter</button>
      </form>
      <p v-if="isLoggedIn">Connecté en tant que {{ user.username }}</p>
      <button @click="logoutUser">Se déconnecter</button>
    </div>
  </template>
  
  <script setup>
  import { useAuthStore } from '../stores/authStore';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const authStore = useAuthStore();
  const router = useRouter();
  
  const username = ref('');
  const password = ref('');
  
  const signInUser = async () => {
    await authStore.signIn({ username: username.value, password: password.value });
    if (authStore.isLoggedIn) {
      // Redirection vers la page d'accueil après la connexion réussie
      router.push('/');
    } else {
      // Gérer les erreurs de connexion ici (par exemple, afficher un message d'erreur)
    }
  };
  
  const logoutUser = () => {
    authStore.logout();
    // Redirection vers la page de connexion après la déconnexion
    router.push('/login');
  };
  
  const user = authStore.user;
  
  const isLoggedIn = authStore.isLoggedIn;

  </script>
  