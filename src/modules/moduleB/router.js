import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/index",
        name:'模块B-首页',
        component: () => import(/* webpackChunkName: "moduleBPage" */ "./index")
    },
    {
        path: "/page1",
        name:'模块A-page1',
        component: () => import(/* webpackChunkName: "moduleBPage" */ "./page1")
    }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL + 'moduleB',
  routes
});

export default router;
