import { organisation } from "../../data/01-organisation";
import { documentation } from "../../data/021-documentation";
import { security } from "../../data/11-security";
import { access } from "../../data/121-access";
import { informationsecurity } from "../../data/13-informationsecurity";
import { appendix } from "../../data/14-appendix";
import type { Survey } from "../../types/types";

export const QuestionSheetIS: Survey = {
  title: "Опросный лист для ИС (К2-К3)",
  path: "/question-sheet-is/",
  surveyConfig: [
    {
      name: "Организационно - распорядительная документация",
      url: "organisation",
    },
    { name: "Ответственные лица", url: "documentation" },
    { name: "Охрана помещений", url: "security" },
    { name: "Управление доступом", url: "access" },
    { name: "Требования по защите информации", url: "informationsecurity" },
    { name: "Прикладной блок", url: "arms" },
    { name: "Приложение", url: "appendix" },
  ],
  props: {
    organisation: {
      title: "Организационно - распорядительная документация",
      schema: organisation,
    },
    documentation: { title: "Ответственные лица", schema: documentation },
    security: { title: "Охрана помещений", schema: security },
    access: { title: "Управление доступом", schema: access },
    informationsecurity: {
      title: "Требования по защите информации",
      schema: informationsecurity,
    },
    appendix: { title: "Приложение", schema: appendix },
  },
};
