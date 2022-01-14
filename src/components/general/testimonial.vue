<template>
  <div class="flex  flex-col items-center w-full   sm:-space-y-3 md:-space-y-0   ">
    <div
      class="
        shadow-md
        flex flex-col
        items-center
        justify-between
        border
        rounded-md
        h-60
        p-6
        md:w-98
        w-fit
        mx-5
        md:mx-0
      "
    >
      <h class="text-brand font-black md:text-3xl text-2xl">{{ heading }}</h>
      <p class="md:text-sm text-center font-semibold text-xs">
        {{ testimony }}
      </p>
    </div>
    <testimonial class="mb-3" />
    <div class="w-12 h-12">
      <img :src="source" class="w-full h-full rounded-full" />
    </div>
  </div>
</template>

<script>
import testimonial from "../../assets/svgs/testimonial.vue";
export default {
  components: {
    testimonial,
  },
  props: ["heading", "testimony", "source"],
};
</script>

<style>
</style>