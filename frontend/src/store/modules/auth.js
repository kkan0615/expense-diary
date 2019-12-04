import axios from 'axios'

const state = {
    id: null
}

const getters = {
    getUser: (state) => {
        return state.id
    }
}

const mutations = {
    LOGIN (state, data) {
        console.log(data);

        state.id = data
    },
    LOGOUT (state) {
        state.id = null
    },
}

const actions = {
    LOGIN ({commit}, {email, password}) {
        return axios.post('http://127.0.0.1:8001/api/auth/login', {email, password})
          .then((res) => {
              console.log('actiontest: ' + res.data.user._id);

            commit('LOGIN', res.data.user._id)
            axios.defaults.headers.common['Authorization'] = 'Bearer ${data.accessToken}';
          })
          .catch((error) => {
            console.error(error);

          });
    },
    LOGOUT ({commit}) {
        axios.defaults.headers.common['Authorization'] = undefined
        commit('LOGOUT')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}