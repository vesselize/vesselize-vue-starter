import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/pages/Home';
import Profile from '@/pages/Profile';

const routes = [
  { path: '/', component: Home },
  { path: '/profile/:id', component: Profile },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
