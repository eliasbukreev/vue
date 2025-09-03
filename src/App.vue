<script setup lang="ts">
async function submit() {
  await new Promise(r => setTimeout(r, 1000))
  alert('Submitted! 🎉')
}
</script>

<template>
  <div class="bg-white rounded-xl shadow-xl p-8 mx-auto my-16 max-w-[450px]">
    <FormKit
      type="form"
      #default="{ value }"
      @submit="submit"
    >
    <div class="my-8">
      <h1 class="text-xl font-bold mb-2">Ваш вопрос организаторам и экспертам конференции: </h1>
      <span class="text-gray-500 text-sm">Cамые частые и важные будут включены в секции </span>
    </div>
    <FormKit
      type="textarea"
      name="question_1"
      label="Новый подход к ИБ"
      placeholder="Ваш вопрос."
      :help="`${value.question_1 ? value.question_1.length : 0} / 120`"
      validation="length:0,120"
      validation-visibility="live"
      :validation-messages="{
        length: 'Вопрос не может превышать 120 символов',
      }"
      help-class="text-right text-gray-500 text-sm"
    />
    <FormKit
      type="textarea"
      name="question_2"
      label="Новые требования к технической безопасности"
      placeholder="Ваш вопрос."
      :help="`${value.question_2 ? value.question_2.length : 0} / 120`"
      validation="length:0,120"
      validation-visibility="live"
      :validation-messages="{
        length: 'Вопрос не может превышать 120 символов',
      }"
      help-class="text-right text-gray-500 text-sm"
    />
    <FormKit
      type="textarea"
      name="question_3"
      label="Импортовызов"
      placeholder="Ваш вопрос."
      :help="`${value.question_3 ? value.question_3.length : 0} / 120`"
      validation="length:0,120"
      validation-visibility="live"
      :validation-messages="{
        length: 'Вопрос не может превышать 120 символов',
      }"
      help-class="text-right text-gray-500 text-sm"
    />
    <FormKit
      type="textarea"
      name="question_4"
      label="Стресс-тест для ИБ"
      placeholder="Ваш вопрос."
      :help="`${value.question_4 ? value.question_4.length : 0} / 120`"
      validation="length:0,120"
      validation-visibility="live"
      :validation-messages="{
        length: 'Вопрос не может превышать 120 символов',
      }"
      help-class="text-right text-gray-500 text-sm"
    />
    </FormKit>
  </div>
</template>
