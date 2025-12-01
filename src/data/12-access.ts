export const access = [
  {
    $el: "h1",
    children: "Управление доступом",
    attrs: {
      class: "text-xl font-bold mb-4",
    },
  },
  {
    $formkit: "group",
    name: "Управление доступом",
    label: "Управление доступом",
    children: [
      {
        $formkit: "textarea",
        name: "Удаленные пользователи",
        label: "Удаленные пользователи",
      },
      {
        $formkit: "textarea",
        name: "Мобильные устройства",
        label: "Мобильные устройства",
      },
      {
        $formkit: "textarea",
        name: "Беспроводные каналы связи ",
        label: "Беспроводные каналы связи ",
      },
      {
        $formkit: "textarea",
        name: "Процедура заведения новых пользователей",
        label: "Процедура заведения новых пользователей",
      },
    ],
  },
];
