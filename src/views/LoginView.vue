<!-- <script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/authStore';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const username = ref('');
const password = ref('');


// const {user,updateUser} = inject("user");

const onLogin = async () => {
  await authStore.login({ username: username.value, password: password.value });
  
  if (authStore.isLoggedIn) {
    router.push('/characters');
  }
};
</script>

<template>
  <div class="container">
    <div class="card-login">
        <h1>Connexion</h1>
        <form @submit.prevent="onLogin" class="login-form">
        <div class="card-email">
            <label for="username">Email : </label>
            <input v-model="username" type="text" id="username" required/>
        </div>
        <div class="card-password">
            <label for="password">Mot de passe : </label>
            <input v-model="password" type="password" id="password" required/>
        </div>
        <button type="submit" class="button-card" @click="onLogin">Se connecter</button>
        </form>
     </div>
  </div>
</template> -->

<template>
    <div class="container">
      <div class="card-login">
        <h1>Connexion</h1>
        <form @submit.prevent="onLogin" class="login-form">
          <div class="card-email">
            <label for="username">Email : </label>
            <input v-model="username" type="text" id="username" required/>
            <span class="error-message" v-if="usernameError">{{ usernameError }}</span>
          </div>
          <div class="card-password">
            <label for="password">Mot de passe : </label>
            <input v-model="password" type="password" id="password" required/>
            <span class="error-message" v-if="passwordError">{{ passwordError }}</span>
          </div>
          <!-- <button type="submit" class="button-card">Se connecter</button> -->
          <button type="submit" class="button-card" @click="onLogin">Se connecter</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '../stores/authStore';
  import { useRouter } from 'vue-router';
  
  const authStore = useAuthStore();
  const router = useRouter();
  const username = ref('');
  const password = ref('');
  const usernameError = ref('');
  const passwordError = ref('');
  
  const onLogin = async () => {
    // Réinitialise les messages d'erreur
    usernameError.value = '';
    passwordError.value = '';
  
    if (username.value.trim() === '') {
      usernameError.value = 'Veuillez entrer votre email.';
    }
  
    if (password.value.trim() === '') {
      passwordError.value = 'Veuillez entrer votre mot de passe.';
    }
  
    // Vérifie s'il y a des erreurs
    if (usernameError.value || passwordError.value) {
      // Si des erreurs existent, arrête l'exécution de la fonction
      return;
    }
  
    // Si les champs ne sont pas vides, continuez avec le processus de connexion
    try {
      const loginSuccess = await authStore.login({ username: username.value, password: password.value });
    
      if (loginSuccess) {
        // Si la connexion réussit, redirige vers la page des personnages
        // Stocke le token dans le localStorage uniquement si la connexion réussit
        localStorage.setItem('token', authStore.token);
        router.push('/characters');
      } else {
        // Si la connexion échoue, affiche un message d'erreur
        console.error('La connexion a échoué. Veuillez vérifier vos informations de connexion.');
        // Ou définissez un message d'erreur pour l'utilisateur
        // errorMessage.value = 'La connexion a échoué. Veuillez vérifier vos informations de connexion.';
      }
    } catch (error) {
      // Gérer toute erreur pouvant survenir lors de la connexion
      console.error('Une erreur est survenue lors de la connexion :', error.message);
      // Vous pouvez également définir un message d'erreur pour l'utilisateur ici
    }
  };
  </script>
  
  

<style scoped>
 .error-message {
      color: red;
      font-size: 0.8em;
      margin-top: 5px;
      display: block;
    }

h1{
    background: linear-gradient(to right, #00ccff, #00ff99); /* Dégradé de couleurs vert-bleu */
    -webkit-background-clip: text;
    color: transparent; 
    margin: 80px;
    font-family: 'fancy horror', sans-serif;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.card-login {
    display: flex;
    flex-direction: column;
    place-items: center;
    border: 1px solid rgb(246, 242, 242);
    border-radius: 10px;
    padding: 0;
    width: 450px;
    height: 530px;
    box-shadow: 0 4px 30px rgba(0,0,0,0.1);
    
}
.card-email {
    display: flex;
    flex-direction: column;
    width: 200px;
}
.card-password {
    display: flex;
    flex-direction: column;
    width: 200px;
}
label {
    font-family: 'Roboto', sans-serif;
}
input {
    margin-top: 3px;
    margin-bottom: 20px;
    padding: 5px;
    border-radius: 8px;
}
input:focus {
  outline: none; 
  border-color: #00ccff; 
  box-shadow: 0 0 5px #00ff99;
}
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
}

.button-card {
  margin: 15px auto 0px auto;
  text-decoration: none;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  color: #FFFFFF;
  background: linear-gradient(to right, #00ccff, #00ff99); /* Utilisez le même dégradé que votre h1 */
  border-radius: 22px;
  -webkit-border-radius: 24px;
  -moz-border-radius: 24px;
  border: 4px solid #FFFFFF;
  box-shadow: 3px 3px 12px #444444;
  -webkit-box-shadow: 3px 3px 12px #444444;
  -moz-box-shadow: 3px 3px 12px #444444;
}

.button-card:hover {
  padding: 10px;
  box-shadow: 1px 1px 4px #777777;
  -webkit-box-shadow: 1px 1px 4px #777777;
  -moz-box-shadow: 1px 1px 4px #777777;
}



</style>