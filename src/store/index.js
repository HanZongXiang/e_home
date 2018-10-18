import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {
      idCardNumber: '',
      avatar: '',
      username : ''
    }
  },
  mutations: {
    CHANGE_userInfo (state,payload) {
      state.userInfo = payload
    }
  },
  actions: {},
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => localStorage.getItem(key),
        setItem: (key,value) => localStorage.setItem(key,value),
        removeItem: key => localStorage.removeItem(key)
      }
    })
  ]
})

export default store;