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
  { path: "/", component: HomeView },
  {
    path: "/periodic-control",
    children: [
      {
        path: "",
        component: DefaultSurvey,
        props: { survey: PeriodicControl },
      },
      {
        path: "organisation",
        component: DefaultCard,
        props: { card: PeriodicControl.props["organisation"] },
      },
      {
        path: "documentation",
        component: DefaultCard,
        props: { card: PeriodicControl.props["documentation"] },
      },
      {
        path: "commitee",
        children: [
          {
            path: "",
            component: DefaultSurvey,
            props: { survey: PeriodicControlCommitee },
          },
          {
            path: "pdn-destruction",
            component: DefaultCard,
            props: { card: PeriodicControlCommitee.props["pdn-destruction"] },
          },
          {
            path: "crypto-destruction",
            component: DefaultCard,
            props: {
              card: PeriodicControlCommitee.props["crypto-destruction"],
            },
          },
          {
            path: "incident-response",
            component: DefaultCard,
            props: { card: PeriodicControlCommitee.props["incident-response"] },
          },
          {
            path: "pdn-access",
            component: DefaultCard,
            props: { card: PeriodicControlCommitee.props["pdn-access"] },
          },
          {
            path: "crypto-access",
            component: DefaultCard,
            props: { card: PeriodicControlCommitee.props["crypto-access"] },
          },
          {
            path: "is-access",
            component: DefaultCard,
            props: { card: PeriodicControlCommitee.props["is-access"] },
          },
        ],
      },
      {
        path: "cryptographic",
        component: DefaultCard,
        props: { card: PeriodicControl.props["cryptographic"] },
      },
      {
        path: "journals",
        component: DefaultCard,
        props: { card: PeriodicControl.props["journals"] },
      },
      {
        path: "instructions",
        component: DefaultCard,
        props: { card: PeriodicControl.props["instructions"] },
      },
      {
        path: "arms",
        component: ARMsCard,
        props: { armAdditionalSection: true },
      },
      {
        path: "orgblock",
        component: DefaultCard,
        props: { card: PeriodicControl.props["orgblock"] },
      },
      {
        path: "regulations",
        component: DefaultCard,
        props: { card: PeriodicControl.props["regulations"] },
      },
    ],
  },
  {
    path: "/question-sheet-gis",
    children: [
      {
        path: "",
        component: DefaultSurvey,
        props: { survey: QuestionSheetGIS },
      },
      {
        path: "organisation",
        component: DefaultCard,
        props: { card: QuestionSheetGIS.props["organisation"] },
      },
      {
        path: "documentation",
        component: DefaultCard,
        props: { card: QuestionSheetGIS.props["documentation"] },
      },
      {
        path: "commitee",
        children: [
          {
            path: "",
            component: DefaultSurvey,
            props: { survey: QuestionSheetGISCommitee },
          },
          {
            path: "pdn-destruction",
            component: DefaultCard,
            props: { card: QuestionSheetGISCommitee.props["pdn-destruction"] },
          },
          {
            path: "crypto-destruction",
            component: DefaultCard,
            props: {
              card: QuestionSheetGISCommitee.props["crypto-destruction"],
            },
          },
          {
            path: "security-committee",
            component: DefaultCard,
            props: {
              card: QuestionSheetGISCommitee.props["security-committee"],
            },
          },
          {
            path: "griib-committee",
            component: DefaultCard,
            props: { card: QuestionSheetGISCommitee.props["griib-committee"] },
          },
          {
            path: "classification-committee",
            component: DefaultCard,
            props: {
              card: QuestionSheetGISCommitee.props["classification-committee"],
            },
          },
          {
            path: "general-committee",
            component: DefaultCard,
            props: {
              card: QuestionSheetGISCommitee.props["general-committee"],
            },
          },
        ],
      },
      {
        path: "security",
        component: DefaultCard,
        props: { card: QuestionSheetGIS.props["security"] },
      },
      {
        path: "access",
        component: DefaultCard,
        props: { card: QuestionSheetGIS.props["access"] },
      },
      {
        path: "informationsecurity",
        component: DefaultCard,
        props: { card: QuestionSheetGIS.props["informationsecurity"] },
      },
      {
        path: "gissetup",
        component: DefaultCard,
        props: { card: QuestionSheetGIS.props["gissetup"] },
      },
      { path: "arms", component: ARMsCard },
      {
        path: "appendix",
        component: DefaultCard,
        props: { card: QuestionSheetGIS.props["appendix"] },
      },
    ],
  },
  {
    path: "/question-sheet-is",
    children: [
      {
        path: "",
        component: DefaultSurvey,
        props: { survey: QuestionSheetIS },
      },
      {
        path: "organisation",
        component: DefaultCard,
        props: { card: QuestionSheetIS.props["organisation"] },
      },
      {
        path: "documentation",
        component: DefaultCard,
        props: { card: QuestionSheetIS.props["documentation"] },
      },
      {
        path: "security",
        component: DefaultCard,
        props: { card: QuestionSheetIS.props["security"] },
      },
      {
        path: "access",
        component: DefaultCard,
        props: { card: QuestionSheetIS.props["access"] },
      },
      {
        path: "informationsecurity",
        component: DefaultCard,
        props: { card: QuestionSheetIS.props["informationsecurity"] },
      },
      { path: "arms", component: ARMsCard },
      {
        path: "appendix",
        component: DefaultCard,
        props: { card: QuestionSheetIS.props["appendix"] },
      },
    ],
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
