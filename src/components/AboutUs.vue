<template>
  <div class>
    <div class="w-full bg-blue-50 flex h-96 items-center justify-center py-5">
      <img src="../assets/images/aboutUs.png" class="md:h-5/6" />
    </div>
    <div class="px-4 py-16">
      <heading title="WHO WE ARE" />
      <div class="flex mt-8 space-y-5 md:space-y-0 mx-6 md:mx-0 text-white text-center justify-evenly md:flex-row flex-col">
        <div class="bg-brand md:w-1/4 p-5 rounded-lg flex flex-col items-center justify-center shadow-2xl">
             <img src="../assets/images/money.png" class="h-48"/>
            <p class="text-lg font-black mb-5">Good bye low account balance. Hello, Altara.</p>
            <p class="text-sm font-thin">Whether you are buying a smartphone, are struggling to cover inventory for your shop, can't meet rent or you need to pay for one of life's necessities. With Altara, now you can.</p>
        </div>
        <div class="bg-brand md:w-1/4 p-5 rounded-lg flex flex-col items-center justify-center shadow-2xl">
            <img src="../assets/images/technology.png" class="h-48"/>
            <p class="text-lg font-black mb-5">Our mission, our technology drives us!</p>
            <p class="text-sm font-thin">From inception, our mission has been to improve the lives of Africans by delivering responsible financial products for life's biggest needs. To do this, we leverage deep financial technology and knowledge of our local communities.</p>
        </div>
        <div class="bg-brand md:w-1/4 p-5 rounded-lg flex flex-col items-center justify-center shadow-2xl">
          <img src="../assets/images/life.png" class="h-48"/>
         <p class="text-lg font-black mb-5">Say yes to life.</p> 
       <p class="text-sm font-thin"> With Altara, gone are the days of worrying about what you have in your bank account. With us, life is available to you NOW!</p>
        </div>
        
      </div>
    </div>
    <div class="px-4 pb-16">
      <heading title="OUR TENETS" />
      <div class="w-full h-fit">
        <div
          class="flex space-y-6 md:space-y-0 md:flex-row mt-10 md:mx-20 flex-col items-center md:justify-evenly"
        >
          <div
            class="border h-72 border-gray-300 rounded-lg hover:shadow-lg md:w-1/3 py-5 md:px-10 px-5"
          >
            <div class="flex items-center mb-5">
              <innovation />
              <p class="text-brand md:text-lg font-black ml-3">INNOVATION</p>
            </div>
            <p
              class="leading-8 text-gray-700 text-sm"
            >An unrelenting focus on leveraging technology to solve problems for the base of the economic pyramid in Africa.</p>
          </div>
          <div
            class="border h-72 border-gray-300 rounded-lg hover:shadow-lg md:w-1/3 py-5 md:px-10 px-5"
          >
            <div class="flex items-center mb-5">
              <impact />
              <p class="text-brand md:text-lg font-black ml-3">IMPACT</p>
            </div>
            <p
              class="leading-8 text-gray-700 text-sm"
            >An anchor on identifying the deepest challenges to life in Africa related to economic outcomes and financial inclusion that if addressed will have a transformative effect on people’s lives.</p>
          </div>
        </div>
        <div
          class="flex space-y-6 md:space-y-0 md:flex-row mt-10 md:mx-20 flex-col items-center md:justify-evenly"
        >
          <div
            class="border h-72 border-gray-300 rounded-lg hover:shadow-lg md:w-1/3 py-5 md:px-10 px-5"
          >
            <div class="flex items-center mb-5">
              <scale />
              <p class="text-brand md:text-lg font-black ml-3">SCALE</p>
            </div>
            <p
              class="leading-8 text-gray-700 text-sm"
            >A deep desire to grow our operations to touch the excluded bottom billion.</p>
          </div>
          <div
            class="border h-72 border-gray-300 rounded-lg hover:shadow-lg md:w-1/3 py-5 md:px-10 px-5"
          >
            <div class="flex items-center mb-5">
              <community />
              <p class="text-brand md:text-lg font-black ml-3">COMMUNITY</p>
            </div>
            <p
              class="leading-8 text-gray-700 text-sm"
            >An inquisitive investigation to understand the nuances of life in the communities we operate in, creating tailor made solutions to meet their needs.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import heading from "./general/heading.vue";
import innovation from '../assets/svgs/innovation.vue'
import impact from '../assets/svgs/impact.vue'
import scale from '../assets/svgs/scale.vue'
import community from '../assets/svgs/community.vue'
export default {
  components: {
    heading, innovation, impact, scale, community
  },
  title: 'About Us | Altara Credit Limited'
};
</script>

<style>
</style>