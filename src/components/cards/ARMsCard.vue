<script setup lang="ts">
import { computed, reactive } from "vue";
import DefaultCard from "./DefaultCard.vue";
import type { FormKitNode } from "@formkit/core";
import { router } from "../../router";
import { useRoute } from "vue-router";
import { useArmsStore } from "./ARMsCard";

const route = useRoute();
const armsStore = useArmsStore();
const Arms = computed(() => armsStore.getArms());

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

function addArmPage() {
  const card = armsStore.addArmPage();

  const parent = route.path || "";

  if (!router.hasRoute(`${card.title}`)) {
    router.addRoute({
      path: `${parent}/${card.title}`,
      name: `${card.title}`,
      component: DefaultCard,
      props: { card: card, data: data },
      meta: { showBackButton: true, showSubmitButton: true },
    });
  }
}

function removeArmPage(id: number) {
  armsStore.removeArm(id);
}

function openArmPage(name: string) {
  router.push({ name: name });
}
</script>

<template>
  <div>
    <ul class="arms-list">
      <li
        v-for="(arm, index) in Arms"
        :key="index"
        @click="openArmPage(arm.title)"
        class="tab selection:bg-red-100 selection:text-neutral-700 font-bold rounded outline-none flex px-7 py-3 items-center justify-between mb-1.5 text-sm cursor-pointer border border-red-600 text-red-600 dark:border-red-500 bg-white-50 hover:bg-red-100 dark:text-red-500 formkit-input text-transform: uppercase"
      >
        <span>{{ arm.title }}</span>
        <button
          @click.stop="removeArmPage(index)"
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
