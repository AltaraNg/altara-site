<template>
  <div class="flex items-center w-full justify-center">
      <div class="border w-fit border-brand border-4 md:px-3 px-1 py-2 rounded-md">
          <p class="text-gray-600 md:font-bold font-black" :class="fontSize">{{title}}</p>
      </div>
      <hr class="bg-brand border" :class="width"/>
  </div>
</template>

<script>
export default {
    props:{
        title: {
            type: String,
            required: true
        },
        fontSize:{
            type:String,
            default: "md:text-base  sm:text-xs"
        },
        width:{
            default:"md:w-5/6 w-4/6"
        }
    }
}
</script>

<style>

</style>