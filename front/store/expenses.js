export const state = () => ({
    list: null,
    avg: 0,
    sum: 0,
});

export const mutations = {
    setList(state, payload) {
        state.list = payload.expenses;
        state.avg = payload.avg;
        state.sum = payload.sum;
    },
    addList(state, payload) {
        if(state.list != null) {
            state.list.push(payload.expense);
        } else {
            state.list = payload;
        }
        state.avg = payload.avg;
        state.sum = payload.sum;
    },
    removeList(state, payload) {
        console.log(payload.id);
        if (state.list instanceof Array) {
            const idx = state.list.findIndex((e) => {

                return e.id === payload.id;
            });

            if (idx > -1) {
                state.list.splice(idx, 1);
            }
        } else {
            state.list = null;
        }
        state.avg = payload.avg;
        state.sum = payload.sum;
    },
    updateList(state, payload) {

    }
};

export const actions = {
    getList({ commit }, payload ) {
        this.$axios.post('http://127.0.0.1:8001/expense/detail?year='+payload.year+'&month='+payload.month+'&day='+payload.day, {
        }, {
            withCredentials: true,
        })
        .then((res) => {
            commit('setList', res.data);
        })
        .catch((error) => {
            console.error(error);
        });
    },
    createExpense({ commit }, payload) {
        this.$axios.post('http://127.0.0.1:8001/expense/create', {
            title: payload.title,
            content: payload.content,
            color: payload.color,
            money: payload.money,
            year: payload.year,
            month: payload.month,
            day: payload.day,
        }, {
            withCredentials: true,
        })
        .then((res) => {
            commit('addList', res.data);
        })
        .catch((error) => {
            console.error(error);
            alert('fail from post')
        });
    },
    removeExpense({ commit }, payload) {
      this.$axios.post('http://127.0.0.1:8001/expense/detail/remove', {
            year: payload.year,
            month: payload.month,
            day: payload.day,
            id: payload.id
      }, {
          withCredentials: true,
      })
      .then((res) => {
          commit('removeList', res.data);
      }).catch((error) => {
          console.error(error);
          console.log(payload.id);
          alert('There is problem to send a data');
      });
  },
    updateExpense({ commit }, payload) {
        this.$axios.post('http://127.0.0.1:8001/expense/detail/edit', {
            title: payload.title,
            content: payload.content,
            color: payload.color,
            id: payload.id
        }, {
            withCredentials: true,
        })
        .then((res) => {
            commit('updateList', res.data);
        }).catch((error) => {
            console.error(error);
            console.log(payload.id);
            alert('There is problem to edit a data');
        });
    },
};