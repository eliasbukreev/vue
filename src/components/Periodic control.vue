<script setup lang="ts">

import { submit } from '../utils/submit';
import BackButton from './BackButton.vue';
import { schema } from '../data/Periodic control';

function handleSubmit(value: Record<string, any>) {
  submit(value);
}


</script>

<template>
  <div class="bg-white rounded-xl shadow-xl p-8 mx-auto my-16 max-w-[450px]">
    <FormKit
      type="form"
      @submit="handleSubmit"
    >
    <FormKitSchema
    :schema="schema"
    />
    </FormKit>

    <BackButton />

  </div>
</template>