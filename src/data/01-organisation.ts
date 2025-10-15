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
    name: "company_name",
    label: "Название организации",
    validation: "length:3,200",
  },
  {
    $el: "h2",
    children: "Руководитель организации",
    attrs: {
      class: "text-md font-bold mb-2",
    },
  },
  {
    $formkit: "text",
    name: "company_director_name",
    label: "ФИО",
    validation: "length:5,100",
  },
  {
    $formkit: "text",
    name: "company_director_position",
    label: "Должность",
    validation: "length:5,100",
  },
  {
    $el: "h2",
    children: "Контактное лицо",
    attrs: {
      class: "text-md font-bold mb-2",
    },
  },
  {
    $formkit: "text",
    name: "company_director_name",
    label: "ФИО",
    validation: "length:5,100",
  },
  {
    $formkit: "text",
    name: "company_director_position",
    label: "Должность",
    validation: "length:5,100",
  },
  {
    $formkit: "email",
    name: "company_email",
    label: "Email",
    placeholder: "test@mail.ru",
    validation: "email",
  },
  {
    $formkit: "tel",
    name: "company_phone",
    label: "Телефон",
    placeholder: "+79123456789",
    validation: "/^+?[0-9]{9-15}$/",
    validationVisibility: "dirty",
    validationMessages: {
      matches: "Телефонный номер состоит из 9-15 цифр",
    },
  },
  {
    $formkit: "textarea",
    name: "company_gis",
    label: "Наименование информационной системы",
    help: "Наименования информационных систем с которыми ведется взаимодействие (Например: ГИС ПК 'РСМЭД', ГИС ПК 'РПГУ', ГИС ПК 'РИСОГД ПК', ФИС 'ГИА и Приема', ГИС 'АИСТ ГБД', ФИС 'ГНА', ФИС 'ФРДО', ИС АКНДПП, ГИС 'Региональное образование')",
  },
  {
    $formkit: "textarea",
    name: "company_gis_npa",
    label: "НПА о создании и/или функционировании ГИС",
  },
  {
    $formkit: "textarea",
    name: "address",
    label: "Адрес нахождения информационной системы",
    placeholder: "Г. Владивосток ул. Светланская д.1",
  },
];
