import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step: 1,
    data:[],
    ticket:[]
  },
  mutations: {
    SAVE_DATA(state, data){
      state.data = data;
    },
    SAVE_TICKET(state,ticket){
      state.ticket.push(ticket)
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
