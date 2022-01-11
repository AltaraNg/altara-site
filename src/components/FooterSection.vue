<template>
  <div
    class="footer justify-between md:space-x-36 space-x-0 text-white lg:px-24 md:px-16 px-8 md:py-20 py-12 flex md:flex-row flex-col"
  >
    <div class="md:w-1/3 w-full md:space-y-8 space-y-5">
      <img src="../assets/logo.png" />
      <p class="md:text-sm text-xs text-white">
         A leading technology driven platform that enables pay later for multiple
        services
      </p>
      <div class="flex justify-center md:justify-start space-x-8">
        <facebook />
        <twitter />
        <linkedin />
      </div>
    </div>
    <div class="flex my-10 md:my-0 w-full justiy-between">
      <div class="md:w-1/2 w-1/2 flex flex-col md:space-y-5 space-y-2">
        <p class="font-bold hover:underline md:mb-4 mb-1 text-sm">
          Services
        </p>
        <a class="text-xs md:text-sm"
          ><span class="text-brand font-black">Altara </span>Product</a
        >
        <a class="text-xs md:text-sm"
          ><span class="text-brand font-black">Altara </span>E-Loan</a
        >
        <a class="text-xs md:text-sm"
          ><span class="text-brand font-black">Altara </span>Rent</a
        >
      </div>
      <div
        class="md:w-1/2 w-1/2 flex flex-col items-start md:space-y-6 space-y-2"
      >
        <p class="font-bold hover:underline md:mb-4 mb-1">Reach Us</p>
        <div class="flex items-center">
          <email class="hidden md:block mr-2" />
          <p class="text-sm">admin@altaracredit.com</p>
        </div>
        <div class="flex items-center">
          <phone class="hidden md:block mr-2" />
          <p class="text-sm">+234 812 3456 789</p>
        </div>
        <div class="flex items-center">
          <location class="hidden md:block mr-2" />
          <p class="text-sm">46 Raymond Njoku, Ikoyi, Lagos, Nigeria</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import facebook from "../assets/svgs/facebook.vue";
import twitter from "../assets/svgs/twitter.vue";
import linkedin from "../assets/svgs/linkedin.vue";
import email from "../assets/svgs/email.vue";
import phone from "../assets/svgs/phone.vue";
import location from "../assets/svgs/location.vue";
export default {
  components: {
    facebook,
    twitter,
    linkedin,
    email,
    phone,
    location,
  },
};
</script>

<style>
.footer {
  background-image: url("../assets/images/footer.png");
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-size: cover;
}
</style>
