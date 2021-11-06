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
  // {
  //   path: '/mask',
  //   name: 'mask',
  //   component: () => import(/* webpackChunkName: "mask" */ '../views/mask.vue')
  // },
  {
    path: '/notification',
    name: 'notification',
    component: () => import(/* webpackChunkName: "notification" */ '../views/notification.vue')
  },
  {
    path: '/card',
    name: 'card',
    component: () => import(/* webpackChunkName: "card" */ '../views/card.vue')
  },
  {
    path: '/toast',
    name: 'toast',
    component: () => import(/* webpackChunkName: "toast" */ '../views/toast.vue')
  },
  {
    path: '/mask',
    name: 'mask',
    component: () => import(/* webpackChunkName: "mask" */ '../views/mask.vue')
  },
  {
    path: '/pager',
    name: 'pager',
    component: () => import(/* webpackChunkName: "pager" */ '../views/pager.vue')
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: () => import(/* webpackChunkName: "tabs" */ '../views/tabs.vue')
  },
  {
    path: '/loading',
    name: 'loading',
    component: () => import(/* webpackChunkName: "loading" */ '../views/loading.vue')
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import(/* webpackChunkName: "modal" */ '../views/modal.vue')
  },
  {
    path: '/drawer',
    name: 'drawer',
    component: () => import(/* webpackChunkName: "drawer" */ '../views/drawer.vue')
  },
  {
    path: '/actionsheet',
    name: 'actionsheet',
    component: () => import(/* webpackChunkName: "actionsheet" */ '../views/actionsheet.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import(/* webpackChunkName: "message" */ '../views/message.vue')
  },
  {
    path: '/alert',
    name: 'alert',
    component: () => import(/* webpackChunkName: "alert" */ '../views/alert.vue')
  },
  {
    path: '/progress',
    name: 'progress',
    component: () => import(/* webpackChunkName: "progress" */ '../views/progress.vue')
  },
  {
    path: '/popconfirm',
    name: 'popconfirm',
    component: () => import(/* webpackChunkName: "popconfirm" */ '../views/popconfirm.vue')
  },
  {
    path: '/popover',
    name: 'popover',
    component: () => import(/* webpackChunkName: "popover" */ '../views/popover.vue')
  },
  {
    path: '/tooltip',
    name: 'tooltip',
    component: () => import(/* webpackChunkName: "tooltip" */ '../views/tooltip.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "list" */ '../views/list.vue')
  },
  {
    path: '/accordion',
    name: 'accordion',
    component: () => import(/* webpackChunkName: "accordion" */ '../views/accordion.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import(/* webpackChunkName: "table" */ '../views/table.vue')
  },
  {
    path: '/blockquote',
    name: 'blockquote',
    component: () => import(/* webpackChunkName: "blockquote" */ '../views/blockquote.vue')
  },
  {
    path: '/divider',
    name: 'divider',
    component: () => import(/* webpackChunkName: "divider" */ '../views/divider.vue')
  },
  {
    path: '/tag',
    name: 'tag',
    component: () => import(/* webpackChunkName: "tag" */ '../views/tag.vue')
  },
  {
    path: '/dropdown',
    name: 'dropdown',
    component: () => import(/* webpackChunkName: "dropdown" */ '../views/dropdown.vue')
  },
  {
    path: '/step',
    name: 'step',
    component: () => import(/* webpackChunkName: "step" */ '../views/step.vue')
  },
  {
    path: '/anchor',
    name: 'anchor',
    component: () => import(/* webpackChunkName: "anchor" */ '../views/anchor.vue')
  },
  {
    path: '/tmp',
    name: 'tmp',
    component: () => import(/* webpackChunkName: "tmp" */ '../views/tmp.vue')
  },
  {
    path: '/form',
    name: 'form/form',
    component: () => import(/* webpackChunkName: "form" */ '../views/form/index.vue')
  },
  {
    path: '/input',
    name: 'form/input',
    component: () => import(/* webpackChunkName: "input" */ '../views/form/input.vue')
  },
  {
    path: '/select',
    name: 'form/select',
    component: () => import(/* webpackChunkName: "select" */ '../views/form/select.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
