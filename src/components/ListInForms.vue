<script setup lang="ts">

const props = defineProps<{
    Tabs: string[]
    tab: string | null
}>()

const emit = defineEmits(['update:tab'])

</script>

<template>
<ul class="tabs" v-show="!tab">
      <li
        v-for="tabName in props.Tabs"
        class="tab 
              selection:bg-red-100 selection:text-neutral-700 
              font-bold rounded outline-none flex px-7 py-3 
              items-center mb-1.5 text-sm cursor-pointer
              border border-red-600 text-red-600 
              dark:border-red-500 bg-white-50 
              hover:bg-red-100 dark:text-red-500  
              formkit-input text-transform: uppercase"
        @click="emit('update:tab', tabName)"
        :data-tab-active="props.tab === tabName"
      >
        {{tabName}}
      </li>
    </ul>

</template>