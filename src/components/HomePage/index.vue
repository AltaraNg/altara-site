<template>
  
  <Banner/>
  <ProductCalculator/>
  <Calculator/>
  <Services/>
  <AchievementsVue/>
 
  <FAQ/>
  <ContactUs/>
</template>

<script>
import Banner from './BannerSection.vue'
import Services from './ServiceSection.vue'
import ContactUs from './ContactUs.vue'
import FAQ from './FaqSection.vue'
import AchievementsVue from './Achievements.vue'
import Calculator from './Calculator.vue'
import ProductCalculator from './ProductCalculator.vue'
export default {
  components:{
    Banner,
    Services,
    ContactUs,
    FAQ,
    AchievementsVue,
    ProductCalculator,
    Calculator
  },
   title: 'Buy now Pay Later | Altara Credit Limited'

}
</script>

<style>

</style>