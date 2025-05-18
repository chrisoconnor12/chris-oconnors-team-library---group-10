import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Box from '../screens/Box.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Box',
    component: Box,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
