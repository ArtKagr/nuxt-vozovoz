<template>
  <div class="development">
    <div class="development-menu">
      <div class="development-menu-items">
        <nuxt-link
          v-for="item in menuItems"
          class="development-menu-items-item"
          active-class="-active"
          :key="item.title"
          :to="`/main/${item.link}`"
        >
          {{ item.title }}
        </nuxt-link>
      </div>
      <div class="development-menu-personal">
        <span class="development-menu-personal-title">Личный кабинет</span>
      </div>
    </div>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head() {
    return {
      title: 'Главная страница',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Главная страница портала Возовоз'
        }
      ]
    }
  },
  data() {
    return {
      menuItems: [
        { title: 'API', link: 'api', content: 'API клиентского сайта Возовоз' },
        { title: 'iFrame Калькулятор', link: 'iframe', content: 'Конструктор калькулятора iFrame' },
        { title: 'CMS', link: 'cms', content: 'Модули для CMS' },
        { title: 'SDK', link: 'sdk', content: 'SDK' },
      ]
    }
  },
})
</script>

<style lang="scss">
@import 'assets/scss/variables.scss';

.development {
  display: flex;
  flex-direction: column;
  height: 640px;

  &-menu {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: 0 auto -25px auto;
    box-shadow: 0 2px 6px rgba(0,0,0,.3);
    z-index: 100;

    @media screen and (max-width: $sm) {
      box-shadow: none;
      margin: 0;
      width: 100%;
    }

    &-items {
      display: flex;
      width: 80%;
      background: $lightGray;
      padding: 0 $main-size;

      &-item {
        color: $vzGray-main;
        font-size: $main-size;
        padding: $main-size 0;
        cursor: pointer;
        margin: 0 $main-size 0 0;
        text-decoration: none;

        &:hover {
          box-shadow: inset 0 -4px #ddd;
        }

        &.-active {
          border-bottom: 2px solid $primary;
        }
      }
    }

    &-personal {
      display: flex;
      justify-content: center;
      width: 20%;
      background: $primary;
      padding: $main-size;

      @media screen and (max-width: $sm) {
        display: none;
      }

      &-title {
        font-size: $main-size;
        color: $lightGray;
        margin: 0 auto;
        cursor: pointer;
      }
    }
  }

  &-content {
    display: flex;
    flex-direction: column;

    &-title_container {
      display: flex;
      flex-direction: column;
      height: 126px;
      background: $primary;

      @media only screen and (max-width: $sm) {
        height: 78px;
      }

      &-title {
        display: flex;
        justify-content: center;

        &-text {
          width: 60%;
          padding-top: 54px;
          color: $lightGray;
          font-size: $title-size;

          @media only screen and (max-width: $sm) {
            width: 100%;
            padding-top: $main-size;
            padding-left: $elementPadding;
            font-size: $title-size-sm;
          }
        }
      }
    }

    &-content_container {
      display: flex;
      flex-direction: column;
      overflow: auto;
      width: 60%;
      margin: 0 auto;

      @media screen and (max-width: $sm) {
        width: 90%;
        margin: $large-size auto;
      }

      &.-add_padding {
        padding: 20px $main-size;
      }

      &-container {
        border-bottom: 1px solid $layoutGray;
        padding: $main-size 0;

        &.-borderless {
          border-bottom: none;
          padding: 0;
        }

        &-text {
          font-size: $main-size;
          margin: 0;

          &-bold {
            font-size: $main-size;
            font-weight: bold;
          }

          &-link {
            text-decoration: none;
          }
        }

        &-list {

          &-item {
            font-size: $main-size;
          }
        }

        &-link {
          display: flex;
          text-align: center;
          padding: 10px 0;
          cursor: pointer;
          text-decoration: none;

          &-title {
            margin: 0 0 0 10px;
            font-size: $main-size;
            color: $primary;
            font-weight: bold;
          }
        }
      }
    }

  }

}

</style>

