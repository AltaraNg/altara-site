<template>
  <div id="contact"></div>
  <div
    class="
      background
      h-fit
      md:px-40
      px-5
      md:py-24
      py-10
      flex flex-col
      md:flex-row
      items-center
      justify-between
    "
  >
    <div class="md:w-2/5 w-full">
      <h1
        class="
          md:text-3xl
          text-2xl
          md:text-left
          text-center
          font-black
          leading-13
          md:mb-10
        "
      >
        Contact Us
      </h1>
      <p
        class="tracking-wide leading-8 md:mr-10 mb-10 md:text-left text-center"
      >
        Feel like contacting us? Submit your queries here and we will get back
        to you as soon as possible.
      </p>
      <div class="flex items-center md:mb-10 mb-5">
        <phone />
        <span class="ml-5 text-sm font-bold">+234 812 3456 789</span>
      </div>
      <div class="flex items-center md:mb-10 mb-5">
        <email />
        <span class="ml-5 text-sm font-bold">hello@altara.com</span>
      </div>
      <div class="flex space-x-8 mb-10 md:mb-0 justify-center md:justify-start">
        <facebook />
        <twitter />
        <linkedin />
      </div>
    </div>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      class="
        md:w-2/5
        w-full
        pb-20
        space-y-12
        bg-white
        rounded
        shadow-lg
        px-8
        pt-8
        h-fit
      "
    >
      <p class="font-bold md:text-left text-center">Send us a Message</p>
      <input type="text" placeholder="Name" class="border-b w-full px-3 py-2 rounded-full " />
      <input type="text" placeholder="Email" class="border-b w-full px-3 py-2 rounded-full" />
      <input type="text" placeholder="Phone Number" class="border-b w-full px-3 py-2 rounded-full" />
      <div>
        <label class="text-gray-600 text-sm"
          >Preferred method of communication</label
        >
        <div class="flex space-x-8 mt-3 text-gray-600 text-sm">
          <div class="flex items-center">
            <input
              type="radio"
              name="communication"
              id="communication"
              value="Email"
              class="form-radio text-green-500 mr-2"
            />
            <label class="">Email</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              name="communication"
              id="communication"
              value="phone"
              class="mr-2"
            />
            <label class="">Phone call</label>
          </div>
        </div>
      </div>
      <input type="text" placeholder="Message" class="border-b w-full px-3 py-2 rounded-full" />
      <button
        type="submit"
        class="
          bg-brand
          px-7
          py-3
          md:mx-24
          mx-0
          rounded-lg
          font-bold
          justify-self-end
          text-white text-sm
          hover:shadow-lg
        "
      >
        Send
      </button>
    </form>
  </div>
</template>


<script>
import phone from "../../assets/svgs/phone.vue";
import email from "../../assets/svgs/email.vue";
import facebook from "../../assets/svgs/facebook.vue";
import twitter from "../../assets/svgs/twitter.vue";
import linkedin from "../../assets/svgs/linkedin.vue";
export default {
  components: {
    phone,
    email,
    facebook,
    twitter,
    linkedin,
  },
};
</script>

<style>
.background {
  background-image: url("../../assets/images/Background.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>