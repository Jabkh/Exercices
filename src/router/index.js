// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/authStore';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import CharacterView from '../views/CharacterView.vue';
// import {inject} from 'vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/signin',
    name: 'Signin',
    component: RegisterView
  },
  // {
  //   path: '/characters',
  //   name: 'Characters',
  //   component: CharacterView,
  //   beforeEnter: requireAuth
  //   // router.beforeEach(async (to, from) => {
  //   //   if (
  //   //     // make sure the user is authenticated
  //   //     !isLoggedIn &&
  //   //     // ❗️ Avoid an infinite redirect
  //   //     to.name !== 'Characters'
  //   //   ) {
  //   //     // redirect the user to the login page
  //   //     return { name: 'Characters' }
  //   //   }
  //   // })
  // },

  {
    path: '/characters',
    name: 'Characters',
    component: CharacterView,
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (authStore.isLoggedIn) {
        next(); // Accès autorisé
      } else {
        next('/login'); // Redirection vers la page de login
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to,from)=>{
//   if(to.path.startsWith("/characters")){
//     const {user} = inject("user");
//     if(user.value) return true;
//     else return "/";
//   }else return true;
// });

;

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Character' && !isLoggedIn) next({ name: 'Character' })
//   else next()
// });

export default router;


// import { useAuthStore } from './store/authStore'

// export function requireAuth(to, from, next) {
//   const authStore = useAuthStore()

//   if (authStore.isAuthenticated) {
//     next()
//   } else {
//     next('/login')
//   }
// }

// const routes = [
//   {
//     path: '/characters',
//     component: CharacterView,
//     beforeEnter: requireAuth
//   }
// ]


// // auth.js
// import { defineStore } from 'pinia';

// export const useAuthStore = defineStore('auth', {
//   state: () => ({
//     isAuthenticated: !!localStorage.getItem('token'), // Vérifie si un token est présent dans le localStorage
//     token: localStorage.getItem('token') || null, // Stocke le token depuis le localStorage s'il existe
//     // Autres états d'authentification si nécessaire
//   }),
//   actions: {
//     // Action de connexion avec la gestion du token
//     login(token) {
//       this.isAuthenticated = true;
//       this.token = token;
//       localStorage.setItem('token', token); // Enregistre le token dans le localStorage
//     },
//     // Action de déconnexion
//     logout() {
//       this.isAuthenticated = false;
//       this.token = null;
//       localStorage.removeItem('token'); // Supprime le token du localStorage lors de la déconnexion
//     },
//     // Vérifier l'authentification
//     checkAuth() {
//       if (this.token && !this.isAuthenticated) {
//         this.isAuthenticated = true;
//       }
//     },
//   },
// });
