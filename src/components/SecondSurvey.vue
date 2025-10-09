<script setup lang="ts">

import { useRouter } from 'vue-router';
import { submit } from '../utils/submit';
import BackButton from './BackButton.vue';
import { ref } from 'vue'

const router = useRouter()
function handleSubmit(value: Record<string, any>) {
  submit(value, router);
}

const choice = ref<string | undefined>(undefined)
const choice_2 = ref<string | undefined>(undefined)
const choice_3 = ref<string | undefined>(undefined)
const choice_4 = ref<string | undefined>(undefined)
</script>

<template>
  <div class="bg-white rounded-xl shadow-xl p-8 mx-auto my-16 max-w-[450px]">
    <FormKit
      type="form"
      @submit=handleSubmit
    >
    <div class="my-8">
      <h1 class="text-xl font-bold mb-2">Анкеты участника:</h1>
    </div>

    <FormKit
    type="text"
    name="name"  
    label="Ваше ФИО"
    validation="required|length:5"
    :validation-messages="{ required: 'Пожалуйста, введите ФИО' }"
    />

    <FormKit
    type="textarea"
    name="organisation"  
    label="Ваша организация"
    validation="required|length:3"
    :validation-messages="{ required: 'Пожалуйста, заполните поле' }"
    />

    <FormKit
    type="radio"
    name="kii"  
    label="Относитесь ли вы к КИИ?"
    :options="[
        { value: 'yes', label: 'Да' },
        { value: 'no', label: 'Нет' }
    ]"
    validation="required"
    :validation-messages="{ required: 'Пожалуйста, выберите один вариант' }"
    />

    <FormKit
    type="radio"
    name="zokii"  
    label="есть ли у вас ЗОКИИ?"
    :options="[
        { value: 'yes', label: 'Да' },
        { value: 'no', label: 'Нет' }
    ]"
    validation="required"
    :validation-messages="{ required: 'Пожалуйста, выберите один вариант' }"
    />

    <div class="my-8">
      <h2 class="text-md font-bold mb-2">В какой стадии импортозамещение инфраструктуры:</h2>
    </div>

        <FormKit
    type="radio"
    name="os_user"  
    label="Перешли на отечественные ОС (пользовательские):"
    :options="[
        { value: 'yes', label: 'Да' },
        { value: 'no', label: 'Нет' }
    ]"
    validation="required"
    :validation-messages="{ required:  'Пожалуйста, выберите один вариант' }"
    />

    <FormKit
    type="radio"
    name="os_server"  
    label="Перешли на отечественные ОС (серверные):"
    :options="[
        { value: 'yes', label: 'Да' },
        { value: 'no', label: 'Нет' }
    ]"
    validation="required"
    :validation-messages="{ required:  'Пожалуйста, выберите один вариант' }"
    />

    <FormKit
    type="radio"
    name="bd-subd"  
    label="Перешли ли на отечественные БД и СУБД::"
    :options="[
        { value: 'yes', label: 'Да' },
        { value: 'no', label: 'Нет' }
    ]"
    validation="required"
    :validation-messages="{ required:  'Пожалуйста, выберите один вариант' }"
    />

    <FormKit
    type="select"
    name="virtualization_choice"
    label="Перешли ли на отечественную виртуализацию?"
    placeholder="Выберите один из вариантов"
    :options="[
        { value: 'vmware', label: 'Используем VMWare' },
        { value: 'local', label: 'Отечественный продукт' },
        { value: 'other', label: 'Другое' }
    ]"
    validation="required"
    :validation-messages="{ required: 'Выберите один вариант' }"
    v-model="choice"
    />

    <Transition name="fade-slide" mode="out-in">
    <FormKit
    v-if="choice === 'vmware'"
    type="text"
    name="vmware_sockets"
    placeholder="Введите количество сокетов"
    validation="required"
    :validation-messages="{ required: 'Введите количество сокетов' }"
    
    />
    </Transition>

    <Transition name="fade-slide" mode="out-in">
    <FormKit
    v-if="choice === 'local'"
    type="text"
    name="local_product_name"
    placeholder="Введите название"
    validation="required"
    :validation-messages="{ required: 'Введите название' }"
    />
    </Transition>

    <FormKit
    type="select"
    name="changes"
    label="Что в планах заменить?"
    placeholder="Выберите один из вариантов"
    :options="[
        { value: 'mail', label: 'Почта' },
        { value: 'domen(ad)', label: 'Домен (AD)' },
        { value: 'communication', label: 'Коммуникации (медиа (ВКС), защищенный корпоративный мессенджер, личные устройства)' },
        { value: 'apps', label: 'Аппаратные средства (коммутаторы, маршрутизаторы, КИИ оборудование)' },
        { value: 'other', label: 'Другое' }
    ]"
    validation="required"
    :validation-messages="{ required: 'Выберите один вариант' }"
    v-model="choice_2"
    />

    <Transition name="fade-slide" mode="out-in">
    <FormKit
    v-if="choice_2 === 'other'"
    type="textarea"
    name="changes_other"
    placeholder="Введите свой вариант"
    validation="required"
    :validation-messages="{ required: 'Введите свой вариант' }"
    />
    </Transition>

    <FormKit
    type="select"
    name="personnel"
    label="Кадровый вопрос, в виду дефицита специалистов:"
    placeholder="Выберите один из вариантов"
    :options="[
        { value: 'it', label: 'Планируем аутсорсинг ИТ' },
        { value: 'ib', label: 'Планируем аутсорсинг ИБ' },
        { value: 'ib_monitoring', label: 'Планируем аутсорсинг мониторинга ИБ событий' },
        { value: 'pentest', label: 'Тестирование защищенности (пентест)' },
        { value: 'other', label: 'Другое' }
    ]"
    validation="required"
    :validation-messages="{ required: 'Выберите один вариант' }"
    v-model="choice_3"
    />

    <Transition name="fade-slide" mode="out-in">
    <FormKit
    v-if="choice_3 === 'other'"
    type="textarea"
    name="personnel_other"
    placeholder="Введите свой вариант"
    validation="required"
    :validation-messages="{ required: 'Введите свой вариант' }"
    />
    </Transition>



    <FormKit
    type="select"
    name="vendor_product"
    label="Пилот продуктов какого вендора интересует:"
    placeholder="Выберите один из вариантов"
    :options="[
        { value: 'eshelon', label: 'Эшелон' },
        { value: 'infoteks', label: 'ИнфоТеКС' },
        { value: 'crosstech', label: 'Кросстех Солюшнс Групп' },
        { value: 'code', label: 'Код безопасности' },
        { value: 'active', label: 'Актив-Софт' },
        { value: 'indid', label: 'Индид' },
        { value: 'infowatch', label: 'ИнфоВотч' },
        { value: 'offies', label: 'Мой Офис (Новые облачные технологии)'},

    ]"
    validation="required"
    :validation-messages="{ required: 'Выберите один вариант' }"
    v-model="choice_4"
    />

    <Transition name="fade-slide" mode="out-in">
    <FormKit
    v-if="choice_4"
    type="textarea"
    name="vendor"
    placeholder="Укажите, какой продукт"
    validation="required"
    :validation-messages="{ required: 'Укажите, какой продукт' }"
    />
    </Transition>

    </FormKit>
    
    <BackButton />

  </div>
</template>

<style>
.fade-slide-enter-active{
  transition: all 0.3s ease;
}
.fade-slide-leave-active {
  transition: none;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>