import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: 'Eiizong',
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {}
})

export default store
