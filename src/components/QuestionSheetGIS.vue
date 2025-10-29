<script setup lang="ts">
import ListInForms from "./ListInForms.vue";
import { submit } from "../utils/submit";
import { ref } from "vue";
import { organisation } from "../data/01-organisation";
import { documentation } from "../data/021-documentation";

const tab = ref<string | null>(null);

const Tabs = [
  "Организационно - распорядительная документация",
  "Ответственные лица",
  "Комисии",
  "Охрана помещений",
  "Управление доступом",
  "Требования по защите информации",
  "Состав ГИС",
  "Прикладной блок",
  "Приложение",
];

function handleSubmit(value: Record<string, unknown>) {
  if (tab.value) {
    tab.value = null;
  } else {
    submit(value);
  }
}
</script>

<template>
  <div class="bg-white rounded-xl shadow-xl p-8 mx-auto my-16 max-w-[450px]">
    <div class="my-2">
      <h1 class="text-xl font-bold mb-4">
        Опросный лист для разработки документации по защите информации в ГИС
      </h1>
    </div>
    <FormKit type="form" @submit="handleSubmit">
      <ListInForms v-show="!tab" v-model:tab="tab" :Tabs="Tabs" />
      <div
        v-show="tab"
        @click="tab = null"
        class="cursor-pointer flex items-center text-red-600 hover:text-red-800 font-semibold"
      >
        Назад
      </div>
      <div class="form-body">
        <section v-show="tab === Tabs[0]">
          <FormKitSchema :schema="organisation" />
        </section>
        <section v-show="tab === Tabs[1]">
          <FormKitSchema :schema="documentation" />
        </section>
      </div>
    </FormKit>
  </div>
</template>
