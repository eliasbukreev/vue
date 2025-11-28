<script setup lang="ts">
import { getArmSchema } from "../../data/10-arms";
import { ref, reactive } from "vue";
import type { FormKitSchemaNode, FormKitNode } from "@formkit/core";
import { application } from "../../data/07-application";

const props = defineProps<{
  armAdditionalSection?: boolean | null;
}>();

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
const tab = ref<number | null>(null);
const armCounter = ref(Tabs.value.length);
const arm = reactive<Record<string, FormKitSchemaNode[]>>({});

Tabs.value.forEach((tabName) => {
  arm[tabName] = getArmSchema(tabName);
});

function addNewARM() {
  armCounter.value += 1;
  const newTabName = `ARM_${armCounter.value}`;

  Tabs.value.push(newTabName);
  arm[newTabName] = getArmSchema(newTabName);
}

function removeARM(tabName: string) {
  const index = Tabs.value.findIndex((t) => t === tabName);
  if (index !== -1) Tabs.value.splice(index, 1);
}
</script>

<template>
  <div>
    <div>
      <h2 class="text-md font-bold mb-2">ARMs</h2>
    </div>

    <ul class="tabs" v-show="tab === null">
      <li
        v-for="(tabObj, index) in Tabs"
        class="tab selection:bg-red-100 selection:text-neutral-700 font-bold rounded outline-none flex px-7 py-3 items-center justify-between mb-1.5 text-sm cursor-pointer border border-red-600 text-red-600 dark:border-red-500 bg-white-50 hover:bg-red-100 dark:text-red-500 formkit-input text-transform: uppercase"
        :data-tab-active="tab === index"
        :key="index"
        @click="tab = index"
      >
        <span>{{ tabObj }}</span>
        <button
          @click.stop="removeARM(tabObj)"
          class="ml-2 text-red-600 hover:text-red-800 font-bold text-lg flex items-center justify-center"
          title="Удалить"
        >
          ×
        </button>
      </li>
    </ul>

    <FormKit
      v-show="tab === null"
      type="button"
      label="Добавить новый ARM"
      @click="addNewARM"
      class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    />

    <div
      v-show="tab !== null"
      @click="tab = null"
      class="cursor-pointer pl-6 flex items-center text-red-600 hover:text-red-800 font-semibold"
    >
      <span class="text-gray- 400">/</span> Открыть другой ARM
    </div>
    <FormKit type="group" name="ARMs">
      <section v-for="(name, index) in Tabs" :key="index">
        <div v-show="tab === index">
          <FormKitSchema :schema="arm[name]" :data="data" />
        </div>
      </section>
      <section v-if="props.armAdditionalSection">
        <FormKitSchema :schema="application" />
      </section>
    </FormKit>
  </div>
</template>
