<script setup lang="ts">
import type { Card } from "../../types/types";

const props = defineProps<{
  card: Card;
  data?: Record<string, undefined> | undefined;
}>();
</script>

<template>
  <div class="flex flex-col justify-center">
    <FormKitSchema :schema="props.card.schema" :data="data" />
  </div>
</template>
