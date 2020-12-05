export const state = () => ({
    token : null, 
    getFilter : null
});

export const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    clearToken(state) {
        state.token = null;
    },
    setFilter(state, getFilter) {
        state.getFilter = getFilter;
    },
    clearFilter(state) {
        state.getFilter = null;
    }
};

export const actions = {
    nuxtServerInit({dispatch}) {
        console.log('nuxtServerInit') //используется один раз при запуске на сервере 
    },
    login({commit}) {
        commit('setToken', 'truetoken')
    },
    logout({commit}) {
        commit('clearToken')
    },
    filterOn({commit}) {
        commit('setFilter', 'truegetFilter')
    },
    filterOff({commit}) {
        commit('clearFilter')
    }
};

export const getters = { 
    hasToken: s => !!s.token,
    hasFilter: s => !!s.getFilter
};