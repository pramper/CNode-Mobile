import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
console.log(localStorage.success)
let state = {
    isLogin: localStorage.success
}

let mutations = {
    'SET_TOKEN'(state, isLogin) {
        state.userInfo = isLogin
    }
}

export default new Vuex.Store({
    state, mutations
})