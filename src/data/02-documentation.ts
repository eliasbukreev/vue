export const documentation = [
  {
    $el: "h1",
    children: "Документарный блок",
    attrs: {
      class: "text-xl font-bold mb-4",
    },
  },
  {
    $formkit: "file",
    name: "Технический паспорт",
    label: "Технический паспорт",
    accept: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
    help: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
    multiple: "false",
  },
  {
    $formkit: "group",
    name: "Ответственный за обеспечение безопастности (администратор безопастности)",
    label:
      "Ответственный за обеспечение безопастности (администратор безопастности)",
    children: [
      {
        $el: "h2",
        children:
          "Ответственный за обеспечение безопастности (администратор безопастности)",
        attrs: {
          class: "text-md font-bold mb-2",
        },
      },
      {
        $formkit: "text",
        name: "ФИО",
        label: "ФИО",
      },
      {
        $formkit: "text",
        name: "Должность",
        label: "Должность",
      },
      {
        $formkit: "text",
        name: "Номер приказа о назначении",
        label: "Номер приказа о назначении ",
        placeholder: "№ 00000000000000000",
      },
      {
        $formkit: "file",
        name: "Приложение",
        label: "Приложение",
        accept: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
        help: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
        multiple: "false",
      },
    ],
  },
  {
    $formkit: "group",
    name: "Ответственный за обработку персональных данных",
    label: "Ответственный за обработку персональных данных",
    children: [
      {
        $el: "h2",
        children: "Ответственный за обработку персональных данных",
        attrs: {
          class: "text-md font-bold mb-2",
        },
      },
      {
        $formkit: "text",
        name: "ФИО",
        label: "ФИО",
      },
      {
        $formkit: "text",
        name: "Должность",
        label: "Должность",
      },
      {
        $formkit: "text",
        name: "Номер приказа о назначении",
        label: "Номер приказа о назначении ",
        placeholder: "№ 00000000000000000",
      },
      {
        $formkit: "file",
        name: "Приложение",
        label: "Приложение",
        accept: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
        help: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
        multiple: "false",
      },
    ],
  },
  {
    $formkit: "group",
    name: "Ответственный за хранение и эксплуатацию СКЗИ",
    label: "Ответственный за хранение и эксплуатацию СКЗИ",
    children: [
      {
        $el: "h2",
        children: "Ответственный за хранение и эксплуатацию СКЗИ",
        attrs: {
          class: "text-md font-bold mb-2",
        },
      },
      {
        $formkit: "text",
        name: "ФИО",
        label: "ФИО",
      },
      {
        $formkit: "text",
        name: "Должность",
        label: "Должность",
      },
      {
        $formkit: "text",
        name: "Номер приказа о назначении",
        label: "Номер приказа о назначении ",
        placeholder: "№ 00000000000000000",
      },
      {
        $formkit: "file",
        name: "Приложение",
        label: "Приложение",
        accept: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
        help: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
        multiple: "false",
      },
    ],
  },
  {
    $formkit: "group",
    name: "Ответственных за планирование и контроль мероприятий по защите информации в информационной системе",
    label:
      "Ответственных за планирование и контроль мероприятий по защите информации в информационной системе",
    children: [
      {
        $el: "h2",
        children:
          "Ответственных за планирование и контроль мероприятий по защите информации в информационной системе",
        attrs: {
          class: "text-md font-bold mb-2",
        },
      },
      {
        $formkit: "text",
        name: "ФИО",
        label: "ФИО",
      },
      {
        $formkit: "text",
        name: "Должность",
        label: "Должность",
      },
      {
        $formkit: "text",
        name: "Номер приказа о назначении",
        label: "Номер приказа о назначении ",
        placeholder: "№ 00000000000000000",
      },
      {
        $formkit: "file",
        name: "Приложение",
        label: "Приложение",
        accept: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
        help: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
        multiple: "false",
      },
    ],
  },
];
