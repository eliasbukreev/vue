<script setup lang="ts">
import CommitteeCard from "../elements/CommitteeCard.vue";
import ARMsCard from "../elements/ARMsCard.vue";
import QuestionForm from "../elements/QuestionForm.vue";
import { organisation } from "../../data/01-organisation";
import { documentation } from "../../data/02-documentation";
import { cryptographic } from "../../data/04-cryptographic";
import { journals } from "../../data/05-journals";
import { instructions } from "../../data/06-instructions";
import { application } from "../../data/07-application";
import { orgblock } from "../../data/08-orgblock";
import { regulations } from "../../data/09-regulations";
import { FormKitSchema } from "@formkit/vue";
import type { TabItem } from "../../types/types";

const title = "Периодический контроль";

const Commitee: string[] = [
  "Состав комиссии по уничтожению персональных данных",
  "Состав комиссии по уничтожению СКЗИ",
  "Состав комиссии по реагированию на инциденты ИБ",
  "Перечень лиц, допущенных к обработке ПДн",
  "Перечень лиц, допущенных к работе с СКЗИ",
  "Перечень лиц, допущенных к работе в ИС",
];

const Tabs: TabItem[] = [
  {
    name: "Организационно - распорядительная документация",
    component: FormKitSchema,
    schema: organisation,
  },
  {
    name: "Документарный блок",
    component: FormKitSchema,
    schema: documentation,
  },
  { name: "Комиссии", component: CommitteeCard, props: { Tabs: Commitee } },
  { name: "Средства защиты", component: FormKitSchema, schema: cryptographic },
  { name: "Журналы", component: FormKitSchema, schema: journals },
  { name: "Инструкции", component: FormKitSchema, schema: instructions },
  {
    name: "Прикладной блок(первая часть)",
    component: FormKitSchema,
    schema: application,
  },
  { name: "Прикладной блок(вторая часть)", component: ARMsCard },
  { name: "Организационный блок", component: FormKitSchema, schema: orgblock },
  {
    name: "Процесс ознакомления сотрудников с ОРД",
    component: FormKitSchema,
    schema: regulations,
  },
];
</script>

<template>
  <QuestionForm :Tabs="Tabs" :title="title" />
</template>
