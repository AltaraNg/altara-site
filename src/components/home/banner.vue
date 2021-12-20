<template>
<div id="banner"></div>
  <div class="h-fit w-full flex flex-col md:flex-row bg-brand25 ">
      <div class=" w-full md:w-1/2 text-gray-800 py-20 pl-24 pr-16 md:grid flex " >
          <h1 class="text-5xl font-bold tracking-wider leading-12 text-brand pb-8">Buy Now, Pay Later</h1>
          <p class="text-sm md:text-lg pr-0 md:pr-16 tracking-wider mb-10 leading-10">A leading technology driven platform that enables pay later for multiple services</p>
          <button class="bg-brand px-7 py-3 md:mx-24 mx-0  rounded-lg font-semibold justify-self-end  text-white text-sm hover:shadow-lg" >How It Works</button>
      </div>
      <div class="w-full md:w-1/2">
        <bannerSVG/>
      </div>
  </div>
</template>

<script>
import bannerSVG from '../../assets/svgs/banner.vue'
export default {
components:{
    bannerSVG
}
}
</script>

<style>

</style>