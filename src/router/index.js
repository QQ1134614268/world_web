import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import register from '@/views/user/register.vue'
import login from '@/views/user/login.vue'
import tree from '@/views/root/tree'
import hello from '@/views/hello/Hello'
import test_component from '@/views/hello/test_component'
import message from '@/views/message/message'
import model from '@/views/model/model'
import member from '@/views/member/member'
import diary from '@/views/apply/diary/diary'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: Home,
    // component: register
  },
  {
    path: '/user/register',
    name: '/user/register',
    component: register
  },
  {
    path: '/message/message',
    name: '/message/message',
    component: message
  },
  {
    path: '/model/model',
    name: '/model/model',
    component: model
  },
  {
    path: '/member/member',
    name: '/member/member',
    component: member
  },
  {
    path: '/apply/diary/diary',
    name: '/apply/diary/diary',
    component: diary
  },
  {
    path: '/user/login',
    name: '/user/login',
    component: login
  },
  {
    path: '/btree',
    name: '/btree',
    component: tree
  },
  {
    path: '/hello/hello',
    name: '/hello/hello',
    component: hello
  },
  {
    path: '/hello/test_component',
    name: '/hello/test_component',
    component: test_component
  },
  {
    path: '/about',
    name: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }

  },
]

const router = new VueRouter({
  mode: 'history',
  routes:routes
})

export default router
