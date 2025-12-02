import { createRouter, createMemoryHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
import DefaultCard from "../components/cards/DefaultCard.vue";
import DefaultSurvey from "../components/surveys/DefaultSurvey.vue";
import ARMsCard from "../components/cards/ARMsCard.vue";
import {
  PeriodicControl,
  PeriodicControlCommitee,
} from "../components/surveys/PeriodicControl";
import {
  QuestionSheetGIS,
  QuestionSheetGISCommitee,
} from "../components/surveys/QuestionSheetGIS";
import { QuestionSheetIS } from "../components/surveys/QuestionSheetIS";

const routes = [
  {
    path: "/",
    component: HomeView,
    meta: {
      title: "Выберите опрос",
      showBackButton: false,
      showSubmitButton: false,
    },
  },
  {
    path: "/periodic-control",
    meta: {
      title: PeriodicControl.title,
    },
    children: [
      {
        path: "",
        component: DefaultSurvey,
        props: { survey: PeriodicControl },
        meta: { showBackButton: true, showSubmitButton: false },
      },
      {
        path: "organisation",
        component: DefaultCard,
        props: { card: PeriodicControl.props["organisation"] },
        meta: { showBackButton: false, showSubmitButton: true },
      },
      {
        path: "documentation",
        component: DefaultCard,
        props: { card: PeriodicControl.props["documentation"] },
        meta: { showBackButton: false, showSubmitButton: true },
      },
      {
        path: "commitee",
        children: [
          {
            path: "",
            component: DefaultSurvey,
            props: { survey: PeriodicControlCommitee },
            meta: { showBackButton: true, showSubmitButton: false },
          },
          {
            path: "pdn-destruction",
            component: DefaultCard,
            props: { card: PeriodicControlCommitee.props["pdn-destruction"] },
            meta: { showBackButton: false, showSubmitButton: true },
          },
          {
            path: "crypto-destruction",
            component: DefaultCard,
            props: {
              card: PeriodicControlCommitee.props["crypto-destruction"],
            },
            meta: { showBackButton: false, showSubmitButton: true },
          },
          {
            path: "incident-response",
            component: DefaultCard,
            props: { card: PeriodicControlCommitee.props["incident-response"] },
            meta: { showBackButton: false, showSubmitButton: true },
          },
          {
            path: "pdn-access",
            component: DefaultCard,
            props: { card: PeriodicControlCommitee.props["pdn-access"] },
            meta: { showBackButton: false, showSubmitButton: true },
          },
          {
            path: "crypto-access",
            component: DefaultCard,
            props: { card: PeriodicControlCommitee.props["crypto-access"] },
            meta: { showBackButton: false, showSubmitButton: true },
          },
          {
            path: "is-access",
            component: DefaultCard,
            props: { card: PeriodicControlCommitee.props["is-access"] },
            meta: { showBackButton: false, showSubmitButton: true },
          },
        ],
      },
      {
        path: "cryptographic",
        component: DefaultCard,
        props: { card: PeriodicControl.props["cryptographic"] },
        meta: { showBackButton: false, showSubmitButton: true },
      },
      {
        path: "journals",
        component: DefaultCard,
        props: { card: PeriodicControl.props["journals"] },
        meta: { showBackButton: false, showSubmitButton: true },
      },
      {
        path: "instructions",
        component: DefaultCard,
        props: { card: PeriodicControl.props["instructions"] },
        meta: { showBackButton: false, showSubmitButton: true },
      },
      {
        path: "arms",
        component: ARMsCard,
        props: { armAdditionalSection: true },
        meta: { showBackButton: true, showSubmitButton: false },
      },
      {
        path: "orgblock",
        component: DefaultCard,
        props: { card: PeriodicControl.props["orgblock"] },
        meta: { showBackButton: false, showSubmitButton: true },
      },
      {
        path: "regulations",
        component: DefaultCard,
        props: { card: PeriodicControl.props["regulations"] },
        meta: { showBackButton: false, showSubmitButton: true },
      },
    ],
  },
  {
    path: "/question-sheet-gis",
    meta: {
      title: QuestionSheetGIS.title,
    },
    children: [
      {
        path: "",
        component: DefaultSurvey,
        props: { survey: QuestionSheetGIS },
        meta: { showBackButton: true, showSubmitButton: false },
      },
      {
        path: "organisation",
        component: DefaultCard,
        props: { card: QuestionSheetGIS.props["organisation"] },
        meta: { showBackButton: false, showSubmitButton: true },
      },
      {
        path: "documentation",
        component: DefaultCard,
        props: { card: QuestionSheetGIS.props["documentation"] },
        meta: { showBackButton: false, showSubmitButton: true },
      },
      {
        path: "commitee",
        children: [
          {
            path: "",
            component: DefaultSurvey,
            props: { survey: QuestionSheetGISCommitee },
            meta: { showBackButton: true, showSubmitButton: false },
          },
          {
            path: "pdn-destruction",
            component: DefaultCard,
            props: { card: QuestionSheetGISCommitee.props["pdn-destruction"] },
            meta: { showBackButton: false, showSubmitButton: true },
          },
          {
            path: "crypto-destruction",
            component: DefaultCard,
            props: {
              card: QuestionSheetGISCommitee.props["crypto-destruction"],
            },
            meta: { showBackButton: false, showSubmitButton: true },
          },
          {
            path: "security-committee",
            component: DefaultCard,
            props: {
              card: QuestionSheetGISCommitee.props["security-committee"],
            },
            meta: { showBackButton: false, showSubmitButton: true },
          },
          {
            path: "griib-committee",
            component: DefaultCard,
            props: { card: QuestionSheetGISCommitee.props["griib-committee"] },
            meta: { showBackButton: false, showSubmitButton: true },
          },
          {
            path: "classification-committee",
            component: DefaultCard,
            props: {
              card: QuestionSheetGISCommitee.props["classification-committee"],
            },
            meta: { showBackButton: false, showSubmitButton: true },
          },
          {
            path: "general-committee",
            component: DefaultCard,
            props: {
              card: QuestionSheetGISCommitee.props["general-committee"],
            },
            meta: { showBackButton: false, showSubmitButton: true },
          },
        ],
      },
      {
        path: "security",
        component: DefaultCard,
        props: { card: QuestionSheetGIS.props["security"] },
        meta: { showBackButton: false, showSubmitButton: true },
      },
      {
        path: "access",
        component: DefaultCard,
        props: { card: QuestionSheetGIS.props["access"] },
        meta: { showBackButton: false, showSubmitButton: true },
      },
      {
        path: "informationsecurity",
        component: DefaultCard,
        props: { card: QuestionSheetGIS.props["informationsecurity"] },
        meta: { showBackButton: false, showSubmitButton: true },
      },
      {
        path: "gissetup",
        component: DefaultCard,
        props: { card: QuestionSheetGIS.props["gissetup"] },
        meta: { showBackButton: false, showSubmitButton: true },
      },
      {
        path: "arms",
        component: ARMsCard,
        meta: { showBackButton: true, showSubmitButton: false },
      },
      {
        path: "appendix",
        component: DefaultCard,
        props: { card: QuestionSheetGIS.props["appendix"] },
        meta: { showBackButton: false, showSubmitButton: true },
      },
    ],
  },
  {
    path: "/question-sheet-is",
    meta: {
      title: QuestionSheetIS.title,
    },
    children: [
      {
        path: "",
        component: DefaultSurvey,
        props: { survey: QuestionSheetIS },
        meta: { showBackButton: true, showSubmitButton: false },
      },
      {
        path: "organisation",
        component: DefaultCard,
        props: { card: QuestionSheetIS.props["organisation"] },
        meta: { showBackButton: false, showSubmitButton: true },
      },
      {
        path: "documentation",
        component: DefaultCard,
        props: { card: QuestionSheetIS.props["documentation"] },
        meta: { showBackButton: false, showSubmitButton: true },
      },
      {
        path: "security",
        component: DefaultCard,
        props: { card: QuestionSheetIS.props["security"] },
        meta: { showBackButton: false, showSubmitButton: true },
      },
      {
        path: "access",
        component: DefaultCard,
        props: { card: QuestionSheetIS.props["access"] },
        meta: { showBackButton: false, showSubmitButton: true },
      },
      {
        path: "informationsecurity",
        component: DefaultCard,
        props: { card: QuestionSheetIS.props["informationsecurity"] },
        meta: { showBackButton: false, showSubmitButton: true },
      },
      {
        path: "arms",
        component: ARMsCard,
        meta: { showBackButton: true, showSubmitButton: false },
      },

      {
        path: "appendix",
        component: DefaultCard,
        props: { card: QuestionSheetIS.props["appendix"] },
        meta: { showBackButton: false, showSubmitButton: true },
      },
    ],
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
