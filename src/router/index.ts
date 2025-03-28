import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router