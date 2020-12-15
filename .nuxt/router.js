import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d21d1fe = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _32073bfe = () => interopDefault(import('../pages/index/index.vue' /* webpackChunkName: "pages/index/index" */))
const _255da3c4 = () => interopDefault(import('../pages/index/index/index.vue' /* webpackChunkName: "pages/index/index/index" */))
const _17694747 = () => interopDefault(import('../pages/index/index/index/index.vue' /* webpackChunkName: "pages/index/index/index/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _7d21d1fe,
    children: [{
      path: "",
      component: _32073bfe,
      children: [{
        path: "",
        component: _255da3c4,
        children: [{
          path: "",
          component: _17694747,
          name: "index-index-index"
        }]
      }]
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
