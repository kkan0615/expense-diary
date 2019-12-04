const state = {
  items: [],
  num: 100
}

const getters = {
    getNum: (state) => {
        return state.num
    }
}

const mutations = {
    increment (state) {
        state.num++
    },
    decrement (state, { data }) {
        state.num -= data
    }
}

const actions = {
    decrementAction({state, commit}, data) {
        commit('decrement', )
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}