import { createRouter, createWebHistory } from "vue-router";
import Header from "../components/header.vue";
import Category from "../components/category.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "Header", //路由的名稱
  //   component: Header, //import進來的元件名稱
  // },
  {
    path: "/category",
    name: "category",
    component: Category,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
