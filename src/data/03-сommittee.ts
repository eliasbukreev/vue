export const committee = [
  {
    $el: 'h1',
    children: 'Комиссии',
    attrs: {
      class: 'text-xl font-bold mb-4',
      id: "PersonalData"
    },
  },
]

export class Member {
    counter: Record<string, number> = {
        "PersonalData": 0,
    }

    schema: any[] = [] 

    templateGroup(key: string, value: number) {
        return {
            $formkit: 'group',
            name: `${key}Member${value}`,
            label: `Участник ${value}`,
            children: [
                {
                    $formkit: 'text',
                    name: `commission${key}Memberfio${value}`,
                    label: 'ФИО',
                },
                {
                    $formkit: 'text',
                    name: `commission${key}Memberposition${value}`,
                    label: 'Должность',
                },
                {
                    $formkit: 'text',
                    name: `commission${key}Membernumber${value}`,
                    label: 'Номер приказа о назначении',
                    placeholder: "№ 00000000000000000"
                },
                {
                    $formkit: 'file',
                    name: `commission${key}Memberfile${value}`,
                    label: 'Приложение',
                    accept: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
                    help: ".pdf,.doc,.docx,.xml,.md,.csv,.jpg",
                    multiple: "false",
                },
            ]
        }
    }

    addMember(key: string) {
        this.counter[key] = (this.counter[key] || 0) + 1
        const value = this.counter[key]
        const group = this.templateGroup(key, value)
        this.schema.push(group)
    }

    deleteMember(key: string, value: number) {
        this.schema = this.schema.filter(group => group.name !== `${key}Member${value}`)
    }
}

const temp = [  {
    $el: 'h2',
    children: 'Состав комиссии по уничтожению персональных данных',
    attrs: {
      class: 'text-md font-bold mb-2',
    },
  },
  {
    $el: 'h2',
    children: ' Состав комиссии по уничтожению СКЗИ',
    attrs: {
      class: 'text-md font-bold mb-2',
    },
  },
  {
    $el: 'h2',
    children: ' Состав комиссии по реагированию на инциденты ИБ',
    attrs: {
      class: 'text-md font-bold mb-2',
    },
  },
  {
    $el: 'h2',
    children: 'Перечень лиц, допущенных к обработке ПДн',
    attrs: {
      class: 'text-md font-bold mb-2',
    },
  },
  {
    $el: 'h2',
    children: 'Перечень лиц, допущенных к работе с СКЗИ',
    attrs: {
      class: 'text-md font-bold mb-2',
    },
  },
  {
    $el: 'h2',
    children: 'Перечень лиц, допущенных к работе в ИС',
    attrs: {
      class: 'text-md font-bold mb-2',
    },
  },]