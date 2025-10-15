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
    name: "tech_passport",
    label: "Технический паспорт",
    accept: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
    help: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
    multiple: "false",
  },
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
    name: "commissionChairmanfio",
    label: "ФИО",
  },
  {
    $formkit: "text",
    name: "commissionChairmanposition",
    label: "Должность",
  },
  {
    $formkit: "text",
    name: "commissionChairmannumber",
    label: "Номер приказа о назначении ",
    placeholder: "№ 00000000000000000",
  },
  {
    $formkit: "file",
    name: "commissionChairmanfile",
    label: "Приложение",
    accept: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
    help: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
    multiple: "false",
  },
  {
    $el: "h2",
    children: "Ответственный за обработку персональных данных",
    attrs: {
      class: "text-md font-bold mb-2",
    },
  },
  {
    $formkit: "text",
    name: "commissionMemberfio1",
    label: "ФИО",
  },
  {
    $formkit: "text",
    name: "commissionMemberposition1",
    label: "Должность",
  },
  {
    $formkit: "text",
    name: "commissionMembernumber1",
    label: "Номер приказа о назначении ",
    placeholder: "№ 00000000000000000",
  },
  {
    $formkit: "file",
    name: "commissionMemberfile1",
    label: "Приложение",
    accept: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
    help: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
    multiple: "false",
  },
  {
    $el: "h2",
    children: "Ответственный за хранение и эксплуатацию СКЗИ",
    attrs: {
      class: "text-md font-bold mb-2",
    },
  },
  {
    $formkit: "text",
    name: "commissionMemberfio2",
    label: "ФИО",
  },
  {
    $formkit: "text",
    name: "commissionMemberposition2",
    label: "Должность",
  },
  {
    $formkit: "text",
    name: "commissionMembernumber2",
    label: "Номер приказа о назначении ",
    placeholder: "№ 00000000000000000",
  },
  {
    $formkit: "file",
    name: "commissionMemberfile2",
    label: "Приложение",
    accept: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
    help: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
    multiple: "false",
  },
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
    name: "commissionMemberfio3",
    label: "ФИО",
  },
  {
    $formkit: "text",
    name: "commissionMemberposition3",
    label: "Должность",
  },
  {
    $formkit: "text",
    name: "commissionMembernumber3",
    label: "Номер приказа о назначении ",
    placeholder: "№ 00000000000000000",
  },
  {
    $formkit: "file",
    name: "commissionMemberfile3",
    label: "Приложение",
    accept: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
    help: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
    multiple: "false",
  },
];
