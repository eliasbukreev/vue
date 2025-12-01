export const appendix = [
  {
    $el: "h1",
    children: "Приложение",
    attrs: {
      class: "text-xl font-bold mb-4",
    },
  },
  {
    $formkit: "file",
    name: "Загрузка файлов",
    label: "Загрузка файлов",
    accept: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
    help: "Поддерживается выбор нескольких файлов сразу",
    multiple: "true",
  },
];
