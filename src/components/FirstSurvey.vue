<script setup lang="ts">

import { useRouter } from 'vue-router';
import { submit } from '../utils/submit';
import BackButton from './BackButton.vue';

const surveyName = 'survey_1';
const router = useRouter()
function handleSubmit(value: Record<string, any>) {
  submit(surveyName, value, router);
}

</script>

<template>
  <div class="bg-white rounded-xl shadow-xl p-8 mx-auto my-16 max-w-[450px]">
    <FormKit
      type="form"
      #default="{ value }"
      @submit="handleSubmit"
    >
    <div class="my-8">
      <h1 class="text-xl font-bold mb-2">Ваши вопросы организаторам и экспертам конференции: </h1>
      <span class="text-gray-500 text-sm">Cамые частые и важные будут включены в секции </span>
    </div>
    <FormKit
      type="textarea"
      name="question_1"
      label="Новый подход к ИБ."
      placeholder="Ваш вопрос"
      :help="`${value!.question_1 ? ((value!.question_1) as string).length : 0} / 120`"
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
      label="Новые требования к технической безопасности."
      placeholder="Ваш вопрос"
      :help="`${value!.question_2 ? ((value!.question_2) as string).length : 0} / 120`"
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
      label="Импортовызов. Cтресс-тест для ИБ."
      placeholder="Ваш вопрос"
      :help="`${value!.question_3 ? ((value!.question_3) as string).length : 0} / 120`"
      validation="length:0,120"
      validation-visibility="live"
      :validation-messages="{
        length: 'Вопрос не может превышать 120 символов',
      }"
      help-class="text-right text-gray-500 text-sm"
    />
    <div class="my-6">
      <FormKit
        type="checkbox"
        name="vendors"
        label="Выберите вендоров, которым вы даёте согласие на передачу вашего адреса электронной почты."
        :options="['ИнфоТеКС', 'НПО Эшелон', 'Код безопасности', 'Актив-Софт', 'Индид', 'Новые облачные технологии (Мой офис)', 'Кросстех Солюшнс Груп']"
        help="Отмеченные ниже вендоры смогут получить ваш адрес электронной почты, а также информацию об организации, которую вы представляете, и вашей должности."
      />
    </div>
    </FormKit>

    <BackButton />

  </div>
</template>