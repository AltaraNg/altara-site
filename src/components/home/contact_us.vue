<template>
        <div id="contact"></div>
        <div class="background  h-fit px-40 py-24 flex items-center justify-between" >
          
                <div class="w-2/5">
                    <h1 class="text-3xl font-bold leading-13 ">Contact Us</h1>
                    <p class="tracking-wide leading-8 mr-10 mb-10">Feel like contacting us? Submit your queries here and we will get back to you as soon as possible.</p>
                    <div class="flex items-center mb-10 ">
                        <phone/> <span class="ml-5 text-sm">+234 812 3456 789</span>
                    </div>
                    <div class="flex items-center mb-10 ">
                        <email/> <span class="ml-5 text-sm">hello@altara.com</span>
                    </div>
                    <div class="flex space-x-8">
                        <facebook/>
                        <twitter/>
                        <linkedin/>
                    </div>
                </div>
                 <div class="w-2/5 pb-20 space-y-12 bg-white rounded shadow-lg px-8 pt-8  h-fit">
                 <p class="font-semibold">Send us a Message</p>
                 <input type="text" placeholder="Name" class="border-b w-full w-full "/>
                  <input type="text" placeholder="Email" class="border-b w-full "/>
                    <input type="text" placeholder="Phone Number" class="border-b w-full "/>
                     <div>
      <label class="text-gray-600 text-sm">Preferred method of communication</label>
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
    <input type="text" placeholder="Message" class=" border-b w-full "/>
                 </div>
        </div>
 
</template>


<script>
import phone from '../../assets/svgs/phone.vue'
import email from '../../assets/svgs/email.vue'
import facebook from '../../assets/svgs/facebook.vue'
import twitter from '../../assets/svgs/twitter.vue'
import linkedin from '../../assets/svgs/linkedin.vue'
export default {
    components:{
        phone,email,facebook,twitter,linkedin
    }
}
</script>

<style>
.background {
background-image: url('../../assets/images/Background.png');
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
}
</style>