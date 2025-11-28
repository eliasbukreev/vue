<script setup lang="ts">
import CommitteeCard from "../elements/CommitteeCard.vue";
import ARMsCard from "../elements/ARMsCard.vue";
import QuestionForm from "../elements/QuestionForm.vue";
import { organisation } from "../../data/01-organisation";
import { documentation } from "../../data/021-documentation";
import { security } from "../../data/11-security";
import { access } from "../../data/12-access";
import { informationsecurity } from "../../data/131-informationsecurity";
import { gissetup } from "../../data/15-gissetup";
import { appendix } from "../../data/14-appendix";
import type { TabItem } from "../../types/types";
import { FormKitSchema } from "@formkit/vue";

const title =
  "Опросный лист для разработки документации по защите информации в ГИС";

const Commitee: string[] = [
  "Комиссия по уничтожению ПДн",
  "Комиссия по уничтожению СКЗИ",
  "Комиссия по ЗИ",
  "Комиссия ГРИИБ",
  "Комиссия по классификации",
  "Общая комиссия",
];

const Tabs: TabItem[] = [
  {
    name: "Организационно - распорядительная документация",
    component: FormKitSchema,
    schema: organisation,
  },
  {
    name: "Ответственные лица",
    component: FormKitSchema,
    schema: documentation,
  },
  { name: "Комиссии", component: CommitteeCard, props: { Tabs: Commitee } },
  { name: "Охрана помещений", component: FormKitSchema, schema: security },
  { name: "Управление доступом", component: FormKitSchema, schema: access },
  {
    name: "Требования по защите информации",
    component: FormKitSchema,
    schema: informationsecurity,
  },
  { name: "Состав ГИС", component: FormKitSchema, schema: gissetup },
  { name: "Прикладной блок", component: ARMsCard },
  { name: "Приложение", component: FormKitSchema, schema: appendix },
];
</script>

<template>
  <QuestionForm :Tabs="Tabs" :title="title" />
</template>
