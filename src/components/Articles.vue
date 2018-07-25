<template>
    <div>
        <div v-for="item in articleList" :key="item.id">
            <div>
                <h2>{{item.title}}</h2>
            </div>
            <div>
                <p>{{item.gist}}</p>
            </div>
            <div>
                <router-link :to="{name: 'articleDetail', params: {id: item.id}}">read more</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'articles',
    data() {
        return {
            articleList: []
        }
    },
    mounted: function () {
        this.articleList = [
            {
                id: 1,
                title: 'my first article',
                gist: 'this is my first article',
            },
            {
                id: 2,
                title: 'my second article',
                gist: 'this is my second article',
            },
            {
                id: 3,
                title: 'my third article',
                gist: 'this is my third article',
            }
        ]
    }
}
</script>

<style scoped>

</style>
