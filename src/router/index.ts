import { createRouter, createMemoryHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
import PeriodicControl from "../components/PeriodicControl.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/periodic-control", component: PeriodicControl },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
