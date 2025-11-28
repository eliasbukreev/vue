<script setup lang="ts">
import type { Card } from "../../types/types";

const props = defineProps<{
  card: Card;
}>();
</script>

<template>
  <div>
    <h1>{{ props.card.title }}</h1>
    <FormKitSchema :schema="props.card.schema" />
  </div>
</template>
