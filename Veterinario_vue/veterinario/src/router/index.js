import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/animalslist",
    name: "animals",
    component: () =>
      import(/* webpackChunkName: "getanimals" */ "../views/AnimalsView.vue"),
  },

  {
    path: "/animal",
    name: "AnimalForm",
    component: () =>
      import(/* webpackChunkName: "AnimalForm" */ "../views/AnimalForm.vue"),
  },
  {
    path: "/animal/:id",
    name: "AnimalForm",
    component: () =>
      import(/* webpackChunkName: "AnimalForm" */ "../views/AnimalForm.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
