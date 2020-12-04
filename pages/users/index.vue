<template>
    <section>
        <h1>{{pageTitle}}</h1>
        <a href="#" @click.prevent="filterName='name'"> A-Z</a>
        <ul>
            <li v-for="user of users" :key="user.id">
                <a href="#" @click.prevent="openUser(user)">{{user.name}}</a>
            </li>
        </ul>
    </section>
</template>


<script>
export default {
    async fetch({store}) {
        if (store.getters['users/users'].length === 0){
            await store.dispatch('users/fetch')
        }
    },
    data: () => ({
        pageTitle: 'User page',
        filterName: ''
    }),
    computed: {
        users() {
            return this.$store.getters['users/users']
        },
        filter() {
            return this.$store.getters.filterUsers
        }
        // sortedList() {
        //     switch(this.filterName) {
        //         case 'name' : return this.$store.getters['users/users'].sort(sortName)
        //     }
        // }
    },
    methods: {
        openUser(user) {
            this.$router.push('/users/' + user.id)
        }
    }
    // sortName : function(d1, d2) {
    //     return (d1.name.toLowerCase() > d2.name.toLowerCase()) ? 1 : -1;
    // }
}
</script>
