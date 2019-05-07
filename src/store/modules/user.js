import {
  RECEIVE_USER,
  RESET_USER
} from '../mutation-types'

import {
  reqUser,
  reqLogout
} from '../../api'

const state = {
  user: {},
}


const mutations = {
  [RECEIVE_USER](state, user) {
    state.user = user
  },
  [RESET_USER](state) {
    state.user = {}
  },
}

const actions = {
  async getUser({ commit }) {
    const result = await reqUser()
    if (result.code === 0) {
      const user = result.data
      commit(RECEIVE_USER, user)
    }
  },

  async logout({ commit }) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER)
    }
  }
}

const getters  = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
