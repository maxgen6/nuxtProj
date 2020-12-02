export const state = () => ({
    posts : []
});

export const mutations = {
    setPosts (state, posts) {
        state.posts = posts;
    }
};

export const actions = {
    async fetch({commit}) {
        const posts = await this.$axios.$get('http://jsonplaceholder.typicode.com/posts?_limit=5');
        commit('setPosts', posts);
    }
};

export const getters = {
    posts: p => p.posts
};