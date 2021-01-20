<template>
  <div class="development-content">
    <div  class="development-content-title_container">
      <div class="development-content-title_container-title">
        <h2 class="development-content-title_container-title-text">Модули для CMS</h2>
      </div>
    </div>
    <div class="development-content-content_container -add_padding">
      <div class="development-content-content_container-container -borderless">
        <p class="development-content-content_container-container-text-bold">Модуль расчета стоимости и сроков доставки для CMS Битрикс</p>
        <p class="development-content-content_container-container-text">
          Модуль связывает Вашу форму заказа на сайте с нашим калькулятором доставки.
          Клиент при оформлении заказа получает возможность:
        </p>
      </div>
      <div class="development-content-content_container-container -borderless py-2">
        <ul class="development-content-content_container-container-list">
          <li class="development-content-content_container-container-list-item">выбрать один из двух способов доставки: курьером до адреса или в пункт самовывоза;</li>
          <li class="development-content-content_container-container-list-item">узнать предварительную стоимость и срок доставки.</li>
        </ul>
      </div>
      <div class="development-content-content_container-container -borderless">
        <p class="development-content-content_container-container-text">
          Для корректной работы модуля на сайте интернет-магазина у каждого товара должны быть прописаны габариты
          (длина, высота, ширина) и вес.
        </p>
        <p class="development-content-content_container-container-text">
          Модуль доступен для установки на актуальные версии Битрикс редакций: Малый бизнес и Бизнес.
          Сайт должен работать в кодировке utf8. Остальные технические требования не противоречат минимальным техническим требованиям CMS Битрикс.
        </p>
        <a class="development-content-content_container-container-link" href="https://files.vozovoz.ru/filesforsite/Модуль расчета стоимости и сроков доставки для CMS Битрикс.docx">
          <i class="material-icons v-middle">file_download</i>
          <p class="development-content-content_container-container-link-title">Скачать инструкцию по установке и настройке модуля</p>
        </a>
        <div class="development-content-content_container-container -borderless">
          <p class="development-content-content_container-container-text">По всем вопросам связанным с интеграцией можно обращаться на
          <a class="development-content-content_container-container-text-link" href="mailto:api@vozovoz.ru">api@vozovoz.ru</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Разработчикам / CMS',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Модули для CMS'
        }
      ]
    }
  },
}
</script>
