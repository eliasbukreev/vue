<script setup lang="ts">
import type { Survey } from "../../types/types";

const props = defineProps<{
  survey: Survey;
}>();
</script>

<template>
  <div>
    <h1>{{ props.survey.title }}</h1>
    <button
      v-for="(section, index) in props.survey.surveyConfig"
      :key="index"
      @click="$router.push(`${props.survey.path}${section.url}`)"
      class="w-full mb-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-bold"
    >
      {{ section.name }}
    </button>
  </div>
</template>
