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

export default router;
