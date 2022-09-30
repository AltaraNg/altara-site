<template>
  <main class="relative "
    @mouseleave="hover = false" @click="hover = true"     @mouseenter="hover = true">
     <div
    class="bg-white  shadow-lg rounded flex rounded-b-none flex-col items-center justify-center cursor-pointer "
  >
    <img :src="image" class="px-1 pt-1" />
    <div class="flex items-center px-1.5" >
        <p class="mt-3 text-center  font-black " >{{!hover ? truncateString(name, 20) : name }}</p>
    </div>
    
  </div>
  <transition name="slide">
      <div v-if="hover" class=" w-full fadeDown2 details shadow-lg bg-white" >
      <div class="mt-3 space-y-4 w-full   flex items-start flex-col ">
        <label class="toggle pl-2">
          <input
            class="toggle-checkbox"
            type="checkbox"
            v-model="biMonthly"
            @click="setBiMonthly()"
          />
          <div class="toggle-switch"></div>
          <span class="text-gray-600 md:text-sm text-xs font-normal ml-4"
            >Bi-Monthly</span
          >
        </label>
        <div class="flex items-center pl-2">
          <p class="text-gray-700 font-semibold text-xs">Downpayment :</p>
          <p class="font-black text-black text-md">{{ downpayment }}</p>
        </div>
        <div class="flex items-center pl-2">
          <p class="text-gray-700 font-semibold text-xs px-0.5">
             {{ biMonthly ? "bi-monthly" : "monthly" }} Repayment :
          </p>
          <p class="font-black text-black text-md">{{biMonthly? biMonthly_repayment : repayment }}</p>
        </div>
        <router-link
          :to="{ name: 'signup' }"
          class="flex items-center justify-center w-full "
        >
          <button
            class="bg-brand  cursor-pointer py-3 w-full px-12 text-white font-bold" @click="sendToLocalStorage"
            
          >
            Get started
          </button>
        </router-link>
      </div>
    </div>
    </transition>
  </main>
 
    
</template>
<script>
import "../../assets/css/style.css";
export default {
  data() {
    return {
      biMonthly: false,
      hover:false
      
    };
  },
  props: ["name", "image", "downpayment", "repayment","biMonthly_repayment" ,"repayment_duration_id"],

  methods:{
    sendToLocalStorage(){
        window.localStorage.setItem("data", JSON.stringify({"product": this.name,"biMonthly":this.biMonthly, }));
    },
        setBiMonthly() {
      this.biMonthly = !this.biMonthly;
      this.sendToLocalStorage()
    },
     truncateString(str, num) {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}


  }
};
</script>
<style>

img{
    width: 220px;
    height: auto;
}
.slide-enter, .slide-leave-to{
  transform: scaleY(0);
}
.details{
  transform-origin: top;
  transition: transform .8s ease-in-out;
  overflow: hidden;
}
</style>
