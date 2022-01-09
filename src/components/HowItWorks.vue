<template>
  <div class="">
    <div class="flex md:hidden flex-col ">
        <img src="../assets/images/customer1.jpg" class="md:w-1/2"/>
        <img src="../assets/images/customer2.jpg" class="md:w-1/2"/>
    </div>
     <carousel :items-to-show="1" :autoplay=4000 :transition=800 :wrap-around = true class="hidden md:block overflow-hidden">
    <slide v-for="slide in slides" :key="slide">
     <img :src="slide" class= " object-center h-99 w-full object-cover" />
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
    <div class="my-10">
      <heading title="HOW IT WORKS" />
      <div class="flex mt-8 items-start md:justify-evenly md:flex-row flex-col space-y-20 md:space-y-0">
        <div
          class="
            lg:w-1/5
            space-y-2
            md:w-1/3
            w-full
            flex flex-col
            text-brand
            items-center
          "
        >
          <applicationForm class="h-40" />
          <b class="md:text-2xl md:h-16  text-base text-center">Fill in Application Form</b>
          <p class="text-center text-black md:text-sm text-xs">Go to <b>Sign up</b> and fill in your information</p>
        </div>
         <div
          class="
            lg:w-1/5
            space-y-2
            md:w-1/3
            w-full
            flex flex-col
            text-brand
            items-center
          "
        >
          <img src="../assets/images/cart.png" class="h-40" />
          <b class="md:text-2xl text-base md:h-16  text-center">Select what you’re interested in</b>
          <p class="text-center text-black md:text-sm text-xs">Select what Product or Cash loan you are interested in</p>
        </div>
          <div
          class="
            lg:w-1/5
            space-y-2
            md:w-1/3
            w-full
            flex flex-col
            text-brand
            items-center
          "
        >
          <img src="../assets/images/calendar.png" class="h-40" />
          <b class="md:text-2xl text-base md:h-16  text-center">Plan</b>
          <p class="text-center text-black md:text-sm text-xs">Choose Repayment Duration plan</p>
        </div>
        <div
          class="
            lg:w-1/5
            space-y-2
            md:w-1/3
            w-full
            flex flex-col
            text-brand
            items-center
          "
        >
          <img src="../assets/images/payment.png" class="h-40" />
          <b class="md:text-2xl text-base md:h-16  text-center">Preferred mode of payment. 
</b>
          <p class="text-center text-black md:text-sm text-xs">Select your preferred Mode of Payment Options</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import heading from "../components/general/heading.vue";
import applicationForm from "../assets/svgs/application_form.vue";
import Image1 from "../assets/images/customer1.jpg";
import Image2 from "../assets/images/customer2.jpg";
import 'vue3-carousel/dist/carousel.css';
import '../assets/css/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default {
  components: {
    heading,
    applicationForm, Carousel, 
    Slide,
    Pagination,
    Navigation,
  },
  title: "How It Works | Altara Credit Limited",
  data() {
    return {
      slides: [Image1, Image2],
    };
  },

};
</script>

<style>
</style>