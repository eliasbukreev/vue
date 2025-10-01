<template>
<div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="bg-white rounded-xl shadow-xl p-8 max-w-[450px] w-full text-center">
    
    <div class="my-8">
      <h1 class="text-xl font-bold mb-4">Выберите опрос:</h1>
    </div>

    <button 
    @click="$router.push('/first')" 
    class="w-full mb-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-bold">
    Вопросы участникам конференции
   </button>

    <button 
    @click="$router.push('/second')" 
    class="w-full mb-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-bold">
    Анкета участника
    </button>

  </div>
</div>

</template>

<script setup>
</script>