<template>
  <div>
    <div class="my-10">
      <heading title="ACHIEVEMENTS" />
      <div
        class="
          md:h-40
          items-center
          justify-center
          md:justify-evenly
          space-y-16
          md:space-y-0
          py-12
          md:py-28
          h-fit
          flex
          md:flex-row
          flex-col
          bg-brand
          mt-10
        "
      >
        <div class="text-white flex flex-col items-center">
          <p class="font-black md:text-5xl text-4xl leading-7 mb-2">>16,000</p>
          <p class="text-sm tracking-wider font-black">Customers Served</p>
        </div>
        <div class="text-white flex flex-col items-center">
          <p class="font-black md:text-5xl text-4xl leading-7 mb-2">
            15 of 1768
          </p>
          <p class="text-sm tracking-wider font-black">Communities</p>
        </div>
        <div class="text-white flex flex-col items-center">
          <p class="font-black md:text-5xl text-4xl leading-7 mb-2">80,000+</p>
          <p class="text-sm tracking-wider font-black">Lives Touched</p>
        </div>
      </div>
    </div>
    <div class="my-10">
      <heading title="OUR IMPACT" />
      <div
        class="
          mx-36
          md:mx-16
          mb-16
          md:mb-0
          flex
          md:flex-wrap
          justify-between
          items-center
          md:flex-row
          flex-col
          space-y-16
          md:space-y-0
        "
      >
        <div class="h-64 lg:w-1/5 w-64 md:my-28 mb-0">
          <vue3-chart-js
            :id="doughnutChart1.id"
            :type="doughnutChart1.type"
            :data="doughnutChart1.data"
            @before-render="beforeRenderLogic"
          ></vue3-chart-js>
        </div>
        <div class="h-64 lg:w-1/5 w-64 mb-0">
          <vue3-chart-js
            :id="doughnutChart2.id"
            :type="doughnutChart2.type"
            :data="doughnutChart2.data"
            @before-render="beforeRenderLogic"
          ></vue3-chart-js>
        </div>
        <div class="h-64 lg:w-1/5 w-64 md:mb-28 mb-0">
          <vue3-chart-js
            :id="doughnutChart3.id"
            :type="doughnutChart3.type"
            :data="doughnutChart3.data"
            @before-render="beforeRenderLogic"
          ></vue3-chart-js>
        </div>
        <div class="h-64 lg:w-1/5 w-64 md:mb-28 mb-0">
          <vue3-chart-js
            :id="doughnutChart4.id"
            :type="doughnutChart4.type"
            :data="doughnutChart4.data"
            @before-render="beforeRenderLogic"
          ></vue3-chart-js>
        </div>
      </div>
    </div>
    <div class="mb-16">
      <heading title="TESTIMONIALS" />
      <div
        class="
          md:flex
          mt-8
          w-full
          hidden
          md:flex-row
          flex-col
          items-center
          justify-evenly
        "
      >
        <div v-for="(testimonial, index) in testimonials" :key="index">
          <testimonial
            :heading="testimonial.heading"
            :testimony="testimonial.testimony"
            :source="testimonial.image"
          />
        </div>
      </div>
      <carousel
        :items-to-show="1"
        :autoplay="4000"
        :transition="800"
        :wrap-around="true"
        class="md:hidden block mt-8"
      >
        <slide v-for="(testimonial, index) in testimonials" :key="index">
          <testimonial
            :heading="testimonial.heading"
            :testimony="testimonial.testimony"
            :source="testimonial.image"
          />
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import heading from "./general/heading.vue";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import testimonial from "./general/testimonial.vue";
import testimonial1 from "../assets/images/testimonial_1.png";
import testimonial2 from "../assets/images/testimonial_2.png";
import "vue3-carousel/dist/carousel.css";
import "../assets/css/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  title: "Impacts | Altara Credit Limited",
  components: {
    heading,
    Vue3ChartJs,
    testimonial,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      testimonials: [
        {
          heading: "Business Made Easy",
          testimony:
            "I enjoyed the pay small small scheme, it allowed business owners like us who are starters build up gradually... The ease of repayment... your flexibility bails me out all the time so I keep coming back...”",
          image: testimonial1,
        },
        {
          heading: "Quality Showroom Products",
          testimony:
            "“I more or less saw Altara like a second home, they always accord me so much respect whenever I’m around and I love the ambience... imagine I have to pay for school fees, house rents and other expenses and I still have to buy these products at cash and carry, I would have been so broke”",
          image: testimonial2,
        },
      ],
      doughnutChart1: {
        id: "doughnut",
        type: "doughnut",
        data: {
          labels: ["Men", "Women"],
          datasets: [
            {
              backgroundColor: ["#074A74", "rgba(7,74,116,0.7)"],
              data: [70, 30],
            },
          ],
        },
      },
      doughnutChart2: {
        id: "doughnut",
        type: "doughnut",
        data: {
          labels: ["Informal", "Formal"],
          datasets: [
            {
              backgroundColor: ["#074A74", "rgba(7,74,116,0.7)"],
              data: [40, 60],
            },
          ],
        },
      },
      doughnutChart3: {
        id: "doughnut",
        type: "doughnut",
        data: {
          labels: ["Banked", "Unbanked"],
          datasets: [
            {
              backgroundColor: ["#074A74", "rgba(7,74,116,0.7)"],
              data: [25, 75],
            },
          ],
        },
      },
      doughnutChart4: {
        id: "doughnut",
        type: "doughnut",
        data: {
          labels: ["Business", "Personal"],
          datasets: [
            {
              backgroundColor: ["#074A74", "rgba(7,74,116,0.7)"],
              data: [35, 65],
            },
          ],
        },
      },
    };
  },
  methods: {
    beforeRenderLogic(e) {
      console.log(e);
    },
  },
};
</script>

<style>
</style>