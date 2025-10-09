import type { Router } from 'vue-router'

export async function submit(payload: Record<string, any>, router: Router) {
  try {

    // Собираем данные
    const data  = {
        body: payload
    }

    const resp = await fetch("/polls/add", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    });

    if (!resp.ok) {
          throw new Error(`Ошибка при сохранении опроса: ${resp.statusText}`);
    }

    alert('Спасибо! Ваши вопросы отправлены 🎉')
    router.push('/')

  } catch (error) {
    console.error('Ошибка при отправке данных:', error)
    alert('Ошибка при отправке данных. Попробуйте еще раз.')
    router.push('/')
  }
}