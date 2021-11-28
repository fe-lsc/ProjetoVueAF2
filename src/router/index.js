import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Estudo from '@/views/Estudo.vue'
import Pessoal from '@/views/Pessoal.vue'
import Compra from '@/views/Compra.vue'
import Outro from '@/views/Outro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/estudo',
    name: 'Estudo',
    component: Estudo
  },
  {
    path: '/compra',
    name: 'Compra',
    component: Compra
  },
  {
    path: '/pessoal',
    name: 'Pessoal',
    component: Pessoal
  },
  {
    path: '/outro',
    name: 'Outro',
    component: Outro
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
