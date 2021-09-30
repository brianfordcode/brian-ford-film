import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/photography',
    name: 'Photography',
    component: () => import('../views/photography.vue')
  },
  {
    path: '/film',
    name: 'Film',
    component: () => import('../views/film.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes
})

export default router
