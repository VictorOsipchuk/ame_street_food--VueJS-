import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    props: true,
    component: () => import('../views/Cart.vue'),
  },
  {
    path: '/burgers',
    name: 'burgers',
    props: true,
    component: () => import('../views/category/Burgers.vue'),
  },
  {
    path: '/burittos',
    name: 'burittos',
    component: () => import('../views/category/Burritos.vue'),
  },
  {
    path: '/quesadillas',
    name: 'quesadillas',
    component: () => import('../views/category/Quesadillas.vue'),
  },
  {
    path: '/others',
    name: 'others',
    component: () => import('../views/category/Others.vue'),
  },
  {
    path: '/coffee',
    name: 'coffee',
    component: () => import('../views/category/Coffee.vue'),
  },
  {
    path: '/items',
    name: 'items',
    component: () => import('../views/Item.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue'),
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('../views/Orders.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
