<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/authStore';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const name = ref('');
const email = ref('');
const password = ref('');
const passwordError = ref('');
const emailError = ref('');

const onRegister = async () => {
  passwordError.value = '';
  emailError.value = '';

  const isStrongPassword = password.value.length >= 8 && /[A-Z]/.test(password.value) && /\d/.test(password.value);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (isStrongPassword && emailRegex.test(email.value)) {
    try {
      const registrationSuccess = await authStore.register({
        name: name.value,
        email: email.value,
        password: password.value
      });

      if (registrationSuccess) {
        // Attribution du token à l'inscription
        localStorage.setItem('token', authStore.token);
        router.push('/login');
      } else {
        console.error("L'inscription a échoué.");
      }
    } catch (error) {
      console.error("Une erreur est survenue lors de l'inscription :", error);
    }
  } else {
    if (!isStrongPassword) {
      passwordError.value = '⚠️ Le mot de passe doit contenir au moins 8 caractères, 1 majuscule et 1 chiffre.';
    }
    if (!emailRegex.test(email.value)) {
      emailError.value = '⚠️ Veuillez saisir une adresse e-mail valide.';
    }
  }
};
</script>



<template>
 <div class="container">
    <div class="card-register">
      <h1>Inscription </h1>
      <form @submit.prevent="onRegister" class="register-form">
        <div class="card-name">
          <label for="name">Nom : </label>
          <input v-model="name" type="text" id="name" required/>
        </div>
        <div class="card-email">
          <label for="email">Email : </label>
          <input v-model="email" type="email" id="email" required/>
          <p v-if="emailError" class="error-message">{{ emailError }}</p>
        </div>
        <div class="card-password">
          <label for="password">Mot de passe : </label>
          <input v-model="password" type="password" id="password" required/>
          <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
        </div>
        <button type="submit" class="button-card" @click="onRegister">S'inscrire</button>
      </form>
    </div>
  </div>
</template>




<style scoped>
h1{
    background: linear-gradient(to right, #00ccff, #00ff99); 
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
.card-register {
    display: flex;
    flex-direction: column;
    place-items: center;
    border: 1px solid rgb(246, 242, 242);
    border-radius: 10px;
    padding: 0;
    width: 500px;
    height: 650px;
    box-shadow: 0 4px 30px rgba(0,0,0,0.1);
    
}
.card-name {
    display: flex;
    flex-direction: column;
    width: 200px;
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
.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
}

.button-card {
  margin: 15px auto 10px auto;
  text-decoration: none;
  padding: 10px 20px 10px 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  color: #FFFFFF;
  background: linear-gradient(to right, #00ccff, #00ff99); 
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
.error-message {
  color: red;
  margin-top: 2px;
  font-size: 12px;
  width: 300px;
}


</style>