import Vue from 'vue'

import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from '../mutation-types'

const state = {
  goods: [],
  ratings: [],
  info: {},
  cartFoods: []
}

const mutations = {
  [RECEIVE_GOODS](state, { goods }) {
    state.goods = goods
  },

  [RECEIVE_RATINGS](state, { ratings }) {
    state.ratings = ratings
  },

  [RECEIVE_INFO](state, { info }) {
    state.info = info
  },

  [INCREMENT_FOOD_COUNT](state, food ){
    if(food.hasOwnProperty('count')) {
      food.count++
    } else {
      Vue.set(food, 'count', 1)
      state.cartFoods.push(food)
    }
  },
  [DECREMENT_FOOD_COUNT](state, food) {
    if(food.count) {
      food.count--
      if(food.count === 0){
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },

  [CLEAR_CART] (state) {
    state.cartFoods.forEach(food => food.count = 0)
    state.cartFoods = []
  }
}

const actions = {
  updateFoodCount({commit}, {food, isAdd}) {
    if(isAdd) {
      commit(INCREMENT_FOOD_COUNT, food)
    }else{
      commit(DECREMENT_FOOD_COUNT, food)
    }
  },
  clearCart ({commit}) {
    commit(CLEAR_CART)
  }
}

const getters = {
  totalCount (state) {
    return state.cartFoods.reduce((pre, food) => pre + food.count, 0)
  },
  totalPrice (state) {
    return state.cartFoods.reduce((pre, food) => pre + food.count*food.price, 0)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
