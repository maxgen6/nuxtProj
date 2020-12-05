export const state = () => ({
    users : [],
    usersFilter : []
});

export const mutations = {
    setUsers(state, users) {
        state.users = users;
    }
};

export const actions = {
    async fetch({commit}) {
        const users = await this.$axios.$get('http://jsonplaceholder.typicode.com/users');
        commit('setUsers', users);
        let usersFilter = await this.$axios.$get('http://jsonplaceholder.typicode.com/users');
        usersFilter = usersFilter.filter(item => item.toLowerCase().sort());
        commit('filterUsers', usersFilter);
    }
};

export const getters = { 
    users: s => s.users,
    usersFilter: s => s.usersFilter
};