export const organisation = [
  {
    $el: "h1",
    children: "Организационно-распорядительная документация",
    attrs: {
      class: "text-xl font-bold mb-4",
    },
  },
  {
    $formkit: "textarea",
    name: "Название организации",
    label: "Название организации",
    validation: "length:3,200",
  },
  {
    $formkit: "group",
    name: "Руководитель организации",
    label: "Руководитель организации",
    children: [
      {
        $el: "h2",
        children: "Руководитель организации",
        attrs: {
          class: "text-md font-bold mb-2",
        },
      },
      {
        $formkit: "text",
        name: "ФИО",
        label: "ФИО",
        validation: "length:5,100",
      },
      {
        $formkit: "text",
        name: "Должность",
        label: "Должность",
        validation: "length:5,100",
      },
    ],
  },
  {
    $formkit: "group",
    name: "Контактное лицо",
    label: "Контактное лицо",
    children: [
      {
        $el: "h2",
        children: "Контактное лицо",
        attrs: {
          class: "text-md font-bold mb-2",
        },
      },
      {
        $formkit: "text",
        name: "ФИО Контактного лица",
        label: "ФИО Контактного лица",
        validation: "length:5,100",
      },
      {
        $formkit: "text",
        name: "Должность контактного лица",
        label: "Должность контактного лица",
        validation: "length:5,100",
      },
      {
        $formkit: "email",
        name: "Email контактного лица",
        label: "Email контактного лица",
        placeholder: "test@mail.ru",
        validation: "email",
      },
      {
        $formkit: "tel",
        name: "Телефон контактного лица",
        label: "Телефон контактного лица",
        placeholder: "+79123456789",
        validation: "/^+?[0-9]{9-15}$/",
        validationVisibility: "dirty",
        validationMessages: {
          matches: "Телефонный номер состоит из 9-15 цифр",
        },
      },
    ],
  },
  {
    $formkit: "textarea",
    name: "Наименование информационной системы",
    label: "Наименование информационной системы",
    help: "Наименования информационных систем согласованное с заказчиком",
  },
  {
    $formkit: "textarea",
    name: "Наименование внешних информационных систем",
    label: "Наименование внешних информационных систем",
    help: "Наименования информационных систем с которыми ведется взаимодействие (Например: ГИС ПК 'РСМЭД', ГИС ПК 'РПГУ', ГИС ПК 'РИСОГД ПК', ФИС 'ГИА и Приема', ГИС 'АИСТ ГБД', ФИС 'ГНА', ФИС 'ФРДО', ИС АКНДПП, ГИС 'Региональное образование')",
  },
  {
    $formkit: "textarea",
    name: "НПА о создании и/или функционировании ГИС",
    label: "НПА о создании и/или функционировании ГИС",
  },
  {
    $formkit: "textarea",
    name: "Адрес нахождения информационной системы",
    label: "Адрес нахождения информационной системы",
    placeholder: "Г. Владивосток ул. Светланская д.1",
  },
];
