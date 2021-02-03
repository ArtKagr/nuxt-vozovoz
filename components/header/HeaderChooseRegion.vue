<template>
  <b-modal
    id="chooseCurrentRegion"
    size="xl"
    hide-header
    hide-footer
    centered
    body-class="p-0 h-100 overflow-hidden"
    content-class="h-100"
    footer-bg-variant="info"
  >
    <template v-slot:default="{ close }" class='d-flex flex-column'>
      <div class='d-flex justify-content-end p-4'>
        <b-icon-x class='h4 pointer' @click='close()'></b-icon-x>
      </div>
      <div class='d-flex justify-content-between flex- modal_padding'>
        <div v-for="(column, key) in columns" :key='key' class='d-flex flex-column'>
          <span>Москва</span>
          <span>Москва</span>
          <span>Москва</span>
          <span>Москва</span>
          <span>Москва</span>
          <span>Москва</span>
          <span>Москва</span>
          <span>Москва</span>
          <span>Москва</span>
          <span>Москва</span>
          <span>Москва</span>
        </div>
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {}, {}, {}, {}, {}, {}, {}, {}
      ]
    }
  },
  props: {
    source: {
      type: String,
      default: null
    }
  },
}
</script>
