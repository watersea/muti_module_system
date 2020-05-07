import Vue from 'vue'
import Router from 'vue-router'
import tcmp from '../components/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tcmp',
      name: 'tcmp',
      component: tcmp
    },
    {
      path: '*',
      name: 'error',
      component: () => import ('@/components/error.vue')
    }
  ]
})
