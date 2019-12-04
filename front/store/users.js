export const state = () => ({
    me: null,
});

export const mutations = {
    setMe(state, payload) {
        state.me = payload;
    },
    getNickname(state) {
        return state.me.nickname;
    }
};

export const actions = {
    signUp({ commit, state }, payload) {
        return this.$axios.post('http://127.0.0.1:8001/auth/signUp', {
            email: payload.email,
            nick: payload.nickname,
            password: payload.password,
        }, {
            withCredentials: true,
        })
        .then((res) => {
            commit('setMe', res.data);
            return res.data;
        })
        .catch((error) => {
            console.error(error);
            throw err.message;
        });
    },
    logIn({ commit }, payload) {
        return this.$axios.post('http://127.0.0.1:8001/auth/login', {
            email: payload.email,
            password: payload.password,
        }, {
            withCredentials: true,
        })
        .then((res) => {
            commit('setMe', res.data);
            return res.data;
        })
        .catch((err) => {
            console.error(err);
            throw err.message;
        })
    },
    logOut({ commit }) {
        return this.$axios.post('http://127.0.0.1:8001/auth/logout', {}, {
            withCredentials: true,
        })
        .then((data) => {
            commit('setMe', null);
            return 'Log out';
        })
        .catch((err) => {
            console.error(err);
            throw err.message;
        });
    },
};