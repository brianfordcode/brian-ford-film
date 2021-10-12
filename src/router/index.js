import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Brian Ford Film | Home"
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: "Brian Ford Film | About"
    }
  },
  {
    path: '/photography',
    name: 'Photography',
    component: () => import('../views/photography.vue'),
    meta: {
      title: "Brian Ford Film | Photography"
    }
  },
  {
    path: '/film',
    name: 'Film',
    component: () => import('../views/film.vue'),
    meta: {
      title: "Brian Ford Film | Film"
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/contact.vue'),
    meta: {
      title: "Brian Ford Film | Contact"
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next();
})

export default router
