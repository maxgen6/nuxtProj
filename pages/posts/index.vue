<template>
    <section>
        <h1>{{postTitle}}</h1>
        <div class="search-block">
            <input type="text" placeholder="Search-post..." v-model="search">
            <!-- <button v-on:click.prevent="filterPosts(post)">Search</button> -->
        </div>
        <div class="posts" v-for="post of posts" :key="post.id" @click.prevent="openPost(post)">
                <h2>{{  post.id }}</h2>
                <h3>{{  post.title }}</h3>
                <p>{{   post.body  }}</p>
            
        </div>
    </section>
</template>

<script>
export default {
    async fetch({store}) {
        if(store.getters['posts/posts'].length === 0) {
            await store.dispatch('posts/fetch')
        }
    },
    data: () => ({
        postTitle: 'Posts page',
        search: ''
    }),
    computed: {
        posts() {
            return this.$store.getters['posts/posts'].filter(item => item.title.indexOf(this.search) !== -1) //поиск по записям
        }
    },
    methods: {
        openPost(post) {
            this.$router.push('/posts/' + post.id)
        }
    }
}
</script>



<style scoped>
    h1 {
        margin: 0 auto;
    }
    input {
        width: 400px;
    }
    .posts {
        width: 400px;
        border: 1px solid #000;
        margin-bottom: 1rem;
    }
    .search-block {
        margin-top: 1rem;
        margin-bottom: 2rem;
    }
    h2, h3, p{
        text-align: center;
    }
    
</style>