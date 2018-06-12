import Vue from "vue";
import Router from "vue-router";

const index = () => import("../components/index.vue");
const blog = () => import("../components/blog.vue");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    }
  ]
});
