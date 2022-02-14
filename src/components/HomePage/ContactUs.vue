<template>
  <div id="contact"></div>
  <div class="background h-fit md:px-40 px-5 md:py-24 py-10 flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-2/5 w-full">
      <h1 class="md:text-3xl text-2xl md:text-left text-center font-black leading-13 md:mb-10">Contact Us</h1>
      <p class="tracking-wide leading-8 md:mr-10 mb-10 md:text-left text-center">
        Feel like contacting us? Submit your queries here and we will get back to you as soon as possible.
      </p>
      <div class="flex items-center md:mb-10 mb-5">
        <phone />
        <span class="ml-5 text-sm font-bold">+234 905 5493 652</span>
      </div>
      <div class="flex items-center md:mb-10 mb-5">
        <email />
        <span class="ml-5 text-sm font-bold">admin@altaracredit.com</span>
      </div>
      <div class="flex space-x-8 mb-10 md:mb-0 justify-center md:justify-start">
        <facebook />
        <twitter />
        <linkedin />
      </div>
    </div>
    <form
      name="contact"
      @submit.prevent="sendEmail"
       method="POST"
      class="md:w-1/2 w-full pb-10 space-y-8 bg-white rounded-lg shadow-lg px-8 pt-8 h-fit"
    >
      <p class="font-bold md:text-left text-center">Send us a Message</p>
     <div>
       <label for="full_name" class="ml-3">Full Name</label>
      <input type="text"  name="full_name" v-model="full_name" class="border-2 w-full px-3 py-2 rounded-full" />
     </div>
      <div>
       <label for="email" class="ml-3">Email</label>
      <input type="text"  name="email" v-model="email" class="border-2 w-full px-3 py-2 rounded-full" />
      </div>
      <div>
       <label for="phone_number" class="ml-3">Phone Number</label>
      <input type="text"  name="phone_number" v-model="phone_number" class="border-2 w-full px-3 py-2 rounded-full" />
      </div>
      <div class="mt-4">
       <label for="how_can_we_help" class="ml-3">How can we help ?</label>
      <select name="how_can_we_help" id="how_can_we_help" v-model="how_can_we_help" class="border w-full px-3 py-2 text-gray-600 rounded-full ">
        <option class="text-gray-600 text-sm" value="product">Need a product</option>
        <option class="text-gray-600 text-sm" value="cash">Need a cash loan</option>
        <option class="text-gray-600 text-sm" value="rent">Need a Rent Loan</option>
        <option class="text-gray-600 text-sm" value="payment_issue">Payment Issue</option>
        <option class="text-gray-600 text-sm" value="partnership">Get in contact about business partnership</option>
        <option class="text-gray-600 text-sm" value="general_enquiry">General Enquiry</option>
      </select>
      </div>
      <div class="ml-3">
        <label >Preferred method of communication</label>
        <div class="flex space-x-8 mt-3 text-gray-600 text-sm">
          <div class="flex items-center">
            <input type="radio" name="preferred_method_of_communication" v-model="preferred_method_of_communication" id="email" value="email" class="form-radio text-green-500 mr-2" />
            <label class="">Email</label>
          </div>
          <div class="flex items-center">
            <input type="radio" name="preferred_method_of_communication" id="phone_call" v-model="preferred_method_of_communication" value="phone_call" class="mr-2" />
            <label class="">Phone call</label>
          </div>
        </div>
      </div>
      <textarea type="text" rows="4" placeholder="Message" v-model="message" name="message"  class="border w-full px-3 py-2 rounded"></textarea>
      <button type="submit" class="bg-brand px-7 py-3 mx-0 rounded-lg font-bold justify-self-end text-white text-sm hover:shadow-lg" :disabled="disabled()">
        Send
      </button>
    </form>
  </div>
       <Modal v-if="form_sent" title="We have gotten your Message">
      <template v-slot:svg>
        <img src="../../assets/images/success.png" class="w-28 h-28" />
      </template>
      <template v-slot:text>
        <p class="text-center">We will respond as soon as possible</p>
      </template>
    </Modal>
</template>

<script>
import phone from "../../assets/svgs/phone.vue";
import email from "../../assets/svgs/email.vue";
import facebook from "../../assets/svgs/facebook.vue";
import twitter from "../../assets/svgs/twitter.vue";
import linkedin from "../../assets/svgs/linkedin.vue";
import Modal from '../general/modal.vue'
import { Apiservice } from "../../services/apiService"
export default {
  components: {
    phone,
    email,
    facebook,
    twitter,
    linkedin,
    Modal
  },
   data() {
    return {
      full_name: "",
      email: "",
      how_can_we_help: "",
      phone_number: "",
      preferred_method_of_communication: "",
      message: "",
      form_sent: false,
      formURL: process.env.VUE_APP_URL_CONTACT_STAGING

    }
  },
  methods: {
    disabled() {
      return (
        !this.full_name || !this.phone_number || !this.email || !this.how_can_we_help  || !this.message
      )
    },
    
    sendEmail(){
      const api = new Apiservice()
      var data= {
        full_name: this.full_name,
        phone_number: this.phone_number,
        email: this.email,
        how_can_we_help: this.how_can_we_help,
        preferred_method_of_communication: this.preferred_method_of_communication,
        message: this.message
      }
      
      api.post(this.formURL, data, true ).then((response)=>{
        this.full_name = '';
        this.phone_number = '';
        this.email = '';
        this.how_can_we_help = '';
        this.preferred_method_of_communication = '';
        this.message = ''
        this.form_sent = true;
        //i redirect my app to '/sameRoute' route once payload completed.  
        this.$router.push({  name: 'home', hash: '#contact'  });
        console.log(response)
      }).catch((error) => {
        if (error) {
          console.error('There was an error!', error);

        }
      });
    }
  },
};
</script>

<style>
.background {
  background-image: url("../../assets/images/Background.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
button:disabled{
  background-color: #c2d2dd;
}
</style>
