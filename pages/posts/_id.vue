<template>
    <section>
        <h1>{{post.title}}</h1>
        <hr>
        <p>{{post.body}}</p>
    </section>
</template>

<script>
export default {
    validate({params}) {
        console.log(params);
        return /^\d+$/.test(params.id)
    },
    async asyncData({$axios, params}) {
        const post = await $axios.$get('http://jsonplaceholder.typicode.com/posts/' + params.id)
        return {post}
    }
}
</script>
