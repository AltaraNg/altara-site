<template>
  <div class="bg-white h-16 border-b w-full px-24 flex items-center justify-between">
       <router-link :to= "{name: 'home'}"  exact class="cursor-pointer">
      <img src="../assets/logo.png" />
       </router-link>
      <div class=" space-x-10 text-xs md:text-sm">
            <a class="cursor-pointer" href="#service" v-smooth-scroll>Services</a>
            <a class="cursor-pointer" href="#contact" v-smooth-scroll>Contact Us</a>
            <router-link :to= "{name: 'about_us'}" exact class="cursor-pointer">About us</router-link>
            <router-link :to= "{name: 'how_it_works'}" exact class="cursor-pointer">How it works</router-link>
            <router-link :to= "{name: 'impact'}" exact class="cursor-pointer">Impacts</router-link>
      </div>
      <div>
          <button class="bg-brand px-7 py-1.5 rounded-full text-white text-sm hover:shadow-lg">Sign up</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>