import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import ScormPlayer from '@/views/ScormPlayer.vue'
import ScormCursosView from '@/views/scorm/ScormCursosView.vue'
import LoginView from '@/views/authentication/LoginView.vue' 
import RegisterView from '@/views/authentication/RegisterView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/scorm-player',
    name: 'ScormPlayer',
    component: ScormPlayer
  },
  {
    path: '/',
    name: 'ScormCursos',
    component: ScormCursosView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
