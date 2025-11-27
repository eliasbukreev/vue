<script setup lang="ts">
import { getCommmitteeSchema } from "../../data/03-сommittee";
import { ref } from "vue";
import type { FormKitSchemaNode } from "@formkit/core";
import type { TabItem } from "../../types/types";

const props = defineProps<{
  Tabs: TabItem[];
}>();

const tab = ref<number | null>(null);

const commmittees: Record<string, FormKitSchemaNode[]> = {};
props.Tabs.forEach((tabObj) => {
  commmittees[tabObj.name] = getCommmitteeSchema(tabObj.name);
});
</script>

<template>
  <ul class="tabs" v-show="!tab">
    <li
      v-for="(tabObj, index) in props.Tabs"
      class="tab selection:bg-red-100 selection:text-neutral-700 font-bold rounded outline-none flex px-7 py-3 items-center justify-between mb-1.5 text-sm cursor-pointer border border-red-600 text-red-600 dark:border-red-500 bg-white-50 hover:bg-red-100 dark:text-red-500 formkit-input text-transform: uppercase"
      :data-tab-active="tab === index"
      :key="index"
    >
      <span>{{ tabObj.name }}</span>
    </li>
  </ul>

  <div
    v-show="tab"
    @click="tab = null"
    class="cursor-pointer pl-6 flex items-center text-red-600 hover:text-red-800 font-semibold"
  >
    <span class="text-gray-400">/</span> Открыть другую комисию
  </div>
  <section v-for="(tab, index) in Tabs" :key="index">
    <div v-show="tab === tab">
      <FormKitSchema :schema="commmittees[tab.name]" />
    </div>
  </section>
</template>
