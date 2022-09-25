<template>
  <div
    class="bg-white   shadow-lg rounded-md flex flex-col items-center justify-start cursor-pointer"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <img :src="image" class="px-1.5 pt-1.5" />
    <div class="flex items-center px-1.5" >
        <p class="mt-3 text-center text-xs  font-black " >{{!hover ? truncateString(name, 20) : name }}</p>
    </div>
    
    <transition> </transition>
    <div v-if="hover" class="fadeDown w-full">
      <div class="mt-3 space-y-4 w-full   flex items-start flex-col details">
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
  </div>
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
.details {
  transition: height 0.3s ease-in-out;
  transition-delay: 0.1s;
}
img{
    width: 250px;
    height: auto;
}
</style>
