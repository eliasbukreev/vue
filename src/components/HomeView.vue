<template>
  <div>
    <button
      @click="$router.push('/periodic-control')"
      class="w-full max-w-md m-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-bold"
    >
      Периодический контроль
    </button>

    <button
      @click="$router.push('/question-sheet-gis')"
      class="w-full max-w-md mb-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-bold"
    >
      Опросный лист для разработки документации по защите информации в ГИС
    </button>

    <button
      @click="$router.push('/question-sheet-is')"
      class="w-full max-w-md mb-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-bold"
    >
      Опросный лист для ИС (К2-К3)
    </button>
  </div>
</template>

<script setup></script>

<style>
button:has(.btn-delete) {
  all: unset; /* сбрасываем стандартные стили */
  cursor: pointer;
  display: inline-flex; /* чтобы была в одной линии с текстом, но можно flex контейнер */
  align-items: center;
  justify-content: center;
  margin-top: 0.25rem; /* немного ниже h2 */
  padding: 0.25rem 0.5rem; /* компактная кнопка */
  color: #ff0000;
  background-color: #fff; /* красный */
  border-radius: 0.25rem; /* скругление */
  font-weight: bold;
  font-size: 0.875rem; /* чуть меньше h2 */
  transition: background-color 0.2s ease;
}
</style>
