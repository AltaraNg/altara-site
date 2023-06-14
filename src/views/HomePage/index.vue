<template>
  
  <Banner/>
  <ProductCalculator/>
  <AchievementsVue/>
  <!-- <Calculator/> remove cashloan -->
  <Services/>
  <FAQ/>
  <ContactUs/>
</template>

<script>
import Banner from './BannerSection.vue'
import Services from './ServiceSection.vue'
import ContactUs from './ContactUs.vue'
import FAQ from './FaqSection.vue'
import AchievementsVue from './Achievements.vue'
// import Calculator from './Calculator.vue' remove cashloan
import ProductCalculator from './ProductCalculator.vue'
export default {
  components:{
    Banner,
    Services,
    ContactUs,
    FAQ,
    AchievementsVue,
    ProductCalculator,
    // Calculator remove cashloan
  },
   title: 'Buy now Pay Later | Altara Credit Limited'

}
</script>

<style>

</style>