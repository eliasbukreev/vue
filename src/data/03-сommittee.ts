export function getCommmitteeSchema(value: string) {
  return [
    {
      $formkit: "group",
      name: value,
      label: value,
      children: [
        {
          $el: "h1",
          children: value,
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
}
