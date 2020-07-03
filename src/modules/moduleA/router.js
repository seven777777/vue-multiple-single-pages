import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/index",
        name:'模块A-首页',
        component: () => import(/* webpackChunkName: "moduleAPage" */ "./index")
    },
    {
        path: "/page1",
        name:'模块A-page1',
        component: () => import(/* webpackChunkName: "moduleAPage" */ "./page1")
    }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL + 'moduleA',
  routes
});

export default router;
