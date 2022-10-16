<template>
  <div class="flex flex-col min-h-screen">
  <NavBar class="sticky top-0 fixed zIndex"/>
    <div class="flex-grow">
     <router-view/> 
    </div> 
  <Footer class=""/>
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

