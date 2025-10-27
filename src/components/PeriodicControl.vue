<script setup lang="ts">
import CommitteeCard from "./CommitteeCard.vue";
import ListInForms from "./ListInForms.vue";
import ARMsCard from "./ARMsCard.vue";
import { submit } from "../utils/submit";
import { organisation } from "../data/01-organisation";
import { documentation } from "../data/02-documentation";
import { cryptographic } from "../data/04-cryptographic";
import { journals } from "../data/05-journals";
import { instructions } from "../data/06-instructions";
import { application } from "../data/07-application";
import { orgblock } from "../data/08-orgblock";
import { regulations } from "../data/09-regulations";
import { ref} from "vue";


const tab = ref<string | null>(null);

const Tabs = [
  "Организационно - распорядительная документация",
  "Документарный блок",
  "Коммисии",
  "Средства защиты",
  "Журналы",
  "Инструкции",
  "Прикладной блок",
  "Огранизационный блок",
  "Процесс ознакомления сотрудников с ОРД",
  "ARMs",
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
        <section v-show="tab === Tabs[2]">
          <CommitteeCard />
        </section>
        <section v-show="tab === Tabs[3]">
          <FormKitSchema :schema="cryptographic" />
        </section>
        <section v-show="tab === Tabs[4]">
          <FormKitSchema :schema="journals" />
        </section>
        <section v-show="tab === Tabs[5]">
          <FormKitSchema :schema="instructions" />
        </section>
        <section v-show="tab === Tabs[6]">
          <FormKitSchema :schema="application" />
        </section>
        <section v-show="tab === Tabs[7]">
          <FormKitSchema :schema="orgblock" />
        </section>
        <section v-show="tab === Tabs[8]">
          <FormKitSchema :schema="regulations" />
        </section>
        <section v-show="tab === Tabs[9]">
          <ARMsCard />
        </section>
      </div>
    </FormKit>
  </div>
</template>
