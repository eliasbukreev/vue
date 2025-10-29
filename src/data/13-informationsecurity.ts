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
    name: "Защита от вредоносного ПО",
    label: "Защита от вредоносного ПО",
    children: [
      {
        $el: "h2",
        children: "Защита от вредоносного ПО",
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
        placeholder: "SN 000-0000 СЗИ РОСС RU.00.00000-000000",
      },
      {
        $formkit: "select",
        name: "Наличие формуляра",
        label: "Наличие формуляра",
        placeholder: "Укажите наличие",
        options: ["Да", "Нет"],
      },
      {
        $formkit: "textarea",
        name: "Данные формуляров ",
        label: "Данные формуляров ",
        placeholder: "SN 000-0000 СЗИ РОСС RU.00.00000-000000",
      },
    ],
  },
];
