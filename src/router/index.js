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
    component: () => import('@/views/main'),
  },
  {
    path: '/orderHistory',
    name: 'orderHistory',
    component: () => import('@/views/orderHistory'),
  },
  {
    path: '/bill',
    name: 'bill',
    component: () => import('@/views/bill'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});