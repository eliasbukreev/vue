<script setup lang="ts">
import ARMsCard from "../elements/ARMsCard.vue";
import QuestionForm from "../elements/QuestionForm.vue";
import { organisation } from "../../data/01-organisation";
import { documentation } from "../../data/021-documentation";
import { security } from "../../data/11-security";
import { access } from "../../data/121-access";
import { informationsecurity } from "../../data/13-informationsecurity";
import { appendix } from "../../data/14-appendix";
import { FormKitSchema } from "@formkit/vue";
import type { TabItem } from "../../types/types";

const title = "Опросный лист для ИС (К2-К3)";

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
  { name: "Охрана помещений", component: FormKitSchema, schema: security },
  { name: "Управление доступом", component: FormKitSchema, schema: access },
  {
    name: "Требования по защите информации",
    component: FormKitSchema,
    schema: informationsecurity,
  },
  { name: "Прикладной блок", component: ARMsCard },
  { name: "Приложение", component: FormKitSchema, schema: appendix },
];
</script>

<template>
  <QuestionForm :Tabs="Tabs" :title="title" />
</template>
