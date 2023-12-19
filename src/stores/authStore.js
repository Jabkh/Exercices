// import { ref, computed } from "vue";
// import { defineStore } from "pinia";

// export const useAuthStore = defineStore("auth", () => {
//     const user = ref(null);
  
//     const loadUser= () => {
//       const saveUser = localStorage.getItem("user");
//       if (saveUser) {
//         user.value = JSON.parse(saveUser);
//       }
//     };
  
//     const saveUser = () => {
//       if (user.value) {
//         localStorage.setItem("user", JSON.stringify(user.value));
//       }
//     };
  
//     loadUser();
  
//     const isLoggedIn = computed(() => !!user.value);
  
//     const login = ({ username, password }) => {
//       user.value = { username, password };
//       saveUser();
//     };
  
//     const register = ({ username, password }) => {
     
//       login({ username, password });
//     };
  
//     const logout = () => {
//       user.value = null;
//       localStorage.removeItem("user");
//     };

//    const requireAuth = (to, from, next) => {
//       const auth = useAuthStore();
    
//       if (auth.isAuthenticated) {
//         next()
//       } else {
//         next('/login')
//       }

//     }
  
//     return { user, isLoggedIn, login, register, logout , requireAuth};
//   });
  // import { ref, computed } from "vue";
  // import { defineStore } from "pinia";
  
  // export const useAuthStore = defineStore("auth", () => {
  //   const user = ref(null);
  
  //   const loadUser = () => {
  //     const saveUser = localStorage.getItem("user");
  //     if (saveUser) {
  //       user.value = JSON.parse(saveUser);
  //     }
  //   };
  
  //   const saveUser = () => {
  //     if (user.value) {
  //       localStorage.setItem("user", JSON.stringify(user.value));
  //     }
  //   };
  
  //   loadUser();
  
  //   const isLoggedIn = computed(() => !!user.value);
  
  //   const login = ({ username, password }) => {
  //     user.value = { username, password };
  //     saveUser();
  //   };
  
  //   const register = ({ username, password }) => {
  //     login({ username, password });
  //   };
  
  //   const logout = () => {
  //     user.value = null;
  //     localStorage.removeItem("user");
  //   };
  
  //   return { user, isLoggedIn, login, register, logout };
  // });
  
  import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// Fonction pour générer un token aléatoire (simulation, veuillez utiliser un mécanisme sécurisé)
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
    token.value = generateToken(); // Générez un token sécurisé après la connexion
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
        // ... Autres utilisateurs ...
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

