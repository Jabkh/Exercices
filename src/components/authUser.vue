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
  
  const authStore = useAuthStore();
  
  const username = ref('');
  const password = ref('');
  
  const signInUser = () => {
    authStore.signIn({ username: username.value, password: password.value });
    // Réinitialisation des champs après la soumission du formulaire
    username.value = '';
    password.value = '';
  };
  
  const logoutUser = () => {
    authStore.logout();
  };
  
  const user = authStore.user;
  const isLoggedIn = authStore.isLoggedIn;
  </script>
  