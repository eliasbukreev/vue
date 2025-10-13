<script setup lang="ts">

import Committee from './Committee.vue';
import ListInForms from './ListInForms.vue';
import { submit } from '../utils/submit';
import { organisation } from '../data/01-organisation';
import { documentation } from '../data/02-documentation';
import { cryptographic } from '../data/04-cryptographic';
import {ref} from 'vue'
const tab = ref<string | null>(null)


const Tabs = ['Организационно - распорядительная документация', 'Документарный блок', 'Коммисии', 'Средства защиты']



function handleSubmit(value: Record<string, any>) {
  if (tab.value) {
    tab.value = null
  } else {
    submit(value);
  }
}


</script>

<template>
  <div class="bg-white rounded-xl shadow-xl p-8 mx-auto my-16 max-w-[450px]">
    <FormKit
      type="form"
      @submit="handleSubmit"
    >
    <ListInForms v-show = "!tab" v-model:tab="tab" :Tabs = 'Tabs' />
    <div v-show="tab"
         @click="tab = null"
         class="cursor-pointer flex items-center text-red-600 hover:text-red-800 font-semibold"
         >
      Назад
    </div>

    <div class="form-body">


      <section v-show="tab === Tabs[0]">

          <FormKitSchema
          :schema="organisation"
          />

      </section>
      <section v-show="tab === Tabs[1]">

          <FormKitSchema
          :schema="documentation"
          />

      </section>
      <section v-show="tab === Tabs[2]">

      <Committee />

      </section>

    <section v-show="tab === Tabs[3]">

          <FormKitSchema
          :schema="cryptographic"
          />

    </section>

    </div>
    </FormKit>
    
  </div>
</template>