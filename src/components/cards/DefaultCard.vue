<script setup lang="ts">
import { useRouter } from "vue-router";
import type { Card } from "../../types/types";
import { ref } from "vue";
import type { FormKitNode } from "@formkit/core";
import { useCardStore } from "./DefaultCard";

const router = useRouter();
const cardStore = useCardStore();

const props = defineProps<{
  card: Card;
  data?: Record<string, undefined> | undefined;
}>();

const survey = ref<{ node: FormKitNode } | null>(null);

function submitForm() {
  if (survey.value?.node) {
    survey.value.node.submit();
  }
}

defineExpose({
  submitForm,
});

function submitHandler(formData: FormData) {
  console.log(formData);
  router.back();
}
</script>

<template>
  <FormKit
    ref="survey"
    type="form"
    :actions="false"
    v-model="cardStore.formData"
    @submit="submitHandler"
  >
    <div class="flex flex-col justify-center">
      <FormKitSchema :schema="props.card.schema" :data="data" />
    </div>
  </FormKit>
</template>
