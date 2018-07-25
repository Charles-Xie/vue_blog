import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
import Sidebar from './components/Sidebar.vue'
import Articles from './components/Articles.vue'
import ArticleDetail from './components/ArticleDetail.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/article'},
    {path: '/about', components: {default: About, sidebar: Sidebar}},
    {path: '/article', components: {default: Articles, sidebar: Sidebar}},
    {path: '/article/:id', name: 'articleDetail', components: {default: ArticleDetail, sidebar: Sidebar}, props: {default: true, sidebar: false}},
  ]
})
