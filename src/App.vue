<template>
  <div class="">
  <NavBar class="sticky top-0"/>
    <router-view/>
  <Footer/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import Footer from "./components/FooterSection.vue"
export default{
  components:{
    NavBar,
    Footer
  }
}
</script>
