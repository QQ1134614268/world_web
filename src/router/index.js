import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Home from '../views/Home'
import login from '../views/user/login.vue'
import tree from '../views/root/tree'
import hello from '../views/hello/Hello'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/login',
    name: '/user/login',
    component: login
  },
  {
    path: '/btree',
    name: 'btree',
    component: tree
  },
  {
    path: '/hello',
    name: 'hello',
    component: hello
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }

  },
]

const router = new VueRouter({
  routes
})

export default router
