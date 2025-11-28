import { organisation } from "../../data/01-organisation";
import { documentation } from "../../data/021-documentation";
import { getCommmitteeSchema } from "../../data/03-сommittee";
import { security } from "../../data/11-security";
import { access } from "../../data/12-access";
import { informationsecurity } from "../../data/131-informationsecurity";
import { appendix } from "../../data/14-appendix";
import { gissetup } from "../../data/15-gissetup";
import type { Survey } from "../../types/types";

export const QuestionSheetGIS: Survey = {
  title: "Опросный лист для разработки документации по защите информации в ГИС",
  path: "/question-sheet-gis/",
  surveyConfig: [
    {
      name: "Организационно - распорядительная документация",
      url: "organisation",
    },
    { name: "Ответственные лица", url: "documentation" },
    { name: "Комиссии", url: "commitee" },
    { name: "Охрана помещений", url: "security" },
    { name: "Управление доступом", url: "access" },
    { name: "Требования по защите информации", url: "informationsecurity" },
    { name: "Состав ГИС", url: "gissetup" },
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
    gissetup: { title: "Состав ГИС", schema: gissetup },
    appendix: { title: "Приложение", schema: appendix },
  },
};

export const QuestionSheetGISCommitee: Survey = {
  title: "Комиссии",
  path: "/question-sheet-gis/commitee/",
  surveyConfig: [
    { name: "Комиссия по уничтожению ПДн", url: "pdn-destruction" },
    { name: "Комиссия по уничтожению СКЗИ", url: "crypto-destruction" },
    { name: "Комиссия по ЗИ", url: "security-committee" },
    { name: "Комиссия ГРИИБ", url: "griib-committee" },
    { name: "Комиссия по классификации", url: "classification-committee" },
    { name: "Общая комиссия", url: "general-committee" },
  ],
  props: {
    "pdn-destruction": {
      title: "Комиссия по уничтожению ПДн",
      schema: getCommmitteeSchema("Комиссия по уничтожению ПДн"),
    },
    "crypto-destruction": {
      title: "Комиссия по уничтожению СКЗИ",
      schema: getCommmitteeSchema("Комиссия по уничтожению СКЗИ"),
    },
    "security-committee": {
      title: "Комиссия по ЗИ",
      schema: getCommmitteeSchema("Комиссия по ЗИ"),
    },
    "griib-committee": {
      title: "Комиссия ГРИИБ",
      schema: getCommmitteeSchema("Комиссия ГРИИБ"),
    },
    "classification-committee": {
      title: "Комиссия по классификации",
      schema: getCommmitteeSchema("Комиссия по классификации"),
    },
    "general-committee": {
      title: "Общая комиссия",
      schema: getCommmitteeSchema("Общая комиссия"),
    },
  },
};
