export const informationsecurity = [
  {
    $formkit: "group",
    name: "Маршрутизатор",
    label: "Маршрутизатор",
    children: [
      {
        $el: "h2",
        children: "Маршрутизатор",
        attrs: {
          class: "text-md font-bold mb-2",
        },
      },
      {
        $formkit: "text",
        name: "Наименование",
        label: "Наименование",
        placeholder: "VipNet Coordinator HW4",
      },
      {
        $formkit: "textarea",
        name: "Модель",
        label: "Модель",
        placeholder: "SN 000-00000 СКЗИ 000X-000000 ФСТЭК X000000",
      },
      {
        $formkit: "select",
        name: "Наличие формуляра",
        label: "Наличие формуляра",
        placeholder: "Укажите наличие",
        options: ["Да", "Нет"],
      },
    ],
  },
  {
    $formkit: "group",
    name: "Межсетевое экранирование",
    label: "Межсетевое экранирование",
    children: [
      {
        $el: "h2",
        children: "Межсетевое экранирование",
        attrs: {
          class: "text-md font-bold mb-2",
        },
      },
      {
        $formkit: "text",
        name: "Наименование",
        label: "Наименование",
        placeholder: "VipNet xFirewall 5",
      },
      {
        $formkit: "textarea",
        name: "Модель",
        label: "Модель",
        placeholder: "SN 000-0000 СЗИ РОСС RU.00.00000-000000",
      },
      {
        $formkit: "select",
        name: "Наличие формуляра",
        label: "Наличие формуляра",
        placeholder: "Укажите наличие",
        options: ["Да", "Нет"],
      },
    ],
  },
  {
    $formkit: "group",
    name: "Требования по защите информации",
    label: "Требования по защите информации",
    children: [
      {
        $formkit: "textarea",
        name: "Процедура заведения новых пользователей",
        label: "Процедура заведения новых пользователей",
      },
      {
        $formkit: "textarea",
        name: "Применяемое средство защиты от НСД",
        label: "Применяемое средство защиты от НСД",
      },
      {
        $formkit: "textarea",
        name: "Применяемые СКЗИ (тип, производитель, версии)",
        label: "Применяемые СКЗИ (тип, производитель, версии)",
      },
      {
        $formkit: "textarea",
        name: "Источники сбора журналов безопасности",
        label: "Источники сбора журналов безопасности",
      },
      {
        $formkit: "textarea",
        name: " Где и как долго хранятся журналы",
        label: " Где и как долго хранятся журналы",
      },
      {
        $formkit: "textarea",
        name: "ПО для резервного копирования",
        label: "ПО для резервного копирования",
      },
      {
        $formkit: "textarea",
        name: "Процедура резервного копирования",
        label: "Процедура резервного копирования",
      },
      {
        $formkit: "textarea",
        name: "Источники мониторинга",
        label: "Источники мониторинга",
      },
      {
        $formkit: "textarea",
        name: "SIEM система (производитель, версия)",
        label: "SIEM система (производитель, версия)",
      },
    ],
  },
];
