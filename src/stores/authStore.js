import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// Fonction pour générer un token aléatoire (simulation)
const generateToken = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const token = ref('');

  const loadUser = () => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        user.value = parsedUser;
        token.value = parsedUser.token || '';
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur :', error);
        localStorage.removeItem('user');
      }
    }
  };

  const saveUser = () => {
    localStorage.setItem('user', JSON.stringify({ ...user.value, token: token.value }));
  };

  const isLoggedIn = computed(() => !!token.value);

  const login = ({ username, password }) => {
    // Exécutez l'opération de connexion
    user.value = { username, password };
    token.value = generateToken(); // Génération d'un token sécurisé après la connexion
    loadUser(); // Chargez les données utilisateur après la connexion
  };

 const register = ({ username, password }) => {
  try {
    // Exécutez l'opération d'enregistrement
    user.value = { username, password };
    token.value = generateToken(); // Générez un token sécurisé après l'enregistrement
    saveUser(); // Sauvegardez les données utilisateur après l'enregistrement
    return true; // Indique que l'enregistrement a réussi
  } catch (error) {
    console.error("Erreur lors de l'enregistrement :", error);
    return false; // Indique que l'enregistrement a échoué en cas d'erreur
  }
};

    // Vérifie si l'email existe déjà dans les données utilisateur
    const userExists = (emailToCheck) => {
      // Ici, vous devez accéder à vos données utilisateur pour vérifier si l'email existe
      // Cela pourrait être une liste d'utilisateurs enregistrés dans votre application
      // À des fins de démonstration, supposons que vous avez un tableau d'utilisateurs
      const users = [
        { name: 'John', email: 'john@example.com' },
        { name: 'Alice', email: 'alice@example.com' },
      ];
  
      // Vérifie si l'email est déjà utilisé par un utilisateur existant
      return users.some(user => user.email === emailToCheck);
    };


  const logout = () => {
    user.value = {};
    token.value = '';
    localStorage.removeItem('user');
  };

  return { user, token, isLoggedIn, login, register, logout , userExists};
});

