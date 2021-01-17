const forms = [
    {
      step: 1,
      heading: 'Как вас зовут?',
      gfx:[
          {
              file: 'left',
              alt: 'left',
              class: 'main__left'
          },
          {
            file: 'right',
            alt: 'right',
            class: 'main__right'
          }
      ],
      forms:[
          {
              type: 'text',
              placeholder: 'Имя',
              id:'name'
          }
      ]
  },
  {
      step: 2,
      heading: 'Ник Telegram',
      gfx:[
        {
            file: 'left_2',
            alt: 'left',
            class: 'main__left'
        }
    ],
      forms:[
          {
              type: 'text',
              placeholder: 'Начните с @',
              id:'telegram'
          }
      ]
  },
  {
      step: 3,
      heading: 'Опишите задачу',
      gfx:[
        {
            file: 'right3',
            alt: 'right',
            class: 'main__right'
        }
    ],
      forms:[
          {
              type: 'text',
              placeholder: 'Я ищу',
              id:'looking'
          },
          {
              type: 'text',
              placeholder: 'Небольшое описание задачи',
              id:'brief'
          },
          {
              type: 'text',
              placeholder: 'Сроки',
              id:'terms'
          },
          {
              type: 'text',
              placeholder: 'Оплата',
              id:'payment'
          },
          {
              type: 'url',
              placeholder: 'Ссылка на ТЗ',
              id:'task'
          }
      ]
  },
  {
      step: 4,
      heading: 'Выбор категории',
      gfx:[
        {
            file: 'center',
            alt: 'center',
            class: 'main_center'
        }
    ],
      forms:[
          {
              type: 'select',
              placeholder: 'Категория',
              id: 'selected',
              options:[
                  {
                      value: 0,
                      title: 'Маркетинг',
                      },
                  {
                      value: 1,
                      title: 'Программирование'
                  }
              ]
          }
      ]
  },
  {
      step: 5,
      type: 'greetings',
      heading:'Спасибо!',
      subtitle: 'Мы найдём для вас сотрудника в краткий срок.',
      gfx:[
        {
            file: 'thankyou',
            alt: 'center',
            class: 'main_center'
        }
    ],
  }

]

export default forms;