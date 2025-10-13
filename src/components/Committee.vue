<script setup lang="ts">

import ListInForms from './ListInForms.vue';
import { getCommmitteeSchema } from '../data/03-сommittee';
import { ref } from 'vue';

const map: Record<string, string> = {
    'Состав комиссии по уничтожению персональных данных' : 'PersonalData',
    'Состав комиссии по уничтожению СКЗИ' : "Skzi",
    'Состав комиссии по реагированию на инциденты ИБ' : 'Ib',
    'Перечень лиц, допущенных к обработке ПДн' : 'Pdn',
    'Перечень лиц, допущенных к работе с СКЗИ' : 'Skzi',
    'Перечень лиц, допущенных к работе в ИС' : 'Is'
    }

const Tabs = Object.keys(map)

const tab = ref<string | null>(null)

const commmittees: Record<string, any> = {}
Tabs.forEach(tabName => {
  commmittees[tabName] = getCommmitteeSchema(tabName, map)
})

</script>

<template>

<ListInForms v-show = "!tab" v-model:tab="tab" :Tabs="Tabs"/>

    <div
         v-show="tab"
         @click="tab = null"
         class="cursor-pointer pl-6 flex items-center text-red-600 hover:text-red-800 font-semibold">
    <span class="text-gray-400">/</span> Открыть другую комисию
    </div>

    <div class="form-body">
      <section v-for="tabName in Tabs" v-show="tab === tabName">

          <FormKitSchema
          :schema="commmittees[tabName]"
          />

      </section>
    </div>

</template>