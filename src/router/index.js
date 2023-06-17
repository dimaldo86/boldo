import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import(/* webpackChunkName: "services" */ '../views/Services.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
  },
//   {
//     path: "/posts/:id",
//     name: "PostIdDetail",
//     component: () => import(/* webpackChunkName: "postIdDetail" */ '../views/PostIdDetail.vue')
//   },


]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router