import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { routes } from 'demo-route'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router