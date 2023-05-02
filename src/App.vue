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
import NavBar from "./views/NavBar.vue"
import Footer from "./views/FooterSection"
export default{
  components:{
    NavBar,
    Footer
  }
}
</script>

