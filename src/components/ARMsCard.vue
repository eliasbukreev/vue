<script setup lang="ts">
import ListInForms from "./ListInForms.vue";
import { getArmSchema } from "../data/10-arms";
import { ref, reactive } from "vue";
import type { FormKitSchemaNode, FormKitNode } from "@formkit/core";


const data = reactive({
  addItem: (node: FormKitNode) => () => {
    const value = node._value as unknown[];
    node.input(value.concat({}));
  },
  removeItem: (node: FormKitNode, index: number) => () => {
    const value = node._value as unknown[];
    node.input(value.filter((_, i) => i !== index));
  },
  stringify: JSON.stringify,
});



const Tabs = ref<string[]>(["ARM_1"]);
const tab = ref<string | null>(null);
const armCounter = ref(Tabs.value.length)
const arm = reactive<Record<string, FormKitSchemaNode[]>>({});

Tabs.value.forEach((tabName) => {
  arm[tabName] = getArmSchema(tabName);
});

function addNewARM() {
  armCounter.value += 1
  const newTabName = `ARM_${armCounter.value}`
  
  Tabs.value.push(newTabName);
  arm[newTabName] = getArmSchema(newTabName);

}

function removeARM(tabName: string) {
    const index = Tabs.value.findIndex(t => t === tabName);
    if (index !== -1) Tabs.value.splice(index, 1);
}
</script>

<template>
  <ListInForms v-show="!tab" v-model:tab="tab" :Tabs="Tabs" :showRemoveBtn="true" @remove-tab="removeARM" />

    <FormKit
    v-show="!tab"
    type="button"
    label="Добавить новый ARM"
    @click="addNewARM"
    class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
  />

  <div
    v-show="tab"
    @click="tab = null"
    class="cursor-pointer pl-6 flex items-center text-red-600 hover:text-red-800 font-semibold"
  >
    <span class="text-gray-400">/</span> Открыть другой ARM
  </div>
  <FormKit type ="group" name="ARMs">
  <section v-for="tabName in Tabs" :key="tabName">
    <div v-show="tab === tabName">
      <FormKitSchema :schema="arm[tabName]" :data="data" />
    </div>
  </section>
  </FormKit>
</template>
