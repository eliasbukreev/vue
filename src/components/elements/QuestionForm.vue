<script setup lang="ts">
import { ref } from "vue";
import type { TabItem } from "../../types/types";

const props = defineProps<{
  title: string;
  Tabs: TabItem[];
}>();

const tab = ref<number | null>(null);

function handleSubmit(value: Record<string, unknown>) {
  if (tab.value) {
    tab.value = null;
  } else {
    console.log("Submit:", value);
  }
}
</script>

<template>
  <div class="bg-white rounded-xl shadow-xl p-8 mx-auto my-16 max-w-[450px]">
    <div class="my-2">
      <h1 class="text-xl font-bold mb-4">{{ props.title }}</h1>
    </div>
    <FormKit type="form" @submit="handleSubmit">
      <!-- Блок показывающий список опросников -->
      <ul class="tabs" v-show="tab === null">
        <li
          v-for="(tabObj, index) in props.Tabs"
          class="tab selection:bg-red-100 selection:text-neutral-700 font-bold rounded outline-none flex px-7 py-3 items-center justify-between mb-1.5 text-sm cursor-pointer border border-red-600 text-red-600 dark:border-red-500 bg-white-50 hover:bg-red-100 dark:text-red-500 formkit-input text-transform: uppercase"
          :data-tab-active="tab === index"
          :key="index"
          @click="tab = index"
        >
          <span>{{ tabObj.name }}</span>
        </li>
      </ul>

      <!-- Кнопка назад -->
      <div
        v-show="tab !== null"
        @click="tab = null"
        class="cursor-pointer flex items-center text-red-600 hover:text-red-800 font-semibold"
      >
        Назад
      </div>

      <!-- Отрисовка опросника после нажатия кнопки -->
      <div class="form-body">
        <section
          v-for="(item, index) in props.Tabs"
          :key="index"
          v-show="tab === index"
        >
          <component
            :is="item.component"
            v-bind="{
              ...(item.schema ? { schema: item.schema } : {}),
              ...(item.props || {}),
            }"
          />
        </section>
      </div>
    </FormKit>
  </div>
</template>
