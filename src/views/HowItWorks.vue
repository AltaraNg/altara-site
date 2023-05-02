<template>
  <div class="">
    <div
      class="flex md:flex-row flex-col justify-evenly  md:py-10 py-5"
    >
      <div class="md:w-5/12 relative">
        <div
          class="
            absolute
            right-0
           bg-white/20
            rounded-tr-lg px-4
            py-1
           opacity-80
            backdrop-filter
            backdrop-blur-md
          "
        >
          <p class="text-white font-black md:text-2xl text-sm text-right">
            Non- Salaried Worker
          </p>
        </div>
        <img src="../assets/images/non-salaried.png" class="md:rounded-lg h-96  w-full" />
      </div>
      <div class="md:w-5/12 relative">
        <div
          class="
            absolute
            right-0
           bg-white/20
            rounded-tr-lg px-4
            py-1
           opacity-80
            backdrop-filter
            backdrop-blur-md
          "
        >
          <p class="text-white font-black md:text-2xl text-sm text-right">
            Salaried Worker
          </p>
        </div>
        <img src="../assets/images/salaried.jpg" class="md:rounded-lg h-96 w-full" />
      </div>
    </div>

    <div class="my-10"  >
      <heading title="HOW IT WORKS" />
      <div
        class="
          flex
          mt-8
          md:items-start
          items-center
          md:justify-evenly md:flex-row
          flex-col
          space-y-20
          md:space-y-0
        "
        :style="image"
      >
        <div
          class="
            lg:w-1/5
            space-y-2
            md:w-1/3
            w-10/12
            flex flex-col
            bg-brand25
            text-brand
            p-5
            h-80
            relative
            rounded-lg
            items-center
          "
        >
          <div
            class="
              bg-white
              absolute
              -top-3
              rounded-full
              w-8
              flex
              justify-center
              items-center
              border-2
              object-center
              h-8
              border-brand
              text-center text-brand
              font-black
            "
          >
            <p>1</p>
          </div>
          <applicationForm class="h-40" />
          <b class="md:text-2xl md:h-16 text-base text-center"
            >Fill in Application Form</b
          >
          <p class="text-center text-black md:text-sm text-xs">
            Go to <b>Sign up</b> and fill in your information
          </p>
        </div>
        <div
          class="
            lg:w-1/5
            space-y-2
            md:w-1/3
            w-10/12
            flex flex-col flex flex-col
            bg-brand25
            text-brand
            p-5
            h-80
            relative
            rounded-lg
            items-center
          "
        >
          <div
            class="
              bg-white
              absolute
              -top-3
              rounded-full
              w-8
              flex
              justify-center
              items-center
              border-2
              object-center
              h-8 
              border-brand
              text-center text-brand
              font-black
            "
          >
            <p>2</p>
          </div>
          <img src="../assets/images/cart.png" class="h-40" />
          <b class="md:text-2xl text-base md:h-16 text-center"
            >Select what you’re interested in</b
          >
          <p class="text-center text-black md:text-sm text-xs">
            Select what Product or Cash loan you are interested in
          </p>
        </div>
        <div
          class="
            lg:w-1/5
            space-y-2
            md:w-1/3
            w-10/12
            flex flex-col
            bg-brand25
            text-brand
            p-5
            h-80
            relative
            rounded-lg
            items-center
          "
        >
          <div
            class="
              bg-white
              absolute
              -top-3
              rounded-full
              w-8
              flex
              justify-center
              items-center
              border-2
              object-center
              h-8
              border-brand
              text-center text-brand
              font-black
            "
          >
            <p>3</p>
          </div>
          <img src="../assets/images/calendar.png" class="h-40" />
          <b class="md:text-2xl text-base md:h-16 text-center">Plan</b>
          <p class="text-center text-black md:text-sm text-xs">
            Choose Repayment Duration plan
          </p>
        </div>
        <div
          class="
            lg:w-1/5
            space-y-2
            md:w-1/3
            w-10/12
            flex flex-col
            bg-brand25
            text-brand
            p-5
            h-80
            relative
            rounded-lg
            items-center
          "
        >
          <div
            class="
              bg-white
              absolute
              -top-3
              rounded-full
              w-8
              flex
              justify-center
              items-center
              border-2
              object-center
              h-8
              border-brand
              text-center text-brand
              font-black
            "
          >
            <p>4</p>
          </div>
          <img src="../assets/images/payment.png" class="h-32 mb-8" />
          <b class="md:text-2xl text-base md:h-16 text-center"
            >Preferred mode of payment.
          </b>
          <p class="text-center text-black md:text-sm text-xs">
            Select your preferred Mode of Payment Options
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import heading from "../components/heading.vue";
import applicationForm from "../assets/svgs/application_form.vue";
import Image1 from "../assets/images/customer1.jpg";
import Image2 from "../assets/images/customer2.jpg";
export default {
  components: {
    heading,
    applicationForm,
  },
  title: "How It Works | Altara Credit Limited",
  data() {
    return {
      slides: [Image1, Image2],
       image: {
        backgroundImage: `url(${require("../assets/images/jigsaw.png")})`,
      },
    };
  },
};
</script>

<style>
</style>