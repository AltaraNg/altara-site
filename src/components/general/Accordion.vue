<template>
  <div class="cursor-pointer">
    <div class="flex justify-between pb-2" @click="isOpen = !isOpen">
      <p>{{ title }}</p>
      <close :class="isOpen ? 'rotate' : ''" />
    </div>
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="border bg-gray-100 p-6 rounded-lg"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import close from "../../assets/svgs/close.vue";
export default {
  components: {
    close,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  name: "Accordion",
  props: {
    title: String,
  },
};
</script>

<style>
.rotate {
  transform: rotate(180deg);
}
</style>