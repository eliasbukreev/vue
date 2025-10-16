<script setup lang="ts">
import ListInForms from "./ListInForms.vue";
import { getCommmitteeSchema } from "../data/03-сommittee";
import { ref } from "vue";
import type { FormKitSchemaNode } from "@formkit/core";

const Tabs: string[] = [
  "Состав комиссии по уничтожению персональных данных",
  "Состав комиссии по уничтожению СКЗИ",
  "Состав комиссии по реагированию на инциденты ИБ",
  "Перечень лиц, допущенных к обработке ПДн",
  "Перечень лиц, допущенных к работе с СКЗИ",
  "Перечень лиц, допущенных к работе в ИС",
];

const tab = ref<string | null>(null);

const commmittees: Record<string, FormKitSchemaNode[]> = {};
Tabs.forEach((tabName) => {
  commmittees[tabName] = getCommmitteeSchema(tabName);
  console.log(tabName, getCommmitteeSchema(tabName));
});
</script>

<template>
  <ListInForms v-show="!tab" v-model:tab="tab" :Tabs="Tabs" />

  <div
    v-show="tab"
    @click="tab = null"
    class="cursor-pointer pl-6 flex items-center text-red-600 hover:text-red-800 font-semibold"
  >
    <span class="text-gray-400">/</span> Открыть другую комисию
  </div>
  <section v-for="tabName in Tabs" :key="tabName">
    <div v-show="tab === tabName">
      <FormKitSchema :schema="commmittees[tabName]" />
    </div>
  </section>
</template>
