<template>
  <div>
    <button
      @click="$router.push('/periodic-control')"
      type="button"
      class="w-full max-w-md mt-4 mb-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-bold"
    >
      Периодический контроль
    </button>

    <button
      @click="$router.push('/question-sheet-gis')"
      type="button"
      class="w-full max-w-md mb-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-bold"
    >
      Опросный лист для разработки документации по защите информации в ГИС
    </button>

    <button
      @click="$router.push('/question-sheet-is')"
      type="button"
      class="w-full max-w-md mb-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-bold"
    >
      Опросный лист для ИС (К2-К3)
    </button>
  </div>
</template>

<script setup></script>

<style></style>
