<template>
  <div class="d-flex flex-column vh-100 vw-100 overflow-hidden">
    <Header />
    <nuxt class="align-self-stretch w-100 h-100 overflow-auto"/>
    <Footer />
  </div>
</template>

<style lang="scss">
@import '../assets/scss/app.scss';
</style>


<script>
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
export default {
  components: { Footer, Header }
}
</script>
