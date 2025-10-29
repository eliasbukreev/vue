import { createRouter, createMemoryHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
import PeriodicControl from "../components/PeriodicControl.vue";
import QuestionSheetGIS from "../components/QuestionSheetGIS.vue";
import QuestionSheetIS from "../components/QuestionSheetIS.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/periodic-control", component: PeriodicControl },
  { path: "/question-sheet-gis", component: QuestionSheetGIS },
  { path: "/question-sheet-is", component: QuestionSheetIS },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
