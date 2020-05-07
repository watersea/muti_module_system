import Vue from 'vue'
import Router from 'vue-router'
import crm from '../components/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/crm',
      name: 'crm',
      component: crm
    },
    {
      path: '*',
      name: 'error',
      component: () => import ('@/components/error.vue')
    }
  ]
})
