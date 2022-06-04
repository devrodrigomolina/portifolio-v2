import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Habilities from '../views/Habilities.vue'
import Projects from '../views/Projects.vue'
import Studies from '../views/Studies.vue'
import Contacts from '../views/Contacts.vue'
import Formation from '../views/Formation.vue'
import Objectives from '../views/Objectives.vue'

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
    component: Habilities
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: Projects
  },
  {
    path: '/objetivos',
    name: 'Objetivos',
    component: Objectives
  },
  {
    path: '/estudos',
    name: 'Estudos',
    component: Studies
  },
  {
    path: '/contatos',
    name: 'Contatos',
    component: Contacts
  },
  {
    path: '/formacao',
    name: 'Formacao',
    component: Formation
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
