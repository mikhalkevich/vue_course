import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
     path: '/kurs',
     name: 'kurs',
     component: () => import(/* webpackChunkName: "kurs" */ '../views/KursView.vue')
  },
  {
     path: '/tseli',
     name: 'tseli',
     component: () => import(/* webpackChunkName: "tseli" */ '../views/TseliView.vue')
  },
  {
     path: '/vse',
     name: 'vse',
     component: () => import(/* webpackChunkName: "vse" */ '../views/VseView.vue')
  },
  {
     path: '/trebov',
     name: 'trebov',
     component: () => import(/* webpackChunkName: "trebov" */ '../views/TrebovView.vue')
  },
  {
     path: '/kont',
     name: 'kont',
     component: () => import(/* webpackChunkName: "kont" */ '../views/KontView.vue')
  },
  {
     path: '/ft',
     name: 'ft',
     component: () => import(/* webpackChunkName: "ft" */ '../views/FtView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
