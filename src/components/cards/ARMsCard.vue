<script setup lang="ts">
import { getArmSchema } from "../../data/10-arms";
import { reactive, ref } from "vue";
import DefaultCard from "./DefaultCard.vue";
import type { Card } from "../../types/types";
import type { FormKitNode } from "@formkit/core";
import { router } from "../../router";
import { useRoute } from "vue-router";

const route = useRoute();

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

const armsIndexes = ref<number[]>([]);

let Nextid = 1;

function addArmPage() {
  const id = Nextid++;
  armsIndexes.value.push(id);

  const armCard: Card = {
    title: `ARM-${id}`,
    schema: getArmSchema(`ARM-${id}`),
  };

  const parent = route.path || "";

  if (!router.hasRoute(`arms-sub-${id}`)) {
    router.addRoute({
      path: `${parent}/${id}`,
      name: `arms-sub-${id}`,
      component: DefaultCard,
      props: { card: armCard, data: data },
      meta: { showBackButton: true, showSubmitButton: true },
    });
  }
}

function removeArmPage(id: number) {
  const index = armsIndexes.value.indexOf(id);
  if (index !== -1) armsIndexes.value.splice(index, 1);
}

function openArmPage(id: number) {
  router.push({ name: `arms-sub-${id}` });
}
</script>

<template>
  <div>
    <ul class="arms-list">
      <li
        v-for="id in armsIndexes"
        :key="id"
        @click="openArmPage(id)"
        class="tab selection:bg-red-100 selection:text-neutral-700 font-bold rounded outline-none flex px-7 py-3 items-center justify-between mb-1.5 text-sm cursor-pointer border border-red-600 text-red-600 dark:border-red-500 bg-white-50 hover:bg-red-100 dark:text-red-500 formkit-input text-transform: uppercase"
      >
        <span>ARM {{ id }}</span>
        <button
          @click.stop="removeArmPage(id)"
          class="ml-2 text-red-600 hover:text-red-800 font-bold text-lg flex items-center justify-center"
          title="Удалить"
        >
          ×
        </button>
      </li>
    </ul>

    <FormKit
      type="button"
      label="Добавить новый ARM"
      @click="addArmPage"
      class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    />
  </div>
</template>
