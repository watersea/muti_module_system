import Vue from 'vue'
import Vuex from 'vuex'
import rootState from '@/store/state'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    rootState,
    names: 'crm'
  }
})

export default store
