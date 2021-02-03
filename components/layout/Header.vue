<template>
  <div class='header'>
    <div class='header-menu'>
      <b-navbar class='header-menu-items'>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" class="d-flex align-items-center" is-nav>
          <b-navbar-nav>
            <a
              class='header-menu-items-link'
              v-for="(item, key) in menuItems"
              :key="key"
              :href="`/${item.link}`"
              :class="item.name === currentPage ? '-active' : ''"
            >
              {{ item.title }}
            </a>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <div
        class="header-menu-location"
        @click='openCurrentRegionChoose'
        @mouseover='currentRegionHovered(true)'
        @mouseleave='currentRegionHovered(false)'
      >
        <span class="header-menu-location-title" :class="currentRegionState ? '-active' : ''">Москва</span>
        <vz-arrow-down :hovered="currentRegionState" class="header-menu-location-arrow" />
      </div>
      <div class='header-menu-links'>
        <div
          class='header-menu-links-link'
          v-for="(link, key) in menuLinks"
          :key="key"
          @mouseover='menuLinkHovered(key, true)'
          @mouseleave='menuLinkHovered(key, false)'
        >
          <b-dd
            v-if="link.name !== 'contacts'"
            id="dropdown-purchase_types"
            no-caret
            :lazy="true"
            toggle-class="p-0 text-center mb-0 mr-4 custom_button"
            variant="link"
            boundary="viewport"
          >
            <template v-slot:button-content>
              <vz-phone v-if="link.name === 'phone'"/>
              <vz-personal-area v-else-if="link.name === 'personal-area'" />
              <span class='header-menu-links-link-text' :class="[link.hovered ? '-active' : '', link.name === 'personal-area' ? 'custom_underline' : '']">{{ link.title }}</span>
              <vz-arrow-down v-if="link.name === 'phone'" class='header-menu-links-link-arrow' :hovered='link.hovered' />
              <vz-events v-if="link.name === 'events'" />
            </template>
            <template v-if="link.name === 'phone'">
              <div class='d-flex flex-column pl-3 pr-4'>
                <span>Россия</span>
                <span class='custom_underline'>+7 499 705 97 79</span>
                <b-button pill variant='danger mt-4'>Обратная связь</b-button>
              </div>
            </template>
            <template v-if="link.name === 'events'">
              <div class='d-flex flex-column pl-3 pr-4'>
                <div class='d-flex flex-column custom_border pb-3' style='width: 355px;'>
                  <span class='primary-color pt-3'>Цена на перевозку между Москвой и Санкт-Петербургом стала еще выгоднее!</span>
                  <span>Перевозка между столицами еще выгоднее</span>
                </div>
                <div class='d-flex flex-column custom_border mt-3 pb-3' style='width: 355px;'>
                  <span class='primary-color'>Цена на перевозку между Москвой и Санкт-Петербургом стала еще выгоднее!</span>
                  <span>Перевозка между столицами еще выгоднее</span>
                </div>
                <div class='d-flex flex-column custom_border mt-3 pb-3' style='width: 355px;'>
                  <span class='primary-color'>Цена на перевозку между Москвой и Санкт-Петербургом стала еще выгоднее!</span>
                  <span>Перевозка между столицами еще выгоднее</span>
                </div>
                <div class='d-flex align-items-center'>
                  <span class='w-100 text-center py-2'>Все события</span>
                </div>
              </div>
            </template>
            <template v-if="link.name === 'personal-area'">
              <div class='d-flex flex-column' style='width: 357px;'>
                <div class='d-flex align-items-center justify-content-end'>
                  <b-icon-x class='h4'></b-icon-x>
                </div>

              </div>
            </template>
          </b-dd>
          <a
            v-else
            class='header-menu-links-link'
            @mouseover='menuLinkHovered(1, true)'
            @mouseleave='menuLinkHovered(1, false)'
            href="/contacts"
          >
            <vz-contacts />
            <span class='header-menu-links-link-text pb-1 pl-2' :class="link.hovered ? '-active' : ''">Контакты</span>
          </a>
        </div>
      </div>
    </div>
    <div class="header-submenu">
      <vz-logo />
      <div class="header-submenu-links">
        <div
          v-for="(link, key) in submenuLinks"
          :key="key"
          class="header-submenu-links-link"
          @mouseover='submeuLinkHovered(key, true)'
          @mouseleave='submeuLinkHovered(key, false)'
        >
          <vz-calculate v-if="link.name === 'calculate'" />
          <vz-manage v-else-if="link.name === 'manage'" />
          <vz-services-rates v-else-if="link.name === 'services'" />
          <vz-geography v-else-if="link.name === 'geography'" />
          <vz-info v-else-if="link.name === 'info'" />
          <span class='header-submenu-links-link-text' :class="link.hovered ? '-active' : ''">{{ link.title }}</span>
        </div>
      </div>
    </div>
    <subheader />
    <header-choose-region />
  </div>
</template>

<script>
import VzLogo from '../../assets/svg/header/vz-logo'
import VzPhone from '../../assets/svg/header/vz-phone'
import VzArrowDown from '../../assets/svg/header/vz-arrow-down'
import VzContacts from '../../assets/svg/header/vz-contacts'
import VzPersonalArea from '../../assets/svg/header/vz-personal-area'
import VzEvents from '../../assets/svg/header/vz-events'
import VzCalculate from '../../assets/svg/header/vz-calculate'
import VzManage from '../../assets/svg/header/vz-manage'
import VzServicesRates from '../../assets/svg/header/vz-services-rates'
import VzGeography from '../../assets/svg/header/vz-geography'
import VzInfo from '../../assets/svg/header/vz-info'
import Subheader from './Subheader'
import HeaderChooseRegion from '../header/HeaderChooseRegion'
export default {
  components: { HeaderChooseRegion, Subheader, VzInfo, VzGeography, VzServicesRates, VzManage, VzCalculate, VzEvents, VzPersonalArea, VzContacts, VzArrowDown, VzPhone, VzLogo },
  data() {
    return {
      currentPage: null,
      currentRegionState: false,
      menuItems: [
        { title: 'Частным клиентам', link: '', name: 'index' },
        { title: 'Бизнесу', link: 'business', name: 'business' }
      ],
      menuLinks: [
        { title: '+7 499 705 97 79', name: 'phone', hovered: false },
        { title: 'Контакты', name: 'contacts', hovered: false },
        { title: 'События', name: 'events', hovered: false },
        { title: 'Личный кабинет', name: 'personal-area', hovered: false },
      ],
      submenuLinks: [
        { title: 'Рассчитать', name: 'calculate', hovered: false },
        { title: 'Управление заказом', name: 'manage', hovered: false },
        { title: 'Услуги и тарифы', name: 'services', hovered: false },
        { title: 'География', name: 'geography', hovered: false },
        { title: 'Информация', name: 'info', hovered: false },
      ]
    }
  },
  watch: {
    '$route.name'(newValue) {
      this.currentPage = newValue
    }
  },
  created() {
    this.currentPage = this.$route.name
  },
  methods: {
    menuLinkHovered(key, state) {
      this.menuLinks[key].hovered = state
    },
    submeuLinkHovered(key, state) {
      this.submenuLinks[key].hovered = state
    },
    currentRegionHovered(state) {
      this.currentRegionState = state
    },
    openCurrentRegionChoose() {
      this.$bvModal.show('chooseCurrentRegion')
    }
  }
}
</script>
