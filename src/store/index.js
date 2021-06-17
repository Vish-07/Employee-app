import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user: null
  },
  
  mutations: {
    SET_USER_DATA(state,userData){
      
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
      state.user = userData;
      
     }
  },
  actions: {
    
    async login ({ commit }, credentials) {
      const { data } = await axios.post('http://localhost:3000/api/v1.0/login', credentials)
      commit('SET_USER_DATA', data.data)
    },
  },
  modules: {
  }
})
