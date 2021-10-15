import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import(/* webpackChunkName: "button" */ '../views/button.vue')
  },
  {
    path: '/icon',
    name: 'icon',
    component: () => import(/* webpackChunkName: "icon" */ '../views/icon.vue')
  },
  {
    path: '/mask',
    name: 'mask',
    component: () => import(/* webpackChunkName: "mask" */ '../views/mask.vue')
  },
  {
    path: '/notification',
    name: 'notification',
    component: () => import(/* webpackChunkName: "notification" */ '../views/notification.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
