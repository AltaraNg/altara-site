<template>
  <div class="flex flex-col min-h-screen">
 <div class=" " :class="acceptCookie ? '' : 'opacity-70 pointer-events-none' ">
    <!-- when cookie is not accepted reduce opacity and disable mouse/touch events on the website
     except scroll
    -->
  <NavBar class="sticky top-0 fixed zIndex"/>
    <div class="flex-grow">
     <router-view/> 
    </div> 
  <Footer class=""/>
  </div>
  <CookieAlert class="sticky bottom-0" v-if="!acceptCookie" @acceptCookie="acceptCookie = true"/>

  </div>
</template>

<script>
import CookieAlert from "./components/CookieAlert"
import NavBar from "./views/NavBar.vue"
import Footer from "./views/FooterSection"
export default{
  components:{
    NavBar,
    Footer,
    CookieAlert
  },
  data(){
    return{
      acceptCookie: localStorage.getItem("acceptCookie")
    }
  }

}
</script>

