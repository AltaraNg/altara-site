<template>
  <div id="banner"></div>
  <div class="h-fit flex flex-col md:flex-row bg-brand25">
    <div
      class="
        w-full
        md:w-1/2
        text-gray-800
        md:py-20
        py-16
        md:pl-24 md:pr-16
        px-8
        md:px-0 
        flex flex-col
      "
    >
      <h1
        class="
          md:text-5xl
          text-4xl
          font-bold
          md:text-left
          text-center
          tracking-wider
          md:leading-12
          leading-10
          text-brand
          pb-8
        "
      >
        Buy Now, Pay Later
      </h1>
      <p
        class="
          text-sm
          md:text-lg
          pr-0
          md:pr-16 md:text-left
          text-center
          tracking-wider
          mb-10
          md:leading-10
          leading-8
        "
      >
        A leading technology driven platform that enables pay later for multiple
        services
      </p>
      <button
        class="
          bg-brand
          px-7
          md:py-3
          py-3
          mr-56
          rounded-lg
          font-semibold
          text-white text-sm
          hover:shadow-lg
        "
      >
        How It Works
      </button>
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