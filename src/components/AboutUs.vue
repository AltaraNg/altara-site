<template>
  <div class="">
    <div class="w-full bg-blue-50 flex h-96 items-center justify-center py-5">
      <img src="../assets/images/aboutUs.png" class="md:h-5/6" />
    </div>
    <div class="px-4 py-16">
      <heading title="WHO WE ARE" />
      <div
        class="border p-5 md:mx-36 my-8 rounded-md border-brand hover:shadow-md"
      >
        <p class="text-gray-600 leading-8 md:text-base text-xs">
          At Altara, our mission is simple: to improve the lives of Nigerians.
          To do this, Altara and its dedicated team seek to tackle a critical
          challenge in Africa – access to payment solutions that make product
          prices more digestible. <br />
          <br />
          Altara was founded on the simple idea that trust begets trust. <br />
          <br />
          Our debut product is
          <b class="text-black">“shop now, pay later”</b> where we allow formal
          & informal sector workers, and SME owners purchase a variety of
          products and equipment for their homes and businesses but instead of
          paying for the products in full upfront, pay small amount over-time.
          <br />
          <br />
          Everyone is welcome to apply, so click the
          <b class="text-black">Sign up </b> button now.<br />
          <br />
          Remember, this is just the beginning. Altara will be rolling out
          innovative solutions that allow you stretch your budget even further,
          so check in periodically at altaracredit.com or apply now and we keep
          you updated via your phone contact. <br />
          <br />
        </p>
      </div>
    </div>
    <div class="px-4 pb-16">
      <heading title="OUR TENETS" />
      <div class="w-full h-fit">
        <div class="flex space-y-6 md:space-y-0 md:flex-row mt-10 md:mx-20 flex-col items-center md:justify-evenly">
          <div class="border h-72 border-gray-300 rounded-lg hover:shadow-lg md:w-1/3 py-5 md:px-10 px-5">
            <div class="flex items-center mb-5">
              <innovation/>
              <p class="text-brand md:text-lg font-black ml-3">INNOVATION</p>
            </div>
            <p class="leading-8 text-gray-700 text-sm">An unrelenting focus on leveraging technology to solve problems for the base of the economic pyramid in Africa.</p>
          </div>
            <div class="border h-72 border-gray-300 rounded-lg hover:shadow-lg md:w-1/3 py-5 md:px-10 px-5">
            <div class="flex items-center mb-5">
              <impact/>
              <p class="text-brand md:text-lg font-black ml-3">IMPACT</p>
            </div>
            <p class="leading-8 text-gray-700 text-sm">An anchor on identifying the deepest challenges to life in Africa related to economic outcomes and financial inclusion that if addressed will have a transformative effect on people’s lives.</p>
          </div>
        </div>
                <div class="flex space-y-6 md:space-y-0 md:flex-row mt-10 md:mx-20 flex-col items-center md:justify-evenly">
          <div class="border h-72 border-gray-300 rounded-lg hover:shadow-lg md:w-1/3 py-5 md:px-10 px-5">
            <div class="flex items-center mb-5">
              <scale/>
              <p class="text-brand md:text-lg font-black ml-3">SCALE</p>
            </div>
            <p class="leading-8 text-gray-700 text-sm">A deep desire to grow our operations to touch the excluded bottom billion.</p>
          </div>
            <div class="border h-72 border-gray-300 rounded-lg hover:shadow-lg md:w-1/3 py-5 md:px-10 px-5">
            <div class="flex items-center mb-5">
              <community/>
              <p class="text-brand md:text-lg font-black ml-3">COMMUNITY</p>
            </div>
            <p class="leading-8 text-gray-700 text-sm">An inquisitive investigation to understand the nuances of life in the communities we operate in, creating tailor made solutions to meet their needs.</p>
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
    heading, innovation,impact,scale,community
  },
};
</script>

<style>
</style>