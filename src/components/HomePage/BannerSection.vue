<template>
  <div id="banner"></div>
  <div
    class="h-fit w-full flex flex-col lg:flex-row banner justify-between md:items-center "
  >
    <div
      class="
        w-full
        lg:w-3/5
        text-gray-800
        lg:py-0
        py-16
        md:pl-16
        px-8
        md:px-0
        flex flex-col
      "
    >
      <h1
        class="
          md:text-6xl
          text-4xl
          font-black
          lg:text-left
          text-center
          md:leading-12
          leading-10
          text-brand
          pb-8
          tracking-tighter
        "
      >
       Where B-commerce meets Inclusion
      </h1>
      <p
        class="
          text-sm
          md:text-lg
          pr-0
          md:pr-36 lg:text-left
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
          
          lg:mx-0
          bg-brand
          px-10
          py-3
          mr-0
          md:w-56
          w-full
          text-xs
          md:text-sm
          rounded-lg
          font-bold
          text-white text-sm
          hover:shadow-lg
          text-center
        "
      >
        How It Works
      </router-link>
    </div>
    <div class="w-full lg:w-1/2  lg:px-10 lg:pt-5 px-5 pt-5 fadeInRight">
      <img src="../../assets/images/banner2.png" class="h-full w-full lg:h-80 lg:w-auto "/>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.banner{
   background-image: url("../../assets/images/banner3.png");
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-size: cover;
}
</style>