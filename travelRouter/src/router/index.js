import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import DestinationView from '@/views/DestinationsView.vue';
import ExperienceView from '@/views/ExperienceView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/destination/:id/:slug', 
    name: 'destination.show',
    component: DestinationView,
    props: true,
  },
  {
    path: '/experience/:id/:slug', 
    name: 'experience.show',
    component: ExperienceView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;