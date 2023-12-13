import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import ClientListView from '../views/ClientListView.vue';
import ClientView from '../views/ClientView.vue';
import AboutView from '../views/AboutView.vue';
import ClientList from '../views/ClientList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/home', component: ClientList }
    // ,{ path: '/:pathMatch(.*)', redirect: '/not-found' },
    // { path: '/not-found', component: NotFoundView },
    // { path: '/clientlist', component: ClientListView },
    // { path: '/clientlist/:clientId', component: ClientView },
    // {
    //   path: "/about",
    //   component: AboutView,
    //   children: [
    //     { path: "first", component: FirstAboutView },
    //     { path: "second", component: SecondAboutView }
      ]
//     }
//  ]
});

export default router;
