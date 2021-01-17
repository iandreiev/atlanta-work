import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step: 1,
    data:[]
  },
  mutations: {
    SAVE_DATA(state, data){
      state.data = data;
    },
    SET_STEP(state,step){
      state.step = step
    }
  },
  actions: {
  },
  modules: {
  }
})
