import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('@/views/Landing'), // 동적 import
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/Main'),
  },
  {
    path: '/orderHistory',
    name: 'orderHistory',
    component: () => import('@/views/OrderHistory'),
  },
  {
    path: '/bill',
    name: 'bill',
    component: () => import('@/views/Bill'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});