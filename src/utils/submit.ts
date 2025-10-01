import WebApp from '@twa-dev/sdk'
import type { Router } from 'vue-router'

export async function submit(surveyName: string, payload: Record<string, any>, router: Router) {
  try {

    // Собираем данные
    const data  = {
        [surveyName] : payload
    }

    // Отправляем данные в Telegram
    WebApp.sendData(JSON.stringify(data))

    //Анимация + время для отправки
    await new Promise(r => setTimeout(r, 500))

    // Показываем подтверждение пользователю
    alert('Спасибо! Ваши вопросы отправлены 🎉')

    // Закрываем опросник
    router.push('/')

  } catch (error) {
    console.error('Ошибка при отправке данных:', error)
    alert('Ошибка при отправке данных. Попробуйте еще раз.')
  }
}