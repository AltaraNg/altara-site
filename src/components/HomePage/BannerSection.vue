<template>
  <div id="banner"></div>
  <div
    class="h-fit w-full flex flex-col md:flex-row bg-blue-50 md:items-center"
  >
    <div
      class="
        w-full
        md:w-3/5
        text-gray-800
        md:py-20
        py-16
        md:pl-16
        px-8
        md:px-0
        flex flex-col
      "
    >
      <h1
        class="
          md:text-7xl
          text-5xl
          font-black
          md:text-left
          text-center
          md:leading-12
          leading-10
          text-brand
          pb-8
          tracking-tighter
        "
      >
        Buy Now, Pay Later
      </h1>
      <p
        class="
          text-sm
          md:text-lg
          pr-0
          md:pr-36 md:text-left
          text-center
          tracking-wider
          mb-10
          md:leading-7
          leading-8
        "
      >
        A leading technology driven platform that enables pay later for multiple
        services
      </p>
      <router-link :to="{ name: 'how_it_works' }" exact
        class="
          bg-brand
          px-7
          md:py-3
          py-3
          md:mr-80
          rounded-lg
          font-bold
          text-white text-sm
          hover:shadow-lg
        "
      >
        How It Works
      </router-link>
    </div>
    <div class="w-full md:w-1/2 md:px-10 md:pt-5 px-5 pt-5">
      <bannerSVG />
    </div>
  </div>
</template>

<script>
import bannerSVG from "../../assets/svgs/banner.vue";
export default {
  components: {
    bannerSVG,
  },
};
</script>

<style>
</style>