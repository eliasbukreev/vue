export const schema = [
  {
    $el: 'h1',
    children: 'Периодический контроль',
    attrs: {
      class: 'text-xl font-bold mb-4',
    },
  },
  {
    $formkit: 'textarea',
    name: 'company_name',
    label: 'Название организации',
    validation: 'required|length:3,200',
  },
  {
    $el: 'h1',
    children: 'Руководитель организации',
    attrs: {
      class: 'text-md font-bold mb-2',
    },
  },
  {
    $formkit: 'text',
    name: 'company_director_name',
    label: 'ФИО',
    validation: 'required|length:5,100',
  },
  {
    $formkit: 'text',
    name: 'company_director_position',
    label: 'Должность',
    validation: 'required|length:5,100',
  },
  {
    $el: 'h1',
    children: 'Контактное лицо',
    attrs: {
      class: 'text-md font-bold mb-2',
    },
  },
  {
    $formkit: 'text',
    name: 'company_director_name',
    label: 'ФИО',
    validation: 'required|length:5,100',
  },
  {
    $formkit: 'text',
    name: 'company_director_position',
    label: 'Должность',
    validation: 'required|length:5,100',
  },
    {
    $formkit: 'email',
    name: 'company_email',
    label: 'Email',
    placeholder: 'test@mail.ru', 
    validation: 'required|email',
  },
  {
    $formkit: 'tel',
    name: 'company_phone',
    label: 'Телефон',
    placeholder: '+79123456789',
    validation: '/^\+?[0-9]{9-15}$/',
    validationVisibility: 'dirty',
    validationMessages: {
      matches: 'Телефонный номер состоит из 9-15 цифр',
    }
  },
]