<template>
  <div
    class="bg-white w-10/12 shadow-lg rounded-md flex flex-col items-center justify-start cursor-pointer"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <img :src="image" class="px-1.5 pt-1.5" />
    <p class="mt-3 text-center text-sm px-1.5 font-black pl-1">{{ name }}</p>
    <transition> </transition>
    <div v-if="hover">
      <div class="mt-3 space-y-4 w-full p flex items-start flex-col details">
        <label class="toggle px-1.5">
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
        <div class="flex items-center px-0.5">
          <p class="text-gray-700 font-semibold text-xs">Downpayment :</p>
          <p class="font-black text-black text-md">{{ downpayment }}</p>
        </div>
        <div class="flex items-center">
          <p class="text-gray-700 font-semibold text-xs px-0.5">
             {{ biMonthly ? "bi-monthly" : "monthly" }} Repayment :
          </p>
          <p class="font-black text-black text-md">{{biMonthly? biMonthly_repayment : repayment }}</p>
        </div>
        <router-link
          :to="{ name: 'signup' }"
          class="flex items-center justify-center w-full"
        >
          <button
            class="bg-brand rounded py-3 w-full px-12 text-white font-bold"
            :disabled="disabled"
            :style="
              disabled
                ? 'background-color: rgba(7, 74, 116, 0.2); margin-top:25px'
                : 'background-color: rgba(7, 74, 116, 1)'
            "
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
  props: ["name", "image", "downpayment", "repayment","biMonthly_repayment" ],

  methods:{
        setBiMonthly() {
      this.biMonthly = !this.biMonthly;
    //   window.localStorage.setItem("data", JSON.stringify(this.data));
    },
  }
};
</script>
<style>
.details {
  transition: height 0.3s ease-in-out;
  transition-delay: 0.1s;
}
</style>
