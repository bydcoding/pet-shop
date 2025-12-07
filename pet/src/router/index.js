import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home.vue";
import Category from "../components/category.vue";
import Login from "../components/login.vue";

const routes = [
  {
    path: "/",
    name: "Home", //路由的名稱
    component: Home, //import進來的元件名稱
  },
  {
    path: "/category",
    name: "category",
    component: Category,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
