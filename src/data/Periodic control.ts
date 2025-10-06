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
    $formkit: 'textarea',
    name: 'company_director_name',
    label: 'ФИО',
    validation: 'required|length:5,100',
  },
  {
    $formkit: 'textarea',
    name: 'company_director_position',
    label: 'Должность',
    validation: 'required|length:5,100',
  },
  {
    $formkit: 'textarea',
    name: 'company_director_position',
    label: 'Confirm password',
    help: 'Enter your new password again to confirm it.',
    validation: 'required|confirm',
    validationLabel: 'password confirmation',
  },
  {
    $cmp: 'FormKit',
    props: {
      name: 'eu_citizen',
      type: 'checkbox',
      id: 'eu',
      label: 'Are you a european citizen?',
    },
  },
  {
    $formkit: 'select',
    if: '$get(eu).value',
    name: 'cookie_notice',
    label: 'Cookie notice frequency',
    options: {
      refresh: 'Every page load',
      hourly: 'Ever hour',
      daily: 'Every day',
    },
    help: 'How often should we display a cookie notice?',
  },
]