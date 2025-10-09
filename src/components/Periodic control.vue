<script setup lang="ts">

import { submit } from '../utils/submit';
import BackButton from './BackButton.vue';
import { organisation } from '../data/01-organisation';
import { documentation } from '../data/02-documentation';
import { committee }  from '../data/03-сommittee';

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
      :schema="organisation"
      />
      <FormKitSchema
      :schema="documentation"
      />
      <FormKitSchema
      :schema="сommittee"
      />

    </FormKit>
    

    <BackButton />

  </div>
</template>