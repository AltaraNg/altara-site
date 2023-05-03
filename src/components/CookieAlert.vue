<template>
  <div class="flex items-center w-full justify-between bg-brand px-10 py-5">
    <p class="text-white font-bold text-sm">
      This website uses cookies to enhance user experience. By browisng our
      website, you accept the terms of our <router-link :to="{ name: 'privacy_policy' }" class="underline text-bold">Privacy Policy</router-link>
    </p>
    <button
      class="bg-white text-sm font-bold rounded text-brand px-3 py-1"
      @click="AcceptCookie"
    >
      Accept
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    AcceptCookie() {
    window.localStorage.setItem('acceptCookie', true)
     window.location.reload()
    },
  },
};
</script>
