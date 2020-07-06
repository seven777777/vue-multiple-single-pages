import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/moduleA/index",
        name:'模块A-首页',
        component: () => import(/* webpackChunkName: "moduleAPage" */ "./index")
    },
    {
        path: "/moduleA/page1",
        name:'模块A-page1',
        component: () => import(/* webpackChunkName: "moduleAPage" */ "./page1")
    }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
