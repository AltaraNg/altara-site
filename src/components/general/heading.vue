<template>
  <div class="flex items-center w-full justify-center">
      <div class="border w-auto border-brand border-4 md:px-3 px-1 py-2 rounded-md">
          <p class="text-gray-600 md:font-bold font-black md:text-base text-sm">{{title}}</p>
      </div>
      <hr class="bg-brand border w-4/6"/>
  </div>
</template>

<script>
export default {
    props:{
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>