<template>
  <Banner/>
  <Services/>
  <FAQ/>
  <ContactUs/>
</template>

<script>
import Banner from './BannerSection.vue'
import Services from './ServiceSection.vue'
import ContactUs from './ContactUs.vue'
import FAQ from './FaqSection.vue'
export default {
  components:{
    Banner,
    Services,
    ContactUs,
    FAQ
  },
  title: 'Buy now Pay Later | Altara Credit Limited'

}
</script>

<style>

</style>