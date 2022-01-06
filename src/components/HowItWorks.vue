<template>
  <div class="">
    <!-- <div class="flex md:flex-row flex-col ">
        <img src="../assets/images/customer1.jpg" class="md:w-1/2"/>
        <img src="../assets/images/customer2.jpg" class="md:w-1/2"/>
    </div> -->
    <carousel>
      <carousel-slide
        v-for="(slide, index) in slides"
        :key="index"
        :index="index"
        :visibleSlide = 'visibleSlide'
      >
        <div class=" h-100   bg-red-500 ">
        <img :src="slide" class= "w-full object-center h-full object-cover" />
        </div>

      </carousel-slide>
    </carousel>
    <div class="my-10">
      <heading title="HOW IT WORKS" />
      <div class="flex items-start md:justify-evenly md:flex-row flex-col">
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
          <applicationForm />
          <b class="text-lg">Fill in Application Form</b>
          <p>Go to Sign up and fill in your information</p>
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
import Carousel from "../components/general/Carousel.vue";
import CarouselSlide from "../components/general/CarouselSlide.vue";
export default {
  components: {
    heading,
    applicationForm,
    Carousel,
    CarouselSlide,
  },
  title: "How It Works | Altara Credit Limited",
  data() {
    return {
      slides: [Image1, Image2],
      visibleSlide: 0,
    };
  },
};
</script>

<style>
</style>