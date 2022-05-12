<template>
<div>
        <div class="">
      <heading title="ACHIEVEMENTS" />
      <div
        class="
          items-center
          justify-center
          md:justify-evenly
          space-y-16
          md:space-y-0    
          h-fit
          flex
          md:flex-row
          flex-col
          background
          mt-10
        "
      >
       
        <div>
             <img src="../../assets/images/approved.png" class="h-64"/> 
        </div>
        <div class="text-white flex flex-col items-center">
          <vue3-autocounter
            class="font-black md:text-5xl text-4xl leading-7 mb-2"
            ref="counter"
            :startAmount="40"
            suffix="%"
            :endAmount="92"
            :duration="3"
            separator=","
            :autoinit="true"
          />
          <p class="text-md tracking-wider font-black">of applicants get approved for a loan or products</p>
        </div>
      
      </div>
    </div>
</div>
</template>
<script>
import Vue3autocounter from "vue3-autocounter";
export default{
    components: {
    "vue3-autocounter": Vue3autocounter,
   
    
    }
}
</script>
<style>
.background{
    background: linear-gradient(270deg, #074A74 33.7%, #074A74 36.33%, #089CA4 69.06%);
}
</style>