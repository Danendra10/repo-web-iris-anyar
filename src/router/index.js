import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ComingSoon from '../views/ComingSoon.vue'
import Publications from '../views/Publications.vue'
import Achivements from '../views/Achivements.vue'
import ContactUs from '../views/ContactUs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/comingsoon',
    name: 'ComingSoon',
    component: ComingSoon
  },
  {
    path: '/publications',
    name: 'Publications',
    component: Publications
  },
  {
    path: '/achivements',
    name: 'Achivements',
    component: Achivements
  },
  {
    path: '/contactus',
    name: 'ContactUs',
    component: ContactUs
  },

  //hanya trial
  {
    path: '/trial',
    name: 'trial',
    component: () => import(/* webpackChunkName: "about" */ '../views/trial.vue')
  },
  {
    path: '/trial2',
    name: 'trial2',
    component: () => import(/* webpackChunkName: "about" */ '../views/trial2.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// const routers = createRouter({
//   history: createWebHistory(),
// })

export default router
// export default routers
