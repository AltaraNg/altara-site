<template>
  <main class="flex items-center flex-col rounded shadow-lg  hover:shadow-2xl cursor-pointer p-3 h-[145px]">
    <div class="flex items-center justify-between ">
      <img :src="image" class="w-1/3 h-auto" />
      <div>
        <p class=" mb-3 font-black " >{{!hover ? truncateString(name, 20) : name }}</p>
         <div class=" space-y-2 w-full   flex items-start flex-col ">
        <label class="toggle ">
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
        <div class="flex items-center">
          <p class="text-gray-700 font-semibold text-xs">Downpayment :</p>
          <p class="font-black text-black">{{ downpayment }}</p>
        </div>
        <div class="flex items-center">
          <p class="text-gray-700 font-semibold text-xs px-0.5">
             {{ biMonthly ? "bi-monthly" : "monthly" }} Repayment :
          </p>
          <p class="font-black text-black">{{biMonthly? biMonthly_repayment : repayment }}</p>
        </div>
              <router-link
          :to="{ name: 'signup' }"
          class="flex items-center justify-center  "
        >
          <button
            class="bg-brand  cursor-pointer text-xs rounded px-3 py-1 text-white font-bold" @click="sendToLocalStorage"
            
          >
            Get started
          </button>
        </router-link>
      
      </div>
      </div>
      
    </div>

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
