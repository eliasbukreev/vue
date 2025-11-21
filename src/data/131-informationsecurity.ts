import { informationsecurity as informationsecurityBase } from "./13-informationsecurity";

export const informationsecurity = [
  ...informationsecurityBase,
  {
    $formkit: "group",
    name: "Требования по защите информации",
    label: "Требования по защите информации",
    children: [
      {
        $el: "h2",
        children: "Другое",
        attrs: {
          class: "text-md font-bold mb-2",
        },
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
