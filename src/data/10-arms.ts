import type { FormKitSchemaNode } from "@formkit/core";

export function getArmSchema(value: string): FormKitSchemaNode[] {
  return [
    {
      $el: "h1",
      children: "Прикладной блок",
      attrs: {
        class: "text-xl font-bold mb-4",
      },
    },
    {
      $formkit: "group",
      name: value,
      label: value,
      children: [
        {
          $el: "h2",
          children: value,
          attrs: {
            class: "text-md font-bold mb-2",
          },
        },
        {
          $formkit: "text",
          name: `Кабинет`,
          label: "Кабинет",
        },
        {
          $formkit: "group",
          name: "Оборудование",
          label: "Оборудование",
          children: [
            {
              $formkit: "select",
              name: "Тип",
              label: "Тип оборудования",
              placeholder: "Выберите тип",
              options: [
                "Системный блок",
                "Моноблок",
                "Ноутбук",
                "Неттоп",
                "Виртуальная машина",
                "Сервер",
                "Виртуальный сервер",
                "Тонкий клиент",
              ],
            },
            {
              $formkit: "text",
              name: `Сетевое имя`,
              label: "Сетевое имя",
            },
            {
              $formkit: "text",
              name: `Серийный номер`,
              label: "Серийный номер",
            },
            {
              $formkit: "text",
              name: `Модель`,
              label: "Модель",
            },
            {
              $formkit: "text",
              name: `Операционная система`,
              label: "Операционная система",
            },
            {
              $formkit: "textarea",
              name: `СЗИ`,
              label: "СЗИ",
            },
          ],
        },
        {
          $formkit: "list",
          name: "Перифирия",
          value: [],
          dynamic: true,
          children: [
            {
              $formkit: "group",
              for: ["item", "index", "$items"],
              key: "$item",
              index: "$index",
              label: "Перифирия",
              children: [
                {
                  $formkit: "group",
                  name: "Перифирия",
                  label: "Перифирия",
                  children: [
                    {
                      $el: "h2",
                      children: "Перифирия",
                      attrs: { class: "text-md font-bold" },
                    },
                    {
                      $formkit: "select",
                      name: "Тип",
                      label: "Тип перифирии",
                      placeholder: "Выберите тип",
                      options: [
                        "Монитор",
                        "Мышь",
                        "Клавиатура",
                        "Камера",
                        "Сканер",
                        "Принтер",
                        "МФУ",
                      ],
                    },
                    {
                      $formkit: "text",
                      name: `Серийный номер`,
                      label: "Серийный номер",
                    },
                    {
                      $formkit: "text",
                      name: `Модель`,
                      label: "Модель",
                    },
                    {
                      $el: "div",
                      attrs: { class: "flex items-center" },
                      children: [
                        {
                          $formkit: "button",
                          onClick: "$removeItem($node, $index)",
                          children: [
                            {
                              $el: "span",
                              children: "Удалить перифирию",
                              attrs: { class: "btn-delete" },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              $formkit: "button",
              onClick: "$addItem($node)",
              children: "Добавить перифирию",
            },
          ],
        },
        {
          $formkit: "list",
          name: "Список допущенных лиц к работе за АРМ",
          label: "Список допущенных лиц к работе за АРМ",
          value: [],
          dynamic: true,
          children: [
            {
              $formkit: "group",
              for: ["item", "index", "$items"],
              key: "$item",
              index: "$index",
              label: "Перифирия",
              children: [
                {
                  $formkit: "group",
                  name: "Допущеное лицо",
                  label: "Допущеное лицо",
                  children: [
                    {
                      $el: "h2",
                      children: "Допущеное лицо",
                      attrs: { class: "text-md font-bold" },
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
                      $el: "div",
                      attrs: { class: "flex items-center" },
                      children: [
                        {
                          $formkit: "button",
                          onClick: "$removeItem($node, $index)",
                          children: [
                            {
                              $el: "span",
                              children: "Удалить лицо",
                              attrs: { class: "btn-delete" },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              $formkit: "button",
              onClick: "$addItem($node)",
              children: "Добавить лицо",
            },
          ],
        },
      ],
    },
  ];
}
