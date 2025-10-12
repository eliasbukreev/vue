<script setup lang="ts">

import { submit } from '../utils/submit';
import { organisation } from '../data/01-organisation';
import { documentation } from '../data/02-documentation';
import {ref} from 'vue'
const tab = ref<string | null>(null)


const Tabs = ['Организационно - распорядительная документация', 'Документарный блок']

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
    <ul class="tabs" v-show="!tab">
      <li
        v-for="tabName in Tabs"
        class="tab 
              selection:bg-red-100 selection:text-neutral-700 
              font-bold rounded outline-none flex px-7 py-3 
              items-center mb-1.5 text-sm cursor-pointer
              border border-red-600 text-red-600 
              dark:border-red-500 bg-white-50 
              hover:bg-red-100 dark:text-red-500  
              formkit-input text-transform: uppercase"
        @click="tab = tabName"
        :data-tab-active="tab === tabName"
      >
        {{tabName}}
      </li>
    </ul>

    <div v-show="tab"
         @click="tab = null"
         class="cursor-pointer flex items-center text-red-600 hover:text-red-800 font-semibold">
      Назад
    </div>

    <div class="form-body">
      <section v-show="tab === 'Организационно - распорядительная документация'">

          <FormKitSchema
          :schema="organisation"
          />

      </section>
      <section v-show="tab === 'Документарный блок'">

          <FormKitSchema
          :schema="documentation"
          />

      </section>
    </div>
    </FormKit>
    
  </div>
</template>