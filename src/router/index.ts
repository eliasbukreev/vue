import { createRouter, createMemoryHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
import PeriodicControl from "../components/surveys/PeriodicControl.vue";
import QuestionSheetGIS from "../components/surveys/QuestionSheetGIS.vue";
import QuestionSheetIS from "../components/surveys/QuestionSheetIS.vue";

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
