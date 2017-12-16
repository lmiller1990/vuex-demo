import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  storeGreeting: 'Hello from Vuex',

}


const mutations = {
  UPDATE_GREETING (state, message) {
    state.storeGreeting = message
  }
}

const actions = {
  updateGreeting (store, message) {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => {
      res.json()
      .then((data) => {
        store.commit('UPDATE_GREETING', data.title) 
      })
    })
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations: mutations
})