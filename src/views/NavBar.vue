<template>
  <div
    class="
      bg-brand
      border-brand
      h-16
      border
      w-full
      lg:px-24
      md:px-16
      px-5
      flex
      items-center
      justify-between
    "
  >
    <router-link :to="{ name: 'home' }" exact class="cursor-pointer">
      <img src="../assets/logo.png" class="w-24" />
    </router-link>
    <div class="space-x-10 text-xs md:text-sm hidden lg:flex text-white">
      <router-link
        class="cursor-pointer"
        :to="{ name: 'home', hash: '#services' }"
        >Services</router-link
      >
      <router-link
        class="cursor-pointer"
        :to="{ name: 'home', hash: '#contact' }"
        >Contact Us</router-link
      >
      <router-link :to="{ name: 'about_us' }" exact class="cursor-pointer"
        >About Us</router-link
      >
      <router-link :to="{ name: 'how_it_works' }" exact class="cursor-pointer"
        >How It Works</router-link
      >
      <router-link :to="{ name: 'impact' }" exact class="cursor-pointer"
        >Impact</router-link
      >
      <router-link :to="{ name: 'careers' }" exact class="cursor-pointer"
        >Careers</router-link
      >
    </div>
    <div>
      <router-link
        class="
          hidden
          lg:flex
          bg-lightBlue

          hover:bg-white
          hover:text-brand
          font-black
          border
          px-7
          py-1.5
          rounded-md
          shadow-lg

          text-white
          hover:shadow-lg
          cursor-pointer
           border-transparent

        "
        :to="{ name: 'signup' }"
        exact

      >
        Order Now
      </router-link>
    </div>
    <div class="flex lg:hidden cursor-pointer">
      <img
        src="../assets/images/menu.png"
        class="w-6 h-6"
        @click="toggleHamburger"
        ref="hamburger"
      />
    </div>
    <transition name="mobile-nav">
      <div
        class="
          bg-white
          absolute
          p-6
          right-0
          top-0
          lg:hidden
          flex
          overflow-scroll
          z-10
          bg-primary
          flex-col
          items-center
          justify-center
          space-y-10
          h-screen
          md:1/3
          w-2/3
          flex
        "
        :class="state ? 'flex' : 'hidden'"
      >
        <img
          src="../assets/images/cross.png"
          class="
            absolute
            md:right-16 md:top-16
            w-6
            top-5
            right-5
            cursor-pointer
            text-white
            fill-current
          "
          @click="toggleHamburger"
          ref="closeModal"
        />
        <router-link
          class="cursor-pointer"
          :to="{ name: 'home', hash: '#services' }"
          >Services</router-link
        >
        <router-link
          class="cursor-pointer"
          :to="{ name: 'home', hash: '#contact' }"
          >Contact Us</router-link
        >
        <router-link :to="{ name: 'about_us' }" exact class="cursor-pointer"
          >About Us</router-link
        >
        <router-link :to="{ name: 'how_it_works' }" exact class="cursor-pointer"
          >How It Works</router-link
        >
        <router-link :to="{ name: 'impact' }" exact class="cursor-pointer"
          >Impact</router-link
        >
        <router-link :to="{ name: 'careers' }" exact class="cursor-pointer"
          >Careers</router-link
        >
        <router-link
          class="
            flex
            bg-lightBlue
            px-7
            py-1.5
            rounded-full
            text-white text-sm
            hover:shadow-lg
            cursor-pointer
            border-transparent
          "
          :to="{ name: 'signup' }"
          exact
        >
          Order Now
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: false,
    };
  },
  methods: {
    toggleHamburger() {
      this.state = !this.state;
    },
    clickaway($event) {
      const el1 = this.$refs.hamburger;
      const el2 = this.$refs.closeModal;
      if (!el1.contains($event.target) && !el2.contains($event.target)) {
        this.state = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.clickaway);
  },
  unmounted() {
    document.removeEventListener("click", this.clickaway);
  },
};
</script>

<style>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateY(-250px);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
</style>