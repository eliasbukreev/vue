export const security = [
  {
    $el: "h1",
    children: "Охрана помещений",
    attrs: {
      class: "text-xl font-bold mb-4",
    },
  },
  {
    $formkit: "group",
    name: "Охрана помещения",
    label: "Охрана помещения",
    children: [
      {
        $formkit: "textarea",
        name: "Чем оборудовано помещение",
        label: "Чем оборудовано помещение",
        placeholder:
          "Прочными дверьми с механическими замками, пожарная сигнализация",
      },
      {
        $formkit: "textarea",
        name: "Организация выдачи ключей от помещения ",
        label: "Организация выдачи ключей от помещения ",
        placeholder: "На вахту под роспись",
      },
      {
        $formkit: "textarea",
        name: "Организация охраны в нерабочее время ",
        label: "Организация охраны в нерабочее время ",
        placeholder: "Штатный сторож",
      },
    ],
  },
];
