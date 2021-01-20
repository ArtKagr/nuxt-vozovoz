<template>
  <div class="development-content">
    <div  class="development-content-title_container">
      <div class="development-content-title_container-title">
        <h2 class="development-content-title_container-title-text">API клиентского сайта Возовоз</h2>
      </div>
    </div>
    <div class="development-content-content_container">
      <div class="development-content-content_container-container">
        <p class="development-content-content_container-container-text">Vozovoz API представляет интерфейс для удобного взаимодействия с сайтом vozovoz.ru.</p>
        <p class="development-content-content_container-container-text">
          Протестируйте взаимодействия с API на
          <nuxt-link class="development-content-content_container-container-text-link" to="/dev/api">демо-сервере</nuxt-link>
          с протоколом передачи данных HTTPS.
        </p>
      </div>
      <div class="development-content-content_container-container">
        <span class="development-content-content_container-container-text">При использовании API вы сможете:</span>
        <ul class="development-content-content_container-container-list">
          <li class="development-content-content_container-container-list-item">Быстро рассчитать точную стоимость грузоперевозки;</li>
          <li class="development-content-content_container-container-list-item">Легко оформить заявку на грузоперевозку;</li>
          <li class="development-content-content_container-container-list-item">В любой момент получать информацию о статусе и местонахождении вашего груза.</li>
        </ul>
      </div>
      <div class="development-content-content_container-container">
        <p class="development-content-content_container-container-text">
          API-ключ для тестового сервера
          <span class="development-content-content_container-container-text-bold">G934UM29wXG2IKYS9iX9oKQCeojkApHSEWAxOC5v</span>
          . Перейти на
          <nuxt-link class="development-content-content_container-container-text-link" to="/order/personal">демо-сервер</nuxt-link>
          .</p>
        <p class="development-content-content_container-container-text">
          Чтобы получить доступ к API на боевом сервере, нужно авторизоваться
          в системе и создать API ключ в личном кабинете пользователя в разделе
          <nuxt-link class="development-content-content_container-container-text-link" to="/order/personal/config/#api">Настройки</nuxt-link>
          .</p>
      </div>
      <div class="development-content-content_container-container -borderless pt-3">
        <p class="development-content-content_container-container-text">
          Чтобы ознакомиться с подробным описанием, пройдите
          <nuxt-link class="development-content-content_container-container-text-link" to="/vozovoz/apiv2">по ссылке</nuxt-link>
        </p>
        <p class="development-content-content_container-container-text">
          По всем вопросам связанным с интеграцией можно обращаться на
          <a class="development-content-content_container-container-text-link" href="mailto:api@vozovoz.ru">api@vozovoz.ru</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    head() {
      return {
        title: 'Разработчикам / API',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'API клиентского сайта Возовоз'
          }
        ]
      }
    },
  }
</script>
