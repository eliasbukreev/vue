/* eslint-disable @typescript-eslint/no-unused-vars */
const armsEquipmentChild = [
  {
    $formkit: "select",
    name: "Тип",
    label: "Тип оборудования",
    placeholder: "Выберите тип",
    options: [
      "Системный блок",
      "Моноблок",
      "Ноутбук",
      "Неттоп",
      "Виртуальная машина",
      "Сервер",
      "Виртуальный сервер",
      "Тонкий клиент",
    ],
  },
  {
    $formkit: "text",
    name: `Сетевое имя`,
    label: "Сетевое имя",
  },
  {
    $formkit: "text",
    name: `Серийный номер`,
    label: "Серийный номер",
  },
  {
    $formkit: "text",
    name: `Модель`,
    label: "Модель",
  },
];

const armsPeripheryChild = [
  {
    $formkit: "group",
    name: "Перифирия",
    label: "Перифирия",
    children: [
      {
        $el: "h2",
        children: "Перифирия",
        attrs: {
          class: "text-md font-bold mb-2",
        },
      },
      {
        $formkit: "select",
        name: "Тип",
        label: "Тип перифирии",
        placeholder: "Выберите тип",
        options: [
          "Монитор",
          "Мышь",
          "Клавиатура",
          "Камера",
          "Сканер",
          "Принтер",
          "МФУ",
        ],
      },
      {
        $formkit: "text",
        name: `Серийный номер`,
        label: "Серийный номер",
      },
      {
        $formkit: "text",
        name: `Модель`,
        label: "Модель",
      },
    ],
  },
];

const armsPersonaChild = [
  {
    $formkit: "group",
    name: "Допущеное лицо",
    label: "Допущеное лицо",
    children: [
      {
        $el: "h2",
        children: "Допущеное лицо",
        attrs: {
          class: "text-md font-bold mb-2",
        },
      },
      {
        $formkit: "text",
        name: `ФИО`,
        label: "ФИО",
      },
      {
        $formkit: "text",
        name: `Должность`,
        label: "Должность",
      },
    ],
  },
];

export const arms = [
  {
    $formkit: "group",
    name: "ARM",
    label: "ARM",
    children: [
      {
        $el: "h2",
        children: "ARM",
        attrs: {
          class: "text-md font-bold mb-2",
        },
      },
      {
        $formkit: "text",
        name: `Кабинет`,
        label: "Кабинет",
      },
      {
        $formkit: "group",
        name: "Оборудование",
        label: "Оборудование",
        children: armsEquipmentChild,
      },
      {
        $formkit: "list",
        name: "Перифирия",
        value: [""],
        dinamic: true,
        children: [
          {
            $formkit: "button",
            onClick: "", // 👈 Call $addItem from data
            children: "Добавить перифирию",
          },
        ],
      },
      {
        $formkit: "list",
        name: "Список допущенных лиц к работе за АРМ",
        label: "Список допущенных лиц к работе за АРМ",
        value: [""],
        dinamic: true,
        children: [
          {
            $formkit: "button",
            onClick: "", // 👈 Call $addItem from data
            children: "Добавить лицо",
          },
        ],
      },
    ],
  },
];
