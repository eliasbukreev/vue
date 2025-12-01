export const gissetup = [
  {
    $el: "h1",
    children: "Состав ГИС",
    attrs: {
      class: "text-xl font-bold mb-4",
    },
  },
  {
    $formkit: "group",
    name: "Состав ГИС",
    label: "Состав ГИС",
    children: [
      {
        $formkit: "textarea",
        name: "Версии ОС",
        label: "Версии ОС",
      },
      {
        $formkit: "textarea",
        name: " Места установки ОС",
        label: " Места установки ОС",
      },
    ],
  },
];
