import Vue from 'vue'
import Router from 'vue-router'
import Todos from '@/components/Todos'

Vue.use(Router)

let routes = ['all', 'active', 'completed'].map(visibility => {
  return {
    path: `/${visibility}`,
    component: {
      extends: Todos,
      data: () => {
        return {
          visibility
        }
      }
    }
  }
})

export default new Router({
  routes: [...routes, {
    path: '/',
    redirect: {path: '/all'}
  }]
})
