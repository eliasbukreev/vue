export const documentation = [
  {
    $el: "h1",
    children: "Ответственные лица",
    attrs: {
      class: "text-xl font-bold mb-4",
    },
  },
  {
    $formkit: "group",
    name: "Ответственный за организацию обработки ПДн",
    label: "Ответственный за организацию обработки ПДн",
    children: [
      {
        $el: "h2",
        children: "Ответственный за организацию обработки ПДн",
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
    name: "Администратор безопасности",
    label: "Администратор безопасности",
    children: [
      {
        $el: "h2",
        children: "Администратор безопасности",
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
    name: "Комиссия регламентирующая мероприятии по защите безопастности",
    label: "Комиссия регламентирующая мероприятии по защите безопастности",
    children: [
      {
        $el: "h1",
        children:
          "Комиссия регламентирующая мероприятии по защите безопастности",
        attrs: {
          class: "text-xl font-bold mb-4",
        },
      },
      {
        $formkit: "group",
        name: "Глава комиссии",
        label: "Глава комиссии",
        children: [
          {
            $el: "h2",
            children: "Глава комиссии",
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
          {
            $formkit: "text",
            name: `Номер приказа о назначении`,
            label: "Номер приказа о назначении ",
            placeholder: "№ 00000000000000000",
          },
        ],
      },
      {
        $formkit: "group",
        name: "Первый член комиссии",
        label: "Первый член комиссии",
        children: [
          {
            $el: "h2",
            children: "Первый член комиссии",
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
          {
            $formkit: "text",
            name: `Номер приказа о назначении`,
            label: "Номер приказа о назначении ",
            placeholder: "№ 00000000000000000",
          },
        ],
      },
      {
        $formkit: "group",
        name: "Второй член комиссии",
        label: "Второй член комиссии",
        children: [
          {
            $el: "h2",
            children: "Второй член комиссии",
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
          {
            $formkit: "text",
            name: `Номер приказа о назначении`,
            label: "Номер приказа о назначении ",
            placeholder: "№ 00000000000000000",
          },
        ],
      },
      {
        $formkit: "group",
        name: "Третий член комиссии",
        label: "Третий член комиссии",
        children: [
          {
            $el: "h2",
            children: "Третий член комиссии",
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
          {
            $formkit: "text",
            name: `Номер приказа о назначении`,
            label: "Номер приказа о назначении ",
            placeholder: "№ 00000000000000000",
          },
        ],
      },
    ],
  },
];
