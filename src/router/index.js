import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Habilidades from '../views/Habilidades.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/habilidades',
    name: 'Habilidades',
    component: Habilidades
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
