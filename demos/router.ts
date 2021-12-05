import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { routes } from 'demo-route'

console.log(import.meta.env)
const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
