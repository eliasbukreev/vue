export function getCommmitteeSchema(value: string, map:Record<string,string>) {

    const key = map[value]

    return [
  {
    $el: 'h1',
    children: value ,
    attrs: {
      class: 'text-xl font-bold mb-4',
    },
  },
  {
    $el: 'h2',
    children: 'Глава комиссии',
    attrs: {
      class: 'text-md font-bold mb-2',
    },
  },
  {
    $formkit: 'text',
    name: `commission${key}Chairmanfio`,
    label: 'ФИО',
  },
  {
    $formkit: 'text',
    name: `commission${key}Chairmanposition`,
    label: 'Должность',
  },
  {
    $formkit: 'text',
    name: `commission${key}Chairmannumber`,
    label: 'Номер приказа о назначении ',
    placeholder: "№ 00000000000000000"
  },
  {
    $formkit: 'file',
    name: `commission${key}Chairmanfile`,
    label: 'Приложение',
    accept: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
    help: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
    multiple: "false",
  },
  {
    $el: 'h2',
    children: 'Члены комиссии',
    attrs: {
      class: 'text-md font-bold mb-2',
    },
  },
  {
    $el: 'p',
    children: 'Первый член комиссии',
    attrs: {
      class: 'text-sm  font-bold mb-2',
    },
  },
  {
    $formkit: 'text',
    name: `commission${key}Memberfio1`,
    label: 'ФИО',
  },
  {
    $formkit: 'text',
    name: `commission${key}Memberposition1`,
    label: 'Должность',
  },
  {
    $formkit: 'text',
    name: `commission${key}Membernumber1`,
    label: 'Номер приказа о назначении ',
    placeholder: "№ 00000000000000000"
  },
  {
    $formkit: 'file',
    name: `commission${key}Memberfile1`,
    label: 'Приложение',
    accept: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
    help: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
    multiple: "false",
  },
    {
    $el: 'p',
    children: 'Второй член комиссии',
    attrs: {
      class: 'text-sm font-bold mb-2',
    },
  },
  {
    $formkit: 'text',
    name: `commission${key}Memberfio2`,
    label: 'ФИО',
  },
  {
    $formkit: 'text',
    name: `commission${key}Memberposition2`,
    label: 'Должность',
  },
  {
    $formkit: 'text',
    name: `commission${key}Membernumber2`,
    label: 'Номер приказа о назначении ',
    placeholder: "№ 00000000000000000"
  },
  {
    $formkit: 'file',
    name: `commission${key}Memberfile2`,
    label: 'Приложение',
    accept: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
    help: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
    multiple: "false",
  },
    {
    $el: 'p',
    children: 'Третий член комиссии',
    attrs: {
      class: 'text-sm  font-bold mb-2',
    },
  },
  {
    $formkit: 'text',
    name: `commission${key}Memberfio3`,
    label: 'ФИО',
  },
  {
    $formkit: 'text',
    name: `commission${key}Memberposition3`,
    label: 'Должность',
  },
  {
    $formkit: 'text',
    name: `commission${key}Membernumber3`,
    label: 'Номер приказа о назначении ',
    placeholder: "№ 00000000000000000"
  },
  {
    $formkit: 'file',
    name: `commission${key}Memberfile3`,
    label: 'Приложение',
    accept: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
    help: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
    multiple: "false",
  },
]
} 