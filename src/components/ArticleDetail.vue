<template>
    <div>
        <div>
            <h2>{{article.title}}</h2>
        </div>
        <div>this is article detail.</div>
        <div>
            <div v-html="compiledMarkdown"></div>
        </div>
    </div>
</template>

<script>
import marked from 'marked'
export default {
    name: 'articleDetail',
    props: [
        'id'
    ],
    data() {
        return {
            articleList: [],
            article: {}
        }
    },
    mounted: function () {
        // pass the route param here
        console.log("article id: ", this.id)
        this.articleList = [
            {
                id: 1,
                title: 'my first article',
                gist: 'this is my first article',
                content: `## title
### article ` + 1
            },
            {
                id: 2,
                title: 'my second article',
                gist: 'this is my second article',
                content: `## title
### article ` + 2
            },
            {
                id: 3,
                title: 'my third article',
                gist: 'this is my third article',
                content: `## title
### article ` + 3
            }
        ]
        this.article = this.articleList[this.id - 1]

    },
    watch: {
        id: function () {
            console.log(this.id);
            this.article = this.articleList[this.id - 1];
        }
    },
    methods: {
        // compiledMarkdown: function () {
        //     console.log("compiledMarkdown() called, article content: ", this.article.content)
        //     return marked(this.article.content || '')
        // }
    },
    computed: {
        compiledMarkdown: function () {
            return marked(this.article.content || '')
        }
    }
}
</script>

<style scoped>

</style>
