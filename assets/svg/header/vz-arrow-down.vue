<template>
  <svg :class="hovered ? 'arrow_down_hovered' : ''" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1.1518" height="8.06262" transform="matrix(0.647648 -0.761939 0.647648 0.761939 0.119629 0.892334)" :fill="color"/>
    <rect width="1.1518" height="8.06262" transform="matrix(-0.647648 -0.761939 -0.647648 0.761939 10.6802 0.892334)" :fill="color"/>
  </svg>
</template>

<script>
export default {
  data() {
    return {
      color: '#4a4949'
    }
  },
  props: {
    hovered: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    hovered(newValue) {
      this.color = newValue ? '#ec1b22' : '#4a4949'
    }
  }
}
</script>
<style lang='scss' scoped>

   @keyframes bounce {
     0%   { transform: translateY(0); }
     100% { transform: translateY(3px); }
   }

   .arrow_down_hovered {
     animation-name: bounce;
     animation-duration: 1s;
     animation-timing-function: ease;
   }
</style>
