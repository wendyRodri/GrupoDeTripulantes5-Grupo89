import { createStore } from 'vuex'

export default createStore({
  state: {
    showCart: true,
  },
  mutations: {
    setShowCart(state,payload){
      state.showCart = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
